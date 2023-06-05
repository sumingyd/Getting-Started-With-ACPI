# 修复触控板:手动

* [检查 GPI0](#检查gpi0)
* [对示例 SSDT 进行编辑](#对示例ssdt进行编辑)
* [启用触摸板](#启用触摸板)
* [Wrapping up](#结束)

## 检查GPI0

本页面假设你已经安装了macOS和[IORegistryExplorer](https://github.com/khronokernel/IORegistryClone/blob/master/ioreg-302.zip).

首先要检查GPI0设备是否存在，这是VoodooI2C所需要的。检查它是否正常工作的最好方法是使用IORegistryExplorer。

![](../../images/Laptops/trackpad-md/gpio-enabled.png)

在这里，我们可以看到VoodooGPIO连接到GPI0，因此不需要对GPI0进行编辑。如果你是这种情况，你可以跳到[下一节](#启用触摸板).

如果VoodooGPIO没有连接，那么你可能需要修改一些值来启用`GPI0`设备。在这种情况下，您需要在DSDT中找到GPI0设备。

首先打开你的反编译DSDT你从[转储DSDT](/Manual/dump.md)和[反编译和编译](/Manual/compile.md)与MaciASL(如果在macOS)或任何其他文本编辑器，如果在Windows或Linux (VSCode有一个[ACPI扩展](https://marketplace.visualstudio.com/items?itemName=Thog.vscode-asl)也可以帮助)。

接下来搜索`Device (GPI0)`。你应该得到类似这样的结果:

![](../../images/Laptops/trackpad-md/gpi0-2.png)

下面是`_STA`方法，用于启用或禁用GPI0设备:

```
Method (_STA, 0, NotSerialized)
{
    If ((SBRG == Zero))
    {
        Return (Zero)
    }

    If ((GPEN == Zero))
    {
        Return (Zero)
    }

    Return (0x0F)
}
```

我们希望从_STA返回的值非零(在本例中为0x0F)以启用`GPI0`设备。如果`SBRG`或`GPEN`的值为零，则返回零，`GPI0`将被禁用。一般来说，`SBRG`不应该被修改，因为修改它会破坏`GPI0`设备。如果你需要启用`GPI0`设备，只需要修改`GPEN`。

下面是更多的例子:
![](../../images/Laptops/trackpad-md/gpi0.png)

我们关心的是`_STA`方法:

```
Method (_STA, 0, NotSerialized)
{
    If ((GPHD == One))
    {
        Return (0x03)
    }

    Return (0x0F)
}
```

这里我们想将`GPHD`设置为` Zero `，以便返回0x0F。

## 对示例SSDT进行编辑

现在我们知道需要修改哪些变量，让我们获取SSDT并开始工作:

* [SSDT-GPI0.dsl](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-GPI0.dsl)

在第一个例子中，我们将GPEN设置为`One`以允许它在macOS中运行:

```
// 这可能已经在你下载的SSDT-GPIO中设置好了
If (_OSI ("Darwin"))
{
    GPEN = One
}
```

对于第二个示例，您需要删除GPEN并使用下面的代码:

```
If (_OSI ("Darwin"))
{
    GPHD = Zero
}
```

此时，您需要通过[编译SSDT](/Manual/compile.md)并将其添加到config.plist中来测试SSDT。VoodooGPIO现在应该连接到GPI0设备，如GPI0部分顶部所示。如果你的触控板在启用`GPI0`设备后仍然不能工作，请继续下一节。

## 启用触摸板

通常情况下，I2C设备在启用之前会检查它们是否在Windows中运行。与`GPI0`设备类似，这些设备包含一个`_STA`方法。

::: details _STA 示例 (可选)

![](../../images/Laptops/trackpad-md/I2C1.png)

我们关心的部分是`_STA`方法:

```
Method (_STA, 0, NotSerialized)  // _STA: Status
{
    Return (LSTA (SMD1))
}
```

在这个例子中，`_STA`指向另一个方法`LSTA`。如果我们搜索`Method (LSTA`，我们会看到以下内容:

```
Method (LSTA, 1, Serialized)
{
    If (((Arg0 == 0x00) || (Arg0 == 0x03)))
    {
        Return (0x00)
    }

    If (CondRefOf (OSYS))
    {
        If ((OSYS < 0x07DC))
        {
            Return (0x00)
        }
    }

    Return (0x0F)
}
```

取值为`OSYS`，保存当前操作系统的运行信息。我们需要查找任何设置了`OSYS`的位置(例如`OSYS = 0x07DC`)。在这个DSDT中，它被设置在`\_SB.PCI0._INI`下。如下所示:

![](../../images/Laptops/trackpad-md/ini.png)

对不同版本的Windows有各种各样的检查，但没有对`Darwin`的检查(苹果的ACPI通常会检查这个)。我们通常希望将`OSYS`设置为尽可能高的值以启用大多数功能。在本例中，当Windows版本为`Windows 2015`或[Windows 10](https://docs.microsoft.com/en-us/windows-hardware/drivers/acpi/winacpi-osi#_osi-strings-for-windows-operating-systems)时，设置的值最高。这意味着我们应该将`OSYS`设置为`0x07DF`。注意，这个值大于`0x07DC`，这是之前检查的值。如果我们将`OSYS`设置为`0x07DF`，那么LSTA中的检查应该返回`0x0F`。

:::

为这些检查打补丁的最好方法是在SSDT-XOSI中使用_OSI to XOSI。您还可以在I2C设备的范围内设置`OSYS`，尽管这可能并不总是有效(上面的示例在这里不起作用，因为LSTA不在I2C设备的范围内)。

### _OSI to XOSI

需要以下SSDT和补丁

* [SSDT-XOSI.dsl](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-XOSI.dsl) - 如果您需要编辑[which versions of Windows the SSDT checks for](https://docs.microsoft.com/en-us/windows-hardware/drivers/acpi/winacpi-osi#_osi-strings-for-windows-operating-systems).
* [SSDT-XOSI.aml](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-XOSI.aml) - 预编译
* XOSI 重命名 (添加这个到 ACPI -> Patch in your config.plist):

| Comment | String | Change \_OSI to XOSI |
| :------ | :------ | :------- |
| Enabled | Boolean | YES      |
| Count   | Number  | 0        |
| Limit   | Number  | 0        |
| Find    | Data    | 5f4f5349 |
| Replace | Data    | 584f5349 |

::: details 戴尔的机器

您可能需要添加下面的补丁，以允许背光键工作。
请确保此补丁出现在config.plist中之前的\_OSI到XOSI补丁的**之前**
以下补丁由Rehabman提供:

| Comment | String | Change \_OSID to XSID (to avoid match against \_OSI patch)
| :------ | :----- | :-------- |
| Enabled | Boolean | YES      |
| Count   | Number  | 0        |
| Limit   | Number  | 0        |
| Find    | Data    | 4F534944 |
| Replace | Data    | 58534944 |

:::

### 创建OSYS变量在I2C范围内

你需要找到检查了OSYS的设备路径，然后在该范围内创建一个新的OSYS变量。这只会改变该范围内设备的ossys，以便更好地控制启用的设备。注意，在上面的例子中，`LSTA`存在于`\_SB.PCI0.LSTA`，意味着`\_SB.PCI0. 0._INI`和`\_SB.PCI0.LSTA`将控制相同的OSYS变量。如果是这种情况，此方法将不起作用。

```
If (_OSI("Darwin")) {
    Scope (\_SB.PCI0.I2C0) { // I2C0 scope
        Name (OSYS, 0x7DF)
    }
}
```

::: tip 多个Windows版本

Windows在检查Windows的早期版本时也会返回true。例如，Windows 7在"Windows 2000"到"Windows 2009"之间都会返回true，但在此之后的任何版本都不会返回true。这一点很重要，因为一些功能只在早期的Windows检查中启用。例如，新款thinkpad上的DYTC热管理功能只有在检查“Windows 2001”时才能启用。你需要检查你自己的DSDT，看看它设置了什么值，以及它们在哪里被使用。此时，你应该[编译SSDT](/Manual/compile.md)并查看触控板是否工作。

:::

## 进一步设置

如果你需要进一步的帮助让你的触控板工作，那么最好的地方是[VoodooI2C的readme](https://github.com/VoodooI2C/VoodooI2C)

## 结束

完成SSDT后，可以转到下一页完成其余的SSDT，如果准备好了，可以转到此处:

* [**Cleanup**](/cleanup.md)
