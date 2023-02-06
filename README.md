# 开始使用ACPI

<img src="acpi-logo.png" width="512">

## ACPI的快速讲解

什么是dsdt和ssdt ?好吧，这些表出现在你的固件中，概述硬件设备，如USB控制器，CPU线程，嵌入式控制器，系统时钟等。DSDT(Differentiated System Description Table，区分系统描述表)可以被看作是包含大部分信息的主体，而SSDT(Secondary System Description Table，次级系统描述表)传递的信息则较少。您可以将DSDT视为建筑蓝图，而ssdt是概述项目额外细节的便签

你可以在这里阅读更多关于ACPI和它的规范:[ACPI 6.4手册](https://uefi.org/sites/default/files/resources/ACPI_Spec_6_4_Jan22.pdf)

> 那么我们为什么要关心这些表呢?

macOS可能会对DSDT中出现的设备非常挑剔，所以我们的工作就是纠正它。为了使macOS正常工作，需要更正的主要设备:

* 嵌入式控制器(EC)
  * 所有半现代的英特尔机器在其DSDT中都暴露了一个EC(通常称为H\_EC, ECDV, EC0等)，许多AMD系统也暴露了它。这些控制器通常与macOS不兼容，可能会导致严重错误，因此需要对macOS隐藏。macOS Catalina需要一个名为`EC`的设备，因此创建了一个虚拟的EC。
  * 对于笔记本电脑，实际的嵌入式控制器仍然需要启用电池和热键才能工作，并且重命名EC可能会导致windows问题，因此创建一个假EC而不禁用真正的嵌入式控制器是可取的。
* 插件类型
  * 这允许在**Intel** Haswell和更新的CPU上使用XCPM提供原生CPU电源管理，SSDT将连接到CPU的第一个线程。不是为AMD设计的
* AWAC系统时钟
  * 这适用于所有300系列主板，包括许多Z370板，具体问题是更新的主板启用了AWAC时钟。这是一个问题，因为macOS不能与AWAC时钟通信，所以这要求我们要么强制使用传统的RTC时钟，要么在不可用的情况下创建一个假的RTC时钟供macOS使用
* NVRAM SSDT
  * 真正的300系列主板(非z370)在ACPI中没有将FW芯片声明为MMIO，因此内核忽略了UEFI内存映射中声明的MMIO区域。这个SSDT恢复了对NVRAM的支持
* 背光SSDT
  * 用于修复笔记本电脑上的背光控制支持
* GPIO SSDT
  * 用于创建允许VoodooI2C连接到的存根，仅适用于笔记本电脑
* XOSI SSDT
  * 用于将OSI调用重路由到此SSDT，主要用于欺骗我们的硬件，使其认为它是引导窗口，以便我们获得更好的触控板支持。这是一个非常黑客化的解决方案，以破坏Windows引导而闻名，使用GPIO SSDT代替。本指南中不涉及XOSI的用法
* IRQ SSDT和ACPI补丁
  * 需要在DSDT中修复IRQ冲突，主要用于笔记本电脑。SSDTTime专属
  * 注意Skylake和较新的系统很少有IRQ冲突，这主要在Broadwell和较老的系统上普遍存在

现在转到下一页，了解您的系统需要什么ssdt:

## [选择ssdt](ssdt-platform.md)
