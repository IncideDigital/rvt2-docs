(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{370:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"section-common"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#section-common"}},[e._v("#")]),e._v(" Section common")]),e._v(" "),a("p",[e._v("This plugin includes common jobs to all operation systems.")]),e._v(" "),a("p",[e._v("You can use this plugin to:")]),e._v(" "),a("ul",[a("li",[e._v("Mount disks an partitions")]),e._v(" "),a("li",[e._v("Characterize sources")]),e._v(" "),a("li",[e._v("Get timeline for filesystems")]),e._v(" "),a("li",[e._v("Parse browsers and social media apps")]),e._v(" "),a("li",[e._v("Search keywords in disk strings")])]),e._v(" "),a("p",[e._v("Many other plugins use jobs and modules from this plugin to retrieve general information.")]),e._v(" "),a("h2",{attrs:{id:"jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[e._v("#")]),e._v(" Jobs")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("mount")]),e._v(": Mount all partitions of a disk image.")]),e._v(" "),a("li",[a("code",[e._v("umount")]),e._v(": Unmount all partitions of a disk image")]),e._v(" "),a("li",[a("code",[e._v("fs_timeline")]),e._v(": Generate a timeline of a filesystem according to MFT.")]),e._v(" "),a("li",[a("code",[e._v("allocfiles")]),e._v(": Generate allocated files in a disk image")]),e._v(" "),a("li",[a("code",[e._v("characterize")]),e._v(": Describes basic information about disk and partitions.")]),e._v(" "),a("li",[a("code",[e._v("strings")]),e._v(": Extract all strings of printable characters (ascii and unicode) from disk data.")]),e._v(" "),a("li",[a("code",[e._v("search_strings")]),e._v(": Search a predefined set of keywords in an image strings.")]),e._v(" "),a("li",[a("code",[e._v("search_email")]),e._v(": Search emails patterns in strings")]),e._v(" "),a("li",[a("code",[e._v("search_accounts")]),e._v(": Search account patterns in strings")]),e._v(" "),a("li",[a("code",[e._v("search_gmail")]),e._v(": Search gmail specific parameters in strings")]),e._v(" "),a("li",[a("code",[e._v("search_output")]),e._v(": Search regular expressions in a source output directories, except for strings, searches and parser folders.")]),e._v(" "),a("li",[a("code",[e._v("browsers")]),e._v(": Parse history, downloads and cookies from most used browsers: Chrome, Firefox, Safari, Edge, InternetExplorer")]),e._v(" "),a("li",[a("code",[e._v("characterize_mails")]),e._v(": Create basic summary about mail accounts from a source.")]),e._v(" "),a("li",[a("code",[e._v("skype")]),e._v(": Extract contacts, messages, calls from Skype databases")]),e._v(" "),a("li",[a("code",[e._v("skype.maindb")]),e._v(": Auxiliary job to call all queries to skype main.db")]),e._v(" "),a("li",[a("code",[e._v("teams")]),e._v(": Extract contacts, messages, calls from Teams databases")])]),e._v(" "),a("h3",{attrs:{id:"job-mount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-mount"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("mount")])]),e._v(" "),a("p",[e._v("Mount all partitions of a disk image.")]),e._v(" "),a("p",[e._v("See plugins.common.RVT_mount.Mount module for more parameters.")]),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("ul",[a("li",[e._v("Mount all partitions in an image: "),a("code",[e._v("rvt2 --source 01 -j mount")])]),e._v(" "),a("li",[e._v("Mount an image with a bitlocker partition: "),a("code",[e._v("rvt2 --source 01 -j mount --params recovery_keys=0000-1111-....")])])]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("ignored. The module mounts "),a("code",[e._v("MORGUE/images/CASENAME/SOURCE.extension")]),e._v(", where extension is 001, dd, raw, aff or aff4")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("vss")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("recovery_keys")])]),e._v(" "),a("td",[e._v("comma separated list of recovery keys for bitlocker encrypted partitions")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("password")])]),e._v(" "),a("td",[e._v("password for FileVault encrypted volume")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("partitions")])]),e._v(" "),a("td",[e._v('comma separated list of partitions to mount. Ex: "p03,p05,v1p05"')]),e._v(" "),a("td",[e._v("``")])])])]),e._v(" "),a("h3",{attrs:{id:"job-umount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-umount"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("umount")])]),e._v(" "),a("p",[e._v("Unmount all partitions of a disk image")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-2"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("ignored. The module umounts MORGUE/images/CASENAME/SOURCE.extension, where extension is 001, dd, raw, aff or aff4")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("mountdir")])]),e._v(" "),a("td",[e._v('unmount all mounted partitions in mountdir. Can be set on "DEFAULT" configuration option')]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/mnt")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-fs-timeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-fs-timeline"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("fs_timeline")])]),e._v(" "),a("p",[e._v("Generate a timeline of a filesystem according to MFT.")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-3"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("ignored. The module uses MORGUE/images/CASENAME/SOURCE.extension, where extension is 001, dd, raw, aff or aff4")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("vss")])]),e._v(" "),a("td",[e._v("process Volume Shadow Snapshots")]),e._v(" "),a("td",[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("Save body and timeline this directory. Many other modules depend on this files. Do not change outdir unless you know what you are doing")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/timeline")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-allocfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-allocfiles"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("allocfiles")])]),e._v(" "),a("p",[e._v("Generate allocated files in a disk image")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-4"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("vss")])]),e._v(" "),a("td",[e._v("process Volume Shadow Snapshots")]),e._v(" "),a("td",[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("path to directory where generated files will be stored. Many other modules depend on this files. Do not change outdir unless you know what you are doing")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/auxdir")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-characterize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-characterize"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("characterize")])]),e._v(" "),a("p",[e._v("Describes basic information about disk and partitions.")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-5"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("path to file were results are stored (in markdown format)")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/analysis/characterize.md")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("template_file")])]),e._v(" "),a("td",[e._v("mako template to display results")]),e._v(" "),a("td",[a("code",[e._v("templates/disk.mako")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("file_exists")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("OVERWRITE")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-strings"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("strings")])]),e._v(" "),a("p",[e._v("Extract all strings of printable characters (ascii and unicode) from disk data.\nOutput files are organized by partition, encoding and allocation status")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-6"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("path to directory where generated files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/strings")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-search-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-search-strings"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("search_strings")])]),e._v(" "),a("p",[e._v("Search a predefined set of keywords in an image strings.")]),e._v(" "),a("p",[e._v('The list of keywords must be defined in a separated file, including the\nkeyword label and (optionally) a regex as "LABEL:::REGEX".  If the regex is\nnot provided, the modules uses the label as the regex to search.')]),e._v(" "),a("p",[e._v("Example of keyword file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("myfirstword\nmysecondword:::[Mm]y.econd{1,2}word\n")])])]),a("h4",{attrs:{id:"configurable-parameters-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-7"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("Path to file containing the list of keywords to perform the search on")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("keyfile")])]),e._v(" "),a("td",[e._v("Same as "),a("em",[e._v("path")]),e._v(". "),a("em",[e._v("path")]),e._v(" will have precendence if both are defined")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/searches_files/keywords")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("Path to directory where generated match files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/searches")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outdir_report")])]),e._v(" "),a("td",[e._v("Path to directory where generated report files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/analysis/searches")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("strings_dir")])]),e._v(" "),a("td",[e._v('Path to directory where generated string files should be stored. See job "strings"')]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/strings")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-search-email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-search-email"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("search_email")])]),e._v(" "),a("p",[e._v("Search emails patterns in strings")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-8"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("path to directory where generated files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/analysis/searches")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-search-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-search-accounts"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("search_accounts")])]),e._v(" "),a("p",[e._v("Search account patterns in strings")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-9"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("path to directory where generated files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/analysis/searches")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-search-gmail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-search-gmail"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("search_gmail")])]),e._v(" "),a("p",[e._v("Search gmail specific parameters in strings")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-10"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("path to directory where generated files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/analysis/searches")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-search-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-search-output"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("search_output")])]),e._v(" "),a("p",[e._v("Search regular expressions in a source output directories, except for strings, searches and parser folders.")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-11"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("path to file containing the list of keywords to perform the search on")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("keyfile")])]),e._v(" "),a("td",[e._v("same as "),a("em",[e._v("path")]),e._v(". "),a("em",[e._v("path")]),e._v(" will have precendence if both are defined")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/searches_files/keywords")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("path to directory where generated files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/analysis/searches")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-browsers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-browsers"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("browsers")])]),e._v(" "),a("p",[e._v("Parse history, downloads and cookies from most used browsers: Chrome, Firefox, Safari, Edge, InternetExplorer\nWhen parsing VSS, please introduce the corresponding "),a("code",[e._v("outdir")]),e._v(" and "),a("code",[e._v("vss=False")])]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-12"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("vss")])]),e._v(" "),a("td",[e._v("process Volume Shadow Snapshots")]),e._v(" "),a("td",[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("path to directory where generated files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/browsers")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-characterize-mails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-characterize-mails"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("characterize_mails")])]),e._v(" "),a("p",[e._v("Create basic summary about mail accounts from a source.")]),e._v(" "),a("p",[e._v("Includes:")]),e._v(" "),a("ul",[a("li",[e._v("Number of mails sended or received to/for every mail account found")]),e._v(" "),a("li",[e._v("Number of mails interchanged between every pair of mail accounts")])]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-13"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v('path to a previously generated csv describing all mails. See "indexer.pst" job')]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("n")])]),e._v(" "),a("td",[e._v("number of top occurences to show")]),e._v(" "),a("td",[a("code",[e._v("50")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("summary_file")])]),e._v(" "),a("td",[e._v("output file for the summary")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/analysis/mail/summary_mails.md")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("output file with statistics for every mail account")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/analysis/mail/mail_accounts.csv")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-skype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-skype"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("skype")])]),e._v(" "),a("p",[e._v("Extract contacts, messages, calls from Skype databases")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-14"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("vss")])]),e._v(" "),a("td",[e._v("process Volume Shadow Snapshots")]),e._v(" "),a("td",[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("path to directory where generated files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/skype")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-skype-maindb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-skype-maindb"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("skype.maindb")])]),e._v(" "),a("p",[e._v("Auxiliary job to call all queries to skype main.db")]),e._v(" "),a("h3",{attrs:{id:"job-teams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-teams"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("teams")])]),e._v(" "),a("p",[e._v("Extract contacts, messages, calls from Teams databases")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-15"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("vss")])]),e._v(" "),a("td",[e._v("process Volume Shadow Snapshots")]),e._v(" "),a("td",[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("path to directory where generated files will be stored")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/teams")])])])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This chapter was created automatically using "),a("code",[e._v('rvt2 -j help common --params show_vars="" template_file="templates/help_section_complete.mako" outfile="rvt2/common.md"')]),e._v(". Do not modify manually this file.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);