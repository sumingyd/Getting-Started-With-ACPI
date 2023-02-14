# 固定背光灯：手动

## 寻找ACPI路径

### 在MacOS上

不幸的是，目前还没有这方面的指导。在Linux或Windows上试试。

### 在Linux上

这些步骤在Ubuntu上有效，也可能在其他发行版上有效。如果没有，请尝试在Windows上进行操作。
使用`lspci`命令来获取你的显示适配器的PCI识别号。
这里的输出在你的系统上将是不同的!

```
# lspci -D
0000:00:00.0 Host bridge: Intel Corporation 440FX - 82441FX PMC [Natoma] (rev 02)
0000:00:01.0 ISA bridge: Intel Corporation 82371SB PIIX3 ISA [Natoma/Triton II]
0000:00:01.1 IDE interface: Intel Corporation 82371AB/EB/MB PIIX4 IDE (rev 01)
0000:00:02.0 VGA compatible controller: VMware SVGA II Adapter
0000:00:03.0 Ethernet controller: Intel Corporation 82540EM Gigabit Ethernet Controller (rev 02)
0000:00:04.0 System peripheral: InnoTek Systemberatung GmbH VirtualBox Guest Service
```

在输出中搜索一个看起来像你的显示适配器的条目。例如：在这个例子中，我们有`VGA compatible controller`，PCI编号为`0000:00:02.0`。这个数字的格式是`domain:bus:device:function`.

现在在终端使用这个命令来找到你的显示适配器的ACPI路径
`# cat /sys/class/pci_bus/<domain:bus>/device/<domain:bus:device:function>/firmware_node/path`  

比如说

```
# cat /sys/class/pci_bus/0000:00/device/0000:00:02.0/firmware_node/path
\_SB_.PCI0.GFX0  <-- The ACPI path
```

进一步的细节[在此链接。](https://unix.stackexchange.com/questions/653143/how-to-get-bios-device-name-from-linux-same-as-windows-device-manager-format)

### 在Windows上

打开设别管理器，并前往以下地点：

```
设备管理器 -> 显示适配器 -> 属性 -> 详细信息 > BIOS设备名称
```

![Credit to 1Revenger1 for the image](../../images/Laptops/backlight-md/devicemanager.png)

从上面的例子中，我们可以看到我们的显示器被连接到了`_SB.PCI0.GFX0`。

## 对样本SSDT的编辑

现在我们有了ACPI路径，让我们的SSDT开始工作吧：

* [SSDT-PNLF.dsl](https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-PNLF.dsl)

默认情况下，这使用了`_SB.PCI0.GFX0`的路径设置。你要相应地重命名。在这个例子中，我们将假设你的路径是`\_SB.PCI0.GPU0`。

**之前**:

```
External (_SB_.PCI0.GFX0, DeviceObj) <- 重命名这个

Scope (_SB.PCI0.GFX0) <- 重命名这个

Device(_SB.PCI0.GFX0.PNLF) <- 重命名这个
```

![](../../images/Laptops/backlight-md/ssdt-before.png)

按照我们发现的示例路径，SSDT应该看起来像这样：

**之后**:

```
External (_SB_.PCI0.GPU0, DeviceObj) <- 重命名

Scope (_SB.PCI0.GPU0) <- 重命名

Device(_SB.PCI0.GPU0.PNLF) <- 重命名
```

![](../../images/Laptops/backlight-md/ssdt-after.png)

## 编译SSDT

 随着SSDT的完成，你现在[准备编译SSDT！](/Manual/compile.md)

## 收尾工作

一旦你完成了你的SSDT，可以前往下一页来完成其余的SSDT，如果你准备好了，可以前往这里。

* [**清理工作**](/cleanup.md)
