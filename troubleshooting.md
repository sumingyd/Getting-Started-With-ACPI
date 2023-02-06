# 故障排除

* [修复 SSDTTime: `无法定位或下载iasl!`](#修复ssdttime-无法定位或下载iasl)
* [无法运行 `acpidump.efi`](#无法在opencore运行acpidump-efi)
* [iASL 警告, # 未解决](#iasl警告未解决)
* [编译错误](#编译错误)
* [Invalid character (0x3D), expecting ASL keyword or name](#invalid-character-0x3d-expecting-asl-keyword-or-name)
* [Syntax error, unexpected PARSEOP_ONE, expecting '('](#syntax-error-unexpected-parseop_one-expecting)

## 修复SSDTTime: `无法定位或下载iasl!`

这通常是由于过时的Python版本，请尝试更新Python或将iasl添加到SSDTTime的scripts文件夹:

* [iasl macOS 版本](https://bitbucket.org/RehabMan/acpica/downloads/iasl.zip)
* [iasl Windows 版本](https://acpica.org/downloads/binary-tools)
* [iasl Linux 版本](http://amdosx.kellynet.nl/iasl.zip)

## 无法在OpenCore运行`acpidump efi`

获取[OpenShell](https://github.com/acidanthera/OpenCorePkg/releases) 并将其添加到EFI/OC/Tools并配置plist -> Misc -> Tools。

接下来，调用OpenCore shell并输入以下内容:

```
shell> fs0: //替换正确的驱动器

fs0:\> dir //来验证这是正确的目录

  Directory of fs0:\

   01/01/01 3:30p  EFI

fs0:\> cd EFI\OC\Tools //注意它带有正斜杠

fs0:\EFI\OC\Tools> acpidump.efi -b -n DSDT -z
```

## iASL警告，未解决

如果你试图反编译你的DSDT，得到一个类似这样的错误:

```
iASL Warning: There were 19 external control methods found during disassembly, but only 0 were resolved (19 unresolved)
```

当一个ACPI表需要其他表来进行适当的引用时，就会发生这种情况，它不接受dsdt的创建，因为我们只使用它来创建选定的几个ssdt。对于那些担心,您可以运行下面的:

```
iasl * [insert all ACPI files here]
```

## 编译错误

![](./images/troubleshooting-md/decompile-error.png)

```
Loading Acpi table from file iASLAwjHrs.aml
Acpi table [DSDT] successfully installed and loaded
Pass 1 parse of [DSDT]
```

这是一个常见的错误在DSDTs上，有不支持MaciASL的方法，最简单的方法是删除MaciASL，并确保你从Acidanthera的repo: [MaciASL](https://github.com/acidanthera/MaciASL/releases)

## Invalid character (0x3D), expecting ASL keyword or name

![](./images/troubleshooting-md/invalid-parse.png)

与上面的错误类似，您正在运行过时的MaciASL副本。确保你使用的是最新的Acidanthera的仓库:[MaciASL](https://github.com/acidanthera/MaciASL/releases)

## Syntax error, unexpected PARSEOP_ONE, expecting '('

![](./images/troubleshooting-md/invalid-parse.png)

与上述2个错误类似，您正在运行过时的MaciASL副本。确保你使用的是最新的Acidanthera的仓库: [MaciASL](https://github.com/acidanthera/MaciASL/releases)
