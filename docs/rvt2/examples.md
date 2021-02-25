# Examples

## General configuration

## Common jobs

## Windows

## Indexation

RVT2 provides a set of jobs designated to create *json* documents suitable to be indexed at an Elastic server.

The indexing process to ElasticSearch with RVT2 is generally divided in two steps:
- Generate, from any kind of data (csv files, parsed directories, artifacts results, ...), a resulting *json* document with a format suitable to be indexed at ElasticSearch.
- Save or update the previous document to ElasticSearch 

### Getting files metadata inforamtion with Tika

As stated in section [Configuration and Running](https://incidedigital.github.io/rvt2-docs/rvt2/configure.html), if you use the Tika module, you must run Tika in server mode by running run.sh inside the $RVT2_HOME/external_tools/tika directory.

- Parse all the files in a directory (and subdirectories). Set the index_name to a custom one. Output results will be found at `MORGUE/CASENAME/SOURCE/output/indexer/SOURCE.json`.

`rvt2 -j indexer.directory DIRECTORY_TO_BE_PARSED --params name="my_index"`

- Parse only some categories of files whithin a certain directory and set the output filename. This is useful when the analyst is interested only in some kind of files, and reduces the number of files parsed significantly. Predefined categories can be found in `conf/file_categories.cfg` and include *office, executable, compressed, plain, audio, video, image, email, crypto, geographic* and *database*.

`rvt2 -j indexer.directory DIRECTORY_TO_BE_PARSED --params filter="email,office" outfile="/morgue/mycase/mysource/data_to_be_indexed.json"`

### Saving results to an instance of ElasticSearch.

Before using any of these jobs it is advisable to configure the ElasticSearch server and credentials that are going to be used. These parameters are defined in the `indexer` configuration section:

```
[indexer]
es_hosts: http://localhost:9200
es_username:
es_password:
```

They can be set by creating a new configuration file (see section [Configuration and Running](https://incidedigital.github.io/rvt2-docs/rvt2/configure.html)) or by invoking any job with additional global parameters:

`rvt2 -j INDEX_JOB --globals indexer:es_hosts=ELASTIC_SERVER_URL --globals indexer:es_username=USERNAME --globals indexer:es_password=PASSWORD`

Whichever the origin of the json file previously generated, `indexer.save` job should be used to actually save and index those results.

- Save a previously indexed database in an ElasticSearch server

`rvt2 -j indexer.save my_indexed_db.json`

- Save file to ElasticSearch with a custom mapping

`rvt2 -j indexer.save my_indexed_db.json --params mapping=/home/myuser/mymapping.json`

### Parsing mailbox

Thanks to `pffexport` it is possible to parse mailbox from standard formats such as `pst`, `ost` or `nst`. Then, results can be indexed for analysis.

- Parse and index all mailboxes (*pst, ost, nst*) from a mounted source:

```
rvt2 -j indexer.mails
rvt2 -j indexer.save /morgue/mycase/mysource/output/mail/pstfiles.csv
``` 

:::info
If you only need to parse some of the pst files inside a mounted source, it is recommended to create a new source containing only links to those files, and then run `indexer.mails` on that new source.
:::

### Converting data to ElasticSearch json formats

There's a few jobs available to transform common data file formats to a json structure as ElasticSearch demands in order to be indexed.

- Convert and index a CSV file with custom index name

`rvt2 -j indexer.convert_csv myfile.csv --params index_name="mydata" outfile="/morgue/mycase/mysource/mydata.json"`

### Blind Searches

- Search for keywords on a parsed *json* file. Kw must be written in a file, one for each line. Resulting output file will contain a subselection of matching entries from the original file.

`rvt2 -j indexer.blind_searches JSON_FILE.json --params keyword_file="PATH_TO_KW_FILE" outfile="results.json"`

- Query Elastic indexes, tag matches and export results. 

`rvt2 -j indexer.tag_and_export --params index_name="*-myindexes" query='"term1" AND *term2*' tag="CUSTOM_TAG"`

Original index will be updated with tags inserted to matching documents. In addition, the generated json output, by default at `output/indexer/exported.json`, containing only matching documents, can be indexed elsewhere using `indexer.save`.

### Creating a timeline of events from different artifacts

Currently, many parsed results from various artifacts (specially those coming from Windows partitions), can be adapted to merge in a single index following [Elastic Common Schema](https://www.elastic.co/guide/en/ecs/current/index.html) mapping. This new timeline of any timestamped event extracted from a source may prove a great resource in any investigation.

:::info
Any artifacts must had been parsed before. This job assumes the generated output is located at default locations when searching for the data to index.
:::

- Index all available artifacts creating an ECS timeline

```
rvt2 -j events.all
rvt2 -j events.save
```

## Do not use a general directory structure

The default configuration uses the folder structure introduced in this document.
This structure is useful in a multiuser environment because you know where you
are going to find images and output files.

Nevertheless, sometimes you need a fast analyze on a directory.
For example, in a directory there is a file `myiphone.zip` which includes the
backup of an iPhone. In this case, you can run on the same directory:

```
rvt2 --source myiphone --globals imagedir=$(pwd) --globals casedir=$(pwd) -j ios.unback -- myiphone.zip
```

That is: define imagedir and casedir as current directory, unback and analyze
in directory `myiphone` (source name) the file `myiphone.zip`.

`--globals` overwrite a variable in all configuration files. Its syntax is
`[sectionname:]varname=value`.  If `sectionname` is not provided, `DEFAULT` is
used.



