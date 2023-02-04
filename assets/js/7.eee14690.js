(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{313:function(e,t,a){e.exports=a.p+"assets/img/pnp.8c2387eb.png"},314:function(e,t,a){e.exports=a.p+"assets/img/ec.dd4b7c64.png"},315:function(e,t,a){e.exports=a.p+"assets/img/ssdt-before.b846f355.png"},316:function(e,t,a){e.exports=a.p+"assets/img/ssdt-after.7996c4b7.png"},317:function(e,t,a){e.exports=a.p+"assets/img/sta.e2d0aed0.png"},367:function(e,t,a){"use strict";a.r(t);var s=a(10),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fixing-embedded-controllers-manual"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixing-embedded-controllers-manual"}},[e._v("#")]),e._v(" Fixing Embedded Controllers: Manual")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#fixing-embedded-controllers-manual"}},[e._v("Fixing Embedded Controllers: Manual")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#finding-the-acpi-path"}},[e._v("Finding the ACPI path")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#dsdt"}},[e._v("DSDT")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#devicemanager"}},[e._v("DeviceManager")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("Edits to the sample SSDT")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#edge-cases"}},[e._v("Edge Cases")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#multiple-pnp0c09s-show-up"}},[e._v("Multiple PNP0C09's show up")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#no-pnp0c09-show-up"}},[e._v("No PNP0C09 show up")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#pnp0c09-already-named-ec"}},[e._v("PNP0C09 already named "),t("code",[e._v("EC")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#pnp0c09-already-has-an-_sta-method"}},[e._v("PNP0C09 already has an "),t("code",[e._v("_STA")]),e._v(" method")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#compiling-the-ssdt"}},[e._v("Compiling the SSDT")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#wrapping-up"}},[e._v("Wrapping up")])])])])]),e._v(" "),t("p",[e._v("TO-DO:")]),e._v(" "),t("ul",[t("li",[e._v("Finish Edge cases and sample SSDT edits")])]),e._v(" "),t("h2",{attrs:{id:"finding-the-acpi-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-acpi-path"}},[e._v("#")]),e._v(" Finding the ACPI path")]),e._v(" "),t("p",[e._v("To find the ACPI pathing, you have 2 methods:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#DSDT"}},[e._v("DSDT")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#devicemanager"}},[e._v("DeviceManager")])])]),e._v(" "),t("h3",{attrs:{id:"dsdt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dsdt"}},[e._v("#")]),e._v(" DSDT")]),e._v(" "),t("p",[e._v("Finding the ACPI pathing is quite easy actually, first open your decompiled DSDT you got from "),t("RouterLink",{attrs:{to:"/Manual/dump.html"}},[e._v("Dumping the DSDT")]),e._v(" and "),t("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("Decompiling and Compiling")]),e._v(" with either MaciASL(if in macOS) or any other text editor if in Windows or Linux(VSCode has an "),t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Thog.vscode-asl",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACPI extension"),t("OutboundLink")],1),e._v(" that can also help).")],1),e._v(" "),t("p",[e._v("Next, search for "),t("code",[e._v("PNP0C09")]),e._v(". You should get something similar:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(313),alt:""}})]),e._v(" "),t("p",[e._v("From the above example we see 2 main things:")]),e._v(" "),t("ul",[t("li",[e._v("Name of our embedded controller\n"),t("ul",[t("li",[e._v("In this case being "),t("code",[e._v("EC0")])])])]),e._v(" "),t("li",[e._v("Pathing of our embedded controller\n"),t("ul",[t("li",[t("code",[e._v("PC00.LPC0")])])])])]),e._v(" "),t("p",[e._v("But now we get into edge case territory, what fun!")]),e._v(" "),t("p",[e._v("The main ones to check for are:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#multiple-pnp0c09s-show-up"}},[e._v("Multiple PNP0C09's show up")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#no-pnp0c09-show-up"}},[e._v("No PNP0C09 show up")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#pnp0c09-already-named-ec"}},[e._v("PNP0C09 already named "),t("code",[e._v("EC")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#pnp0c09-already-has-an-_sta-method"}},[e._v("PNP0C09 already has an "),t("code",[e._v("_STA")]),e._v(" method")])])]),e._v(" "),t("p",[e._v("If none of the above apply to you, you're ready for the next section:")]),e._v(" "),t("h3",{attrs:{id:"devicemanager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devicemanager"}},[e._v("#")]),e._v(" DeviceManager")]),e._v(" "),t("p",[e._v("If you already have Windows installed on this machine, finding the EC pathing is fairly easy.")]),e._v(" "),t("p",[e._v("Start by opening up Device Manager in Windows and looking for a device named "),t("code",[e._v("Embedded Controller")]),e._v(". Once found, click on it and select the "),t("code",[e._v("BIOS device Name")]),e._v(" entry. You should get something like this:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(314),alt:""}})]),e._v(" "),t("p",[e._v("From the above, we can see that our pathing is "),t("code",[e._v("SB.PC00.LPC0.EC0")])]),e._v(" "),t("p",[e._v("Now with the pathing, you can head here: "),t("a",{attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("Edits to the sample SSDT")])]),e._v(" "),t("h2",{attrs:{id:"edits-to-the-sample-ssdt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edits-to-the-sample-ssdt"}},[e._v("#")]),e._v(" Edits to the sample SSDT")]),e._v(" "),t("p",[e._v("Now that we have our ACPI path, lets grab our SSDT and get to work:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-EC-USBX.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-EC-USBX"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("For Skylake and newer and all AMD systems")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-EC.dsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-EC"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("For Broadwell and older")])])])]),e._v(" "),t("p",[e._v("Now when opening this SSDT, you'll notice a few things. Mainly:")]),e._v(" "),t("ul",[t("li",[e._v("Some code is commented out\n"),t("ul",[t("li",[e._v("This is code for disabling our EC")]),e._v(" "),t("li",[e._v("Laptops users "),t("strong",[e._v("SHOULD NOT")]),e._v(" uncomment this")])])]),e._v(" "),t("li",[e._v("There's a new EC called "),t("code",[e._v("Device (EC)")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("DO NOT RENAME THIS")]),e._v(", this will be the EC we give to macOS")])])])]),e._v(" "),t("p",[t("strong",[e._v("Before")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("External (_SB_.PCI0.LPCB, DeviceObj) <- Rename this\n\nScope (_SB.PCI0.LPCB) <- Rename this\n")])])]),t("p",[t("img",{attrs:{src:a(315),alt:""}})]),e._v(" "),t("p",[e._v("Following the example pathing we found, the SSDT should look something like this:")]),e._v(" "),t("p",[t("strong",[e._v("After")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("External (_SB_.PC00.LPC0, DeviceObj) <- Renamed\n\nScope (_SB.PC00.LPC0) <- Renamed\n")])])]),t("p",[t("img",{attrs:{src:a(316),alt:""}})]),e._v(" "),t("h2",{attrs:{id:"edge-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edge-cases"}},[e._v("#")]),e._v(" Edge Cases")]),e._v(" "),t("h3",{attrs:{id:"multiple-pnp0c09-s-show-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-pnp0c09-s-show-up"}},[e._v("#")]),e._v(" Multiple PNP0C09's show up")]),e._v(" "),t("p",[e._v("When multiple PNP0C09 show up, we need to next check for the following properties:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("_HID")]),e._v(" (Hardware ID)")]),e._v(" "),t("li",[t("code",[e._v("_CRS")]),e._v(" (Current Resource Settings)")]),e._v(" "),t("li",[t("code",[e._v("_GPE")]),e._v(" (General Purpose Events)")])]),e._v(" "),t("p",[e._v("What these signify is whether this PNP0C09 device is real or not, as per the "),t("a",{attrs:{href:"https://uefi.org/sites/default/files/resources/ACPI_6_3_final_Jan30.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACPI spec"),t("OutboundLink")],1),e._v(". So one's matching the above criteria are the one's we want to disable.")]),e._v(" "),t("ul",[t("li",[e._v("Note: If _STA shows up as well, you'll need to go here: "),t("a",{attrs:{href:"#pnp0c09-already-has-an-sta-method"}},[e._v("PNP0C09 already has an "),t("code",[e._v("_STA")]),e._v(" method")])])]),e._v(" "),t("h3",{attrs:{id:"no-pnp0c09-show-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-pnp0c09-show-up"}},[e._v("#")]),e._v(" No PNP0C09 show up")]),e._v(" "),t("p",[e._v('When this happens, you\'ll only need to create a "dummy" EC for macOS.')]),e._v(" "),t("p",[e._v('Try searching for any devices named: "LPCB", "LPC0", "LPC", "SBRG", "PX40". If you have any of these, try using the LPC pathing of each of those device in place of the Embedded Controller\'s pathing.')]),e._v(" "),t("p",[e._v("Note that "),t("strong",[e._v("DO NOT")]),e._v(' uncomment the EC disabling code as there are no devices that are considered "EC" in your machine.')]),e._v(" "),t("h3",{attrs:{id:"pnp0c09-already-named-ec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pnp0c09-already-named-ec"}},[e._v("#")]),e._v(" PNP0C09 already named "),t("code",[e._v("EC")])]),e._v(" "),t("p",[e._v("Congrats! No need to create an SSDT-EC! However you will still want USBX if you're Skylake or newer.")]),e._v(" "),t("p",[e._v("Prebuilt can be grabbed here: "),t("a",{attrs:{href:"https://github.com/dortania/OpenCore-Post-Install/blob/master/extra-files/SSDT-USBX.aml",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDT-USBX.aml"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"pnp0c09-already-has-an-sta-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pnp0c09-already-has-an-sta-method"}},[e._v("#")]),e._v(" PNP0C09 already has an "),t("code",[e._v("_STA")]),e._v(" method")]),e._v(" "),t("p",[e._v("This is the equivalent of not having an EC as we can't control it with our SSDT-EC, instead we'll need to create a \"dummy\" EC for macOS. You'll still want to find the PCI and LPC pathing for this device. So follow the guide as if you were creating a laptop SSDT-EC/USBX.")]),e._v(" "),t("p",[e._v("Example of an EC with STA already:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(317),alt:"Credit to rottenpants466"}})]),e._v(" "),t("h2",{attrs:{id:"compiling-the-ssdt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-ssdt"}},[e._v("#")]),e._v(" Compiling the SSDT")]),e._v(" "),t("p",[e._v("With the SSDT done, you're now "),t("RouterLink",{attrs:{to:"/Manual/compile.html"}},[e._v("ready to compile the SSDT!")])],1),e._v(" "),t("h2",{attrs:{id:"wrapping-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-up"}},[e._v("#")]),e._v(" Wrapping up")]),e._v(" "),t("p",[e._v("Once you're done making your SSDT, either head to the next page to finish the rest of the SSDTs or head here if you're ready to wrap up:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/cleanup.html"}},[t("strong",[e._v("Cleanup")])])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);