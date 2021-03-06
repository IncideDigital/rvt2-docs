
# Section windows

This plugin extracts and analyzes forensic artifacts from a Windows system.

## Jobs

- ``windows.preforensics``: Main set of forensic analysis jobs to run on a Windows disk partition.
- ``windows.characterize``: Describes basic information about Windows partitions and users.
- ``windows.recentfiles``: Parse lnk and jumplist files in a directory.
- ``windows.recentfiles_report``: Generates a summary file with all recent files sources.
- ``windows.recentfiles_default``: Parse all lnk and jumplist files present in a mounted source.
- ``windows.execution``: Extract and parse Windows artifacts related with applications execution (Prefetch, RFC).
- ``windows.prefetch``: Extract and parse Windows artifacts related with applications execution (Prefetch)
- ``windows.rfc``: Extract and parse Windows artifacts related with applications execution (RFC)
- ``windows.CCM``: Extracts SCCM Software Metering history to get more information about executions
- ``windows.activities_cache``: Parse ActivitiesCache database.
- ``windows.ual``: Parse User Access Logs.
- ``windows.rdp_cache``: Extracts rdp cache images to get more information about outgoing rdp sessions
- ``windows.autorip``: Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
- ``windows.registry_hives``: Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
- ``windows.amcache``: Parse AmCache hive
- ``windows.shimcache``: Parse ShimCache hive
- ``windows.syscache``: Parse SysCache hive
- ``windows.appcompatcache``: Parse AppcompatCache from SYSTEM registry hive
- ``windows.userassist``: Parse userassist key in NTUSER.DAT hive. By default uses RECmd.exe to parse. Windows environment is needed to execute it.
- ``windows.userassist_report``: Generates a summary file with all userassist files sources.
- ``windows.shellbags``: Parse Shellbags in NTUSER.DAT or usrclass.dat hives. By default uses SBECmd.exe to parse. Windows environment is needed to execute it.
- ``windows.shellbags_report``: Generates a summary file with all shellbags files sources.
- ``windows.registry``: Dumps Windows Registry hives. Used for indexing purposes.
- ``windows.events``: Parse Windows event files to get relevant logs events.
- ``windows.eventartifacts``: Extracts Windows artifacts from event files. It is required to execute `windows.events` before this job
- ``windows.scheduled_tasks_all``: Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files
- ``windows.scheduled_tasks``: Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files
- ``windows.recycle``: Parse files in (or deleted from) Windows Recycle Bin.
- ``windows.srum``: Extract and parse SRUM (System Resource Utilization Monitor) from a windows OS
- ``windows.usb``: Extracts USB drives data about drivers installation from setupapi.dev.log
- ``windows.usnjrnl_all``: Parse all NTFS UsnJrnl files found in an image.
- ``windows.usnjrnl``: Parse NTFS UsnJrnl file, the journal log of NTFS. You will find recent oprations on files: deletion, modification, renaming...
- ``windows.hiberfil``: Decompress hiberfil.sys and extract some artifacts
- ``windows.bits``: Parse Background Intelligent Transfer Service (BITS). This is a service to transfer binaries between systems, used mainly by Microsoft Update and similar programs.
- ``windows.i30``: Parse I30 files to obtain a timeline
- ``windows.source_summary_old``: Tables summary of previously parsed artefacts
- ``windows.source_summary``: Tables summary of previously parsed artefacts

### Job `windows.preforensics`

Main set of forensic analysis jobs to run on a Windows disk partition.

Artifacts parsed:

- MFT Timeline
- Characterize: `MORGUE/CASENAME/SOURCE/analysis/disk_summary.md`, `MORGUE/CASENAME/SOURCE/analysis/os_summary.md`
- Registry: `MORGUE/CASENAME/SOURCE/output/windows/hives`
- Event Logs:
- `MORGUE/CASENAME/SOURCE/output/windows/events`
- `MORGUE/CASENAME/SOURCE/analysis/events`
- Lnk and Jumplists:
- `MORGUE/CASENAME/SOURCE/output/windows/recentfiles`
- `MORGUE/CASENAME/SOURCE/analysis/recentfiles`
- UsnJrnl: `MORGUE/CASENAME/SOURCE/output/windows/usnjrnl`
- Prefetch: `MORGUE/CASENAME/SOURCE/output/windows/execution`
- Browser History: `MORGUE/CASENAME/SOURCE/output/browsers`
- Recycle Bin: `MORGUE/CASENAME/SOURCE/output/windows/recyclebin`
- RFC: `MORGUE/CASENAME/SOURCE/output/windows/execution`
- Activities Cache: `MORGUE/CASENAME/SOURCE/output/windows/execution`
- USB artifacts: `MORGUE/CASENAME/SOURCE/output/windows/usb`

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`timeline_outdir`||`MORGUE/CASENAME/SOURCE/output/timeline`|

### Job `windows.characterize`

Describes basic information about Windows partitions and users.
Information includes:
- OS name, version, ID and owner
- OS Installation (or update) date
- Creation and last login/logoff dates for every user present

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path to file were results are stored (in markdown format)|`MORGUE/CASENAME/SOURCE/analysis/os_summary.md`|
|`aux_file`|json file where OS info will be stored and used by other jobs|`MORGUE/CASENAME/SOURCE/output/auxdir/os_info.json`|
|`template_file`|mako template to display results|`templates/os_summary.mako`|
|`file_exists`||`OVERWRITE`|

### Job `windows.recentfiles`

Parse lnk and jumplist files in a directory.
For enhanced parsing results, it is recommended to run `fs_timelines` or `mft_timeline` first.
To create a summary of all recentfiles run `windows.recentfiles_report` after the present job.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path to folder containing lnk|automaticdestestination|customdestination files|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/recentfiles`|
|`appid`|path to file relating applications id with names|`./plugins/windows/appID.txt`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|
|`username`|User name identifier|``|

### Job `windows.recentfiles_report`

Generates a summary file with all recent files sources.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`lnk_dir`|path to directory where files generated by windows.recentfiles are be stored|`MORGUE/CASENAME/SOURCE/output/windows/recentfiles`|
|`outdir`|path to directory where generated analysis files will be stored|`MORGUE/CASENAME/SOURCE/analysis/recentfiles`|

### Job `windows.recentfiles_default`

Parse all lnk and jumplist files present in a mounted source.
Generates a summary file with all recent files sources.
For enhanced parsing results, it is recommended to run `fs_timelines` or `mft_timeline` first.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/recentfiles`|
|`outdir_analysis`|path to directory where generated analysis files will be stored|`MORGUE/CASENAME/SOURCE/analysis/recentfiles`|
|`appid`|path to file relating applications id with names|`./plugins/windows/appID.txt`|

### Job `windows.execution`

Extract and parse Windows artifacts related with applications execution (Prefetch, RFC).

- Prefetch: files designed to speed up the execution of processes. Contain DLLs used, how many times the executable run (in <W10), timestamp
- RFC: process creation data stored by ProgramDataUpdater.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`mountdir`||`MORGUE/CASENAME/SOURCE/mnt`|

### Job `windows.prefetch`

Extract and parse Windows artifacts related with applications execution (Prefetch)

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to directory containing pf files|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

### Job `windows.rfc`

Extract and parse Windows artifacts related with applications execution (RFC)

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to RecentFileCache.bcf file |``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

### Job `windows.CCM`

Extracts SCCM Software Metering history to get more information about executions
The path is the absolute location of Windows/System32/wbem/Repository folder.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path Windows/System32/wbem/Repository directory|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

### Job `windows.activities_cache`

Parse ActivitiesCache database.
Provide a globpath to any ActivitiesCache.db as path

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|glob pattern to any ActivitiesCache.db to be parsed|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Caution: set this parameter only when a single input file is expected. Ex: p03|``|

### Job `windows.ual`

Parse User Access Logs.
Provide a globpath to mdb files in `/Windows/System32/LogFiles/Sum` as path

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|glob pattern to any mdb file in /Windows/System32/Sum to be parsed|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/ual`|

### Job `windows.rdp_cache`

Extracts rdp cache images to get more information about outgoing rdp sessions
The path is the absolute location of Users/*/AppData/Local/Microsoft/Terminal*/Cache folder.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path %USERPROFILE%/AppData/Local/Microsoft/Terminal Server Client/Cache directory|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/rdpcache`|

### Job `windows.autorip`

Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
Expects a directory containing hives as an argument. `NTUSER.DAT` and `usrclass.dat` hives are expected to be stored in a username folder inside the directory set as path.
The list of regripper modules, its description and output file can be found at: `./plugins/windows/autorip.json`

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`ripplugins`|path to json file containing the organized list of regripper plugins to run|`./plugins/windows/autorip.json`|
|`pluginshives`|path to json file associating each regripper plugin with a list of hives|`./plugins/windows/regripper_plugins.json`|
|`errorfile`|path to log file to register regripper errors|`MORGUE/CASENAME/SOURCE/SOURCE_aux.log`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|

### Job `windows.registry_hives`

Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
This job takes the default configuration of mounted devices as base to locate hive files to parse.
Alternatively, you can provide a directory containing hives as an argument. `NTUSER.DAT` and `usrclass.dat` hives are expected to be stored in a username folder inside the directory set as path.

Some of the airtifacts are:

- Shellbags: Shellbag information is available only for folders that have been opened and closed in Windows Explorer at least once.
The existence of a Shellbag sub-key for a given directory indicates that the specific user account once visited that folder.
- Jumplists: Recent documents in a program that is pinned to your taskbar.
- Recentdocs: Recent documents, as listed in the registry. They may or not may be the same than the jumplist. They are used (but not only) in Microsoft Office.
- Shimcache: tracks compatibilities issues with executed programs: path, size, last modified time, last updated time, process execution flag
- Amcache: stores information about executed programs: path, executed time, deleted time, first installation

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path to folder containing hives|``|
|`ripplugins`|path to json file containing the organized list of regripper plugins to run|`./plugins/windows/autorip.json`|
|`pluginshives`|path to json file associating each regripper plugin with a list of hives|`./plugins/windows/regripper_plugins.json`|
|`errorfile`|path to log file to register regripper errors|`MORGUE/CASENAME/SOURCE/SOURCE_aux.log`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|
|`casedir`||`MORGUE/CASENAME`|

### Job `windows.amcache`

Parse AmCache hive

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

### Job `windows.shimcache`

Parse ShimCache hive

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

### Job `windows.syscache`

Parse SysCache hive

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

### Job `windows.appcompatcache`

Parse AppcompatCache from SYSTEM registry hive
Choose between using regripper or AppCompatCacheParser.exe to parse appcompatcache

- Regripper appcompat plugin. Recommended configuration:
- `cmd`: ``
- AppCompatCacheParser.exe. Recommended configuration:
- `cmd`: `env WINEDEBUG=fixme-all wine {executable} -f {path} --csv {outdir} --csvf {filename} --nl`

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to SYSTEM registry hive|``|
|`outdir`|directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|
|`cmd`|External command to parse userassist or empty to use internal parser. It is a Python string template accepting variables "executable", "path", "outdir" and "filename". Variable "filename" is automatically set by the job. The rest are the same ones specified in parameters|``|
|`executable`|path to the tool used to parse appcompatcache|`./external_tools/windows/AppCompatCacheParser.exe`|

### Job `windows.userassist`

Parse userassist key in NTUSER.DAT hive. By default uses RECmd.exe to parse. Windows environment is needed to execute it.
Expects a path to Windows `Users` directory as an argument, in order to search for any NTUSER.DAT hive.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|
|`cmd`|External command to parse userassist. It is a Python string template accepting variables "executable", "hive", "outdir", "filename" and "batch_file". Variables "hive" and "filename" are automatically set by the job. The rest are the same ones specified in parameters|`env WINEDEBUG=fixme-all wine {executable} --bn {batch_file} -f {hive} --csv {outdir} --csvf {filename} --nl`|
|`executable`|path to the tool used to parse userassist|`./external_tools/windows/RegistryExplorer/RECmd.exe`|
|`batch_file`|configuration file for userassist using RECmd.exe|`./external_tools/windows/RegistryExplorer/BatchExamples/BatchExampleUserAssist.reb`|

### Job `windows.userassist_report`

Generates a summary file with all userassist files sources.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/hives/userassist.csv`|
|`path`||`MORGUE/CASENAME/SOURCE/output/windows/hives`|

### Job `windows.shellbags`

Parse Shellbags in NTUSER.DAT or usrclass.dat hives. By default uses SBECmd.exe to parse. Windows environment is needed to execute it.
Expects a path to Windows `Users` directory as an argument, in order to search for any NTUSER.DAT hive.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|
|`cmd`|External command to parse shellbags. It is a Python string template accepting variables "executable", "hives_dir" and "outdir". Variable "hives_dir" is deduced by the job from "path". The rest are the same ones specified in parameters|`env WINEDEBUG=fixme-all wine {executable} -d {hives_dir} --csv {outdir} --nl --dedupe`|
|`executable`|path to the tool used to parse shellbags|`./external_tools/windows/ShellBagsExplorer/SBECmd.exe`|

### Job `windows.shellbags_report`

Generates a summary file with all shellbags files sources.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/hives/shellbags.csv`|
|`path`||`MORGUE/CASENAME/SOURCE/output/windows/hives`|

### Job `windows.registry`

Dumps Windows Registry hives. Used for indexing purposes.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated file will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives/registry_dump.json`|

### Job `windows.events`

Parse Windows event files to get relevant logs events.

Type `--params path=some_directory` to set a custom directory containing the log files to parse.
Individual log files are expected to mantain the same name as Windows conventions.

Files parsed:
- Security
- System
- Microsoft-Windows-TerminalServices-RemoteConnectionManager%4Operational
- Microsoft-Windows-TerminalServices-LocalSessionManager%4Operational
- Microsoft-Windows-TerminalServices-RDPClient%4Operational
- Microsoft-Windows-RemoteDesktopServices-RdpCoreTS%4Operational
- Microsoft-Windows-TaskScheduler%4Operational
- Microsoft-Windows-Bits-Client%4Operational
- Microsoft-Windows-DriverFrameworks-UserMode%4Operational
- Microsoft-Windows-WLAN-AutoConfig%4Operational
- OAlerts
- Microsoft-Windows-User Profile Service%4Operational
- Microsoft-Windows-Shell-Core%4Operational
- Microsoft-Windows-Partition%4Diagnostic
- Microsoft-Windows-Kernel-PnP%4Configuration
- Microsoft-Windows-Ntfs%4Operational
- Microsoft-Windows-Storage-ClassPnP%4Operational
- Micrsoft-Windows-DeviceSetupManager%4Admin
- Micrsoft-Windows-DeviceSetupManager%4Operational

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|Path to directory containing evtx files|`MORGUE/CASENAME/SOURCE/mnt/p*/[Ww][Ii][Nn][Dd][Oo][Ww][Ss]/[Ss]ystem32/[Ww]inevt/[Ll]ogs`|
|`outfile`|path where the generated file will be stored|`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.eventartifacts`

Extracts Windows artifacts from event files. It is required to execute `windows.events` before this job
Artifacts extraced:
- Login, logoff
- Poweron, poweroff
- RDP connections
- Wifi network artifacts
- Shared objects
- Winupdate events
- Scheduled tasks
- Installed processes and services
- BITS
- USB plugs
- USB install drivers
- Office Alerts

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to json file gnerated by windows.events job|`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|
|`outdir`|directory where resulting files will be stored|`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.scheduled_tasks_all`

Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`mountdir`||`MORGUE/CASENAME/SOURCE/mnt`|

### Job `windows.scheduled_tasks`

Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files
Set the directory to search for such artifacts in `path`

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

### Job `windows.recycle`

Parse files in (or deleted from) Windows Recycle Bin.
You must generate the timeline with `fs_timeline` or `mft_timeline` before running the present job.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/recyclebin`|

### Job `windows.srum`

Extract and parse SRUM (System Resource Utilization Monitor) from a windows OS

SRUM collects statistics on execution of binaries: CPU, memory... It can be used to prove
the execution of a program.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to SRUDB.dat file to parse|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/srum`|
|`software_hive`|path, in glob format, to SOFTWARE hive|`MORGUE/CASENAME/SOURCE/mnt/p*/[Ww]indows/[Ss]ystem32/[Cc]onfig/SOFTWARE`|

### Job `windows.usb`

Extracts USB drives data about drivers installation from setupapi.dev.log
Expects a path to setupapi.dev.log file as argument.
If no argument is provided, it will search on all allocated files mounted. Make sure to run `allocfiles` before this job if this is the case.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to setupapi.dev.log file. If not provided, the job will search in all allocated files|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/usb`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

### Job `windows.usnjrnl_all`

Parse all NTFS UsnJrnl files found in an image.
UsnJrnl is the journal log of NTFS. You will find recent oprations on files: deletion, modification, renaming...

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/usnjrnl`|

### Job `windows.usnjrnl`

Parse NTFS UsnJrnl file, the journal log of NTFS. You will find recent oprations on files: deletion, modification, renaming...

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/usnjrnl`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|

### Job `windows.hiberfil`

Decompress hiberfil.sys and extract some artifacts
Provide an hiberfil.sys file as an argument or let the job search in allocated files if no argument is provided
Requires `allocfiles` and `windows.characterize` if no path or profile is provided

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hibernation`|
|`volatility_plugins`|Space separated list of volatility plugins to run|`pslist netscan filescan shutdowntime mftparser`|
|`profile`|Windows profile describing version as expected by volatility. Ex: Win10x64. It will be searched in the current registry if not provided|``|
|`overwrite_imagecopy`|If true, make a new imagecopy of hiberfil.sys even if a previous one already existed|`False`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|

### Job `windows.bits`

Parse Background Intelligent Transfer Service (BITS). This is a service to transfer binaries between systems, used mainly by Microsoft Update and similar programs.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to qmgr0.dat file|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/bits`|

### Job `windows.i30`

Parse I30 files to obtain a timeline

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`root`|If True, parse also INDX_ROOT attributes.|`False`|
|`skip_short`|If True, do not output Windows short format filenames.|`True`|
|`only_slack`|If True, parse only the slack space in INDX_ALLOC blocks.|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/i30`|

### Job `windows.source_summary_old`

Tables summary of previously parsed artefacts

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/source_summary.md`|

### Job `windows.source_summary`

Tables summary of previously parsed artefacts

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path to file where results will be stored|`MORGUE/CASENAME/SOURCE/analysis/source_summary.md`|
|`tz_name`|tzdata/Olsen timezone name to set for the dates. Examples: `Europe/Berlin`, `America/New_York`, `UTC`. If `local` is set, timezone will be searched on the registry|`local`|


:::warning
This chapter was created automatically using `autodoc.sh`. Do not modify manually this file.
:::

