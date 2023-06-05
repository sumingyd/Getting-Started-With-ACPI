(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{302:function(a,t,s){a.exports=s.p+"assets/img/macos-compile.5b3bc6ad.png"},303:function(a,t,s){a.exports=s.p+"assets/img/windows-compile.62b90d74.png"},357:function(a,t,s){"use strict";s.r(t);var e=s(10),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"编译和反编译acpi表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译和反编译acpi表"}},[a._v("#")]),a._v(" 编译和反编译ACPI表")]),a._v(" "),t("p",[a._v("如果您有转储/编译错误，请参阅"),t("RouterLink",{attrs:{to:"/troubleshooting.html"}},[a._v("疑难解答")])],1),a._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/Manual/compile.html#macos"}},[a._v("macOS 编译和反编译")])],1),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/Manual/compile.html#windows"}},[a._v("Windows 编译和反编译")])],1),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/Manual/compile.html#linux"}},[a._v("Linux 编译和反编译")])],1)]),a._v(" "),t("h2",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" macOS")]),a._v(" "),t("p",[a._v("所以用macOS编译dsdt和ssd非常容易，你所需要的就是"),t("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("MaciASL"),t("OutboundLink")],1),a._v("。要编译，只需"),t("code",[a._v("File -> SaveAs -> ACPI机器语言二进制文件(. aml)")]),a._v("，反编译就是用MaciASL打开文件。")]),a._v(" "),t("p",[a._v("对于那些喜欢使用命令行的人，请获取"),t("a",{attrs:{href:"https://github.com/acidanthera/MaciASL/blob/master/Dist/iasl-stable",target:"_blank",rel:"noopener noreferrer"}},[a._v("iasl-stable"),t("OutboundLink")],1),a._v("并运行以下命令:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("path/to/iasl path/to/DSDT.aml\n")])])]),t("ul",[t("li",[a._v("如果提供了已编译的.aml文件，则会给出反编译的.dsl文件，反之亦然。")])]),a._v(" "),t("p",[t("img",{attrs:{src:s(302),alt:""}})]),a._v(" "),t("h2",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),t("p",[a._v("在windows上编译和反编译相当简单，你需要"),t("a",{attrs:{href:"https://acpica.org/downloads/binary-tools",target:"_blank",rel:"noopener noreferrer"}},[a._v("iasl.exe"),t("OutboundLink")],1),a._v(" 和命令提示符:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("path/to/iasl.exe path/to/DSDT.aml\n")])])]),t("p",[t("img",{attrs:{src:s(303),alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("如果提供了已编译的.aml文件，则会给出反编译的.dsl文件，反之亦然。")])]),a._v(" "),t("h2",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),t("p",[a._v("用Linux编译和反编译一样简单，你只需要一个iasl的副本。你可以在这里 ("),t("a",{attrs:{href:"https://web.archive.org/web/20200508194642/http://amdosx.kellynet.nl/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("iasl"),t("OutboundLink")],1),a._v(") 或通过包管理器中的"),t("code",[a._v("iasl")]),a._v("包获取它。Iasl可以这样使用:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("path/to/iasl path/to/DSDT.aml\n")])])]),t("ul",[t("li",[a._v("如果提供了已编译的.aml文件，则会给出反编译的.dsl文件，反之亦然。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);