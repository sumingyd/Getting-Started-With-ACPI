# 编译和反编译ACPI表

如果您有转储/编译错误，请参阅[疑难解答](/troubleshooting.md)

* [macOS 编译和反编译](/Manual/compile.md#macos)
* [Windows 编译和反编译](/Manual/compile.md#windows)
* [Linux 编译和反编译](/Manual/compile.md#linux)

## macOS

所以用macOS编译dsdt和ssd非常容易，你所需要的就是[MaciASL](https://github.com/acidanthera/MaciASL/releases)。要编译，只需`File -> SaveAs -> ACPI机器语言二进制文件(. aml)`，反编译就是用MaciASL打开文件。

对于那些喜欢使用命令行的人，请获取[iasl-stable](https://github.com/acidanthera/MaciASL/blob/master/Dist/iasl-stable)并运行以下命令:

```sh
path/to/iasl path/to/DSDT.aml
```

* 如果提供了已编译的.aml文件，则会给出反编译的.dsl文件，反之亦然。

![](../images/Manual/compile-md/macos-compile.png)

## Windows

在windows上编译和反编译相当简单，你需要[iasl.exe](https://acpica.org/downloads/binary-tools) 和命令提示符:

```sh
path/to/iasl.exe path/to/DSDT.aml
```

![](../images/Manual/compile-md/windows-compile.png)

* 如果提供了已编译的.aml文件，则会给出反编译的.dsl文件，反之亦然。

## Linux

用Linux编译和反编译一样简单，你只需要一个iasl的副本。你可以在这里 ([iasl](https://web.archive.org/web/20200508194642/http://amdosx.kellynet.nl/iasl.zip)) 或通过包管理器中的`iasl`包获取它。Iasl可以这样使用:

```
path/to/iasl path/to/DSDT.aml
```

* 如果提供了已编译的.aml文件，则会给出反编译的.dsl文件，反之亦然。
