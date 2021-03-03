(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{371:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"section-indexer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#section-indexer"}},[e._v("#")]),e._v(" Section indexer")]),e._v(" "),a("p",[e._v("This plugin parses files using "),a("a",{attrs:{href:"https://tika.apache.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tika"),a("OutboundLink")],1),e._v(" and indexes documents in "),a("a",{attrs:{href:"https://www.elastic.co",target:"_blank",rel:"noopener noreferrer"}},[e._v("ElasticSearch"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("You can use this plugin:")]),e._v(" "),a("ul",[a("li",[e._v("To parse all documents in a directory with Tika and index the results in Elastic. This is the main use of the classes in this plugin.")]),e._v(" "),a("li",[e._v("To parse documents with Tika and do something else with the result. For example, show a document's metadata in the screen.")]),e._v(" "),a("li",[e._v("To index the output of other RVT2 modules. For example, you can index the output of the PST parser.")])]),e._v(" "),a("h2",{attrs:{id:"running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running"}},[e._v("#")]),e._v(" Running")]),e._v(" "),a("p",[e._v("If you use the Tika module, you must run Tika in server mode by running "),a("code",[e._v("run.sh")]),e._v(" inside the "),a("code",[e._v("$RVT2_HOME/external_tools/tika")]),e._v(" directory. The first time you run this command, it will download Tika.")]),e._v(" "),a("p",[e._v("If you use the ElasticSearch indexer, you'll need an ElasticSearch >=6 server somewhere in the network. In some cases, ElasticSearch might need a special file system configuration. Also, if you are planning to use the "),a("RouterLink",{attrs:{to:"/analyzer/"}},[e._v("rvt2-analyzer")]),e._v(", the ElasticSearch must allow CORS requests at least from the domain of the analyzer. An example script to run ElasticSearch can be found inside the directory "),a("code",[e._v("$RVT2_HOME/external_tools/elastic")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"jobs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[e._v("#")]),e._v(" Jobs")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("indexer.parse_file")]),e._v(": Parse a file and show the result in the standard output. Use for debugging.")]),e._v(" "),a("li",[a("code",[e._v("indexer.parse_directory")]),e._v(": Parse a directory and show the result in the standard output. Use for debugging.")]),e._v(" "),a("li",[a("code",[e._v("indexer.directory")]),e._v(": Parse a directory and save in "),a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.json")]),e._v(". This file is compatible with indexers.")]),e._v(" "),a("li",[a("code",[e._v("indexer.save")]),e._v(": Save a previously indexed database in an ElasticSearch server. Alternative to "),a("code",[e._v("elasticdump")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("indexer.save_directory")]),e._v(": Run indexer.directory and then indexer.save with default parameters.")]),e._v(" "),a("li",[a("code",[e._v("indexer.convert_json")]),e._v(": Convert a JSON file to a JSON suitable to be sent to ElasticSearch using indexer.save")]),e._v(" "),a("li",[a("code",[e._v("indexer.convert_csv")]),e._v(": Convert a CSV file to a JSON suitable to be sent to ElasticSearch using indexer.save")]),e._v(" "),a("li",[a("code",[e._v("indexer.query_and_tag")]),e._v(": Query elastic, select all related documents (containers, attachments..) and tag all of them. You must indexer.save the output")]),e._v(" "),a("li",[a("code",[e._v("indexer.export")]),e._v(": Query elastic, select all documents matching a query and export them to a JSON.")]),e._v(" "),a("li",[a("code",[e._v("indexer.tag_and_export")]),e._v(": Runs "),a("code",[e._v("indexer.query_and_tag")]),e._v(", "),a("code",[e._v("indexer.save")]),e._v(", "),a("code",[e._v("indexer.export")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("indexer.blind_searches")]),e._v(": Blind searches on a parsed JSON file, result from indexer.save.")]),e._v(" "),a("li",[a("code",[e._v("indexer.index_timeline_body")]),e._v(": Index a BODY file provided in the path.")]),e._v(" "),a("li",[a("code",[e._v("indexer.pst")]),e._v(": Parse PST files previously exported with indexer.export_pst.")]),e._v(" "),a("li",[a("code",[e._v("indexer.export_pst")]),e._v(": Export contents of every pst or ost file found in a source using pffexport.")]),e._v(" "),a("li",[a("code",[e._v("indexer.mails")]),e._v(": Export, parse and characterize contents of every pst or ost file found in a source. Runs export_pst, pst and characterize_mails")]),e._v(" "),a("li",[a("code",[e._v("indexer.pst_item2eml")]),e._v(": Convert a message extracted from a pst to an eml file.")])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-parse-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-parse-file"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.parse_file")])]),e._v(" "),a("p",[e._v("Parse a file and show the result in the standard output. Use for debugging.")]),e._v(" "),a("h3",{attrs:{id:"job-indexer-parse-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-parse-directory"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.parse_directory")])]),e._v(" "),a("p",[e._v("Parse a directory and show the result in the standard output. Use for debugging.")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("filter")])]),e._v(" "),a("td",[e._v('List of file categories to parse. If not provided, parse all files. Predefined categories can be found in "file_categories.cfg" configuration file')]),e._v(" "),a("td",[e._v("``")])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-directory"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.directory")])]),e._v(" "),a("p",[e._v("Parse a directory and save in "),a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.json")]),e._v(". This file is compatible with indexers.")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-2"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("The path to the directory to parse")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("Save the result of the parsing in this file")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.json")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("name")])]),e._v(" "),a("td",[e._v("The name of the indx to save the parsed files")]),e._v(" "),a("td",[a("code",[e._v("SOURCE")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("rvtindex")])]),e._v(" "),a("td",[e._v("The name of the index to save metadata. Set to empty to not save metadata.")]),e._v(" "),a("td",[a("code",[e._v("rvtindexer")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("restartable")])]),e._v(" "),a("td",[e._v("If True, parsing can be restarted from the last error. Use with care!")]),e._v(" "),a("td",[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("filter")])]),e._v(" "),a("td",[e._v('List of file categories to parse. If not provided, parse all files. Predefined categories can be found in "file_categories.cfg" configuration file')]),e._v(" "),a("td",[e._v("``")])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-save"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-save"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.save")])]),e._v(" "),a("p",[e._v("Save a previously indexed database in an ElasticSearch server. Alternative to "),a("code",[e._v("elasticdump")]),e._v(".")]),e._v(" "),a("p",[e._v("You can define the location of the elasticsearch server and username/password using:")]),e._v(" "),a("p",[a("code",[e._v('--globals indexer:es_hosts="https://elastic.incide.es:443" --globals indexer:es_username=USERNAME --globals indexer:es_password=PASSWORD')])]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-3"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("The path to a JSON file output from indexer.directory.")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("restartable")])]),e._v(" "),a("td",[e._v("In True, the index can be restarted from an error. Use with care!")]),e._v(" "),a("td",[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("mapping")])]),e._v(" "),a("td",[e._v("Path to the file describing the mapping of fields to ElasticSearch. The mapping can only be used when the index is created.")]),e._v(" "),a("td",[a("code",[e._v("./plugins/indexer/es-settings.json")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("name")])]),e._v(" "),a("td",[e._v("Index name in ElasticSearch. If index does not exists, create it.")]),e._v(" "),a("td",[a("code",[e._v("SOURCE")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("cooloff_every")])]),e._v(" "),a("td",[e._v("After this number of seconds, wait cooloff_seconds.")]),e._v(" "),a("td",[a("code",[e._v("300")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("cooloff_seconds")])]),e._v(" "),a("td",[e._v("Seconds to wait to cool off ElasticSearch.")]),e._v(" "),a("td",[a("code",[e._v("5")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("tabs")])]),e._v(" "),a("td",[e._v('Space separated tabs to add to the rvt2-analyzer. Available tabs can be found at "./plugins/indexer/analyzer-tabs.json". Examples: files, emails, apache, iis.')]),e._v(" "),a("td",[e._v("``")])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-save-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-save-directory"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.save_directory")])]),e._v(" "),a("p",[e._v("Run indexer.directory and then indexer.save with default parameters.")]),e._v(" "),a("h3",{attrs:{id:"job-indexer-convert-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-convert-json"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.convert_json")])]),e._v(" "),a("p",[e._v("Convert a JSON file to a JSON suitable to be sent to ElasticSearch using indexer.save")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-4"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("the CSV file to convert. It must be provided")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("path to the generated json file")]),e._v(" "),a("td",[a("code",[e._v("output.json")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("disableCommonFields")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("True")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("generate_id")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("index_name")])]),e._v(" "),a("td",[e._v("name of the destination index at Elastic")]),e._v(" "),a("td",[a("code",[e._v("SOURCE")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-convert-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-convert-csv"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.convert_csv")])]),e._v(" "),a("p",[e._v("Convert a CSV file to a JSON suitable to be sent to ElasticSearch using indexer.save")]),e._v(" "),a("ul",[a("li",[e._v("path: the CSV file to convert. It must be provided")]),e._v(" "),a("li",[e._v("output: configure outfile param. Default value: output.json")])]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-5"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("the CSV file to convert. It must be provided")]),e._v(" "),a("td",[e._v("``")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("path to the generated json file")]),e._v(" "),a("td",[a("code",[e._v("output.json")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("delimiter")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v(";")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("disableCommonFields")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("True")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("generate_id")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("False")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("index_name")])]),e._v(" "),a("td",[e._v("name of the destination index at Elastic")]),e._v(" "),a("td",[a("code",[e._v("SOURCE")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-query-and-tag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-query-and-tag"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.query_and_tag")])]),e._v(" "),a("p",[e._v("Query elastic, select all related documents (containers, attachments..) and tag all of them. You must indexer.save the output")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-6"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("index_name")])]),e._v(" "),a("td",[e._v("The name of the index to query. The name will be converted to lower case, since ES only accept lower case names. Wildcards can be used")]),e._v(" "),a("td",[a("code",[e._v("SOURCE")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("The output of the job. You must indexer.save this file")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.json")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("query")])]),e._v(" "),a("td",[e._v("The query to run in lucene language")]),e._v(" "),a("td",[a("code",[e._v("*")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("tag")])]),e._v(" "),a("td",[e._v("The name of the tag")]),e._v(" "),a("td",[a("code",[e._v("EXPORT")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("tag_field")])]),e._v(" "),a("td",[e._v("Save tags in this field. Use one of the registered tag fields in ElasticSearchBulkIndex (hints: tags-new or blindsearches-new)")]),e._v(" "),a("td",[a("code",[e._v("tags-new")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("max_results")])]),e._v(" "),a("td",[e._v("If the query will return more than this number of results, stop.")]),e._v(" "),a("td",[a("code",[e._v("1000")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-export"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.export")])]),e._v(" "),a("p",[e._v("Query elastic, select all documents matching a query and export them to a JSON.\nThe target JSON file may then be saved to any ElasticSearch server using "),a("code",[e._v("indexer.save")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-7"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("The output of the job. You must indexer.save this file")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/export.json")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("index_name")])]),e._v(" "),a("td",[e._v("The name of the index to query. The name will be converted to lower case, since ES only accept lower case names. Wildcards can be used")]),e._v(" "),a("td",[a("code",[e._v("SOURCE")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("query")])]),e._v(" "),a("td",[e._v("The query to run in lucene language")]),e._v(" "),a("td",[a("code",[e._v("*")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("max_results")])]),e._v(" "),a("td",[e._v("If the query will return more than this number of results, stop")]),e._v(" "),a("td",[a("code",[e._v("1000")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-tag-and-export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-tag-and-export"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.tag_and_export")])]),e._v(" "),a("p",[e._v("Runs "),a("code",[e._v("indexer.query_and_tag")]),e._v(", "),a("code",[e._v("indexer.save")]),e._v(", "),a("code",[e._v("indexer.export")]),e._v(".\nIn order to save the results to Elastic, you must run "),a("code",[e._v("indexer.save")]),e._v(" to any desired ES_HOST on "),a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/exported.json")])]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-8"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("interfile")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/original.json")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("query")])]),e._v(" "),a("td",[e._v("The query to run. See "),a("code",[e._v("indexer.query_and_tag")]),e._v(".")]),e._v(" "),a("td",[a("code",[e._v("*")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("index_name")])]),e._v(" "),a("td",[e._v("The name of the index to query")]),e._v(" "),a("td",[a("code",[e._v("SOURCE")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("tag")])]),e._v(" "),a("td",[e._v("The name of the tag. See "),a("code",[e._v("indexer.query_and_tag")]),e._v(".")]),e._v(" "),a("td",[a("code",[e._v("EXPORT")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("The output of the job. You must indexer.save this file")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/exported.json")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-blind-searches"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-blind-searches"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.blind_searches")])]),e._v(" "),a("p",[e._v("Blind searches on a parsed JSON file, result from indexer.save.")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-9"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("keyword_file")])]),e._v(" "),a("td",[e._v("The name of the keyword file in the searches directory.")]),e._v(" "),a("td",[a("code",[e._v("kw")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("Save the results to this file, ready to be used with indexer.save")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.blindsearches.json")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-index-timeline-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-index-timeline-body"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.index_timeline_body")])]),e._v(" "),a("p",[e._v("Index a BODY file provided in the path.\nSince "),a("code",[e._v("_id")]),e._v(" for each file is shared with "),a("code",[e._v("indexer_directory")]),e._v(" results,\ninformation from both timeline and Tika parsing may be combined and updated.")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-10"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td"),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.timeline.json")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-pst"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-pst"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.pst")])]),e._v(" "),a("p",[e._v("Parse PST files previously exported with indexer.export_pst.\nThis module also calls to indexer.pst.secondary.")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-11"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("A JSON file with all the information in the mailboxes, ready to be imported into ElasticSearch")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.pst.json")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("path")])]),e._v(" "),a("td",[e._v("An absolute path to pstfiles.csv, output from indexer.export_pst")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/mail/pstfiles.csv")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-export-pst"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-export-pst"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.export_pst")])]),e._v(" "),a("p",[e._v("Export contents of every pst or ost file found in a source using pffexport.\nThis job depends on plugins.common and the succesful generation of alloc_files.")]),e._v(" "),a("h4",{attrs:{id:"configurable-parameters-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configurable-parameters-12"}},[e._v("#")]),e._v(" Configurable parameters")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Default")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("outfile")])]),e._v(" "),a("td",[e._v("A CSV containing the path to the actual pstfiles and their reference")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/mail/pstfiles.csv")])])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("outdir")])]),e._v(" "),a("td",[e._v("Export the contents of PST files to this directory")]),e._v(" "),a("td",[a("code",[e._v("MORGUE/CASENAME/SOURCE/output/mail/")])])])])]),e._v(" "),a("h3",{attrs:{id:"job-indexer-mails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-mails"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.mails")])]),e._v(" "),a("p",[e._v("Export, parse and characterize contents of every pst or ost file found in a source. Runs export_pst, pst and characterize_mails")]),e._v(" "),a("p",[e._v("All PSTs and OST files in the source are exported to MORGUE/CASENAME/SOURCE/output/mail,\nand a CSV file describing the PSTs will created there.\nThe JSON with the parsed mails will be in MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.pst.json.")]),e._v(" "),a("h3",{attrs:{id:"job-indexer-pst-item2eml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-indexer-pst-item2eml"}},[e._v("#")]),e._v(" Job "),a("code",[e._v("indexer.pst_item2eml")])]),e._v(" "),a("p",[e._v("Convert a message extracted from a pst to an eml file.")]),e._v(" "),a("ul",[a("li",[e._v("path: the path to a Message folder")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This chapter was created automatically using "),a("code",[e._v("autodoc.sh")]),e._v(". Do not modify manually this file.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);