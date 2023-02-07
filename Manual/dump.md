# 获取你的DSDT副本

首先，我们需要从你的固件中获取一份DSDT的副本。最简单的方法是获取之前SSDTTime为我们转储的DSDT.aml，但这里有一些其他选项:

## 从Windows

* [SSDTTime](https://github.com/corpnewt/SSDTTime)
  * 支持Windows和Linux的DSDT转储
  * `8. Dump DSDT - 自动转储系统DSDT`
* [acpidump.exe](https://acpica.org/downloads/binary-tools)
  * 在命令提示符中运行 `path/to/acpidump.exe -b -n DSDT -z`, t这将转储您的DSDT为a.dat文件. 将其重命名为DSDT.aml
  
* 请注意，clover/OpenCore的所有ACPI补丁将使用上述2种方法应用于DSDT
  
## 从 Linux

* [SSDTTime](https://github.com/corpnewt/SSDTTime)
  * 支持Windows和Linux的DSDT转储
  * `4. Dump DSDT - Automatically dump the system DSDT`
* 请注意，clover/OpenCore的所有ACPI补丁将使用上述方法应用于DSDT

## 从 Clover

对于那些之前安装了Clover的用户，这是获取ACPI表的简单方法:

* 在Clover Boot菜单中按F4
  * DSDT可以在`EFI/CLOVER/ACPI/origin`中找到，该文件夹**必须**在转储之前存在

## 从 OpenCore

对于OpenCore，我们有两个选择:

* [SysReport 选项](#sysreport-选项)
* [UEFI Shell](#uefi-shell)

### SysReport 选项

在OpenCore 0.5.9中，我们有了一个叫做SysReport的新功能，它会在进入启动界面时自动转储DSDT。主要问题有:

* 您已经需要一个可引导的OpenCore USB来获取此转储
* 这也需要0.5.9的DEBUG版本

对于后者，您只需要将以下文件替换为[DEBUG版本](https://github.com/acidanthera/OpenCorePkg/releases):

* EFI/BOOT/
  * `BOOTx64.efi`
* EFI/OC/Bootstrap/
  * `Bootstrap.efi`
* EFI/OC/Drivers/
  * `OpenRuntime.efi`
* EFI/OC/
  * `OpenCore.efi`

对于前者，你可以跳过ACPI部分，返回[OpenCore指南](https://sumingyd.github.io/OpenCore-Install-Guide/) 并完成USB的制作。一旦启动到选择器，您可以关闭PC并检查您的USB:

![](../images/Manual/dump-md/sysreport.png)

瞧!你有一个DSDT !现在你可以继续制作ssdt了

### UEFI Shell

为此，我们要获取 [`acpidump.efi`](https://github.com/dortania/OpenCore-Install-Guide/tree/master/extra-files/acpidump.efi.zip) 并将其添加到`EFI/OC/Tools`和您的配置文件中`Misc -> Tools`下的参数:`-b -n DSDT -z`，并在OpenCore的选择器中选择此选项。

如果OpenCore运行acpidump有问题。从启动选择器中，您可以从shell中使用[OpenShell](https://github.com/acidanthera/OpenCorePkg/releases)(重命名添加到`efi /OC/Tools`和在您的配置下的`Misc -> Tools`)调用它:):

```
shell> fs0: // 替换正确的驱动器
fs0:\> dir  // 来验证这是正确的目录
   Directory of fs0:\
   01/01/01 3:30p EFI
fs0:\> cd EFI\OC\Tools
fs0:\EFI\OC\Tools> acpidump.efi -b -n DSDT -z  
 ```

 完成后，您应该在EFI/OC/Tools文件夹中找到DSDT，扩展名为“.dat”。将这个DSDT.dat文件重命名为DSDT.aml，以帮助我们继续下去
