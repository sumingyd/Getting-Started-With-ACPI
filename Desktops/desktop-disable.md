# 禁用桌面不支持的gpu (SSDT-GPU-DISABLE)

* [Finding the ACPI Path of the GPU](#finding-the-acpi-path-of-the-gpu)
* [Making the SSDT](#making-the-ssdt)

This is mainly needed for GPUs that are not supported in macOS, mainly this will be Nvidia users who wish to pair an AMD GPU for macOS use. While WhateverGreen does support the boot-arg `-wegnoegpu`, this only works when running on iGPU so for the rest of us we'll need to make an SSDT.

* CPI GPU路径
* [SSDT-GPU-DISABLE](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-GPU-DISABLE.dsl.zip)

## 查找GPU的ACPI路径

找到GPU的PCI路径是相当简单的，最好的方法是运行Windows:

* 打开设备管理器
* 选择显示适配器，然后右键单击您的GPU并选择属性
* 在详细资料标签下，搜寻“位置路径”
  * 注意一些gpu可能隐藏在“BIOS设备名称”下

![](../images/Desktops/amd.png)

![Credit to 1Revenger1 for the image](../images/Desktops/nvidia.png)

第二个“ACPI”是我们关心的:

```
ACPI(_SB_)#ACPI(PC02)#ACPI(BR2A)#ACPI(PEGP)#PCI(0000)#PCI(0000)
```

现在将其转换为ACPI路径非常简单，删除`#ACPI`和`#PCI(0000)`:

```
`_SB_.PC02.BR2A.PEGP
```

瞧!我们已经找到了ACPI路径，现在我们已经准备好了一切

## 制作SSDT

获取我们的 [SSDT-GPU-DISABLE](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-GPU-DISABLE.dsl.zip)并打开它。这里有几点需要改变:

```
External (_SB_.PCI0.PEG0.PEGP, DeviceObj)
Method (_SB.PCI0.PEG0.PEGP._DSM, 4, NotSerialized)
```

在我们的例子中，我们将更改所有提及的内容:

* `PCI0` with `PC02`
* `PEG0` with `BR2A`

提示:如果您的ACPI路径比示例短一点，那么这是可以的。只要确保ACPI路径对你的设备是正确的，一些用户可能还需要根据他们的路径调整`_SB_`

## [现在您已经准备好编译SSDT!](/Manual/compile.md)
