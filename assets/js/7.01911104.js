(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{313:function(t,a,_){t.exports=_.p+"assets/img/pnp.8c2387eb.png"},314:function(t,a,_){t.exports=_.p+"assets/img/ec.dd4b7c64.png"},315:function(t,a,_){t.exports=_.p+"assets/img/ssdt-before.b846f355.png"},316:function(t,a,_){t.exports=_.p+"assets/img/ssdt-after.7996c4b7.png"},317:function(t,a,_){t.exports=_.p+"assets/img/sta.e2d0aed0.png"},367:function(t,a,_){"use strict";_.r(a);var r=_(10),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"修复嵌入式控制器-手动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复嵌入式控制器-手动"}},[t._v("#")]),t._v(" 修复嵌入式控制器:手动")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#查找acpi路径"}},[t._v("查找ACPI路径")]),a("ul",[a("li",[a("a",{attrs:{href:"#dsdt"}},[t._v("DSDT")])]),a("li",[a("a",{attrs:{href:"#设备管理器"}},[t._v("设备管理器")])])])]),a("li",[a("a",{attrs:{href:"#对示例ssdt进行编辑"}},[t._v("对示例SSDT进行编辑")])]),a("li",[a("a",{attrs:{href:"#边缘情况"}},[t._v("边缘情况")]),a("ul",[a("li",[a("a",{attrs:{href:"#出现多个pnp0c09"}},[t._v("出现多个PNP0C09")])]),a("li",[a("a",{attrs:{href:"#没有pnp0c09出现"}},[t._v("没有PNP0C09出现")])]),a("li",[a("a",{attrs:{href:"#pnp0c09已经命名为-ec"}},[t._v("PNP0C09已经命名为EC")])]),a("li",[a("a",{attrs:{href:"#pnp0c09已经有了一个-sta-方法"}},[t._v("PNP0C09已经有了一个_STA方法")])])])]),a("li",[a("a",{attrs:{href:"#编译ssdt"}},[t._v("编译SSDT")])]),a("li",[a("a",{attrs:{href:"#结束"}},[t._v("结束")])])])]),a("p"),t._v(" "),a("p",[t._v("待办事项:")]),t._v(" "),a("ul",[a("li",[t._v("完成边缘案例和SSDT编辑示例")])]),t._v(" "),a("h2",{attrs:{id:"查找acpi路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找acpi路径"}},[t._v("#")]),t._v(" 查找ACPI路径")]),t._v(" "),a("p",[t._v("要找到ACPI路径，你有两个方法:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#dsdt"}},[t._v("DSDT")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%E5%99%A8"}},[t._v("设备管理")])])]),t._v(" "),a("h3",{attrs:{id:"dsdt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dsdt"}},[t._v("#")]),t._v(" DSDT")]),t._v(" "),a("p",[t._v("找到ACPI的路径是相当容易的，首先打开你从"),a("RouterLink",{attrs:{to:"/Manual/dump.html"}},[t._v("转储DSDT")]),t._v("和"),a("RouterLink",{attrs:{to:"/Manual/compile.html"}},[t._v("编译和编译")]),t._v("与MaciASL(如果在macOS)或任何其他文本编辑器，如果在Windows或Linux(VSCode有一个"),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Thog.vscode-asl",target:"_blank",rel:"noopener noreferrer"}},[t._v("ACPI扩展"),a("OutboundLink")],1),t._v("也可以帮助)的反编译DSDT。")],1),t._v(" "),a("p",[t._v("接下来，搜索"),a("code",[t._v("PNP0C09")]),t._v("。你应该得到类似:")]),t._v(" "),a("p",[a("img",{attrs:{src:_(313),alt:""}})]),t._v(" "),a("p",[t._v("从上面的例子中我们可以看到两个主要的东西:")]),t._v(" "),a("ul",[a("li",[t._v("我们的嵌入式控制器的名称\n"),a("ul",[a("li",[t._v("在本例中是"),a("code",[t._v("EC0")])])])]),t._v(" "),a("li",[t._v("我们嵌入式控制器的路径\n"),a("ul",[a("li",[a("code",[t._v("PC00.LPC0")])])])])]),t._v(" "),a("p",[t._v("但现在我们进入了边界情况，太有趣了!")]),t._v(" "),a("p",[t._v("需要检查的主要有:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%BF%AE%E5%A4%8D%E5%B5%8C%E5%85%A5%E5%BC%8F%E6%8E%A7%E5%88%B6%E5%99%A8%E6%89%8B%E5%8A%A8"}},[t._v("修复嵌入式控制器:手动")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E6%9F%A5%E6%89%BEacpi%E8%B7%AF%E5%BE%84"}},[t._v("查找ACPI路径")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#dsdt"}},[t._v("DSDT")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86%E5%99%A8"}},[t._v("设备管理器")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AF%B9%E7%A4%BA%E4%BE%8Bssdt%E8%BF%9B%E8%A1%8C%E7%BC%96%E8%BE%91"}},[t._v("对示例SSDT进行编辑")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%BE%B9%E7%BC%98%E6%83%85%E5%86%B5"}},[t._v("边缘情况")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%87%BA%E7%8E%B0%E5%A4%9A%E4%B8%AApnp0c09"}},[t._v("出现多个PNP0C09")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%B2%A1%E6%9C%89pnp0c09%E5%87%BA%E7%8E%B0"}},[t._v("没有PNP0C09出现")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#pnp0c09%E5%B7%B2%E7%BB%8F%E5%91%BD%E5%90%8D%E4%B8%BAec"}},[t._v("PNP0C09已经命名为"),a("code",[t._v("EC")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#pnp0c09%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%86%E4%B8%80%E4%B8%AA_sta%E6%96%B9%E6%B3%95"}},[t._v("PNP0C09已经有了一个"),a("code",[t._v("_STA")]),t._v("方法")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%BC%96%E8%AF%91ssdt"}},[t._v("编译SSDT")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E7%BB%93%E6%9D%9F"}},[t._v("结束")])])])])]),t._v(" "),a("p",[t._v("如果以上这些都不适用于你，那么你已经为下一节做好了准备:")]),t._v(" "),a("h3",{attrs:{id:"设备管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备管理器"}},[t._v("#")]),t._v(" 设备管理器")]),t._v(" "),a("p",[t._v("如果您已经在这台机器上安装了Windows，那么找到EC路径是相当容易的。")]),t._v(" "),a("p",[t._v("首先在Windows中打开设备管理器并查找名为“嵌入式控制器”的设备。找到后，单击它并选择“BIOS设备名称”条目。你会得到这样的结果:")]),t._v(" "),a("p",[a("img",{attrs:{src:_(314),alt:""}})]),t._v(" "),a("p",[t._v("从上面可以看到，我们的路径是"),a("code",[t._v("SB.PC00.LPC0.EC0")]),t._v("。")]),t._v(" "),a("p",[t._v("现在有了路径，你可以转到这里: "),a("a",{attrs:{href:"#%E5%AF%B9%E7%A4%BA%E4%BE%8Bssdt%E8%BF%9B%E8%A1%8C%E7%BC%96%E8%BE%91"}},[t._v("对示例SSDT进行编辑")])]),t._v(" "),a("h2",{attrs:{id:"对示例ssdt进行编辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对示例ssdt进行编辑"}},[t._v("#")]),t._v(" 对示例SSDT进行编辑")]),t._v(" "),a("p",[t._v("现在我们有了我们的ACPI路径，让我们获取我们的SSDT并开始工作:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-EC-USBX.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-EC-USBX"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("用于Skylake和更新的所有AMD系统")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-EC.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-EC"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[t._v("给Broadwell和更老的人")])])])]),t._v(" "),a("p",[t._v("现在，当打开这个SSDT时，您将注意到一些事情。主要有:")]),t._v(" "),a("ul",[a("li",[t._v("一些代码被注释掉了\n"),a("ul",[a("li",[t._v("这是禁用我们的EC的代码")]),t._v(" "),a("li",[t._v("笔记本电脑用户"),a("strong",[t._v("不应")]),t._v("取消此注释")])])]),t._v(" "),a("li",[t._v("有一个新的EC叫做"),a("code",[t._v("Device (EC)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("不要重命名")]),t._v("，这将是我们提供给macOS的EC")])])])]),t._v(" "),a("p",[a("strong",[t._v("之前")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("External (_SB_.PCI0.LPCB, DeviceObj) <- Rename this\n\nScope (_SB.PCI0.LPCB) <- Rename this\n")])])]),a("p",[a("img",{attrs:{src:_(315),alt:""}})]),t._v(" "),a("p",[t._v("在我们找到的示例路径之后，SSDT应该看起来像这样:")]),t._v(" "),a("p",[a("strong",[t._v("之后")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("External (_SB_.PC00.LPC0, DeviceObj) <- Renamed\n\nScope (_SB.PC00.LPC0) <- Renamed\n")])])]),a("p",[a("img",{attrs:{src:_(316),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"边缘情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边缘情况"}},[t._v("#")]),t._v(" 边缘情况")]),t._v(" "),a("h3",{attrs:{id:"出现多个pnp0c09"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出现多个pnp0c09"}},[t._v("#")]),t._v(" 出现多个PNP0C09")]),t._v(" "),a("p",[t._v("当显示出多个PNP0C09时，我们需要检查以下属性:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("_HID")]),t._v(" (硬件ID)")]),t._v(" "),a("li",[a("code",[t._v("_CRS")]),t._v(" (当前资源设置)")]),t._v(" "),a("li",[a("code",[t._v("_GPE")]),t._v(" (通用事件)")])]),t._v(" "),a("p",[t._v("这些表示的是这个PNP0C09设备是否真实，根据"),a("a",{attrs:{href:"https://uefi.org/sites/default/files/resources/ACPI_6_3_final_Jan30.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("ACPI规范"),a("OutboundLink")],1),t._v(". 所以符合上述条件的就是我们想要禁用的。")]),t._v(" "),a("ul",[a("li",[t._v("注意:如果_STA也显示了，你需要到这里:"),a("a",{attrs:{href:"#pnp0c09%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%86%E4%B8%80%E4%B8%AA_sta%E6%96%B9%E6%B3%95"}},[t._v("PNP0C09已经有一个"),a("code",[t._v("_STA")]),t._v("方法")])])]),t._v(" "),a("h3",{attrs:{id:"没有pnp0c09出现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有pnp0c09出现"}},[t._v("#")]),t._v(" 没有PNP0C09出现")]),t._v(" "),a("p",[t._v("当这种情况发生时，你只需要为macOS创建一个“虚拟”EC。")]),t._v(" "),a("p",[t._v("尝试搜索任何名为“LPCB”，“LPC0”，“LPC”，“SBRG”，“PX40”的设备。如果你有其中任何一个，尝试使用这些设备的LPC路径来代替嵌入式控制器的路径。")]),t._v(" "),a("p",[t._v("请注意"),a("strong",[t._v("不要")]),t._v("取消EC禁用代码的注释，因为在你的机器中没有被认为是“EC”的设备。")]),t._v(" "),a("h3",{attrs:{id:"pnp0c09已经命名为ec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pnp0c09已经命名为ec"}},[t._v("#")]),t._v(" PNP0C09已经命名为"),a("code",[t._v("EC")])]),t._v(" "),a("p",[t._v("祝贺你!不需要创建SSDT-EC!然而，如果你是Skylake或更新的，你仍然会想要USBX。")]),t._v(" "),a("p",[t._v("预构建可以在这里获取: "),a("a",{attrs:{href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-USBX.aml"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"pnp0c09已经有了一个-sta方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pnp0c09已经有了一个-sta方法"}},[t._v("#")]),t._v(" PNP0C09已经有了一个"),a("code",[t._v("_STA")]),t._v("方法")]),t._v(" "),a("p",[t._v("这相当于没有一个EC，因为我们无法通过SSDT-EC控制它，相反，我们需要为macOS创建一个“虚拟”EC。您仍然需要找到此设备的PCI和LPC路径。所以，就像创建一台笔记本电脑SSDT-EC/USBX一样，按照指南操作。")]),t._v(" "),a("p",[t._v("已经有STA的EC的例子:")]),t._v(" "),a("p",[a("img",{attrs:{src:_(317),alt:"Credit to rottenpants466"}})]),t._v(" "),a("h2",{attrs:{id:"编译ssdt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译ssdt"}},[t._v("#")]),t._v(" 编译SSDT")]),t._v(" "),a("p",[t._v("完成SSDT后，您现在可以"),a("RouterLink",{attrs:{to:"/Manual/compile.html"}},[t._v("准备编译SSDT!")])],1),t._v(" "),a("h2",{attrs:{id:"结束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结束"}},[t._v("#")]),t._v(" 结束")]),t._v(" "),a("p",[t._v("完成SSDT后，可以转到下一页完成其余的SSDT，如果准备好了，可以转到此处:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/cleanup.html"}},[a("strong",[t._v("Cleanup")])])],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);