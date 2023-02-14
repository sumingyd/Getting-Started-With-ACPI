# 修复NVRAM（SSDT-PMC）

## 这个SSDT的作用

所有 "真正的 "300系列主板都需要这个SSDT（Z370除外），它专门恢复了对NVRAM的支持，对最终用户来说只需要很少的配置。

* B360
* B365
* H310
* H370（HM370应该不需要这个）。
* Z390

第10代主板**不需要**这个SSDT，这些平台上的NVRAM是原生的。

## 制作这种SSDT的方法

制作这个SSDT的主要方法。

* [预构建](/Universal/nvram-methods/prebuilt.md)
* [SSDTTime](/Universal/nvram-methods/ssdttime.md)
* [手动](/Universal/nvram-methods/manual.md)
