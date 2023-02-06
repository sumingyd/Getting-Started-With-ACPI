# SSDTs:简单的方法

所以这里我们将使用CorpNewt制作的一个超级简单的工具:[SSDTTime](https://github.com/corpnewt/SSDTTime)

这个工具的作用是，它从固件中转储DSDT，然后根据DSDT创建ssdt。**这必须在运行Windows或Linux的目标机器上完成**

## 所以什么是SSDTTime不能做的

* **SSDT-PNLF**:
  * 需要配置到您的系统
* **SSDT-GPI0**:
  * 需要配置到您的系统
* **USBX SSDT**:
  * 这包含在示例ssdt中，但SSDTTime仅使SSDT-EC部分，Skylake和较新的用户可以在这里获取预构建: [SSDT-USBX.aml](https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml)
* **IMEI SSDT**:
  * 如果你有Sandy bridge和7系列主板，或者Ivy bridge和6系列主板，你需要使用预建的或者手动创建它。
* **RTC0 RANGE SSDT**:
  如果您使用的是X99或X299，则需要将其配置到您的系统

对于在SSDTTime中没有所有可用选项的用户，您可以遵循“ssdtts:漫长的路”部分。对于它所支持的ssdt，您仍然可以使用SSDTTime。

## 运行SSDTTime

在目标机器上以管理员身份运行`SSDTTime.bat`文件，你应该会看到如下内容:

![](../images/ssdt-easy-md/ssdttime.png)

这些选项都是什么?：

* `1. FixHPET    - 修补IRQ冲突`
  * IRQ补丁，主要用于X79, X99和笔记本电脑用户(使用选项`C`来省略冲突的遗留IRQ)
* `2. FakeEC     - 操作系统知道假EC`
  * 这是SSDT-EC，用于Catalina用户
* `3. FakeEC Laptop  - 基于操作系统的FakeEC`
  * 这是SSDT-EC，但笔记本版本只构建假的EC，并保留现有的EC设备，这也是卡特琳娜用户所需要的 required for Catalina users
* `4. PluginType - 在第一个ProcessorObj上设置plugin-type = 1`
  * 这是SSDT-PLUG，仅供英特尔使用
* `5. PMC - 设置电源管理控制器状态`
  * 这是SSDT-PMC，仅适用于英特尔真正的300+系列，该设备在最近的ACPI主板中缺失，并有助于恢复NVRAM支持。
* `6. AWAC - 上下文感知的AWAC禁用和RTC假`
  * 这是SSDT-AWAC/RTC0，其目的是修复在新硬件上发现的系统时钟
* `7. USB Reset     - 重置USB控制器以允许硬件映射`
  * 这是SSDT-RHUB，用于在macOS中重置华硕Z490主板的USB端口
* `8. Dump DSDT  - 自动转储系统DSDT`
  * 从固件中转储您的DSDT

我们要做的是选择选项`8.首先转储DSDT`，然后为您的系统选择适当的选项。

> USBX呢?

对于Skylake和更新的plus AMD，您可以在这里获取预构建文件:[SSDT-USBX.aml](https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml). 该文件是即插即用的，不需要设备配置，**请勿在Broadwell及更老版本上使用**。

**故障排除注意**:如果运行SSDTTime有问题，请参阅[通用故障排除](https://sumingyd.github.io/OpenCore-Install-Guide/troubleshooting/troubleshooting.html)。

## 添加到OpenCore

别忘了ssdt需要添加到OpenCore,提醒人们, .aml已编译, .dsl代码。**只添加.aml文件**:

* EFI/OC/ACPI
* config.plist -> ACPI -> Add

提醒一下，Cmd/Ctrl+R和ProperTree指向你的OC文件夹将为你添加所有的ssdt, kext和.efi驱动程序到配置中。**不要将你的DSDT添加到OpenCore，它已经在你的固件中了**。如果您不确定这指的是什么，请返回OpenCore指南，并根据您的CPU架构选择您的配置。

对于那些还没有配置的人。接下来，你需要回到各自的OpenCore指南并创建config.plist:

* [OpenCore安装指南](https://sumingyd.github.io/OpenCore-Install-Guide/)

`FixHPET`的用户还需要将oc_patches.plist合并到config.plist中

步骤如下:

* 打开两个文件，
* 从config.plist中删除`ACPI -> Patch`部分
* 从patches.plist中复制`ACPI -> Patch`部分
* 粘贴到config.plist中旧补丁所在的位置
