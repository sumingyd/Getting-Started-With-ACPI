(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{370:function(e,t,i){"use strict";i.r(t);var a=i(10),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fixing-imei-manual"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-imei-manual"}},[e._v("#")]),e._v(" Fixing IMEI: Manual")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#finding-the-acpi-device"}},[e._v("Finding the ACPI device")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("Edits to the sample SSDT")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#compiling-the-ssdt"}},[e._v("Compiling the SSDT")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#wrapping-up"}},[e._v("Wrapping up")])])]),e._v(" "),t("h2",{attrs:{id:"finding-the-acpi-device"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-acpi-device"}},[e._v("#")]),e._v(" Finding the ACPI device")]),e._v(" "),t("p",[e._v("Finding the ACPI pathing is quite easy actually, first open your decompiled DSDT you got from "),t("RouterLink",{attrs:{to:"/Manual/dump.html"}},[e._v("Dumping the DSDT")]),e._v(" and "),t("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("Decompiling and Compiling")]),e._v(" with either MaciASL(if in macOS) or any other text editor if in Windows or Linux(VSCode has an "),t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Thog.vscode-asl",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACPI extension"),t("OutboundLink")],1),e._v(" that can also help).")],1),e._v(" "),t("p",[e._v("Next, search for the following devices:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("IMEI")])]),e._v(" "),t("li",[t("code",[e._v("HECI")])]),e._v(" "),t("li",[t("code",[e._v("MEI")])])]),e._v(" "),t("p",[e._v("If none of the 3 show up, you'll need to create an SSDT-IMEI.")]),e._v(" "),t("p",[t("strong",[e._v("If one of these 3 devices show up")]),e._v(", you do not need SSDT-IMEI! You can simply skip this page.")]),e._v(" "),t("p",[e._v("The rest of this page will however assume none of those 3 devices showed up.")]),e._v(" "),t("h2",{attrs:{id:"compiling-the-ssdt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-ssdt"}},[e._v("#")]),e._v(" Compiling the SSDT")]),e._v(" "),t("p",[e._v("So there's actually no edits required to SSDT-IMEI, you can either grab the source code and compile yourself or use the prebuilt")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://github.com/dortania/Getting-Started-With-ACPI/blob/master/extra-files/compiled/SSDT-IMEI-S.aml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prebuilt SSDT-IMEI"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-IMEI.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-IMEI's source code"),t("OutboundLink")],1)])])]),e._v(" "),t("p",[e._v("With the SSDT done, you're now "),t("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("ready to compile the SSDT!")])],1),e._v(" "),t("h2",{attrs:{id:"wrapping-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-up"}},[e._v("#")]),e._v(" Wrapping up")]),e._v(" "),t("p",[e._v("Once you're done making your SSDT, either head to the next page to finish the rest of the SSDTs or head here if you're ready to wrap up:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/cleanup.html"}},[t("strong",[e._v("Cleanup")])])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);