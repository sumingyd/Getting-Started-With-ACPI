# 修复IRQ冲突 (SSDT-HPET + OC_Patches.plist)

所以你很怀念Clover的那些花哨的热补丁，比如FixIPIC, FixTMR, FixRTC, FixHPET等。

有一个非常小的问题，弄清IRQ补丁是一个非常令人头痛的问题。**我强烈建议你使用SSDTTime**。所以请到[SSDT: 简单方法](/ssdt-methods/ssdt-easy.md)了解如何制作。（使用选项`C`来省略冲突的传统IRQ）
