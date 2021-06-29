(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{373:function(e,t,a){"use strict";a.r(t);var o=a(42),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"section-ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#section-ios"}},[e._v("#")]),e._v(" Section ios")]),e._v(" "),a("p",[e._v("This plugin extracts and analyzes forensic artifacts from a iOS system, used in iPhones and iPads.")]),e._v(" "),a("h2",{attrs:{id:"creating-ios-backups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-ios-backups"}},[e._v("#")]),e._v(" Creating iOS backups")]),e._v(" "),a("p",[e._v("The main input for the jobs in this plugin is an iOS backup. You can create this backup using iTunes or idevicebackup2 from the libimobile library ("),a("a",{attrs:{href:"https://www.libimobiledevice.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.libimobiledevice.org/"),a("OutboundLink")],1),e._v("). Encrypted backups are preferred, since they include additional information not present in regular backups.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("idevicebackup2 encryption on "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PASSWORD"')]),e._v("\nidevicebackup2 backup "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\nidevicebackup2 encryption off "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"PASSWORD"')]),e._v("\n")])])]),a("p",[e._v("You "),a("em",[e._v("need")]),e._v(" the backup password. Write it down somewhere.")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("path")]),e._v(" to the main job is the path to the folder containing the backup, or a .zip file containing the backup.")]),e._v(" "),a("p",[e._v("Save the backup as the folder "),a("code",[e._v("%(imagedir)s/CASE_NAME/SOURCE_NAME")]),e._v(" or zip file "),a("code",[e._v("%(imagedir)s/images/CASE_NAME/SOURCE_NAME.zip")]),e._v(".")]),e._v(" "),a("p",[e._v("If the backup is encrypted, an additinal step to decrypt the backup is needed. Currently, the RVT2 does not include directly the tools to decrypt an iOS backup and you must install or clone an external tool such as "),a("a",{attrs:{href:"https://github.com/dinosec/iphone-dataprotection",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/dinosec/iphone-dataprotection"),a("OutboundLink")],1),e._v(". Once installed, add this configuration to the RVT2:")]),e._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[e._v("[ios.unback]")]),e._v("\nunback_command: PATH_TO_IOS_DATAPROTECTION/python_scripts/backup_tool.py {bk_path} {extract_path}\n")])])]),a("p",[e._v("If ios_dataprotection is used, the password will be asked during the job "),a("code",[e._v("ios.unback")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[e._v("#")]),e._v(" Jobs")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ios.characterize")]),e._v(": Characterizes an iPhone backup. This backup must be previously unbacked. See job plugins.ios.unback.Unback")]),e._v(" "),a("li",[a("code",[e._v("ios.preforensics")]),e._v(": Run a selected set of jobs in this module: unback, characterize, databases, cookies, whatsapp")]),e._v(" "),a("li",[a("code",[e._v("ios.unback")]),e._v(": Unback an iOS backup directory or zip file")]),e._v(" "),a("li",[a("code",[e._v("ios.timeline")]),e._v(": Parse manifest file and generate a body and a timeline csv using mactime")]),e._v(" "),a("li",[a("code",[e._v("ios.apollo_auto")]),e._v(": Parse iOS databases from the APOLLO project (https://github.com/mac4n6/APOLLO).")]),e._v(" "),a("li",[a("code",[e._v("ios.apollo")]),e._v(": Parse iOS databases from the APOLLO project (https://github.com/mac4n6/APOLLO).")]),e._v(" "),a("li",[a("code",[e._v("ios.databases")]),e._v(": Parse other iOS databases not in the APOLLO project, such as calendar, location, addressbook, notes or recordings.")]),e._v(" "),a("li",[a("code",[e._v("ios.cookies")]),e._v(": Parse cookies in /HomeDomain/Library/Cookies")]),e._v(" "),a("li",[a("code",[e._v("ios.whatsapp")]),e._v(": Parse and split WhastApp messages into several CSVs")]),e._v(" "),a("li",[a("code",[e._v("ios.whatsapp_single")]),e._v(": Parse WhatsApp database filtered by message_group")]),e._v(" "),a("li",[a("code",[e._v("ios.avere_whatsapp")]),e._v(": Check WhatsApp databases consistency for traces of manipulation. Only valid for old iOS versions")]),e._v(" "),a("li",[a("code",[e._v("ios.chat_to_html")]),e._v(": Convert a WhatsApp conversation to an html file")]),e._v(" "),a("li",[a("code",[e._v("ios.whatsapp_kw")]),e._v(": Search keywords in WhatsApp conversations")]),e._v(" "),a("li",[a("code",[e._v("ios.jailbreak")]),e._v(": Search for jailbreak traces in iOS devices. Requires the previous execution of "),a("code",[e._v("allocfiles")])])]),e._v(" "),a("h3",{attrs:{id:"job-ios-characterize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-characterize"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.characterize")])]),e._v(" "),a("p",[e._v("Characterizes an iPhone backup. This backup must be previously unbacked. See job plugins.ios.unback.Unback")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("path to device root directory")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("path where generated csv file will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/analysis/characterize.csv")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile_json")])]),e._v(" "),a("td",[e._v("path where generated json file will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/analysis/os_info.json")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-ios-preforensics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-preforensics"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.preforensics")])]),e._v(" "),a("p",[e._v("Run a selected set of jobs in this module: unback, characterize, databases, cookies, whatsapp\nThe path is an absolute path to a directory containing an iTunes backup, or a ZIP file containing an iTunes backup.\nIf the backup is encrypted, define unback_command in the "),a("code",[e._v("ios.unback")]),e._v(" section.")]),e._v(" "),a("h3",{attrs:{id:"job-ios-unback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-unback"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.unback")])]),e._v(" "),a("p",[e._v("Unback an iOS backup directory or zip file")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-2"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("The path to the backup directory or the zip file to unback")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("extract_path")])]),e._v(" "),a("td",[e._v("The output directory for the unback")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/mnt/p01")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("unzip_path")])]),e._v(" "),a("td",[e._v("In case of unbacking from a zip file, unzip the source to this path before unbacking")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/unzip")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("remove_unzip_path")])]),e._v(" "),a("td",[e._v("If set to True (default), delete the unzip directory after unzipping the backup zip file")]),e._v(" "),a("td",[a("code",[e._v("True")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("unback_command")])]),e._v(" "),a("td",[e._v('External command to unback in case of encrypted backups. It is a Python string template that receives variables "bk_path" and "extract_path". For example: "python2 backup_tool.py {bk_path} {extract_path}". Check https://github.com/dinosec/iphone-dataprotection/blob/master/python_scripts/backup_tool.py')]),e._v(" "),a("td",[e._v("``")])])])]),e._v(" "),a("h3",{attrs:{id:"job-ios-timeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-timeline"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.timeline")])]),e._v(" "),a("p",[e._v("Parse manifest file and generate a body and a timeline csv using mactime")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-3"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outfile_body")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_BODY.csv")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile_csv_hour")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_hour_sum.csv")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile_csv")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_TL.csv")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-ios-apollo-auto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-apollo-auto"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.apollo_auto")])]),e._v(" "),a("p",[e._v("Parse iOS databases from the APOLLO project (https://github.com/mac4n6/APOLLO).\nYou must run "),a("code",[e._v("ios.characterize")]),e._v(" before or the job will not get the current iOS version.")]),e._v(" "),a("h3",{attrs:{id:"job-ios-apollo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-apollo"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.apollo")])]),e._v(" "),a("p",[e._v("Parse iOS databases from the APOLLO project (https://github.com/mac4n6/APOLLO).\nYou must include also the relevant configuration file from RVT2HOME/conf/ios/apollo. Check the device iOS version and run:\n"),a("code",[e._v("rvt2 -c RVT2HOME/conf/ios/apollo/rvt2-ios-VERSION.ini -j ios.apollo")])]),e._v(" "),a("h3",{attrs:{id:"job-ios-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-databases"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.databases")])]),e._v(" "),a("p",[e._v("Parse other iOS databases not in the APOLLO project, such as calendar, location, addressbook, notes or recordings.")]),e._v(" "),a("h3",{attrs:{id:"job-ios-cookies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-cookies"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.cookies")])]),e._v(" "),a("p",[e._v("Parse cookies in /HomeDomain/Library/Cookies")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-4"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/ios/cookies.csv")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-ios-whatsapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-whatsapp"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.whatsapp")])]),e._v(" "),a("p",[e._v("Parse and split WhastApp messages into several CSVs")]),e._v(" "),a("h3",{attrs:{id:"job-ios-whatsapp-single"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-whatsapp-single"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.whatsapp_single")])]),e._v(" "),a("p",[e._v("Parse WhatsApp database filtered by message_group")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-5"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("The path to the directory to parse")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("message_group")])]),e._v(" "),a("td",[e._v("Select a specific conversation to parse")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("start_date")])]),e._v(" "),a("td",[e._v("If set, output only messages from this date. Example format: 2018-12-25")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("end_date")])]),e._v(" "),a("td",[e._v("If set, output only messages until this date. Example format: 2020-01-15")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("username")])]),e._v(" "),a("td",[e._v("Whatsapp owner name. If not provided is taken from other WhatsApp configuration files")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("localtime")])]),e._v(" "),a("td",[e._v("If True, convert timestamps to current computer local timezone. If False, use UTC.")]),e._v(" "),a("td",[a("code",[e._v("True")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-ios-avere-whatsapp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-avere-whatsapp"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.avere_whatsapp")])]),e._v(" "),a("p",[e._v("Check WhatsApp databases consistency for traces of manipulation. Only valid for old iOS versions")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-6"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("Save the result in this file")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/ios/adv_whatsapp.txt")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("extract_path")])]),e._v(" "),a("td",[e._v("The path to the IOS root directory")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/mnt/p01/")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-ios-chat-to-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-chat-to-html"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.chat_to_html")])]),e._v(" "),a("p",[e._v("Convert a WhatsApp conversation to an html file")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-7"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("message_group")])]),e._v(" "),a("td",[e._v("Group the conversation belongs to. It is a number")]),e._v(" "),a("td",[a("code",[e._v("1")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("input_whatsapp_csv")])]),e._v(" "),a("td",[e._v("CSV input file with transcripted conversation to convert, relative to message_group folder")]),e._v(" "),a("td",[a("code",[e._v("whatsapp.csv")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("template")])]),e._v(" "),a("td",[e._v("Mako template file with html configuration. Relative to current working directory or RVTHOME")]),e._v(" "),a("td",[a("code",[e._v("templates/chat2html.mako")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile_name")])]),e._v(" "),a("td",[e._v("output html filename to save results, relative to message_group folder")]),e._v(" "),a("td",[a("code",[e._v("conversation.html")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-ios-whatsapp-kw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-whatsapp-kw"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.whatsapp_kw")])]),e._v(" "),a("p",[e._v("Search keywords in WhatsApp conversations\nThe list of keywords must be defined in a separated file, "),a("code",[e._v("kw_file")]),e._v(', including\nthe keyword label and (optionally) a regex as "LABEL:::REGEX".  If the regex is\nnot provided, the modules uses the label as the regex to search.')]),e._v(" "),a("p",[e._v("Example of keyword file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("myfirstword\nmysecondword:::[Mm]y.econd{1,2}word\n")])])]),a("p",[e._v("The job "),a("code",[e._v("ios.whatsapp")]),e._v(" must had been executed before the present job")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-8"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("path to the main results folder from "),a("code",[e._v("ios.whatsapp")])]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("kw_file")])]),e._v(" "),a("td",[e._v("path to file containing a list of keywords")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/searches_files/keywords")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile_name")])]),e._v(" "),a("td",[e._v("output html filename to save results, relative to message_group folder")]),e._v(" "),a("td",[a("code",[e._v("conversation_kw.html")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-ios-jailbreak"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-ios-jailbreak"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("ios.jailbreak")])]),e._v(" "),a("p",[e._v("Search for jailbreak traces in iOS devices. Requires the previous execution of "),a("code",[e._v("allocfiles")])]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-9"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("path to directory where generated files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/ios/jailbreak")])])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This chapter was created automatically using "),a("code",[e._v("autodoc.sh")]),e._v(". Do not modify manually this file.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);