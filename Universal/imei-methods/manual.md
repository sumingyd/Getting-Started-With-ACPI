# 修复IMEI：手动

[[toc]]

寻找ACPI设备的路径其实很容易，首先用MaciASL（如果在macOS中）或任何其他文本编辑器（如果在Windows或Linux中）打开你从[Dumping the DSDT](/Manual/dump.md)和[Decompiling and Compiling](/Manual/compile.md)得到的反编译的DSDT（VSCode有一个[ACPI扩展](https://marketplace.visualstudio.com/items?itemName=Thog.vscode-asl)，也能帮助你。

接下来，搜索以下设备。

* `IMEI`
* `HECI`
* `MEI`

如果这三个都没有出现，你就需要创建一个SSDT-IMEI。

**如果这三种设备之一出现**，你不需要SSDT-IMEI! 你可以直接跳过这一页。

然而，本页面的其余部分将假设这3个设备都没有出现。

## 编译SSDT

因此，实际上不需要对SSDT-IMEI进行编辑，你可以抓取源代码并自己编译，或者使用预建的

* [预构建SSDT-IMEI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-IMEI-S.aml)

* [SSDT-IMEI的源代码](https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-IMEI.dsl)

随着SSDT的完成，你现在[准备编译SSDT！](/Manual/compile.md)

## 总结

一旦你完成了你的SSDT的制作，可以前往下一页完成其余的SSDT，或者如果你准备结束的话，可以前往这里：

* [**清理工作**](/cleanup.md)
