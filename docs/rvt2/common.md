
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
- ``fs_timeline``: Generate a timeline of a filesystem.
- ``mft_timeline_default``: Generate a timeline for all partitions with a `$MFT` file
- ``mft_timeline``: Generate a timeline given an $MFT file.
- ``allocfiles``: Generate allocated files in a disk image
- ``characterize``: Describes basic information about disk and partitions.
- ``strings``: Extract all strings of printable characters (ascii and unicode) from disk data.
- ``search_strings``: Search a predefined set of keywords over an image strings.
- ``search_email``: Search emails patterns in strings. `strings` job must be executed before
- ``search_accounts``: Search account patterns in strings. `strings` job must be executed before
- ``search_gmail``: Search gmail specific parameters in strings. `strings` job must be executed before
- ``search_output``: Search regular expressions in a source output directories, except for strings, searches and parser folders.
- ``browsers``: Parse history, downloads and cookies from most used browsers: Chrome, Firefox, Safari, Edge, InternetExplorer
- ``characterize_mails``: Create basic summary about mail accounts from a source.
- ``leveldb``: Dumps leveldb
- ``skype``: Extract contacts, messages, calls from Skype databases
- ``teams``: Extract contacts, messages, calls from Teams databases
- ``office365.main``: Converts to MarkDown table format some of the common Office 365 logs extracted as CSV
- ``ip.info``: Get information from files with ip.

## Job `mount`

Mount all partitions of a disk image.

See plugins.common.RVT_mount.Mount module for more parameters.

Examples:

- Mount all partitions in an image: `rvt2 --source 01 -j mount`
- Mount an image with a bitlocker partition: `rvt2 --source 01 -j mount --params recovery_keys=0000-1111-....`

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|If provided, it is an absolute path to the image to mount. If not provided, mount `MORGUE/images/CLIENT/CASENAME/SOURCE.extension`, where extension is 001, dd, raw, aff, aff4, vmdx (experimental), zip or tar|``|
|`vss`|If True and the image is a Windows OS, mount Virtual Shadows|`False`|
|`recovery_keys`|comma separated list of recovery keys for bitlocker encrypted partitions|``|
|`password`|password for FileVault encrypted volume|``|
|`partitions`|comma separated list of partitions to mount. Ex: "p03,p05,v1p05"|``|
|`remove_info`|if True, remove previous information gathered about disk. Use this if any error occurs|`False`|

## Job `umount`

Unmount all partitions of a disk image

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|If provided, it is an absolute path to the image to unmount. If not provided, unmount `MORGUE/images/CLIENT/CASENAME/SOURCE.extension`, where extension is 001, dd, raw, aff, aff4, vmdx (experimental), zip or tar|``|
|`mountdir`|unmount all mounted partitions in mountdir. Can be set on "DEFAULT" configuration option|`MORGUE/CLIENT/CASENAME/SOURCE/mnt`|
|`remove_info`|if True, remove previous information gathered about disk. Use this if any error occurs|`False`|

## Job `fs_timeline`

Generate a timeline of a filesystem.

The output will be in "MORGUE/CLIENT/CASENAME/SOURCE/output/timeline". In this directory:

- `MORGUE/CLIENT/CASENAME/SOURCE/output/timeline/SOURCE_BODY.csv`: The BODY file, created by fls: for each file in the source, a line including all its timestamps
- `MORGUE/CLIENT/CASENAME/SOURCE/output/timeline/SOURCE_TL.csv`: The timeline file, created by mactime: actions "macb" on all files in the source, ordered by date
- `MORGUE/CLIENT/CASENAME/SOURCE/output/timeline/SOURCE_hour_sum.csv`: stats on the timeline file, grouped by hours

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|If provided, it is the imagefile or device. If not, the module uses MORGUE/images/CLIENT/CASENAME/SOURCE.extension, where extension is 001, dd, raw, aff, aff4, zip or vmdx|``|
|`vss`|Create the timeline for a Volume Shadow Snapshots source|`False`|
|`outdir`|Save body and timeline this directory. Many other modules depend on this files. Do not change outdir unless you know what you are doing|`MORGUE/CLIENT/CASENAME/SOURCE/output/timeline`|
|`summary`|Generate a summary of files by `time_range`|`True`|
|`time_range`|Time range for buckets to split the timeline in the summary. Options: `hour` and `day`|`hour`|

## Job `mft_timeline_default`

Generate a timeline for all partitions with a `$MFT` file

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to the $MFT file|``|
|`mactime`||`mactime`|
|`cmd`|external command to parse MFT. It is a Python string template accepting variables "executable", "path", "outdir" and "filename". Variable "filename" is automatically set by the job. The rest are the same ones specified in parameters|`{windows_tool} {executable} -f {path} --body {outdir} --bodyf {filename} --bdl c`|
|`executable`|path to executable app to parse MFT|`./external_tools/windows/MFTECmd/MFTECmd.dll`|
|`windows_tool`|in a non Windows environment, path to the tool needed to run the executable, such as "wine" or "dotnet"|`./external_tools/dotnet/dotnet`|
|`windows_format`|set to True if paths must be converted to windows format for execution. For example using wine|`False`|
|`outdir`|save body and timeline this directory. Many other modules depend on this files. Do not change outdir unless you know what you are doing|`MORGUE/CLIENT/CASENAME/SOURCE/output/timeline`|
|`summary`|generate a summary of files by `time_range`|`True`|
|`time_range`|time range for buckets to split the timeline in the summary. Options: `hour` and `day`|`hour`|
|`drive_letter`||``|
|`source`||`SOURCE`|
|`mountdir`||`MORGUE/CLIENT/CASENAME/SOURCE/mnt`|

## Job `mft_timeline`

Generate a timeline given an $MFT file.

The output will be in "MORGUE/CLIENT/CASENAME/SOURCE/output/timeline". In this directory:

- `MORGUE/CLIENT/CASENAME/SOURCE/output/timeline/SOURCE_BODY.csv`: The BODY file, created by fls: for each file in the source, a line including all its timestamps
- `MORGUE/CLIENT/CASENAME/SOURCE/output/timeline/SOURCE_TL.csv`: The timeline file, created by mactime: actions "macb" on all files in the source, ordered by date
- `MORGUE/CLIENT/CASENAME/SOURCE/output/timeline/SOURCE_hour_sum.csv`: if `summary` parameter is set to True, stats on the timeline file, grouped by `time_range`

Set the external command to run in the parameter `cmd`. At this moment a couple of tools are allowed:
- `MFTECmd.exe`: Requires Windows environment. Recommended configuration:
- `executable`: `./external_tools/windows/MFTECmd.exe`,
- `cmd`: `env WINEDEBUG=fixme-all wine {executable} -f {path} --body {outdir} --bodyf {filename} --bdl c --nl`
- `windows_format`: True
- `drive_letter`: `c:`

- `analyzeMFT.py`: Recommended configuration:
- `executable`: `./plugins/external/analyzeMFT/analyzeMFT.py`,
- `cmd`: `{executable} -f {path} --bodystd --bodyfull -b {outdir}/{filename}`
- `windows_format`: False
- `drive_letter`: ``

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to the $MFT file|``|
|`mactime`||`mactime`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|
|`cmd`|external command to parse MFT. It is a Python string template accepting variables "executable", "path", "outdir" and "filename". Variable "filename" is automatically set by the job. The rest are the same ones specified in parameters|`{windows_tool} {executable} -f {path} --body {outdir} --bodyf {filename} --bdl c`|
|`executable`|path to executable app to parse MFT|`./external_tools/windows/MFTECmd/MFTECmd.dll`|
|`windows_format`|set to True if paths must be converted to windows format for execution. For example using wine|`False`|
|`windows_tool`||`./external_tools/dotnet/dotnet`|
|`outdir`|save body and timeline this directory. Many other modules depend on this files. Do not change outdir unless you know what you are doing|`MORGUE/CLIENT/CASENAME/SOURCE/output/timeline`|
|`summary`|generate a summary of files by `time_range`|`True`|
|`time_range`|time range for buckets to split the timeline in the summary. Options: `hour` and `day`|`hour`|
|`drive_letter`||``|
|`source`||`SOURCE`|
|`mountdir`||`MORGUE/CLIENT/CASENAME/SOURCE/mnt`|

## Job `allocfiles`

Generate allocated files in a disk image

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored. Many other modules depend on this files. Do not change outdir unless you know what you are doing|`MORGUE/CLIENT/CASENAME/SOURCE/output/auxdir`|

## Job `characterize`

Describes basic information about disk and partitions.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path to file were results are stored (in markdown format)|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/disk_summary.md`|
|`template_file`|mako template to display results|`templates/disk.mako`|
|`file_exists`||`OVERWRITE`|

## Job `strings`

Extract all strings of printable characters (ascii and unicode) from disk data.
Output files are organized by partition, encoding and allocation status in
`MORGUE/CLIENT/CASENAME/SOURCE/output/strings`

If a path is provided, search for strings in that path. This is useful, for example, for filesystems
that need an intermediate file to be mounted, such as a bitlocker partition.

If the path is not provided or it is empty, guess the image file from the files avaible in `MORGUE/images/CLIENT/CASENAME`.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|If provided, the absolute path to the image file. If not, search for image files in the imagedir|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/strings`|

## Job `search_strings`

Search a predefined set of keywords over an image strings.

The list of keywords must be defined in a separated file, including the
keyword label and (optionally) a regex as "LABEL:::REGEX".  If the regex is
not provided, the modules uses the label as the regex to search.

Example of keyword file:

```
myfirstword
mysecondword:::[Mm]y.econd{1,2}word
```

### Jobs

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|Path to file containing the list of keywords to perform the search on|``|
|`keyfile`|Same as *path*. *path* will have precendence if both are defined|`MORGUE/CLIENT/CASENAME/searches_files/keywords`|
|`outdir`|Path to directory where generated match files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/searches`|
|`outdir_report`|Path to directory where generated report files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/searches`|
|`strings_dir`|Path to directory where generated string files should be stored. See job "strings"|`MORGUE/CLIENT/CASENAME/SOURCE/output/strings`|

## Job `search_email`

Search emails patterns in strings. `strings` job must be executed before

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/searches`|

## Job `search_accounts`

Search account patterns in strings. `strings` job must be executed before

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/searches`|

## Job `search_gmail`

Search gmail specific parameters in strings. `strings` job must be executed before

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/searches`|

## Job `search_output`

Search regular expressions in a source output directories, except for strings, searches and parser folders.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to file containing the list of keywords to perform the search on|``|
|`keyfile`|same as *path*. *path* will have precendence if both are defined|`MORGUE/CLIENT/CASENAME/searches_files/keywords`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/searches`|

## Job `browsers`

Parse history, downloads and cookies from most used browsers: Chrome, Firefox, Safari, Edge, InternetExplorer

### Jobs

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/browsers`|

## Job `characterize_mails`

Create basic summary about mail accounts from a source.

Includes:
- Number of mails sended or received to/for every mail account found
- Number of mails interchanged between every pair of mail accounts

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to a previously generated csv describing all mails. See "indexer.pst" job|``|
|`n`|number of top occurences to show|`50`|
|`summary_file`|output file for the summary|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/mail/summary_mails.md`|
|`outfile`|output file with statistics for every mail account|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/mail/mail_accounts.csv`|

## Job `leveldb`

Dumps leveldb

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/leveldb`|

## Job `skype`

Extract contacts, messages, calls from Skype databases

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/skype`|

## Job `teams`

Extract contacts, messages, calls from Teams databases

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/teams`|

## Job `office365.main`

Converts to MarkDown table format some of the common Office 365 logs extracted as CSV


## Job `ip.info`

Get information from files with ip.
Please, provide API keys in `alienvault_key` and `abuseipdb_key`
as parameters or inside the section `IP_API_keys` in configuration files

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`alienvault_key`||``|
|`abuseipdb_key`||``|


:::warning
This chapter was created automatically using `autodoc.sh`. Do not modify manually this file.
:::

