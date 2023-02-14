# 修复NVRAM：预构建

到目前为止，这是最简单的方法，你所需要做的就是下载以下文件。

* [SSDT-PMC.aml](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-PMC.aml)

这个方法需要注意的主要事项。

* 有点臃肿
  * 大多数常见的路径都有ACPI命名，这意味着启动时间会有额外的延迟（虽然对大多数人来说并不明显，因为它通常会延长不到0.5秒）
* 没有真正教会你什么
  * 对大多数人来说，这并不重要。但对某些人来说，知道是什么让你的黑客机器运转起来是旅程的一部分
  
## 总结

一旦你完成了你的SSDT的制作，可以前往下一页完成其余的SSDT，或者如果你准备结束的话，可以前往这里：

* [**清理工作**](/cleanup.md)
