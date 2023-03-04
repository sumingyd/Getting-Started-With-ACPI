# 预先构建的ssdt

只需选择您的硬件类型和生成，然后下载相关文件。下载后，将它们放在EFI下的EFI/OC/ACPI下，然后返回[config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

[[toc]]

### 桌面 Penryn, Lynnfield 和 Clarkdale

::: tip 所需的ssds

* [SSDT-EC-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-DESKTOP.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-EC:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用

:::

### 桌面 Sandy 和 Ivy Bridge

::: tip 所需的ssds

* [SSDT-EC-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-DESKTOP.aml)
* [SSDT-IMEI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-IMEI.aml)
  * 要求Sandy Bridge CPU与7系列主板
    * 如 B75, Q75, Z75, H77, Q77, Z77
  * 要求Ivy Bridge CPU和6系列主板
    * 如 H61, B65, Q65, P67, H67, Q67, Z68

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::
::: details 关于ssdt的深入信息

SSDT-EC:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用

SSDT-IMEI

* 当一个IMEI设备不存在于ACPI\时用于创建一个IMEI设备
  * 要求Sandy Bridge CPU与7系列主板
    * 如 B75, Q75, Z75, H77, Q77, Z77
  * 要求Ivy Bridge CPU和6系列主板
    * 如 H61, B65, Q65, P67, H67, Q67, Z68

:::

### 桌面 Haswell 和 Broadwell

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-DESKTOP.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用

:::

### 桌面 Skylake 和 Kaby Lake

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-USBX-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

:::

### 桌面 Coffee Lake

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-USBX-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml)
* [SSDT-AWAC](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-AWAC.aml)
* [SSDT-PMC](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PMC.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

SSDT-AWAC:

* 用于启用macOS中的传统RTC时钟，因为不支持更新的AWAC时钟

SSDT-PMC:

* 用于在“真正的”300系列主板上启用原生NVRAM
  * 如 B360, B365, H310, H370, Z390
  * 注:Z370不包括在内

:::

### 桌面 Comet Lake

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-USBX-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml)
* [SSDT-AWAC](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-AWAC.aml)
* [SSDT-RHUB](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-RHUB.aml)
  * 特别是对于华硕的400系列主板，Gigabyte等不需要SSDT-RHUB

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

SSDT-AWAC:

* 用于启用macOS中的传统RTC时钟，因为不支持更新的AWAC时钟

SSDT-RHUB:

* 由于OEM的ACPI实现不佳，用于重置华硕400系列主板上的USB控制器
  * 注:Gigabyte, MSI, AsRock等不需要这个SSDT。只有华硕

:::

## Intel 笔记本 SSDTs

### 笔记本 Clarksfield 和 Arrandale

::: tip 所需的ssds

* [SSDT-EC-LAPTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-LAPTOP.aml)
* [SSDT-PNLF](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PNLF.aml)
* [SSDT-XOSI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-XOSI.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-EC:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用

SSDT-PNLF:

* 用于控制AIOs、笔记本电脑等内部显示器的背光

SSDT-XOSI:

* 在macOS中启用许多windows专用功能
  * 需要XOSI补丁(稍后介绍)

:::

### 笔记本 Sandy 和 Ivy Bridge

::: tip 所需的ssds

* [SSDT-EC-LAPTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-LAPTOP.aml)
* [SSDT-IMEI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-IMEI.aml)
  * 要求Sandy Bridge CPU与7系列主板
    * 如 B75, Q75, Z75, H77, Q77, Z77
  * 要求Ivy Bridge CPU和6系列主板
    * 如 H61, B65, Q65, P67, H67, Q67, Z68
* [SSDT-PNLF](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PNLF.aml)
* [SSDT-XOSI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-XOSI.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::
::: details 关于ssdt的深入信息

SSDT-EC:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用

SSDT-IMEI

* 当ACPI中没有IMEI设备时，用于创建IMEI设备
  * 要求Sandy Bridge CPU与7系列主板
    * 如 B75, Q75, Z75, H77, Q77, Z77
  * 要求Ivy Bridge CPU和6系列主板
    * 如 H61, B65, Q65, P67, H67, Q67, Z68

SSDT-PNLF:

* 用于控制AIOs、笔记本电脑等内部显示器的背光

SSDT-XOSI:

* 在macOS中启用许多windows专用功能
  * 需要XOSI补丁(稍后介绍)

:::

### 笔记本 Haswell 和 Broadwell

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-LAPTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-LAPTOP.aml)
* [SSDT-PNLF](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PNLF.aml)
* [SSDT-XOSI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-XOSI.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用

SSDT-PNLF:

* 用于控制AIOs、笔记本电脑等内部显示器的背光

SSDT-XOSI:

* 在macOS中启用许多windows专用功能
  * 需要XOSI补丁(稍后介绍)

:::

### 笔记本 Skylake 和 Kaby Lake

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-USBX-LAPTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-LAPTOP.aml)
* [SSDT-PNLF](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PNLF.aml)
* [SSDT-XOSI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-XOSI.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

SSDT-PNLF:

* 用于控制AIOs、笔记本电脑等内部显示器的背光

SSDT-XOSI:

* 在macOS中启用许多windows专用功能
  * 需要XOSI补丁(稍后介绍)

:::

### 笔记本 Coffee Lake (8th gen)

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-USBX-LAPTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-LAPTOP.aml)
* [SSDT-AWAC](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-AWAC.aml)
* [SSDT-PNLF](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PNLF.aml)
* [SSDT-XOSI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-XOSI.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

SSDT-AWAC:

* 用于启用macOS中的传统RTC时钟，因为不支持更新的AWAC时钟

SSDT-PNLF:

* 用于控制AIOs、笔记本电脑等内部显示器的背光

SSDT-XOSI:

* 在macOS中启用许多windows专用功能
  * 需要XOSI补丁(稍后介绍)

:::

### 笔记本 Coffee 和 Comet Lake (9th and 10th gen)

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-USBX-LAPTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-LAPTOP.aml)
* [SSDT-AWAC](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-AWAC.aml)
* [SSDT-PMC](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PMC.aml)
  * 仅适用于第9代笔记本电脑, 10th gen can ignore
* [SSDT-PNLF](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PNLF.aml)
* [SSDT-XOSI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-XOSI.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

SSDT-AWAC:

* 用于启用macOS中的传统RTC时钟，因为不支持更新的AWAC时钟

SSDT-PMC:

* 用于在“真正的”300系列主板上启用原生NVRAM
  * 仅适用于第9代笔记本电脑
  
SSDT-PNLF:

* 用于控制AIOs、笔记本电脑等内部显示器的背光

SSDT-XOSI:

* 在macOS中启用许多windows专用功能
  * 需要XOSI补丁(稍后介绍)

:::

### 笔记本 Ice Lake

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-USBX-LAPTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-LAPTOP.aml)
* [SSDT-AWAC](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-AWAC.aml)
* [SSDT-RHUB](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-RHUB.aml)
* [SSDT-PNLF](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PNLF.aml)
* [SSDT-XOSI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-XOSI.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

SSDT-AWAC:

* 用于启用macOS中的传统RTC时钟，因为不支持更新的AWAC时钟

SSDT-RHUB:

* 由于OEM ACPI实现不佳，用于重置Ice Lake笔记本电脑上的USB控制器
  * 主要出现在戴尔笔记本电脑上
  
SSDT-PNLF:

* 用于控制AIOs、笔记本电脑等内部显示器的背光

SSDT-XOSI:

* 在macOS中启用许多windows专用功能
  * 需要XOSI补丁(稍后介绍)

:::

## Intel HEDT SSDTs

### Nehalem 和 Westmere

::: tip 所需的ssds

* [SSDT-EC-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-DESKTOP.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-EC:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用

:::

### Sandy 和 Ivy Bridge-E

::: tip 所需的ssds

* [SSDT-EC-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-DESKTOP.aml)
* [SSDT-UNC](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-UNC.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-EC:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用

SSDT-UNC0:

* 用于确保未使用或丢失的uncore桥正确禁用，否则在macOS Big Sur的IOPCIFamily中发生内核恐慌

:::

### Haswell 和 Broadwell-E

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-USBX-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml)
* [SSDT-RTC0-RANGE-HEDT](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-RTC0-RANGE-HEDT.aml)
* [SSDT-UNC](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-UNC.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

SSDT-RTC0-RANGE-HEDT:

* 用于启用macOS中的传统RTC时钟，因为不支持更新的AWAC时钟
  * 额外的好处是解决了macOS Big Sur启动时由于ACPI实现不佳而出现的早期停顿

SSDT-UNC0:

* 用于确保未使用或丢失的uncore桥正确禁用，否则在macOS Big Sur的IOPCIFamily中发生内核恐慌

:::

### Skylake 和 Cascade Lake-X/W

::: tip 所需的ssds

* [SSDT-PLUG-DRTNIA](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)
* [SSDT-EC-USBX-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml)
* [SSDT-RTC0-RANGE-HEDT](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-RTC0-RANGE-HEDT.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-PLUG:

* 用于在macOS中启用苹果的XCPM，允许更好的CPU电源管理

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

SSDT-RTC0-RANGE-HEDT:

* 用于启用macOS中的传统RTC时钟，因为不支持更新的AWAC时钟
  * 额外的好处是解决了macOS Big Sur启动时由于ACPI实现不佳而出现的早期停顿

:::

## AMD SSDTs

### AMD Bulldozer/Jaguar

::: tip 所需的ssds

* [SSDT-EC-USBX-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml)

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

:::

### AMD Zen

::: tip 所需的ssds

* [SSDT-EC-USBX-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml)
* [SSDT-CPUR](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-CPUR.aml)
  * 只适用于B550, A520及更新型号
    * X570及以上版本**不**需要 SSDT-CPUR
    * 没有threadripper机器也需要这个

下载完成后，将它们放入EFI/OC/ACPI下的EFI文件夹中，然后返回安装指南

* [config.plist 设置](https://sumingyd.github.io/OpenCore-Install-Guide/config.plist/)

:::

::: details 关于ssdt的深入信息

SSDT-EC-USBX:

* 用于禁用真正的嵌入式控制器，并创建一个假控制器供macOS使用
* USBX部分用于注入Skylake和更新的USB电源属性

SSDT-CPUR:

* 用于修复ACPI中的CPU定义，因为macOS不能正确支持B550和较新的电路板中使用的ACPI

:::
