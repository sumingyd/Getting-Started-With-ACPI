# 修复触控板:预构建

这是一个万能的解决方案，我们基本上让硬件以为它在引导Windows。这种方法的问题是，它通常会破坏Windows启动，所以避免使用，除非故障排除。

* [SSDT-XOSI](https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-XOSI.aml)

* XOSI重命名(将其添加到 config.plist -> ACPI -> Patch):

| Comment | String | Change _OSI to XOSI |
| :--- | :--- | :--- |
| Enabled | Boolean | YES |
| Count | Number | 0 |
| Limit | Number | 0 |
| Find | Data | 5f4f5349 |
| Replace | Data | 584f5349 |
