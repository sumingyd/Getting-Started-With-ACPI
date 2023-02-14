# 修复电源管理：预构建

到目前为止，获得SSDT-PLUG最简单的方法是直接下载下面的文件。

* [SSDT-PLUG-DRTNIA.aml](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PLUG-DRTNIA.aml)

这个预编译文件只是Acidanthera提供的[SSDT-PLUG](https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-PLUG.dsl)的一个预编译版本。

这个方法主要需要注意的地方：

* 相当臃肿
  * 每种类型都有ACPI命名，这意味着在启动时间上有额外的延迟（虽然对大多数人来说并不明显，因为它通常会延长0.5秒）。
* 没有真正教会你什么
  * 对大多数人来说，这并不重要。但对某些人来说，知道是什么让你的黑客机器运转起来是旅程的一部分。

## 总结

一旦你完成了你的SSDT的制作，可以前往下一页完成其余的SSDT，或者如果你准备结束的话，可以前往这里：

* [**清理工作**](/cleanup.md)
