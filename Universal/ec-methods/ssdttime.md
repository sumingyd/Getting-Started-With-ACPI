# 修复嵌入式控制器:SSDTTime

第二种方法涉及使用SSDTTime，它可以自动执行大部分流程。看这里如何使用它:[SSDTs: 简单的方法](/ssdt-methods/ssdt-easy.md)

要在桌面电脑上获取SSDT-EC，请执行以下命令:

* `7. Dump DSDT` 然后运行 `2. FakeEC`

要在笔记本电脑上获得SSDT-EC，运行以下命令:

* `7. Dump DSDT` 然后运行 `3.  FakeEC Laptop`

这将为您提供一些文件，您关心的主要文件是SSDT-EC.**aml**。DSDT和.dsl只用于引用或验证。

使用此方法需要注意的主要事项:

* 不提供USBX属性来解决电源问题
  * 除了使用SSDT-EC之外，还可以使用此预构建文件轻松修复: [SSDT-USBX.aml](https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml)
  * 注意USBX仅适用于Skylake和更新版本
* 并不能真正教会你任何东西
  * 对大多数人来说，这并不重要。但对一些人来说，了解是什么让你的黑苹果运转是旅程的一部分

## 结束

完成SSDT后，可以转到下一页完成其余的SSDT，如果准备好了，可以转到此处:

* [**清理**](/cleanup.md)
