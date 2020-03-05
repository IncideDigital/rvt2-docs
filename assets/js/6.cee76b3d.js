(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(e,t,s){e.exports=s.p+"assets/img/morgue_structure.dbce96f7.png"},205:function(e,t,s){e.exports=s.p+"assets/img/source_structure.f53876ba.png"},224:function(e,t,s){"use strict";s.r(t);var a=s(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"folder-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[e._v("#")]),e._v(" Folder structure")]),e._v(" "),a("p",[e._v("The Revealer Toolkit2 defines its own structure to organize the forensic cases. The main folder is refered as the "),a("em",[e._v("morgue")]),e._v(", and stores all the disk images and results of forensic analysis.")]),e._v(" "),a("p",[e._v("RVT2 can handle more that one morgue. By default, one morgue is defined at the location "),a("code",[e._v("/morgue")]),e._v(".")]),e._v(" "),a("p",[e._v("The morgue location, as well as its subfolders, can be custom defined within configuration files. However, some RVT modules rely on a predefined structure\nthat allows to correlate differents forensics artifacts easily. It is advisable not to modify the structure beyond the morgue location itself and the "),a("em",[e._v("images")]),e._v(" location.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(204),alt:"Graphical representation of general folder structure."}})]),e._v(" "),a("h2",{attrs:{id:"cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cases"}},[e._v("#")]),e._v(" Cases")]),e._v(" "),a("p",[e._v("Each forensic case is by default determined by a "),a("em",[e._v("case number")]),e._v(" and a "),a("em",[e._v("case codename")]),e._v(", separated by a dash. For example, "),a("em",[e._v("100101-ghost")]),e._v(".")]),e._v(" "),a("p",[e._v("Each case has a folder assigned in the morgue, where all the forensic data is stored for each source.")]),e._v(" "),a("h2",{attrs:{id:"sources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sources"}},[e._v("#")]),e._v(" Sources")]),e._v(" "),a("p",[e._v("Under the Revealer Toolkit2, information sources are organized with:")]),e._v(" "),a("ul",[a("li",[e._v("Devices: each case has a number of devices: computers, cell phones, digital cameras, ... They are numbered sequencially from 01 to 99.\n"),a("br"),e._v("A device is named as "),a("em",[e._v("casenumber-devicenumber")]),e._v(", for example, 100101-01 for the case 100101 and device 01.")]),e._v(" "),a("li",[e._v("Disks: each device has a number of disks: hard disks, CD’s, memory cards, ... They are numbered sequencially from 1 to 9.\n"),a("br"),e._v("A disk is named as "),a("em",[e._v("case-device-disknumber")]),e._v(", for example, 100101-01-1, for the disk 1")])]),e._v(" "),a("h2",{attrs:{id:"images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#images"}},[e._v("#")]),e._v(" Images")]),e._v(" "),a("p",[e._v("The disk images are stored, in raw format, in a designed folder for every case inside the directory "),a("em",[e._v("images")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"source-directory-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-directory-structure"}},[e._v("#")]),e._v(" Source directory structure")]),e._v(" "),a("p",[e._v("The Revealer Toolkit2 manages and executes modules, which performs forensic operations on the disk images and disk information. All these forensic results are stored in the source directory the image is associated to. Each source generates three main folders: "),a("em",[e._v("mnt")]),e._v(", "),a("em",[e._v("output")]),e._v(" and "),a("em",[e._v("analysis")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:s(205),alt:"Graphical representation of general directory structure."}})]),e._v(" "),a("h2",{attrs:{id:"mnt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mnt"}},[e._v("#")]),e._v(" mnt")]),e._v(" "),a("p",[e._v("Location where disk partitions are mounted. Contents of each partition are stored in subfolders like "),a("code",[e._v("p03")]),e._v(", following the numeration used by the Sleuthkit command "),a("em",[e._v("mmls")]),e._v(".")]),e._v(" "),a("p",[e._v("Partitions with Windows filesystems may contain VShadow Snapshots. These are mounted with names such as "),a("code",[e._v("v2p03")]),e._v(", which in this case indicates the second vshadow snapshot of partition 3.")]),e._v(" "),a("p",[e._v("Some partitions requiere auxiliary mounting points (using mounted "),a("em",[e._v("fusedevices")]),e._v(" with "),a("code",[e._v("bindfs")]),e._v(", "),a("code",[e._v("vshadowmount")]),e._v(" or "),a("code",[e._v("dislocker")]),e._v("), and are stored inside "),a("em",[e._v("aux")]),e._v(" subfolder. The contents still can be found in the subfolder corresponding to the partition name.")]),e._v(" "),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" output")]),e._v(" "),a("p",[e._v("Main folder with the results of automated extraction of various artifacts.")]),e._v(" "),a("h3",{attrs:{id:"output-timeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-timeline"}},[e._v("#")]),e._v(" output/timeline")]),e._v(" "),a("p",[e._v("Timeline for the all files found in every partitions of a disk (VShadow Snapshots excluded). The documents show paths, timestamps and other metadata associated to every file found in the filesystem.")]),e._v(" "),a("h3",{attrs:{id:"output-browsers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-browsers"}},[e._v("#")]),e._v(" /output/browsers")]),e._v(" "),a("p",[e._v("Information about history, downloads, cookies, ... for all browsers found in every partition.")]),e._v(" "),a("h3",{attrs:{id:"output-indexer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-indexer"}},[e._v("#")]),e._v(" output/indexer")]),e._v(" "),a("p",[e._v("Documents indexed in order to be used by searching services, such as Elastic.")]),e._v(" "),a("h3",{attrs:{id:"output-mail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-mail"}},[e._v("#")]),e._v(" output/mail")]),e._v(" "),a("p",[e._v("Parsed data of mails found in disk, either individual or contained in bigger mail structures such as "),a("em",[e._v("pst")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"output-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-string"}},[e._v("#")]),e._v(" output/string")]),e._v(" "),a("p",[e._v("Relation of all printable character sequences found in disk, also in the slack space.")]),e._v(" "),a("h3",{attrs:{id:"output-searches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-searches"}},[e._v("#")]),e._v(" output/searches")]),e._v(" "),a("p",[e._v("Results of keyword searches against strings")]),e._v(" "),a("h3",{attrs:{id:"output-ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-ios"}},[e._v("#")]),e._v(" output/ios")]),e._v(" "),a("p",[e._v("Documents specifically related to IOS systems.")]),e._v(" "),a("h3",{attrs:{id:"output-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-linux"}},[e._v("#")]),e._v(" output/linux")]),e._v(" "),a("p",[e._v("Documents specifically related to Linux systems.")]),e._v(" "),a("h3",{attrs:{id:"output-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-macos"}},[e._v("#")]),e._v(" output/macos")]),e._v(" "),a("p",[e._v("Documents specifically related to MacOS systems.")]),e._v(" "),a("h3",{attrs:{id:"output-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows"}},[e._v("#")]),e._v(" output/windows")]),e._v(" "),a("p",[e._v("Documents specifically related to Windows systems.")]),e._v(" "),a("h4",{attrs:{id:"output-windows-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows-events"}},[e._v("#")]),e._v(" output/windows/events")]),e._v(" "),a("p",[e._v("Information extracted from Windows event logs")]),e._v(" "),a("h4",{attrs:{id:"output-windows-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows-execution"}},[e._v("#")]),e._v(" output/windows/execution")]),e._v(" "),a("p",[e._v("Information extracted from Windows artifacts such as "),a("em",[e._v("prefetch")]),e._v(", "),a("em",[e._v("bam")]),e._v(" or "),a("em",[e._v("rfc")]),e._v(", associated with program and services executions.")]),e._v(" "),a("h4",{attrs:{id:"output-windows-hives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows-hives"}},[e._v("#")]),e._v(" output/windows/hives")]),e._v(" "),a("p",[e._v("Information extracted from registry hives. Output files are organized depending on the type of information or hive parsed.")]),e._v(" "),a("h4",{attrs:{id:"output-windows-hibernation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows-hibernation"}},[e._v("#")]),e._v(" output/windows/hibernation")]),e._v(" "),a("p",[e._v("Information obtained from "),a("em",[e._v("hiberfil.sys")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"output-windows-i30"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows-i30"}},[e._v("#")]),e._v(" output/windows/i30")]),e._v(" "),a("p",[e._v("Parsing of I30 Index attributes, both in allocated and slack space.")]),e._v(" "),a("h4",{attrs:{id:"output-windows-recentfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows-recentfiles"}},[e._v("#")]),e._v(" output/windows/recentfiles/")]),e._v(" "),a("p",[e._v("Information related to "),a("em",[e._v("jumplists")]),e._v(" and "),a("em",[e._v("lnk")]),e._v(" files found in disk.")]),e._v(" "),a("h4",{attrs:{id:"output-windows-recyclebin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows-recyclebin"}},[e._v("#")]),e._v(" output/windows/recyclebin")]),e._v(" "),a("p",[e._v("Information about files found in RecycleBin.")]),e._v(" "),a("h4",{attrs:{id:"output-windows-srum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows-srum"}},[e._v("#")]),e._v(" output/windows/srum")]),e._v(" "),a("p",[e._v("Information from the System Resource Usage Monitor (SRUM)")]),e._v(" "),a("h4",{attrs:{id:"output-windows-usb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows-usb"}},[e._v("#")]),e._v(" output/windows/usb")]),e._v(" "),a("p",[e._v("Specific usb artifacts information, like "),a("em",[e._v("usb_setupapi")]),e._v(". More information on usb devices can be found in the registry and is stored under "),a("em",[e._v("output/windows/hives")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"output-windows-usnjrnl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-windows-usnjrnl"}},[e._v("#")]),e._v(" output/windows/usnjrnl")]),e._v(" "),a("p",[e._v("Folder with NTFS Journal dump, and a filter with ended journal processes.")]),e._v(" "),a("h3",{attrs:{id:"output-vss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-vss"}},[e._v("#")]),e._v(" output/vss")]),e._v(" "),a("p",[e._v("All the information extracted from VShadow Snapshots. Follows a substructure based on "),a("em",[e._v("output")]),e._v(" and "),a("em",[e._v("windows")]),e._v(" folders. These subfolders contain the same information previously described, but applied only to VShadow Snapshots found.")]),e._v(" "),a("h2",{attrs:{id:"analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analysis"}},[e._v("#")]),e._v(" analysis")]),e._v(" "),a("p",[e._v("Contain general reports and other documents with selected information about different artifacts. This is a start point for analysis, since the reports are more descriptive than the raw information they are based on, found in "),a("em",[e._v("output")]),e._v(" directory.")]),e._v(" "),a("h3",{attrs:{id:"analysis-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analysis-events"}},[e._v("#")]),e._v(" analysis/events")]),e._v(" "),a("p",[e._v("Series of filtered information reports for some event logs.")]),e._v(" "),a("h3",{attrs:{id:"analysis-mails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analysis-mails"}},[e._v("#")]),e._v(" analysis/mails")]),e._v(" "),a("p",[e._v("Relation of metadata information about all mails found in disk.")]),e._v(" "),a("h3",{attrs:{id:"analysis-recentfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analysis-recentfiles"}},[e._v("#")]),e._v(" analysis/recentfiles")]),e._v(" "),a("p",[e._v("Documents containing selected data from "),a("em",[e._v("jumplists")]),e._v(" and "),a("em",[e._v("lnk")]),e._v(" files.")]),e._v(" "),a("h3",{attrs:{id:"analysis-searches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analysis-searches"}},[e._v("#")]),e._v(" analysis/searches")]),e._v(" "),a("p",[e._v("Location of "),a("em",[e._v("pdf")]),e._v(" files describing the full results of searches against strings.")]),e._v(" "),a("h2",{attrs:{id:"log-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-file"}},[e._v("#")]),e._v(" Log file")]),e._v(" "),a("p",[e._v("RVT2 stores by default the logs of all executed jobs in a directory\n"),a("code",[e._v("${sourcedir}/log")]),e._v(". The filename is the job identifier.")]),e._v(" "),a("p",[e._v("In addition, a list of the already executed jobs and their status can be found\nat "),a("code",[e._v("${casedir}/rvt2.jobs.json")]),e._v(". You can also access to this information using\nthe job "),a("code",[e._v("status")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);