# 修复触摸板 (SSDT-GPI0/XOSI)

## 这个SSDT做什么

修复I2C触摸板的一个重要部分是在ACPI中启用它们。要使VoodooI2C工作，需要启用GPI0，以及触控板和I2C总线。后两种设备通常在Windows操作系统检查后被禁用，也需要打补丁才能与macOS一起工作。通常，GPI0已经启用，不需要修改。

本节以已安装macOS为例。如果触摸板还不能工作，您可能需要使用USB鼠标来安装macOS。

## 使其成为SSDT的方法

对于触摸板的修复，只有一个方法可以选择:

* [手动](/Laptops/trackpad-methods/manual.md)
