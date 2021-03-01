# Examples

## General configuration

:::warning
Many of the examples in next sections will presume parameters such as `morgue`, `casename` or even `source` are already defined in local configuration, to simplify RVT2 commands:

The standard job execution in RVT2:
`rvt2 --morgue MORGUE --casename CASENAME --source SOURCE -j JOB`
will be then simplified to: 
`rvt2 -j JOB`
:::

### Do not use a general directory structure

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

## Common jobs

### Mounting disks or forensic images

- Mount all partitions in an image: 

Next extensions are mountable with RVT2: 001, dd, raw, aff, aff4, vmdx (experimental) and zip. Unless an specific path to an image file is provided as an argument, RVT2 will mount the first file with name `mysource.extension` found under `IMAGEDIR/CASE/`.

`rvt2 --source 01 -j mount /path/to/image.dd`

- Mount an image with a bitlocker partition:

`rvt2 --source 01 -j mount --params recovery_keys=0000-1111-....`

- Unmount all partitions of a disk image

`rvt2 --source 01 -j umount`

:::warning
VSS
:::

- Get basic disk information, such as partitions and sizes

`rvt2 --source 01 -j characterize`


### File System Timeline

- Generate timeline from disk image

Given an image file, and regardless of the operation system installed on disk partitions, to generate a filesystem timeline:

`rvt2 --source 01 -j fs_timeline`

:::tip
Three files are generated with timeline parsing:
- The BODY file: for each file in the source, a line including all its timestamps
- The timeline file: actions "macb" on all files in the source, ordered by date
- Summary: Count of files grouped by time_range
:::

- Generate timeline from MFT

In case you only dispose of an MFT file (NTFS filesystem), and no complete disk image, timeline can be generated with:

`rvt2 --source 01 -j mft_timeline /path/to/$MFT`

You can choose which command to use to parse MFT on `mft_timeline` by setting parameter `cmd`.

### Browsers navigation

- Parse history, downloads and cookies from most used browsers (Chrome, Firefox, Safari, Edge, InternetExplorer) on a mounted disk.

`rvt2 --source 01 -j browsers`

:::warning
This job will search for any known browser db file on disk. You must execute `allocfiles` job at some point before running `browsers`.
:::

### Communication apps

- Parse Skype contacts, messages and calls

`rvt2 --source 01 -j skype`

- Parse Microsoft Teams contacts, messages and calls

`rvt2 --source 01 -j teams`

### Searching Strings

:::warning
All jobs searching strings must traverse all disk space and therefore they tend to be VERY SLOW to execute. Be aware that large processing times are expected.
:::

- Search defined keywords over all strings of printable characters (ascii and unicode) from disk data.

First of all, strings must be generated:

`rvt2 --source 01 -j strings`

Create a new file containing all keywords to search. Each line must follow the format `LABEL:::REGEX` (REGEX can be ignored). For example:

```
myfirstkeyword
mysecondkeyword:::[Mm]y.econd{1,2}k?e?y?word
```

Then, generate, run the search for this keywords:

`rvt2 -j search_strings path/to/keyword_file`

Results are presented in different formats for analysis. A single pdf is generated for each keyword, containing all disk blocks where it has been found.

- Search specific keyword patterns, such as email accounts or bank accounts

Assuming `strings` job has already been executed:

`rvt2 -j search_email`
`rvt2 -j search_accounts`

## Windows

Most of Windows jobs share at least the same basic parameters:
- path: Path to artifact file or directory containing artifact files. Default configuration would search on typical locations starting at a Windows partition root directory, on `MORGUE/CASE/SOURCE/mnt/p0x/`
- outdir/outfile: Path to directory or file where generated output will be saved
- volume_id: Volume identifier, such as partition number (Ex: p03). This parameter may be used to classify output from diferent input directories.

Examples:

- Provide a path to a custom folder containing artifacts. This may be useful when only certain artifacts have been gathered, and a complete disk image is not available:

`rvt2 --source 01 -j windows.JOB path/to/artifact_dir`

- Save the results of any parsing job to a custom directory

:::warning
Some RVT2 jobs rely on results from other jobs previously executed. These new jobs will search by default on expected locations for the output of the previous jobs. When setting a different, non default `outdir`, be aware to provide this directory as input to the new related jobs.

As a general rule, it's not advisable to change `outdir` or `outfile` parameter. Jobs description include the default output directory location, so it's always possible to know where to search for the generated results.
:::

`rvt2 --source 01 -j windows.JOB --params outdir="path/to/custom_dir"`

- Separate results from different inputs using `volume_id`. This applies when more than a single artifact of the same kind should be parsed for the same source. For example, when having regular Windows event logs and a new set of them coming from a backup directory.

`rvt2 --source 01 -j windows.JOB path1/to/artifact --params volume_id="p01"`
`rvt2 --source 01 -j windows.JOB path2/to/artifact --params volume_id="p02"`


### Extensive forensic analysys

Given the amount of different Windows artifacts RVT2 is able to parse, in a general analysis it may be recommended to run them all with a single command. The job includes the mounting process.

`rvt2 --casename CASE --source 01 -j windows.preforensics`

:::warning
This job is assuming the main source of analysis is a disk image is located under `MORGUE/IMAGES/CASE/image.dd`. 
:::

All the parsed results will be allocated on its standard output location. See the job's help to obtain the list of artifacts parsed as well as it's output locatins:

`rvt2 -j help windows.preforensics`

Individual artifacts can be parsed separately with any of the jobs explained in next examples, either provinding the artifact file as the argument to the job, or taking the root mouonting directory as the place to automatically search for them.

### Registry

RVT2 uses regripper and other tools to get extract and classify information provided by Windows registry hives. Hives parsed include: SYSTEM, SECURITY, SOFTWARE, SAM, NTUSER.DAT, usrclass.dat, AmCache and SysCache.

- Parse all registry hives on a mounted source

`rvt2 --source 01 -j windows.registry_hives`

- Parse any registry hives under a custom directory. 

You can provide a directory containing hives as an argument. `NTUSER.DAT` and `usrclass.dat` hives are expected to be stored in a username folder inside the directory set as path.

`rvt2 --source 01 -j windows.registry_hives path/to/hives_folder`

- Parse specific hives or some keys only.

Even though `windows.registry_hives` includes all of them, you can opt to only parse some hives:

```
rvt2 -j windows.amcache
rvt2 -j windows.shimcache
rvt2 -j windows.syscache
```

Some specific keys under registry can be obtained using other tools than regripper. They require an external command to run. This command supplied as a parameter is a Python string template accepting variables.  

```
rvt2 -j windows.userassist--params cmd="{executable} -f {hive} --csv {outdir}"
rvt2 -j windows.userassist_report
```

### Lnk and Jumplists

- Search and parse all lnk, automaticdestinations-ms and customdestinations-ms files.

`rvt2 -j windows.recentfiles_default`

:::warning
This job will search for any .lnk file on disk. You must execute `allocfiles` job at some point before running `windows.recentfiles_default`
:::

### Event Logs

- Convert all evtx files to json format

`rvt2 -j windows.events`

- Gather information from related events

`rvt2 -j windows.eventartifacts`

- Convert and gather information

`rvt2 -j windows.events_global`

:::tip
Generated json output can later be indexed for better exploration using job `events.event_logs`. See indexing examples about events_timeline.
:::

### UsnJrnl. The journal log of NTFS

- Parse individual UsnJrnl file (`$UsnJrnl:$J`)

`rvt2 -j windows.usnjrnl`

- Parse UsnJrnl inside a disk image

`rvt2 -j windows.usnjrnl_all`

### Execution artifacts

- Parse all prefetch (.pf) files

`rvt2 -j windows.prefetch`

### SRUM

### Recycle Bin

### Volume Shadow Snapshots (VSS)

- Mount all VSS present on a disk

`rvt2 --source 01 -j mount --params vss=True`

This job will create and mount new sources in the folder structure, one for each VSS found. They will follow the format `SOURCE_vXpY_day_time`. For example, if an VSS is found at partition 03 of source `SOURCE`, that was created at "2020/01/25 12:55:30", a new source `SOURCE_v1p03_200125_125530` will be created on the case directory.

Then, you can run any RVT2 job on this new source as any other regular source. There are only a few jobs that need an special treatment when treatment with VSS sources: `fs_timeline`, `windows.usnjrnl` and `windows.recycle`. They will need the additional parameter `vss=True`.

- Process the filesystem timeline of a VSS

`rvt2 --source 01 -j fs_timeline --params vss=True`

## iOS

### Unbacking iOS backup

- Unback an iOS backup directory or zip. Case without encryption:

The path to the main job is the path to the folder containing the backup, or a .zip file containing the backup.

`rvt2 --source 01 -j ios.unback /path/to/iOS.zip`

- Unback an encrypted iOS backup directory or encrypted zip:

Currently, the RVT2 does not include directly the tools to decrypt an iOS backup and you must install or clone an external tool such as (https://github.com/dinosec/iphone-dataprotection).

`rvt2 --source 01 -j ios.unback /path/to/iOS.zip --params unback_command="PATH_TO_IOS_DATAPROTECTION/python_scripts/backup_tool.py {bk_path} {extract_path}"`

### Parsing iOS databases

`rvt2 -j ios.apollo`
`rvt2 -j ios.databases`

### WhatsApp

- Parse all conversations stored in WhatsApp database

`rvt2 -j ios.whatsapp`

Output is splitted in folders where the name is taken from the group id.

- Convert obtained conversations to html format (reproducing WhatsApp style)

You must identify first which conversation to convert, by getting its `message_group` number.

`rvt2 -j ios.chat_to_html --params message_group=1234`

## Indexation

RVT2 provides a set of jobs designated to create *json* documents suitable to be indexed at an Elastic server.

The indexing process to ElasticSearch with RVT2 is generally divided in two steps:
* Generate, from any kind of data (csv files, parsed directories, artifacts results, ...), a resulting *json* document with a format suitable to be indexed at ElasticSearch.
* Save or update the previous document to ElasticSearch 

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

:::tip
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

- Index all available artifacts creating an ECS timeline

```
rvt2 -j events.all
rvt2 -j events.save
```

:::warning
You must parse any artifact before running `event.all`. This job assumes the generated output is located at default locations when searching for the data to index.
:::





