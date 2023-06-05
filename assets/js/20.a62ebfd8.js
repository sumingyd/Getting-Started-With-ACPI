(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{244:function(e,t,a){e.exports=a.p+"assets/img/nvidia.672e8e16.png"},352:function(e,t,a){"use strict";a.r(t);var s=a(10),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"禁用笔记本电脑dgpu-ssdt-dgpu-off-nohybgfx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁用笔记本电脑dgpu-ssdt-dgpu-off-nohybgfx"}},[e._v("#")]),e._v(" 禁用笔记本电脑dgpu (SSDT-dGPU-Off/NoHybGfx)")]),e._v(" "),t("p",[e._v("所以对于笔记本电脑，我们可以用WhateverGreen的"),t("code",[e._v("-wegnoegpu")]),e._v("引导参数隐藏macOS中的dGPU。但是有一个小问题，dGPU仍然在缓慢地消耗你的电量。我们将介绍在笔记本电脑中禁用dGPU的两种方法:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#optimus-%E6%96%B9%E6%B3%95"}},[e._v("Optimus 方法")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#bumblebee-%E6%96%B9%E6%B3%95"}},[e._v("Bumblebee 方法")])])]),e._v(" "),t("h2",{attrs:{id:"optimus-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimus-方法"}},[e._v("#")]),e._v(" Optimus 方法")]),e._v(" "),t("p",[e._v("这是如何工作的，我们在Optimus GPU上调用"),t("code",[e._v(".off")]),e._v("方法，这是预期的关闭GPU的方式，但有些人可能会发现他们的dGPU稍后会重新通电。主要出现在联想，Optimus方法应该适用于大多数用户:")]),e._v(" "),t("p",[e._v("首先，获取 "),t("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-dGPU-Off.dsl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-dGPU-Off.dsl"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("接下来，我们需要进入Windows，并前往以下地方:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("设备管理器—>显示适配器—> dGPU—>属性—>详细信息> BIOS设备名称\n")])])]),t("ul",[t("li",[e._v("注意一些gpu可能隐藏在“BIOS设备名称”下")])]),e._v(" "),t("p",[e._v("这应该为你的dGPU提供一个ACPI路径，最常见的是:")]),e._v(" "),t("ul",[t("li",[e._v("Nvidia dGPU: "),t("code",[e._v("\\_SB.PCI0.PEG0.PEGP")])]),e._v(" "),t("li",[e._v("AMD dGPU: "),t("code",[e._v("\\_SB.PCI0.PEGP.DGFX")])])]),e._v(" "),t("p",[t("img",{attrs:{src:a(244),alt:"Credit to 1Revenger1 for the image"}})]),e._v(" "),t("p",[e._v("现在，我们需要更改SSDT中的ACPI路径。主要部分:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("External(_SB.PCI0.PEG0.PEGP._OFF, MethodObj)\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("If (CondRefOf(\\_SB.PCI0.PEG0.PEGP._OFF)) { \\_SB.PCI0.PEG0.PEGP._OFF() }\n")])])]),t("p",[e._v("一旦适配了您的配置，转到编译部分")]),e._v(" "),t("ul",[t("li",[e._v("有睡眠问题的，可以参考原文"),t("a",{attrs:{href:"https://www.tonymacx86.com/threads/guide-disabling-discrete-graphics-in-dual-gpu-laptops.163772/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rehabman帖"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"bumblebee-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bumblebee-方法"}},[e._v("#")]),e._v(" Bumblebee 方法")]),e._v(" "),t("p",[e._v("对于一些机器，简单的"),t("code",[e._v(".off")]),e._v("调用不会正确地保持卡关闭，这就是Bumblebee方法的来源。这个SSDT实际上会将dGPU发送到D3状态，即设备可以支持的最低功率状态。感谢Maemo对原著的改编。")]),e._v(" "),t("p",[e._v("首先，获取 "),t("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/decompiled/SSDT-NoHybGfx.dsl.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-NoHybGfx.dsl"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("接下来，我们需要进入Windows，并前往以下地方:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("设备管理器—>显示适配器—> dGPU—>属性—>详细信息> BIOS设备名称\n")])])]),t("p",[e._v("这应该会为你的dGPU提供一个ACPI路径，最常见的是:")]),e._v(" "),t("ul",[t("li",[e._v("Nvidia dGPU: "),t("code",[e._v("\\_SB.PCI0.PEG0.PEGP")])]),e._v(" "),t("li",[e._v("AMD dGPU: "),t("code",[e._v("\\_SB.PCI0.PEGP.DGFX")])])]),e._v(" "),t("p",[e._v("现在，我们需要更改SSDT中的ACPI路径。主要部分:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("External (_SB_.PCI0.PEG0.PEGP._DSM, MethodObj)    // dGPU ACPI Path\nExternal (_SB_.PCI0.PEG0.PEGP._PS3, MethodObj)    // dGPU ACPI Path\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("If ((CondRefOf (\\_SB.PCI0.PEG0.PEGP._DSM) && CondRefOf (\\_SB.PCI0.PEG0.PEGP._PS3)))\n")])])]),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' // Card Off Request\n \\_SB.PCI0.PEG0.PEGP._DSM (ToUUID ("a486d8f8-0bda-471b-a72b-6042a6b5bee0"), 0x0100, 0x1A, Buffer (0x04)\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" // Card Off\n\\_SB.PCI0.PEG0.PEGP._PS3 ()\n")])])]),t("p",[e._v("一旦适配了您的配置，转到编译部分")]),e._v(" "),t("h2",{attrs:{id:"现在您已经准备好编译ssdt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现在您已经准备好编译ssdt"}},[e._v("#")]),e._v(" "),t("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("现在您已经准备好编译SSDT!")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);