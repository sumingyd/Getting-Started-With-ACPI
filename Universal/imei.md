# 修复IMEI (SSDT-IMEI)

## 这个SSDT的作用是什么

SSDT-IMEI的目的是：

* 当Ivy Bridge CPU与6系列主板混合使用时，我们会遇到一个问题，即IMEI设备与macOS不兼容。具体来说，设备ID不会被识别，这是一个非常重要的问题，因为macOS的iGPU驱动程序依赖于IMEI设备。
  * 当Sandy Bridge CPU与7系列主板混合使用时也是如此。
* 一个可能出现的额外问题是，IMEI不会出现在ACPI中，这可能导致更多的问题，因为macOS希望有一个ACPI设备来应用设备ID。因此，为了解决这个问题，我们要验证我们是否有一个IMEI设备，如果没有，就创建一个新的设备。

## 使这个SSDT的方法

对于IMEI的修复，有2种方法可以选择。

* [预构建](/Universal/imei-methods/prebuilt.md)
  * 预建的方法有点臃肿。建议使用下面的方法
* [手动](/Universal/imei-methods/manual.md)
