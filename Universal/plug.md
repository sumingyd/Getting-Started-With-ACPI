# 修复电源管理（SSDT-PLUG）

## 这个SSDT做什么

SSDT-PLUG的目的是让内核的XCPM(XNU的CPU电源管理)来管理我们CPU的电源管理。这很好地解释了为什么你需要这个。

**注意**：SSDT-PLUG只与英特尔的Haswell和更新的CPU兼容，Sandy Bridge和Ivy Bridge需要遵循[ssdtPRgen方法](https://sumingyd.github.io/OpenCore-Post-Install/universal/pm.html#sandy-and-ivy-bridge-power-management)(在安装后)，而AMD用户不应该使用这个(除非试图附加AGPM，这不在Dortania的指南范围之内)

## 使这个SSDT的方法

对于SSDT-PLUG，有三种方法可以选择。

* [预构建](/Universal/plug-methods/prebuilt.md)
* [SSDTTime](/Universal/plug-methods/ssdttime.md)
* [手动](/Universal/plug-methods/manual.md)
