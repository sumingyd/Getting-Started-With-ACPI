# 修复SMBus支持（SSDT-SBUS-MCHC）

## 这个SSDT是做什么的

本指南的这一部分是指在macOS中修复AppleSMBus支持，什么是AppleSMBus？嗯，这主要是处理系统管理总线，它有许多功能，如：

* AppleSMBusController
  * 协助正确的温度、风扇、电压、ICH等读数
* AppleSMBusPCI
  * 与AppleSMBusController的想法相同，除了低带宽的PCI设备
* 内存报告
  * 有助于正确的内存报告，如果与内存有关，可以帮助获得更好的内核崩溃细节
* SMBus做的其他事情：[SMBus wiki](https://en.wikipedia.org/wiki/System_Management_Bus)

对于安装来说，这个SSDT是不需要的，但是对于安装后来说，我们建议对你的黑客进行最后的润色。

## 制作这个SSDT的方法

要制作这个SSDT，你只有一种方法。手动操作

* [手动](/Universal/smbus-methods/manual.md)
