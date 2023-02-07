# 清理

您已经创建了所有ssdt，但现在还剩下一件事:将它们添加到OpenCore

2个主要地点:

* EFI/OC/ACPI(仅.**aml**文件，提醒[编译你的ssdt](/Manual/compile.md))
* config.plist -> ACPI -> Add

您可以省去配置方面的一些工作。在ProperTree中运行Cmd/Ctrl+R命令。**提醒不要将您的DSDT.aml添加到您的EFI**

对于那些还没有配置的人。接下来，你需要回到各自的OpenCore指南并创建config.plist:

* [OpenCore 安装指南](https://sumingyd.github.io/OpenCore-Install-Guide/)

`FixHPET`的用户还需要将oc_patches.plist合并到他们的config.plist中

步骤如下:

* 打开两个文件，
* 从config.plist中删除`ACPI -> Patch`部分
* 从patches.plist中复制`ACPI -> Patch`部分
* 粘贴到config.plist中旧补丁所在的位置
