# 修复非核心桥段（SSDT-UNC）

## 这个SSDT的作用

所有的X99和许多X79板都需要这个SSDT，它特别禁用ACPI中未使用的设备，确保IOPCIFamily不会出现内核崩溃。这对终端用户来说需要很少的配置。

* X79
* C602
* X99
* C612

## 制作这个SSDT的方法

制作这个SSDT的主要方法：

* [预构建](/Universal/unc0-methods/prebuilt.md)
* [手动](/Universal/unc0-methods/manual.md)
