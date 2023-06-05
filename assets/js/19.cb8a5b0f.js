(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{262:function(e,a,t){e.exports=t.p+"assets/img/invalid-parse.31acda4b.png"},336:function(e,a,t){e.exports=t.p+"assets/img/decompile-error.f2e5cab3.png"},398:function(e,a,t){"use strict";t.r(a);var r=t(10),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"故障排除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#故障排除"}},[e._v("#")]),e._v(" 故障排除")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#修复ssdttime-无法定位或下载iasl"}},[e._v("修复SSDTTime: 无法定位或下载iasl!")])]),a("li",[a("a",{attrs:{href:"#无法在opencore运行-acpidump-efi"}},[e._v("无法在OpenCore运行acpidump efi")])]),a("li",[a("a",{attrs:{href:"#iasl警告-未解决"}},[e._v("iASL警告，未解决")])]),a("li",[a("a",{attrs:{href:"#编译错误"}},[e._v("编译错误")])]),a("li",[a("a",{attrs:{href:"#invalid-character-0x3d-expecting-asl-keyword-or-name"}},[e._v("Invalid character (0x3D), expecting ASL keyword or name")])]),a("li",[a("a",{attrs:{href:"#syntax-error-unexpected-parseop-one-expecting"}},[e._v("Syntax error, unexpected PARSEOP_ONE, expecting '('")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"修复ssdttime-无法定位或下载iasl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复ssdttime-无法定位或下载iasl"}},[e._v("#")]),e._v(" 修复SSDTTime: "),a("code",[e._v("无法定位或下载iasl!")])]),e._v(" "),a("p",[e._v("这通常是由于过时的Python版本，请尝试更新Python或将iasl添加到SSDTTime的scripts文件夹:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://bitbucket.org/RehabMan/acpica/downloads/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl macOS 版本"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://acpica.org/downloads/binary-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl Windows 版本"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://amdosx.kellynet.nl/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("iasl Linux 版本"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"无法在opencore运行acpidump-efi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无法在opencore运行acpidump-efi"}},[e._v("#")]),e._v(" 无法在OpenCore运行"),a("code",[e._v("acpidump efi")])]),e._v(" "),a("p",[e._v("获取"),a("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenShell"),a("OutboundLink")],1),e._v(" 并将其添加到EFI/OC/Tools并配置plist -> Misc -> Tools。")]),e._v(" "),a("p",[e._v("接下来，调用OpenCore shell并输入以下内容:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("shell> fs0: //替换正确的驱动器\n\nfs0:\\> dir //来验证这是正确的目录\n\n  Directory of fs0:\\\n\n   01/01/01 3:30p  EFI\n\nfs0:\\> cd EFI\\OC\\Tools //注意它带有正斜杠\n\nfs0:\\EFI\\OC\\Tools> acpidump.efi -b -n DSDT -z\n")])])]),a("h2",{attrs:{id:"iasl警告-未解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iasl警告-未解决"}},[e._v("#")]),e._v(" iASL警告，未解决")]),e._v(" "),a("p",[e._v("如果你试图反编译你的DSDT，得到一个类似这样的错误:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("iASL Warning: There were 19 external control methods found during disassembly, but only 0 were resolved (19 unresolved)\n")])])]),a("p",[e._v("当一个ACPI表需要其他表来进行适当的引用时，就会发生这种情况，它不接受dsdt的创建，因为我们只使用它来创建选定的几个ssdt。对于那些担心,您可以运行下面的:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("iasl * [insert all ACPI files here]\n")])])]),a("h2",{attrs:{id:"编译错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译错误"}},[e._v("#")]),e._v(" 编译错误")]),e._v(" "),a("p",[a("img",{attrs:{src:t(336),alt:""}})]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Loading Acpi table from file iASLAwjHrs.aml\nAcpi table [DSDT] successfully installed and loaded\nPass 1 parse of [DSDT]\n")])])]),a("p",[e._v("这是一个常见的错误在DSDTs上，有不支持MaciASL的方法，最简单的方法是删除MaciASL，并确保你从Acidanthera的repo: "),a("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("MaciASL"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"invalid-character-0x3d-expecting-asl-keyword-or-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invalid-character-0x3d-expecting-asl-keyword-or-name"}},[e._v("#")]),e._v(" Invalid character (0x3D), expecting ASL keyword or name")]),e._v(" "),a("p",[a("img",{attrs:{src:t(262),alt:""}})]),e._v(" "),a("p",[e._v("与上面的错误类似，您正在运行过时的MaciASL副本。确保你使用的是最新的Acidanthera的仓库:"),a("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("MaciASL"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"syntax-error-unexpected-parseop-one-expecting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-error-unexpected-parseop-one-expecting"}},[e._v("#")]),e._v(" Syntax error, unexpected PARSEOP_ONE, expecting '('")]),e._v(" "),a("p",[a("img",{attrs:{src:t(262),alt:""}})]),e._v(" "),a("p",[e._v("与上述2个错误类似，您正在运行过时的MaciASL副本。确保你使用的是最新的Acidanthera的仓库: "),a("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("MaciASL"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);