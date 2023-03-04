# 禁用笔记本电脑dgpu (SSDT-dGPU-Off/NoHybGfx)

所以对于笔记本电脑，我们可以用WhateverGreen的`-wegnoegpu`引导参数隐藏macOS中的dGPU。但是有一个小问题，dGPU仍然在缓慢地消耗你的电量。我们将介绍在笔记本电脑中禁用dGPU的两种方法:

* [Optimus 方法](#optimus-方法)
* [Bumblebee 方法](#bumblebee-方法)

## Optimus 方法

这是如何工作的，我们在Optimus GPU上调用`.off`方法，这是预期的关闭GPU的方式，但有些人可能会发现他们的dGPU稍后会重新通电。主要出现在联想，Optimus方法应该适用于大多数用户:

首先，获取 [SSDT-dGPU-Off.dsl](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-dGPU-Off.dsl.zip)

接下来，我们需要进入Windows，并前往以下地方:

```
设备管理器—>显示适配器—> dGPU—>属性—>详细信息> BIOS设备名称
```

* 注意一些gpu可能隐藏在“BIOS设备名称”下

这应该为你的dGPU提供一个ACPI路径，最常见的是:

* Nvidia dGPU: `\_SB.PCI0.PEG0.PEGP`
* AMD dGPU: `\_SB.PCI0.PEGP.DGFX`

![Credit to 1Revenger1 for the image](../images/Desktops/nvidia.png)

现在，我们需要更改SSDT中的ACPI路径。主要部分:

```
External(_SB.PCI0.PEG0.PEGP._OFF, MethodObj)
```

```
If (CondRefOf(\_SB.PCI0.PEG0.PEGP._OFF)) { \_SB.PCI0.PEG0.PEGP._OFF() }
```

一旦适配了您的配置，转到编译部分

* 有睡眠问题的，可以参考原文[Rehabman帖](https://www.tonymacx86.com/threads/guide-disabling-discrete-graphics-in-dual-gpu-laptops.163772/)

## Bumblebee 方法

对于一些机器，简单的`.off`调用不会正确地保持卡关闭，这就是Bumblebee方法的来源。这个SSDT实际上会将dGPU发送到D3状态，即设备可以支持的最低功率状态。感谢Maemo对原著的改编。

首先，获取 [SSDT-NoHybGfx.dsl](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-NoHybGfx.dsl.zip)

接下来，我们需要进入Windows，并前往以下地方:

```
设备管理器—>显示适配器—> dGPU—>属性—>详细信息> BIOS设备名称
```

这应该会为你的dGPU提供一个ACPI路径，最常见的是:

* Nvidia dGPU: `\_SB.PCI0.PEG0.PEGP`
* AMD dGPU: `\_SB.PCI0.PEGP.DGFX`

现在，我们需要更改SSDT中的ACPI路径。主要部分:

```
External (_SB_.PCI0.PEG0.PEGP._DSM, MethodObj)    // dGPU ACPI Path
External (_SB_.PCI0.PEG0.PEGP._PS3, MethodObj)    // dGPU ACPI Path
```

```
If ((CondRefOf (\_SB.PCI0.PEG0.PEGP._DSM) && CondRefOf (\_SB.PCI0.PEG0.PEGP._PS3)))
```

``` text
 // Card Off Request
 \_SB.PCI0.PEG0.PEGP._DSM (ToUUID ("a486d8f8-0bda-471b-a72b-6042a6b5bee0"), 0x0100, 0x1A, Buffer (0x04)
```

```
 // Card Off
\_SB.PCI0.PEG0.PEGP._PS3 ()
```

一旦适配了您的配置，转到编译部分

## [现在您已经准备好编译SSDT!](/Manual/compile.md)
