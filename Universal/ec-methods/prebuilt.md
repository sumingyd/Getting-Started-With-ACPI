# 修复嵌入式控制器:预构建

到目前为止，修复嵌入式控制器最简单的方法就是下载下面的一个文件:

**桌面**:

* [SSDT-EC-USBX-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-DESKTOP.aml)
  * 适用于Skylake台式机和更新的AMD CPU系统
* [SSDT-EC-DESKTOP](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-DESKTOP.aml)
  * 适用于Broadwell台式机及更老版本

**笔记本**:

* [SSDT-EC-USBX-LAPTOP.aml](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-USBX-LAPTOP.aml)
  * 适用于Skylake及更新的笔记本电脑
* [SSDT-EC-LAPTOP.aml](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-EC-LAPTOP.aml)
  * 适用于Broadwell笔记本电脑及更旧的电脑

使用这种方法需要注意的主要事情:

* 相当臃肿
  * 每种类型都有ACPI命名，这意味着启动时间会有额外的延迟
* 并不能真正教会你任何东西
  * 对大多数人来说，这并不重要。但对一些人来说，了解是什么让你的黑苹果运转是旅程的一部分

## 结束

完成SSDT后，可以转到下一页完成其余的SSDT，如果准备好了，可以转到此处:

* [**清理**](/cleanup.md)
