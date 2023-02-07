# 修复嵌入式控制器 (SSDT-EC/USBX)

## 这个SSDT做什么

SSDT-EC/USBX的目的如下:

* 在台式机上，EC(或更知名的嵌入式控制器)不兼容AppleACPIEC驱动程序，为了解决这个问题，我们在运行macOS时禁用了该设备
* AppleBusPowerController会寻找一个名为`EC`的设备，所以我们需要创建一个假的设备来加载这个kext
  * AppleBusPowerController还需要一个USBX设备来为Skylake和更新的版本提供USB电源属性，因此我们将把这个设备与EC修复捆绑在一起
* 在笔记本电脑上，EC用于热键和电池，因此禁用它并不太理想。问题是我们的EC的名称不兼容，所以我们将创建一个简单的“假”EC设备，以满足苹果的要求

So TL;DR:

* EC是嵌入式控制器
* 桌面会想要真正的EC关闭，和一个假EC创建
* 笔记本电脑只需要一个额外的假EC
* Skylake和更新的设备也需要USBX

## 使其成为SSDT的方法

对于EC修复，有3种方法你可以选择:

* [预先构建的](/Universal/ec-methods/prebuilt.md)
* [SSDTTime](/Universal/ec-methods/ssdttime.md)
* [手动](/Universal/ec-methods/manual.md)
