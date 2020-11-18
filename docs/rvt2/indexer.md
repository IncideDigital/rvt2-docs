
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

- ``indexer.tag_and_export``: Runs `indexer.query_and_tag`, `indexer.save`, `indexer.export` and `indexer.save` to the remote ES.
- ``indexer.parse_file``: Parse a file and show the result in the standard output. Use for debugging.
- ``indexer.parse_directory``: Parse a directory and show the result in the standard output. Use for debugging.
- ``indexer.directory``: Parse a directory and save in `MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.json`. This file is compatible with indexers.
- ``indexer.save``: Save a previously indexed database in an ElasticSearch server. Alternative to `elasticdump`.
- ``indexer.save_directory``: Run indexer.directory and then indexer.save with default parameters.
- ``indexer.convert_json``: Convert a JSON file to a JSON suitable to be sent to ElasticSearch using indexer.save
- ``indexer.convert_csv``: Convert a CSV file to a JSON suitable to be sent to ElasticSearch using indexer.save
- ``indexer.query_and_tag``: Query elastic, select all related documents (containers, attachments..) and tag all of them. You must indexer.save the output
- ``indexer.export``: Query elastic, select all documents matching a query and export them to a JSON.
- ``indexer.blind_searches``: Blind searches on a parsed JSON file, result from indexer.save.
- ``indexer.index_timeline_body``: Index a BODY file provided in the path.
- ``indexer.pst``: Parse PST files previously exported with indexer.export_pst.
- ``indexer.export_pst``: Export contents of every pst or ost file found in a source using pffexport.
- ``indexer.mails``: Export, parse and characterize contents of every pst or ost file found in a source
- ``indexer.pst_item2eml``: Convert a message extracted from a pst to an eml file.

### Job `indexer.tag_and_export`

Runs `indexer.query_and_tag`, `indexer.save`, `indexer.export` and `indexer.save` to the remote ES.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`interfile`||`original.json`|
|`query`|The query to run. See `indexer.query_and_tag`.|`*`|
|`tag`|The name of the tag. See `indexer.query_and_tag`.|`exported`|
|`target`|The output wil be saved in file `target.json` and directory `target`. See `indexer.export`.|`exported`|
|`es_export`|The URL to the remote ES server. **You MUST overwrite this param**.|`https://192.168.109.29:9200`|

### Job `indexer.parse_file`

Parse a file and show the result in the standard output. Use for debugging.

### Job `indexer.parse_directory`

Parse a directory and show the result in the standard output. Use for debugging.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`filter`|List of file categories to parse. If not provided, parse all files. Predefined categories can be found in "file_categories.cfg" configuration file|``|

### Job `indexer.directory`

Parse a directory and save in `MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.json`. This file is compatible with indexers.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|The path to the directory to parse|``|
|`outfile`|Save the result of the parsing in this file|`MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.json`|
|`name`|The name of the indice to save the parsed files|`SOURCE`|
|`rvtindex`|The name of the indice to save metadata. Set to empty to not save metadata.|`rvtindexer`|
|`restartable`|If True, parsing can be restarted from the last error. Use with care!|`False`|
|`filter`|List of file categories to parse. If not provided, parse all files. Predefined categories can be found in "file_categories.cfg" configuration file|``|

### Job `indexer.save`

Save a previously indexed database in an ElasticSearch server. Alternative to `elasticdump`.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|The path to a JSON file output from indexer.directory.|``|
|`restartable`|In True, the index can be restarted from an error. Use with care!|`False`|
|`mapping`|Path to the file describing the mapping of fields to ElasticSearch. The mapping can only be used when the index is created.|`/home/jvera/rvt2/plugins/indexer/es-settings.json`|
|`name`|Index name in ElasticSearch. If index does not exists, create it.|`SOURCE`|
|`cooloff_every`|After this number of seconds, wait cooloff_seconds.|`300`|
|`cooloff_seconds`|Seconds to wait to cool off ElasticSearch.|`5`|
|`es_hosts`|List of space separated ElasticSearch servers. Use format "http(s?)://HOST:PORT".|`https://elastic.incide.es:443`|

### Job `indexer.save_directory`

Run indexer.directory and then indexer.save with default parameters.

### Job `indexer.convert_json`

Convert a JSON file to a JSON suitable to be sent to ElasticSearch using indexer.save

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`output.json`|
|`disableCommonFields`||`True`|
|`generate_id`||`False`|
|`index_name`||`SOURCE`|

### Job `indexer.convert_csv`

Convert a CSV file to a JSON suitable to be sent to ElasticSearch using indexer.save

* path: the CSV file to convert. It must be provided
* output: configure outfile param. Default value: output.json

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`output.csv`|
|`delimiter`||`;`|
|`disableCommonFields`||`True`|
|`generate_id`||`False`|

### Job `indexer.query_and_tag`

Query elastic, select all related documents (containers, attachments..) and tag all of them. You must indexer.save the output

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|The output of the job. You must indexer.save this file|`MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.json`|
|`query`|The query to run|`*`|
|`tag`|The name of the tag|`EXPORT`|
|`tag_field`|Save tags in this field. Use one of the registered tag fields in ElasticSearchBulkIndex (hints: tags-new or blindsearches-new)|`tags-new`|
|`max_results`|If the query will return more than this number of results, stop.|`1000`|

### Job `indexer.export`

Query elastic, select all documents matching a query and export them to a JSON.
The target JSON file must be saved to another ElasticSearch using `indexer.save`.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`query`|The query to run.|`*`|
|`target`|The output wil be saved in file `target.json` and directory `target`.|`export`|

### Job `indexer.blind_searches`

Blind searches on a parsed JSON file, result from indexer.save.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`keyword_file`|The name of the keyword file in the searches directory.|`kw`|
|`outfile`|Save the results to this file, ready to be used with indexer.save|`MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.blindsearches.json`|

### Job `indexer.index_timeline_body`

Index a BODY file provided in the path.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.timeline.json`|

### Job `indexer.pst`

Parse PST files previously exported with indexer.export_pst.
This module also calls to indexer.pst.secondary.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|A JSON file with all the information in the mailboxes, ready to be imported into ElasticSearch|`MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.pst.json`|

### Job `indexer.export_pst`

Export contents of every pst or ost file found in a source using pffexport.
This job depends on plugins.common and the succesful generation of alloc_files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|A CSV containing the path to the actual pstfiles and their reference|`MORGUE/CASENAME/SOURCE/output/mail/pstfiles.csv`|
|`outdir`|Export the contents of PST files to this directory|`MORGUE/CASENAME/SOURCE/output/mail/`|

### Job `indexer.mails`

Export, parse and characterize contents of every pst or ost file found in a source

### Job `indexer.pst_item2eml`

Convert a message extracted from a pst to an eml file.
* path: the path to a Message folder


:::warning
This chapter was created automatically using `rvt2 -j help indexer --params show_vars="" template_file="templates/help_section_complete.mako" outfile="rvt2/indexer.md"`. Do not modify manually this file.
:::

