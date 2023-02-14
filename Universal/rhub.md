# 修复USB

## 这个SSDT是做什么的

在400系列主板上，某些OEM厂商破坏了ACPI规范，这导致了在启动MacOS时出现问题。为了解决这个问题，我们要关闭RHUB设备，强迫macOS手动重建端口。

以下平台将需要修复。

* 移动Icelake（目前戴尔和联想是已知有此问题的两个平台）
* 华硕Z490（技嘉和华擎的用户没有问题，微星目前是否有这个问题还不知道）

## 使这个SSDT的方法

对于RHUB的修复，有3种方法可以选择。

* [预构建](/Universal/rhub-methods/prebuilt.md)
* [SSDTTime](/Universal/rhub-methods/ssdttime.md)
* [手动](/Universal/rhub-methods/manual.md)
