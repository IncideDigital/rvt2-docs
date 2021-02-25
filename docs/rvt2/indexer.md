
# Section indexer

This plugin parses files using [Tika](https://tika.apache.org/index.html) and indexes documents in [ElasticSearch](https://www.elastic.co).

You can use this plugin:

- To parse all documents in a directory with Tika and index the results in Elastic. This is the main use of the classes in this plugin.
- To parse documents with Tika and do something else with the result. For example, show a document's metadata in the screen.
- To index the output of other RVT2 modules. For example, you can index the output of the PST parser.

## Running

If you use the Tika module, you must run Tika in server mode by running `run.sh` inside the `$RVT2_HOME/external_tools/tika` directory. The first time you run this command, it will download Tika.

If you use the ElasticSearch indexer, you'll need an ElasticSearch >=6 server somewhere in the network. In some cases, ElasticSearch might need a special file system configuration. Also, if you are planning to use the [rvt2-analyzer](../analyzer/), the ElasticSearch must allow CORS requests at least from the domain of the analyzer. An example script to run ElasticSearch can be found inside the directory `$RVT2_HOME/external_tools/elastic`.

## Jobs

- ``indexer.parse_file``: Parse a file and show the result in the standard output. Use for debugging.
- ``indexer.parse_directory``: Parse a directory and show the result in the standard output. Use for debugging.
- ``indexer.directory``: Parse a directory and save in `/morgue/mycase/mysource/output/indexer/mysource.json`. This file is compatible with indexers.
- ``indexer.save``: Save a previously indexed database in an ElasticSearch server. Alternative to `elasticdump`.
- ``indexer.save_directory``: Run indexer.directory and then indexer.save with default parameters.
- ``indexer.convert_json``: Convert a JSON file to a JSON suitable to be sent to ElasticSearch using indexer.save
- ``indexer.convert_csv``: Convert a CSV file to a JSON suitable to be sent to ElasticSearch using indexer.save
- ``indexer.query_and_tag``: Query elastic, select all related documents (containers, attachments..) and tag all of them. You must indexer.save the output
- ``indexer.export``: Query elastic, select all documents matching a query and export them to a JSON.
- ``indexer.tag_and_export``: Runs `indexer.query_and_tag`, `indexer.save`, `indexer.export`.
- ``indexer.blind_searches``: Blind searches on a parsed JSON file, result from indexer.save.
- ``indexer.index_timeline_body``: Index a BODY file provided in the path.
- ``indexer.pst``: Parse PST files previously exported with indexer.export_pst.
- ``indexer.export_pst``: Export contents of every pst or ost file found in a source using pffexport.
- ``indexer.mails``: Export, parse and characterize contents of every pst or ost file found in a source. Runs export_pst, pst and characterize_mails
- ``indexer.pst_item2eml``: Convert a message extracted from a pst to an eml file.

### Job `indexer.parse_file`

Parse a file and show the result in the standard output. Use for debugging.

### Job `indexer.parse_directory`

Parse a directory and show the result in the standard output. Use for debugging.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`filter`|List of file categories to parse. If not provided, parse all files. Predefined categories can be found in "file_categories.cfg" configuration file|``|

### Job `indexer.directory`

Parse a directory and save in `/morgue/mycase/mysource/output/indexer/mysource.json`. This file is compatible with indexers.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|The path to the directory to parse|``|
|`outfile`|Save the result of the parsing in this file|`/morgue/mycase/mysource/output/indexer/mysource.json`|
|`name`|The name of the indx to save the parsed files|`mysource`|
|`rvtindex`|The name of the index to save metadata. Set to empty to not save metadata.|`rvtindexer`|
|`restartable`|If True, parsing can be restarted from the last error. Use with care!|`False`|
|`filter`|List of file categories to parse. If not provided, parse all files. Predefined categories can be found in "file_categories.cfg" configuration file|``|

### Job `indexer.save`

Save a previously indexed database in an ElasticSearch server. Alternative to `elasticdump`.

You can define the location of the elasticsearch server and username/password using:

`--globals indexer:es_hosts="https://elastic.incide.es:443" --globals indexer:es_username=USERNAME --globals indexer:es_password=PASSWORD`

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|The path to a JSON file output from indexer.directory.|``|
|`restartable`|In True, the index can be restarted from an error. Use with care!|`False`|
|`mapping`|Path to the file describing the mapping of fields to ElasticSearch. The mapping can only be used when the index is created.|`./plugins/indexer/es-settings.json`|
|`name`|Index name in ElasticSearch. If index does not exists, create it.|`mysource`|
|`cooloff_every`|After this number of seconds, wait cooloff_seconds.|`300`|
|`cooloff_seconds`|Seconds to wait to cool off ElasticSearch.|`5`|
|`tabs`|Space separated tabs to add to the rvt2-analyzer. Available tabs can be found at "./plugins/indexer/analyzer-tabs.json". Examples: files, emails, apache, iis.|``|

### Job `indexer.save_directory`

Run indexer.directory and then indexer.save with default parameters.

### Job `indexer.convert_json`

Convert a JSON file to a JSON suitable to be sent to ElasticSearch using indexer.save

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|the CSV file to convert. It must be provided|``|
|`outfile`|path to the generated json file|`output.json`|
|`disableCommonFields`||`True`|
|`generate_id`||`False`|
|`index_name`|name of the destination index at Elastic|`mysource`|

### Job `indexer.convert_csv`

Convert a CSV file to a JSON suitable to be sent to ElasticSearch using indexer.save

* path: the CSV file to convert. It must be provided
* output: configure outfile param. Default value: output.json

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|the CSV file to convert. It must be provided|``|
|`outfile`|path to the generated json file|`output.json`|
|`delimiter`||`;`|
|`disableCommonFields`||`True`|
|`generate_id`||`False`|
|`index_name`|name of the destination index at Elastic|`mysource`|

### Job `indexer.query_and_tag`

Query elastic, select all related documents (containers, attachments..) and tag all of them. You must indexer.save the output

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`index_name`|The name of the index to query. The name will be converted to lower case, since ES only accept lower case names. Wildcards can be used|`mysource`|
|`outfile`|The output of the job. You must indexer.save this file|`/morgue/mycase/mysource/output/indexer/mysource.json`|
|`query`|The query to run in lucene language|`*`|
|`tag`|The name of the tag|`EXPORT`|
|`tag_field`|Save tags in this field. Use one of the registered tag fields in ElasticSearchBulkIndex (hints: tags-new or blindsearches-new)|`tags-new`|
|`max_results`|If the query will return more than this number of results, stop.|`1000`|

### Job `indexer.export`

Query elastic, select all documents matching a query and export them to a JSON.
The target JSON file may then be saved to any ElasticSearch server using `indexer.save`.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|The output of the job. You must indexer.save this file|`/morgue/mycase/mysource/output/indexer/export.json`|
|`index_name`|The name of the index to query. The name will be converted to lower case, since ES only accept lower case names. Wildcards can be used|`mysource`|
|`query`|The query to run in lucene language|`*`|
|`max_results`|If the query will return more than this number of results, stop|`1000`|

### Job `indexer.tag_and_export`

Runs `indexer.query_and_tag`, `indexer.save`, `indexer.export`.
In order to save the results to Elastic, you must run `indexer.save` to any desired ES_HOST on `/morgue/mycase/mysource/output/indexer/exported.json`

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`interfile`||`/morgue/mycase/mysource/output/indexer/original.json`|
|`query`|The query to run. See `indexer.query_and_tag`.|`*`|
|`index_name`|The name of the index to query|`mysource`|
|`tag`|The name of the tag. See `indexer.query_and_tag`.|`EXPORT`|
|`outfile`|The output of the job. You must indexer.save this file|`/morgue/mycase/mysource/output/indexer/exported.json`|

### Job `indexer.blind_searches`

Blind searches on a parsed JSON file, result from indexer.save.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`keyword_file`|The name of the keyword file in the searches directory.|`kw`|
|`outfile`|Save the results to this file, ready to be used with indexer.save|`/morgue/mycase/mysource/output/indexer/mysource.blindsearches.json`|

### Job `indexer.index_timeline_body`

Index a BODY file provided in the path.
Since `_id` for each file is shared with `indexer_directory` results,
information from both timeline and Tika parsing may be combined and updated.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`/morgue/mycase/mysource/output/indexer/mysource.timeline.json`|

### Job `indexer.pst`

Parse PST files previously exported with indexer.export_pst.
This module also calls to indexer.pst.secondary.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|A JSON file with all the information in the mailboxes, ready to be imported into ElasticSearch|`/morgue/mycase/mysource/output/indexer/mysource.pst.json`|
|`path`|An absolute path to pstfiles.csv, output from indexer.export_pst|`/morgue/mycase/mysource/output/mail/pstfiles.csv`|

### Job `indexer.export_pst`

Export contents of every pst or ost file found in a source using pffexport.
This job depends on plugins.common and the succesful generation of alloc_files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|A CSV containing the path to the actual pstfiles and their reference|`/morgue/mycase/mysource/output/mail/pstfiles.csv`|
|`outdir`|Export the contents of PST files to this directory|`/morgue/mycase/mysource/output/mail/`|

### Job `indexer.mails`

Export, parse and characterize contents of every pst or ost file found in a source. Runs export_pst, pst and characterize_mails

All PSTs and OST files in the source are exported to /morgue/mycase/mysource/output/mail,
and a CSV file describing the PSTs will created there.
The JSON with the parsed mails will be in /morgue/mycase/mysource/output/indexer/mysource.pst.json.

### Job `indexer.pst_item2eml`

Convert a message extracted from a pst to an eml file.
* path: the path to a Message folder

