# 修复系统时钟(SSDT-AWAC/RTC0)

## 这个SSDT做什么

SSDT-AWAC/RTC0的目的是修复较新硬件上的系统时钟，主要体现在以下方面：

* B360
* B365
* H310
* H370
* Z370（采用较新BIOS版本的Gigabyte和AsRock主板）
* Z390
* B460
* Z490
* 400系列（Comet Lake，包括Z490）
* 495系列 (Icelake)
* X99
* X299

SSDT-AWAC试图重新启用与macOS兼容的旧RTC时钟，而SSDT-RTC0则会在没有启用旧RTC时钟的情况下创建一个 "假 "RTC时钟。

## 制作这个SSDT的方法

对于RTC的修复，有3种方法可以选择。

* [预构建](/Universal/awac-methods/prebuilt.md)
* [SSDTTime](/Universal/awac-methods/ssdttime.md)
  **不支持HEDT**。
* [手动](/Universal/awac-methods/manual.md)
  *适用于大多数用户
* [手动HEDT](/Universal/awac-methods/manual-hedt.md)
  * 适用于X99和X299用户
