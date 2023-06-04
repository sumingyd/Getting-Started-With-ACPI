# 修复嵌入式控制器:手动

[[toc]]

待办事项:

* 完成边缘案例和SSDT编辑示例

## 查找ACPI路径

要找到ACPI路径，你有两个方法:

* [DSDT](#dsdt)
* [设备管理](#设备管理器)

### DSDT

找到ACPI的路径是相当容易的，首先打开你从[转储DSDT](/Manual/dump.md)和[编译和编译](/Manual/compile.md)与MaciASL(如果在macOS)或任何其他文本编辑器，如果在Windows或Linux(VSCode有一个[ACPI扩展](https://marketplace.visualstudio.com/items?itemName=Thog.vscode-asl)也可以帮助)的反编译DSDT。

接下来，搜索`PNP0C09`。你应该得到类似:

![](../../images/Desktops/pnp.png)

从上面的例子中我们可以看到两个主要的东西:

* 我们的嵌入式控制器的名称
  * 在本例中是`EC0`
* 我们嵌入式控制器的路径
  * `PC00.LPC0`

但现在我们进入了边界情况，太有趣了!

需要检查的主要有:

* [修复嵌入式控制器:手动](#修复嵌入式控制器手动)
  * [查找ACPI路径](#查找acpi路径)
    * [DSDT](#dsdt)
    * [设备管理器](#设备管理器)
  * [对示例SSDT进行编辑](#对示例ssdt进行编辑)
  * [边缘情况](#边缘情况)
    * [出现多个PNP0C09](#出现多个pnp0c09)
    * [没有PNP0C09出现](#没有pnp0c09出现)
    * [PNP0C09已经命名为`EC`](#pnp0c09已经命名为ec)
    * [PNP0C09已经有了一个`_STA`方法](#pnp0c09已经有了一个_sta方法)
  * [编译SSDT](#编译ssdt)
  * [结束](#结束)

如果以上这些都不适用于你，那么你已经为下一节做好了准备:

### 设备管理器

如果您已经在这台机器上安装了Windows，那么找到EC路径是相当容易的。

首先在Windows中打开设备管理器并查找名为“嵌入式控制器”的设备。找到后，单击它并选择“BIOS设备名称”条目。你会得到这样的结果:

![](../../images/Desktops/ec.png)

从上面可以看到，我们的路径是`SB.PC00.LPC0.EC0`。

现在有了路径，你可以转到这里: [对示例SSDT进行编辑](#对示例ssdt进行编辑)

## 对示例SSDT进行编辑

现在我们有了我们的ACPI路径，让我们获取我们的SSDT并开始工作:

* [SSDT-EC-USBX](https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-EC-USBX.dsl)
  * 用于Skylake和更新的所有AMD系统
* [SSDT-EC](https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-EC.dsl)
  * 给Broadwell和更老的人
  
现在，当打开这个SSDT时，您将注意到一些事情。主要有:

* 一些代码被注释掉了
  * 这是禁用我们的EC的代码
  * 笔记本电脑用户**不应**取消此注释
* 有一个新的EC叫做`Device (EC)`
  * **不要重命名**，这将是我们提供给macOS的EC
  
**之前**:

```
External (_SB_.PCI0.LPCB, DeviceObj) <- Rename this

Scope (_SB.PCI0.LPCB) <- Rename this
```

![](../../images/Desktops/ssdt-before.png)

在我们找到的示例路径之后，SSDT应该看起来像这样:

**之后**:

```
External (_SB_.PC00.LPC0, DeviceObj) <- Renamed

Scope (_SB.PC00.LPC0) <- Renamed
```

![](../../images/Desktops/ssdt-after.png)

## 边缘情况

### 出现多个PNP0C09

当显示出多个PNP0C09时，我们需要检查以下属性:

* `_HID` (硬件ID)
* `_CRS` (当前资源设置)
* `_GPE` (通用事件)

这些表示的是这个PNP0C09设备是否真实，根据[ACPI规范](https://uefi.org/sites/default/files/resources/ACPI_6_3_final_Jan30.pdf). 所以符合上述条件的就是我们想要禁用的。

* 注意:如果_STA也显示了，你需要到这里:[PNP0C09已经有一个`_STA`方法](#pnp0c09已经有了一个_sta方法)  <!-- markdownlint-disable-line MD051 -->

### 没有PNP0C09出现

当这种情况发生时，你只需要为macOS创建一个“虚拟”EC。

尝试搜索任何名为“LPCB”，“LPC0”，“LPC”，“SBRG”，“PX40”的设备。如果你有其中任何一个，尝试使用这些设备的LPC路径来代替嵌入式控制器的路径。

请注意**不要**取消EC禁用代码的注释，因为在你的机器中没有被认为是“EC”的设备。

### PNP0C09已经命名为`EC`

祝贺你!不需要创建SSDT-EC!然而，如果你是Skylake或更新的，你仍然会想要USBX。

预构建可以在这里获取: [SSDT-USBX.aml](https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml)

### PNP0C09已经有了一个`_STA`方法

这相当于没有一个EC，因为我们无法通过SSDT-EC控制它，相反，我们需要为macOS创建一个“虚拟”EC。您仍然需要找到此设备的PCI和LPC路径。所以，就像创建一台笔记本电脑SSDT-EC/USBX一样，按照指南操作。

已经有STA的EC的例子:

![Credit to rottenpants466](../../images/Desktops/sta.png)

## 编译SSDT

 完成SSDT后，您现在可以[准备编译SSDT!](/Manual/compile.md)

## 结束

完成SSDT后，可以转到下一页完成其余的SSDT，如果准备好了，可以转到此处:

* [**Cleanup**](/cleanup.md)
