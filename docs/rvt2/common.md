
# Section common

This plugin includes common jobs to all operation systems.

You can use this plugin to:

- Mount disks an partitions
- Characterize sources
- Get timeline for filesystems
- Parse browsers and social media apps
- Search keywords in disk strings

Many other plugins use jobs and modules from this plugin to retrieve general information.


## Jobs

- ``mount``: Mount all partitions of a disk image.
- ``umount``: Unmount all partitions of a disk image
- ``fs_timeline``: Generate a timeline of a filesystem according to MFT.
- ``mft_timeline``: Generate a timeline from an $MFT file.
- ``allocfiles``: Generate allocated files in a disk image
- ``characterize``: Describes basic information about disk and partitions.
- ``strings``: Extract all strings of printable characters (ascii and unicode) from disk data.
- ``search_strings``: Search a predefined set of keywords in an image strings.
- ``search_email``: Search emails patterns in strings
- ``search_accounts``: Search account patterns in strings
- ``search_gmail``: Search gmail specific parameters in strings
- ``search_output``: Search regular expressions in a source output directories, except for strings, searches and parser folders.
- ``browsers``: Parse history, downloads and cookies from most used browsers: Chrome, Firefox, Safari, Edge, InternetExplorer
- ``characterize_mails``: Create basic summary about mail accounts from a source.
- ``skype``: Extract contacts, messages, calls from Skype databases
- ``skype.maindb``: Auxiliary job to call all queries to skype main.db
- ``teams``: Extract contacts, messages, calls from Teams databases
- ``mywindows.chrome_hindsight``: Extract information about Chrome's history, cache, downloads and extensions

### Job `mount`

Mount all partitions of a disk image.

See plugins.common.RVT_mount.Mount module for more parameters.

Examples:

- Mount all partitions in an image: `rvt2 --source 01 -j mount`
- Mount an image with a bitlocker partition: `rvt2 --source 01 -j mount --params recovery_keys=0000-1111-....`

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|If provided, it is an absolute path to the image to mount. If not provided, mount `MORGUE/images/CASENAME/SOURCE.extension`, where extension is 001, dd, raw, aff, aff4, vmdx (experimental) or zip|``|
|`vss`|If True and the image is a Windows OS, mount Virtual Shadows|`False`|
|`recovery_keys`|comma separated list of recovery keys for bitlocker encrypted partitions|``|
|`password`|password for FileVault encrypted volume|``|
|`partitions`|comma separated list of partitions to mount. Ex: "p03,p05,v1p05"|``|

### Job `umount`

Unmount all partitions of a disk image

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|ignored|``|
|`mountdir`|unmount all mounted partitions in mountdir. Can be set on "DEFAULT" configuration option|`MORGUE/CASENAME/SOURCE/mnt`|

### Job `fs_timeline`

Generate a timeline of a filesystem according to MFT.

The output will be in "MORGUE/CASENAME/SOURCE/output/timeline". In this directory:

- `MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_BODY.csv`: The BODY file, created by fls: for each file in the source, a line including all its timestamps
- `MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_TL.csv`: The timeline file, created by mactime: actions "macb" on all files in the source, ordered by date
- `MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_hour_sum.csv`: stats on the timeline file, grouped by hours

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|If provided, it is the imagefile or device. If not, the module uses MORGUE/images/CASENAME/SOURCE.extension, where extension is 001, dd, raw, aff, aff4, zip or vmdx|``|
|`vss`|process Volume Shadow Snapshots|`False`|
|`outdir`|Save body and timeline this directory. Many other modules depend on this files. Do not change outdir unless you know what you are doing|`MORGUE/CASENAME/SOURCE/output/timeline`|

### Job `mft_timeline`

Generate a timeline from an $MFT file.

The output will be in "MORGUE/CASENAME/SOURCE/output/timeline". In this directory:

- `MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_BODY.csv`: The BODY file, created by fls: for each file in the source, a line including all its timestamps
- `MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_TL.csv`: The timeline file, created by mactime: actions "macb" on all files in the source, ordered by date

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`mft_parser`|Application to parse MFT|`/home/juanvi/Incide/Projects/analyzeMFT`|
|`mactime`||`mactime`|
|`mft_file`|Path to $MFT file. If not defined, the module uses MORGUE/CASENAME/SOURCE/mnt/p01/$MFT|`MORGUE/CASENAME/SOURCE/mnt/p01/\$MFT`|
|`outdir`|Save body and timeline this directory. Many other modules depend on this files. Do not change outdir unless you know what you are doing|`MORGUE/CASENAME/SOURCE/output/timeline`|
|`source`||`SOURCE`|
|`mountdir`||`MORGUE/CASENAME/SOURCE/mnt`|

### Job `allocfiles`

Generate allocated files in a disk image

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`outdir`|path to directory where generated files will be stored. Many other modules depend on this files. Do not change outdir unless you know what you are doing|`MORGUE/CASENAME/SOURCE/output/auxdir`|

### Job `characterize`

Describes basic information about disk and partitions.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path to file were results are stored (in markdown format)|`MORGUE/CASENAME/SOURCE/analysis/characterize.md`|
|`template_file`|mako template to display results|`templates/disk.mako`|
|`file_exists`||`OVERWRITE`|

### Job `strings`

Extract all strings of printable characters (ascii and unicode) from disk data.
Output files are organized by partition, encoding and allocation status in
`MORGUE/CASENAME/SOURCE/output/strings`

If a path is provided, search for strings in that path. This is useful, for example, for filesystems
that need an intermediate file to be mounted, such as a bitlocker partition.

If the path is not provided or it is empty, guess the image file from the files avaible in `MORGUE/images/CASENAME`.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|If provided, the absolute path to the image file. If not, search for image files in the imagedir|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/strings`|

### Job `search_strings`

Search a predefined set of keywords in an image strings.

The list of keywords must be defined in a separated file, including the
keyword label and (optionally) a regex as "LABEL:::REGEX".  If the regex is
not provided, the modules uses the label as the regex to search.

Example of keyword file:

```
myfirstword
mysecondword:::[Mm]y.econd{1,2}word
```

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|Path to file containing the list of keywords to perform the search on|``|
|`keyfile`|Same as *path*. *path* will have precendence if both are defined|`MORGUE/CASENAME/searches_files/keywords`|
|`outdir`|Path to directory where generated match files will be stored|`MORGUE/CASENAME/SOURCE/output/searches`|
|`outdir_report`|Path to directory where generated report files will be stored|`MORGUE/CASENAME/SOURCE/analysis/searches`|
|`strings_dir`|Path to directory where generated string files should be stored. See job "strings"|`MORGUE/CASENAME/SOURCE/output/strings`|

### Job `search_email`

Search emails patterns in strings

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/analysis/searches`|

### Job `search_accounts`

Search account patterns in strings

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/analysis/searches`|

### Job `search_gmail`

Search gmail specific parameters in strings

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/analysis/searches`|

### Job `search_output`

Search regular expressions in a source output directories, except for strings, searches and parser folders.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to file containing the list of keywords to perform the search on|``|
|`keyfile`|same as *path*. *path* will have precendence if both are defined|`MORGUE/CASENAME/searches_files/keywords`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/analysis/searches`|

### Job `browsers`

Parse history, downloads and cookies from most used browsers: Chrome, Firefox, Safari, Edge, InternetExplorer
When parsing VSS, please introduce the corresponding `outdir` and `vss=False`

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/browsers`|

### Job `characterize_mails`

Create basic summary about mail accounts from a source.

Includes:
- Number of mails sended or received to/for every mail account found
- Number of mails interchanged between every pair of mail accounts

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to a previously generated csv describing all mails. See "indexer.pst" job|``|
|`n`|number of top occurences to show|`50`|
|`summary_file`|output file for the summary|`MORGUE/CASENAME/SOURCE/analysis/mail/summary_mails.md`|
|`outfile`|output file with statistics for every mail account|`MORGUE/CASENAME/SOURCE/analysis/mail/mail_accounts.csv`|

### Job `skype`

Extract contacts, messages, calls from Skype databases

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/skype`|

### Job `skype.maindb`

Auxiliary job to call all queries to skype main.db

### Job `teams`

Extract contacts, messages, calls from Teams databases

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/teams`|

### Job `mywindows.chrome_hindsight`

Extract information about Chrome's history, cache, downloads and extensions

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/browsers`|


:::warning
This chapter was created automatically using `rvt2 -j help common --params show_vars="" template_file="templates/help_section_complete.mako" outfile="docs/rvt2/common.md"`. Do not modify manually this file.
:::

