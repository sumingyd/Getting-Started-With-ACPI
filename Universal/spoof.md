# 重命名GPU (SSDT-GPU-SPOOF)

因此，这主要是针对那些因其名称而不被原生支持的GPU所需要的，最常见的是：

* R9 290/390
* R9 280/380
* R7 270/370
* R9 260/360
* R7 250
* R7 240

相反，这些GPU需要被 "欺骗 "或伪造成与它们密切相关的型号，通常这将是该卡的 "X "变体。由于某些原因，苹果公司从来没有为这些其他的卡添加PCI ID，即使它们的GPU核心被驱动程序所支持。

所以要欺骗GPU，我们需要找到一些东西。

* 适用于GPU的PCI ID
* GPU的ACPI路径
* [ssdt-gpu-spoof](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-GPU-SPOOF.dsl.zip)

## 找到一个合适的PCI ID

### 网络

为了找到一个合适的PCI ID，我们将使用[PCI ID Repository](https://pci-ids.ucw.cz/read/PC/1002)，它有一个所有AMD GPU的完整数据库。在这个例子中，我们将为R9 390创建一个欺骗性的SSDT。关于支持的GPU的完整列表，请参见[GPU购买指南](https://sumingyd.github.io/GPU-Buyers-Guide/)。与该GPU最接近的是390X，在该网站的顶部附近寻找，我们得到了这个结果：

```
Vendor 1002 -> Device 1002:67b0
```

现在让我们把它分解成一个我们可以使用的设备ID。

* `1002`: 供应商的ID，所有AMD设备都有这个ID。
* `67B0`: 设备ID，这就是我们关心的东西

那么，我们如何将其转换为一个假的ID？好吧，假ID的格式：

```
"device-id",
Buffer (0x04)
{
     0xB0, 0x67, 0x00, 0x00
},
```

正如你所看到的，这些字节是成对互换的。当我们制作我们的SSDT时，请记住这一点。

具体情况来自[Endianness](https://en.wikipedia.org/wiki/Endianness)的原因，对于那些好奇的人来说

### Linux

如果你能运行Linux，使用命令`lspci -vmmnnD -d 1002::0300`

```
$ lspci -vmmnnD -d 1002::0300
Slot: 0000:01:00.0
Class: VGA compatible controller [0300]
Vendor: Advanced Micro Devices, Inc. [AMD/ATI] [1002]
Device: Oland [Radeon HD 8570 / R7 240/340 / Radeon 520 OEM] [6611]
SVendor: Micro-Star International Co., Ltd. [MSI] [1462]
SDevice: Device [3740]
Rev: 87
```

你可以很容易地得到

* 插槽ID `0000:01:00.0`，我们以后需要它
* 供应商ID `1002`，所有AMD设备都有这个ID
* 设备ID `6611`，这是我们关心的
* 设备名称 `Radeon HD 8570 / R7 240/340 / Radeon 520 OEM`，主要是外观

## 找到GPU的ACPI路径

### Windows

要找到GPU的PCI路径是相当简单的，最好的方法是运行Windows：

* 打开设备管理器
* 选择显示适配器，然后右击你的GPU并选择属性
* 在 "详细信息 "标签下，搜索 "位置路径"
  * 注意一些GPU可能隐藏在 "BIOS设备名称 "下

![](../images/Desktops/amd.png)

![Credit to 1Revenger1 for the image](../images/Desktops/nvidia.png)

第二个 "ACPI "是我们所关心的。

```
ACPI(_SB_)#ACPI(PC02)#ACPI(BR2A)#ACPI(PEGP)#PCI(0000)#PCI(0000)
```

现在将其转换为ACPI路径非常简单，去掉`#ACPI`和`#PCI(0000)`。

```
\_SB_.PC02.BR2A.PEGP
```

### Linux

将上面找到的SLOTID代入`cat /sys/bus/pci/devices/SLOTID/firmware_node/path`命令，你会得到

```
$ cat /sys/bus/pci/devices/0000:01:00.0/firmware_node/path
\_SB_.PC02.BR2A.PEGP
```

好了! 我们已经找到了我们的ACPI路径，现在我们有了一切，我们准备开始了

## 制作SSDT

开始时，获取我们的[SSDT-GPU-SPOOF](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-GPU-SPOOF.dsl.zip)并将其打开。这里有几件事情需要改变

```
External (_SB_.PCI0, DeviceObj)
External (_SB_.PCI0.PEG0.PEGP, DeviceObj)
```

对于我们的例子，我们将改变所有提到的:

* `PCI0`改为`PC02`
* `PEG0`改为`BR2A`

提示：如果你的ACPI路径比例子中的要短一些，这也没有问题。只要确保ACPI路径对你的设备是正确的。

现在，ACPI路径是正确的，我们终于可以应用我们的假ID了！！。

因此，我们要改变的2个部分：

**device ID**:

```
"device-id",
Buffer (0x04)
{
    0xB0, 0x67, 0x00, 0x00
},
```

**Model**:

```
"model",
Buffer ()
{
    "AMD Radeon R9 390"
}
```

`device-id`将被设置为我们在 "寻找合适的PCI ID "中找到的PCI ID，而`model`则主要是美化。

## [现在你准备编译SSDT了！](/Manual/compile.md)
