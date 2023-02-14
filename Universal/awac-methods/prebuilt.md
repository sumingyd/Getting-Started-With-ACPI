# 修复系统时钟：预构建

到目前为止，这是最简单的方法，你所需要做的就是下载以下文件。

* [SSDT-AWAC.aml](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-AWAC.aml)
  * 对于大多数用户来说
* [sdt-rtc0-range-hedt](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-RTC0-RANGE-HEDT.aml)
  * 适用于英特尔的X99和X299平台

这个方法需要注意的主要事项。

* 假设你们都有一个AWAC时钟，并且可以用RTC代替它轻松关闭，**这不一定能成功**。
  * 这只适用于SSDT-AWAC
  * SSDT-RTC0-RANGE依赖于已知的RTC名称，并且只能处理这么多边缘情况。
* 并没有真正教你什么
  * 对于大多数人来说，这并不重要。但对某些人来说，知道是什么让你的黑客机嘀嘀作响是旅程的一部分。

## 总结

一旦你完成了你的SSDT的制作，可以前往下一页完成其余的SSDT，或者如果你准备结束的话，可以前往这里：

* [**清理工作**](/cleanup.md)
