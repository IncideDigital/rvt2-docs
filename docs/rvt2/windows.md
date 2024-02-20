
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
- ``windows.mplogs``: Parse Windows Defender MPLogs.
- ``windows.ntds``: Parse ntds.dit.
- ``windows.search_index``: Parse Windows Search Index artifacts (Windows.edb in Windows 10, Windows.db in Windows 11)
- ``windows.rdp_cache``: Extracts rdp cache images to get more information about outgoing rdp sessions
- ``windows.autorip``: Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
- ``windows.registry_hives``: Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
- ``windows.registry_dump_all``: Parse all keys from all registry hives in a source. Outputs a json in ECS format. Deletes previous `all_registry` output files.
- ``windows.registry_dump``: Parse all registry keys-values from a hive in ECS format
- ``windows.amcache``: Parse AmCache hive
- ``windows.shimcache``: Parse ShimCache hive
- ``windows.syscache``: Parse SysCache hive
- ``windows.appcompatcache``: Parse AppcompatCache from SYSTEM registry hive
- ``windows.userassist``: Parse userassist key in NTUSER.DAT hive. By default uses RECmd.exe to parse. Windows environment is needed to execute it.
- ``windows.userassist_report``: Generates a summary file with all userassist files sources.
- ``windows.registry.autorun``: Parse Registry Autorun keys
- ``windows.registry.services``: Parse Registry Services keys
- ``windows.registry.tasks``: Parse Registry TaskCache keys
- ``windows.shellbags``: Parse Shellbags in NTUSER.DAT or usrclass.dat hives. By default uses SBECmd.exe to parse. Windows environment is needed to execute it.
- ``windows.shellbags_report``: Generates a summary file with all shellbags files sources.
- ``windows.events.ParseEvts``: Parse Windows event files to get relevant events
- ``windows.events``: Parse Windows event files to get relevant logs events.
- ``windows.compromise_events``: Parse Windows event files to get relevant logs events for compromise assesment cases.
- ``windows.events.Security``: Parse Windows Securty event file to get relevant logs events
- ``windows.events.System``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPRemote``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPLocal``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPClient``: Parse Windows System event file to get relevant logs events
- ``windows.events.Application``: Parse Windows Application event file to get relevant logs events
- ``windows.events.SMBServer``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPCoreTS``: Parse Windows event files to get relevant RDPCoreTS logs events
- ``windows.events.Scheduled``: Parse Windows scheduled tasks logs events
- ``windows.events.Bits``: Parse Windows event files to get relevant scheduled tasks logs events
- ``windows.events.Defender``: Parse Windows event files to get relevant windows defender logs events
- ``windows.events.Network``: Parse Windows event files to get relevant networking logs events
- ``windows.events.USB``: Parse Windows event files to get relevant usb logs events
- ``windows.events.UserProfile``: Parse Windows UserProfile event file to get relevant logs events
- ``windows.events.Run``: Parse Windows Microsoft-Windows-Shell-Core%4Operational event file to get relevant logs events
- ``windows.events.WMI``: Parse Windows Microsoft-Windows-WMI-Activity%4Operational event file to get relevant logs events
- ``windows.events.OAlerts``: Parse Windows Microsoft Office Alerts event file to get relevant logs events
- ``windows.events.PartitionDiagnostic``: Parse Windows Microsoft-Windows-Partition%4Diagnostic event file to get relevant logs events
- ``windows.events.KernelPnp``: Parse Windows Microsoft-Windows-Kernel-PnP%4Configuration event file to get relevant logs events
- ``windows.events.NtfsOperational``: Parse Windows Microsoft-Windows-Ntfs%4Operational event file to get relevant logs events
- ``windows.events.StorageClassPnp``: Parse Windows Microsoft-Windows-Storage-ClassPnP%4Operational event file to get relevant logs events
- ``windows.events.DeviceSetupManagerAdmin``: Parse Windows Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Admin event file to get relevant logs events
- ``windows.events.DeviceSetupManagerOperational``: Parse Windows Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Operational event file to get relevant logs events
- ``windows.events.PowerShell``: Parse Windows PowerShell event file to get relevant logs events
- ``windows.events.PowerShellOperational``: Parse Windows PowerShell Operational event file to get relevant logs events
- ``windows.events.UACFileVirtualization``: Parse Windows Microsoft-Windows-UAC-FileVirtualization%4Operational event file to get relevant logs events
- ``windows.events.Compatibility-Assistant``: Parse Microsoft-Windows-Application-Experience%4Program-Compatibility-Assistant event file to get relevant logs events
- ``windows.events.Program-Telemetry``: Parse Microsoft-Windows-Application-Experience%4Program-Telemetry event file to get relevant logs events
- ``windows.events.appID``: Parse Microsoft-Windows-AppID%4Operational event file to get relevant logs events
- ``windows.events.vhdmp``: Parse Microsoft-Windows-VHDMP%4Operational event file to get relevant logs events
- ``windows.events.ExtraLogs``: Parse all event files not previously considered in other jobs
- ``windows.eventartifacts``: Extracts Windows artifacts from event files. It is required to execute `windows.events` before this job
- ``windows.eventartifacts.logon_rdp``: Extract login and rdp artifacts
- ``windows.eventartifacts.rdp_incoming``: Extract incoming RDP event logs
- ``windows.eventartifacts.rdp_gateway``: Extract incoming RDP event logs
- ``windows.eventartifacts.rdp_outgoing``: Extract outgoing RDP event logs
- ``windows.eventartifacts.process_start``: Display process execution started events
- ``windows.eventartifacts.cached_logon``: Extract cached login artifacts
- ``windows.eventartifacts.poweron``: Extract poweron poweroff artifacts
- ``windows.eventartifacts.user_accounts``: Extract events related to user account creation or modification
- ``windows.eventartifacts.network``: Extract shared object events
- ``windows.eventartifacts.shares``: Extract shared object events
- ``windows.eventartifacts.winupdate``: Extract events related to Windows updates
- ``windows.eventartifacts.scheduled_tasks``: Extract install related events of processes and services
- ``windows.eventartifacts.services``: Extract install related events of processes and services
- ``windows.eventartifacts.UserProfile``: Extract logon/logoff related events in UserProfile
- ``windows.eventartifacts.tgt``: extracts possible Kerberos tickets (TGT) attacks
- ``windows.eventartifacts.clearlog``: Extract clear log events
- ``windows.eventartifacts.run``: Extract autorun related events. Detecting process-cmdline of programs running from Run/RunOnce Auto startup locations using events Microsoft-Windows-Shell-Core/Operational EID 9707/9708
- ``windows.eventartifacts.SMB``: Extract SMB error events
- ``windows.eventartifacts.BITS``: Extract BITS events
- ``windows.eventartifacts.Defender``: Extract Windows Defender events
- ``windows.eventartifacts.USB_plug``: Extract USB events
- ``windows.eventartifacts.USBPlugs2``: Extract USB events related with partitions
- ``windows.eventartifacts.VolumeFree``: Extract Volume NTFS events related with free space
- ``windows.eventartifacts.USB_connections``: Extract USB connections events
- ``windows.eventartifacts.USB_install``: Extract USB installation events
- ``windows.eventartifacts.powershell``: Extract cached login artifacts
- ``windows.eventartifacts.DCOM``: Extract DCOM connection errors
- ``windows.eventartifacts.wer``: Extracts info about Windows Resource Protection
- ``windows.eventartifacts.msiinstaller``: Extracts info about Windows MsiInstaller
- ``windows.eventartifacts.compatibilityassistant``: Extracts info related with compatibility assistant and program telemetry
- ``windows.eventartifacts.appid``: Extracts info related with appID. It is related with existence of a program.
- ``windows.eventartifacts.vpn_server``: Extract vpn related events of server
- ``windows.eventartifacts.vpn_client``: Extract vpn related events of client
- ``windows.eventartifacts.legacy_services``: Extract install related events of processes and services
- ``windows.eventartifacts.legacy_logon``: Extract login and rdp artifacts
- ``windows.scheduled_tasks_all``: Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files
- ``windows.scheduled_tasks``: Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files
- ``windows.recycle``: Parse files in (or deleted from) Windows Recycle Bin.
- ``windows.srum``: Extract and parse SRUM (System Resource Utilization Monitor) from a windows OS
- ``windows.usb``: Extracts USB drives data about drivers installation from setupapi.dev.log
- ``windows.usnjrnl_all``: Parse all NTFS UsnJrnl files found in an image.
- ``windows.usnjrnl``: Parse NTFS UsnJrnl file, the journal log of NTFS. You will find recent oprations on files: deletion, modification, renaming...
- ``windows.hiberfil``: Decompress hiberfil.sys and extract some artifacts
- ``windows.quarantine``: Parse Windows quarantinefiles.
- ``windows.remotedesktop``: Parse Windows remotedesktop logs of TeamViewer and Anydesk.
- ``windows.remotedesktop.teamviewer_inc_connections``: Parse teamviewer connections_incomming file
- ``windows.remotedesktop.teamviewer_connections``: Parse teamviewer connections_incomming file
- ``windows.remotedesktop.teamviewer_log_connections``: Parse teamviewer connections_incomming file
- ``windows.remotedesktop.anydesk``: Parse teamviewer connections_incomming file
- ``windows.memory``: Use volatility to get information of a memory image file, such as the physical memory of a device as retrieved by F-ResponseDecompress hiberfil.sys and extract some artifacts.
- ``windows.notifications``: Parse windows Notifications database
- ``windows.bits``: Parse Background Intelligent Transfer Service (BITS). This is a service to transfer binaries between systems, used mainly by Microsoft Update and similar programs.
- ``windows.i30``: Parse I30 files to obtain a timeline
- ``windows.source_summary``: Create summary tables for most relevant artifacts previously parsed, both in CSV and MD format.
- ``windows.events.hayabusa``: Extracts timeline alerts from windows events using hayabusa

## Job `windows.preforensics`

Main set of forensic analysis jobs to run on a Windows disk partition.

Artifacts parsed:

- MFT Timeline
- Characterize: `MORGUE/CLIENT/CASENAME/SOURCE/analysis/disk_summary.md`, `MORGUE/CLIENT/CASENAME/SOURCE/analysis/os_summary.md`
- Registry: `MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`
- Event Logs:
- `MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events`
- `MORGUE/CLIENT/CASENAME/SOURCE/analysis/events`
- Lnk and Jumplists:
- `MORGUE/CLIENT/CASENAME/SOURCE/output/windows/recentfiles`
- `MORGUE/CLIENT/CASENAME/SOURCE/analysis/recentfiles`
- UsnJrnl: `MORGUE/CLIENT/CASENAME/SOURCE/output/windows/usnjrnl`
- Prefetch: `MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`
- Browser History: `MORGUE/CLIENT/CASENAME/SOURCE/output/browsers`
- Recycle Bin: `MORGUE/CLIENT/CASENAME/SOURCE/output/windows/recyclebin`
- RFC: `MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`
- Activities Cache: `MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`
- USB artifacts: `MORGUE/CLIENT/CASENAME/SOURCE/output/windows/usb`

### Jobs
- ``mount``: Mount all partitions of a disk image.
- ``characterize``: Describes basic information about disk and partitions.
- ``allocfiles``: Generate allocated files in a disk image
- ``fs_timeline``: Generate a timeline of a filesystem.
- ``windows.registry_hives``: Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
- ``windows.characterize``: Describes basic information about Windows partitions and users.
- ``windows.recentfiles_default``: Parse all lnk and jumplist files present in a mounted source.
- ``windows.events``: Parse Windows event files to get relevant logs events.
- ``windows.eventartifacts``: Extracts Windows artifacts from event files. It is required to execute `windows.events` before this job
- ``windows.execution``: Extract and parse Windows artifacts related with applications execution (Prefetch, RFC).
- ``windows.activities_cache``: Parse ActivitiesCache database.
- ``windows.usb``: Extracts USB drives data about drivers installation from setupapi.dev.log
- ``windows.recycle``: Parse files in (or deleted from) Windows Recycle Bin.
- ``windows.usnjrnl_all``: Parse all NTFS UsnJrnl files found in an image.
- ``browsers``: Parse history, downloads and cookies from most used browsers: Chrome, Firefox, Safari, Edge, InternetExplorer
- ``windows.srum``: Extract and parse SRUM (System Resource Utilization Monitor) from a windows OS

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`timeline_outdir`||`MORGUE/CLIENT/CASENAME/SOURCE/output/timeline`|

## Job `windows.characterize`

Describes basic information about Windows partitions and users.
Information includes:
- OS name, version, ID and owner
- OS Installation (or update) date
- Creation and last login/logoff dates for every user present

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path to file were results are stored (in markdown format)|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/os_summary.md`|
|`aux_file`|json file where OS info will be stored and used by other jobs|`MORGUE/CLIENT/CASENAME/SOURCE/output/auxdir/os_info.json`|
|`template_file`|mako template to display results|`templates/os_summary.mako`|
|`file_exists`||`OVERWRITE`|

## Job `windows.recentfiles`

Parse lnk and jumplist files in a directory.
For enhanced parsing results, it is recommended to run `fs_timeline` or `mft_timeline` first.
To create a summary of all recentfiles run `windows.recentfiles_report` after the present job.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path to folder containing lnk|automaticdestestination|customdestination files|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/recentfiles`|
|`appid`|path to file relating applications id with names|`./plugins/windows/appID.txt`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|
|`username`|User name identifier|``|

## Job `windows.recentfiles_report`

Generates a summary file with all recent files sources.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`lnk_dir`|path to directory where files generated by windows.recentfiles are be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/recentfiles`|
|`outdir`|path to directory where generated analysis files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/recentfiles`|

## Job `windows.recentfiles_default`

Parse all lnk and jumplist files present in a mounted source.
Generates a summary file with all recent files sources.
For enhanced parsing results, it is recommended to run `fs_timeline` or `mft_timeline` first.

### Jobs

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/recentfiles`|
|`outdir_analysis`|path to directory where generated analysis files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/recentfiles`|
|`appid`|path to file relating applications id with names|`./plugins/windows/appID.txt`|

## Job `windows.execution`

Extract and parse Windows artifacts related with applications execution (Prefetch, RFC).

- Prefetch: files designed to speed up the execution of processes. Contain DLLs used, how many times the executable run (in <W10), timestamp
- RFC: process creation data stored by ProgramDataUpdater.

### Jobs

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`|
|`mountdir`||`MORGUE/CLIENT/CASENAME/SOURCE/mnt`|

## Job `windows.prefetch`

Extract and parse Windows artifacts related with applications execution (Prefetch)

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to directory containing pf files|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

## Job `windows.rfc`

Extract and parse Windows artifacts related with applications execution (RFC)

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to RecentFileCache.bcf file |``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

## Job `windows.CCM`

Extracts SCCM Software Metering history to get more information about executions
The path is the absolute location of Windows/System32/wbem/Repository folder.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path Windows/System32/wbem/Repository directory|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

## Job `windows.activities_cache`

Parse ActivitiesCache database.
Provide a globpath to any ActivitiesCache.db as path

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|glob pattern to any ActivitiesCache.db to be parsed|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Caution: set this parameter only when a single input file is expected. Ex: p03|``|

## Job `windows.ual`

Parse User Access Logs.
Provide a globpath to mdb files in `/Windows/System32/LogFiles/Sum` as path

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|glob pattern to any mdb file in /Windows/System32/Sum to be parsed|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/ual`|

## Job `windows.mplogs`

Parse Windows Defender MPLogs.
Provide a globpath to mplogs folder in `ProgramData/Microsoft/Windows Defender/Support` as path

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|glob pattern to any mdb file in /ProgramData/Microsoft/Windows Defender/Support to be parsed|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/mplogs`|

## Job `windows.ntds`

Parse ntds.dit.
Provide a globpath to mdb files in `/Windows/NTDS/ntds.dit` as path

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|glob pattern to ntds.dit file to be parsed|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/ntds`|

## Job `windows.search_index`

Parse Windows Search Index artifacts (Windows.edb in Windows 10, Windows.db in Windows 11)

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to folders where Search Index files will be searched on|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`|
|`sidr_tool`|path to SIDR tool executable (https://github.com/strozfriedberg/sidr)|`./plugins/external/sidr/target/release/sidr`|

## Job `windows.rdp_cache`

Extracts rdp cache images to get more information about outgoing rdp sessions
The path is the absolute location of Users/*/AppData/Local/Microsoft/Terminal*/Cache folder.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path %USERPROFILE%/AppData/Local/Microsoft/Terminal Server Client/Cache directory|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/rdpcache`|

## Job `windows.autorip`

Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
Expects a directory containing hives as an argument. `NTUSER.DAT` and `usrclass.dat` hives are expected to be stored in a username folder inside the directory set as path.
The list of regripper modules, its description and output file can be found at: `./plugins/windows/autorip.json`

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`ripplugins`|path to json file containing the organized list of regripper plugins to run|`./plugins/windows/autorip.json`|
|`pluginshives`|path to json file associating each regripper plugin with a list of hives|`./plugins/windows/regripper_plugins.json`|
|`errorfile`|path to log file to register regripper errors|`MORGUE/CLIENT/CASENAME/SOURCE/SOURCE_aux.log`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|

## Job `windows.registry_hives`

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

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path to folder containing hives|``|
|`ripplugins`|path to json file containing the organized list of regripper plugins to run|`./plugins/windows/autorip.json`|
|`pluginshives`|path to json file associating each regripper plugin with a list of hives|`./plugins/windows/regripper_plugins.json`|
|`errorfile`|path to log file to register regripper errors|`MORGUE/CLIENT/CASENAME/SOURCE/SOURCE_aux.log`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|
|`casedir`||`MORGUE/CLIENT/CASENAME`|

## Job `windows.registry_dump_all`

Parse all keys from all registry hives in a source. Outputs a json in ECS format. Deletes previous `all_registry` output files.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path to folder containing hives|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|
|`casedir`||`MORGUE/CLIENT/CASENAME`|

## Job `windows.registry_dump`

Parse all registry keys-values from a hive in ECS format

Insert the path to either the file hive (ex: `SOFTWARE`) or the directory (`System32/Config`) as a parameter. In the latter case, all file hives in the directory will be processed.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

## Job `windows.amcache`

Parse AmCache hive

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|
|`max_days`||`90`|

## Job `windows.shimcache`

Parse ShimCache hive

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

## Job `windows.syscache`

Parse SysCache hive

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|
|`max_days`|maximum number of days to check if the hash is from a malicious binary|`90`|

## Job `windows.appcompatcache`

Parse AppcompatCache from SYSTEM registry hive
Choose between using regripper or AppCompatCacheParser.exe to parse appcompatcache

- Regripper appcompat plugin. Recommended configuration:
- `cmd`: ``
- AppCompatCacheParser.exe. Recommended configuration:
- `cmd`: `{windows_tool} {executable} -f {path} --csv {outdir} --csvf {filename} --nl`

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to SYSTEM registry hive|``|
|`outdir`|directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|
|`cmd`|External command to parse appcompat or empty to use internal parser. It is a Python string template accepting variables "windows_tool", "executable", "path", "outdir" and "filename". Variable "filename" is automatically set by the job. The rest are the same ones specified in parameters|`{windows_tool} {executable} -f {path} --csv {outdir} --csvf {filename} --nl`|
|`executable`|path to the tool used to parse appcompatcache|`./external_tools/windows/AppCompatCacheParser/AppCompatCacheParser.dll`|
|`windows_tool`|in a non Windows environment, path to the tool needed to run the executable, such as "wine" or "dotnet"|`./external_tools/dotnet/dotnet`|
|`convert_paths`|convert paths to Windows format ("\"). Necessary when using native Windows tools like `wine`|`False`|

## Job `windows.userassist`

Parse userassist key in NTUSER.DAT hive. By default uses RECmd.exe to parse. Windows environment is needed to execute it.
Expects a path to Windows `Users` directory as an argument, in order to search for any NTUSER.DAT hive.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|
|`cmd`|External command to parse userassist. It is a Python string template accepting variables "windows_tool", "executable", "hive", "outdir", "filename" and "batch_file". Variables "hive" and "filename" are automatically set by the job. The rest are the same ones specified in parameters|`{windows_tool} {executable} --bn {batch_file} -f {hive} --csv {outdir} --csvf {filename} --nl`|
|`executable`|path to the tool used to parse userassist|`./external_tools/windows/RECmd/RECmd.dll`|
|`batch_file`|configuration file for userassist using RECmd.exe|`./external_tools/windows/RECmd/BatchExamples/BatchExampleUserAssist.reb`|
|`windows_tool`|in a non Windows environment, path to the tool needed to run the executable, such as "wine" or "dotnet"|`./external_tools/dotnet/dotnet`|
|`convert_paths`|convert paths to Windows format ("\"). Necessary when using native Windows tools like `wine`|`False`|

## Job `windows.userassist_report`

Generates a summary file with all userassist files sources.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/analysis/hives/userassist.csv`|
|`path`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|

## Job `windows.registry.autorun`

Parse Registry Autorun keys

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

## Job `windows.registry.services`

Parse Registry Services keys

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

## Job `windows.registry.tasks`

Parse Registry TaskCache keys

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

## Job `windows.shellbags`

Parse Shellbags in NTUSER.DAT or usrclass.dat hives. By default uses SBECmd.exe to parse. Windows environment is needed to execute it.
Expects a path to Windows `Users` directory as an argument, in order to search for any NTUSER.DAT hive.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|
|`cmd`|External command to parse shellbags. It is a Python string template accepting variables "windows_tool", "executable", "hives_dir" and "outdir". Variable "hives_dir" is deduced by the job from "path". The rest are the same ones specified in parameters|`{windows_tool} {executable} -d {hives_dir} --csv {outdir} --nl --dedupe`|
|`executable`|path to the tool used to parse shellbags|`./external_tools/windows/SBECmd/SBECmd.dll`|
|`windows_tool`|in a non Windows environment, path to the tool needed to run the executable, such as "wine" or "dotnet"|`./external_tools/dotnet/dotnet`|
|`convert_paths`|convert paths to Windows format ("\"). Necessary when using native Windows tools like `wine`|`False`|

## Job `windows.shellbags_report`

Generates a summary file with all shellbags files sources.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/analysis/hives/shellbags.csv`|
|`path`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hives`|

## Job `windows.events.ParseEvts`

Parse Windows event files to get relevant events
The path is the absolute location of the directory where evt files are located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events`

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
- Application
- OAlerts
- Microsoft-Windows-User Profile Service%4Operational
- Microsoft-Windows-Shell-Core%4Operational
- Microsoft-Windows-Partition%4Diagnostic
- Microsoft-Windows-Kernel-PnP%4Configuration
- Microsoft-Windows-Ntfs%4Operational
- Microsoft-Windows-Storage-ClassPnP%4Operational
- Micrsoft-Windows-DeviceSetupManager%4Admin
- Micrsoft-Windows-DeviceSetupManager%4Operational
- Windows PowerShell
- Microsoft-Windows-UAC-FileVirtualization%4Operational
- Microsoft-Windows-Application-Experience%4Program-Telemetry
- Microsoft-Windows-Application-Experience%4Program-Compatibility-Assistant
- Microsoft-Windows-AppID%4Operational

### Jobs
- ``windows.events.Security``: Parse Windows Securty event file to get relevant logs events
- ``windows.events.System``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPRemote``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPLocal``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPClient``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPCoreTS``: Parse Windows event files to get relevant RDPCoreTS logs events
- ``windows.events.Scheduled``: Parse Windows scheduled tasks logs events
- ``windows.events.Defender``: Parse Windows event files to get relevant windows defender logs events
- ``windows.events.Bits``: Parse Windows event files to get relevant scheduled tasks logs events
- ``windows.events.Network``: Parse Windows event files to get relevant networking logs events
- ``windows.events.Application``: Parse Windows Application event file to get relevant logs events
- ``windows.events.SMBServer``: Parse Windows System event file to get relevant logs events
- ``windows.events.USB``: Parse Windows event files to get relevant usb logs events
- ``windows.events.OAlerts``: Parse Windows Microsoft Office Alerts event file to get relevant logs events
- ``windows.events.UserProfile``: Parse Windows UserProfile event file to get relevant logs events
- ``windows.events.Run``: Parse Windows Microsoft-Windows-Shell-Core%4Operational event file to get relevant logs events
- ``windows.events.PartitionDiagnostic``: Parse Windows Microsoft-Windows-Partition%4Diagnostic event file to get relevant logs events
- ``windows.events.KernelPnp``: Parse Windows Microsoft-Windows-Kernel-PnP%4Configuration event file to get relevant logs events
- ``windows.events.NtfsOperational``: Parse Windows Microsoft-Windows-Ntfs%4Operational event file to get relevant logs events
- ``windows.events.StorageClassPnp``: Parse Windows Microsoft-Windows-Storage-ClassPnP%4Operational event file to get relevant logs events
- ``windows.events.DeviceSetupManagerAdmin``: Parse Windows Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Admin event file to get relevant logs events
- ``windows.events.DeviceSetupManagerOperational``: Parse Windows Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Operational event file to get relevant logs events
- ``windows.events.PowerShell``: Parse Windows PowerShell event file to get relevant logs events
- ``windows.events.PowerShellOperational``: Parse Windows PowerShell Operational event file to get relevant logs events
- ``windows.events.WMI``: Parse Windows Microsoft-Windows-WMI-Activity%4Operational event file to get relevant logs events
- ``windows.events.UACFileVirtualization``: Parse Windows Microsoft-Windows-UAC-FileVirtualization%4Operational event file to get relevant logs events
- ``windows.events.Compatibility-Assistant``: Parse Microsoft-Windows-Application-Experience%4Program-Compatibility-Assistant event file to get relevant logs events
- ``windows.events.Program-Telemetry``: Parse Microsoft-Windows-Application-Experience%4Program-Telemetry event file to get relevant logs events
- ``windows.events.appID``: Parse Microsoft-Windows-AppID%4Operational event file to get relevant logs events
- ``windows.events.vhdmp``: Parse Microsoft-Windows-VHDMP%4Operational event file to get relevant logs events
- ``windows.events.ExtraLogs``: Parse all event files not previously considered in other jobs

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|Path to directory containing evtx files|`MORGUE/CLIENT/CASENAME/SOURCE/mnt/p*/[Ww][Ii][Nn][Dd][Oo][Ww][Ss]/[Ss]ystem32/[Ww]inevt/[Ll]ogs`|
|`outfile`|path where the generated file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.compromise_events`

Parse Windows event files to get relevant logs events for compromise assesment cases.

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
- Microsoft-Windows-Shell-Core%4Operational
- Microsoft-Windows-WMI-Activity%4Operational

### Jobs
- ``windows.events.Security``: Parse Windows Securty event file to get relevant logs events
- ``windows.events.System``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPRemote``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPLocal``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPClient``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPCoreTS``: Parse Windows event files to get relevant RDPCoreTS logs events
- ``windows.events.Scheduled``: Parse Windows scheduled tasks logs events
- ``windows.events.Run``: Parse Windows Microsoft-Windows-Shell-Core%4Operational event file to get relevant logs events
- ``windows.events.WMI``: Parse Windows Microsoft-Windows-WMI-Activity%4Operational event file to get relevant logs events

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|Path to directory containing evtx files|`MORGUE/CLIENT/CASENAME/SOURCE/mnt/p*/[Ww][Ii][Nn][Dd][Oo][Ww][Ss]/[Ss]ystem32/[Ww]inevt/[Ll]ogs`|
|`outfile`|path where the generated file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/compromise_events.json`|

## Job `windows.events.Security`

Parse Windows Securty event file to get relevant logs events
The path is the absolute location of the directory where Security.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.System`

Parse Windows System event file to get relevant logs events
The path is the absolute location of the directory where System.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.RDPRemote`

Parse Windows System event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-TerminalServices-RemoteConnectionManager%4Operational.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.RDPLocal`

Parse Windows System event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-TerminalServices-LocalSessionManager%4Operational.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.RDPClient`

Parse Windows System event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-TerminalServices-RDPClient%4Operational.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.Application`

Parse Windows Application event file to get relevant logs events
The path is the absolute location of the directory where Application.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.SMBServer`

Parse Windows System event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-SMBServer%4Security.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.RDPCoreTS`

Parse Windows event files to get relevant RDPCoreTS logs events
The path is the absolute location of the directory where Microsoft-Windows-RemoteDesktopServices-RdpCoreTS%4Operational.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.Scheduled`

Parse Windows scheduled tasks logs events
The path is the absolute location of the directory where Microsoft-Windows-TaskScheduler%4Operational.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.Bits`

Parse Windows event files to get relevant scheduled tasks logs events
The path is the absolute location of the directory where Microsoft-Windows-Bits-Client%4Operational.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.Defender`

Parse Windows event files to get relevant windows defender logs events
The path is the absolute location of the directory where Microsoft-Windows-Windows Defender%4Operational.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.Network`

Parse Windows event files to get relevant networking logs events
The path is the absolute location of the directory where Microsoft-Windows-WLAN-AutoConfig%4Operational.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.USB`

Parse Windows event files to get relevant usb logs events
The path is the absolute location of the directory where Microsoft-Windows-DriverFrameworks-UserMode%4Operational.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.UserProfile`

Parse Windows UserProfile event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-User Profile Service%4Operational file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.Run`

Parse Windows Microsoft-Windows-Shell-Core%4Operational event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-Shell-Core%4Operational file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.WMI`

Parse Windows Microsoft-Windows-WMI-Activity%4Operational event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-WMI-Activity%4Operational file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.OAlerts`

Parse Windows Microsoft Office Alerts event file to get relevant logs events
The path is the absolute location of the directory where OAlerts.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.PartitionDiagnostic`

Parse Windows Microsoft-Windows-Partition%4Diagnostic event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-Partition%4Diagnostic file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.KernelPnp`

Parse Windows Microsoft-Windows-Kernel-PnP%4Configuration event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-Kernel-PnP%4Configuration file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.NtfsOperational`

Parse Windows Microsoft-Windows-Ntfs%4Operational event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-Ntfs%4Operational file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.StorageClassPnp`

Parse Windows Microsoft-Windows-Storage-ClassPnP%4Operational event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Storage-ClassPnP%4Operational file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.DeviceSetupManagerAdmin`

Parse Windows Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Admin event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Admin file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.DeviceSetupManagerOperational`

Parse Windows Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Operational event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Operational file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.PowerShell`

Parse Windows PowerShell event file to get relevant logs events
The path is the absolute location of the directory where "Windows PowerShell.evtx" file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.PowerShellOperational`

Parse Windows PowerShell Operational event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-PowerShell%4Operational.evtx file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.UACFileVirtualization`

Parse Windows Microsoft-Windows-UAC-FileVirtualization%4Operational event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Admin file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.Compatibility-Assistant`

Parse Microsoft-Windows-Application-Experience%4Program-Compatibility-Assistant event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-Application-Experience%4Program-Compatibility-Assistant file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.Program-Telemetry`

Parse Microsoft-Windows-Application-Experience%4Program-Telemetry event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-Application-Experience%4Program-Telemetry file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.appID`

Parse Microsoft-Windows-AppID%4Operational event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-AppID%4Operational file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.vhdmp`

Parse Microsoft-Windows-VHDMP%4Operational event file to get relevant logs events
The path is the absolute location of the directory where Microsoft-Windows-VHDMP-Operational file is located.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.events.ExtraLogs`

Parse all event files not previously considered in other jobs
The path is the absolute location of the directory where evtx files are.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|

## Job `windows.eventartifacts`

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

### Jobs
- ``windows.eventartifacts.logon_rdp``: Extract login and rdp artifacts
- ``windows.eventartifacts.rdp_incoming``: Extract incoming RDP event logs
- ``windows.eventartifacts.rdp_outgoing``: Extract outgoing RDP event logs
- ``windows.eventartifacts.rdp_gateway``: Extract incoming RDP event logs
- ``windows.eventartifacts.process_start``: Display process execution started events
- ``windows.eventartifacts.cached_logon``: Extract cached login artifacts
- ``windows.eventartifacts.poweron``: Extract poweron poweroff artifacts
- ``windows.eventartifacts.user_accounts``: Extract events related to user account creation or modification
- ``windows.eventartifacts.clearlog``: Extract clear log events
- ``windows.eventartifacts.network``: Extract shared object events
- ``windows.eventartifacts.shares``: Extract shared object events
- ``windows.eventartifacts.winupdate``: Extract events related to Windows updates
- ``windows.eventartifacts.tgt``: extracts possible Kerberos tickets (TGT) attacks
- ``windows.eventartifacts.scheduled_tasks``: Extract install related events of processes and services
- ``windows.eventartifacts.services``: Extract install related events of processes and services
- ``windows.eventartifacts.BITS``: Extract BITS events
- ``windows.eventartifacts.Defender``: Extract Windows Defender events
- ``windows.eventartifacts.USB_plug``: Extract USB events
- ``windows.eventartifacts.USB_connections``: Extract USB connections events
- ``windows.eventartifacts.USB_install``: Extract USB installation events
- ``windows.eventartifacts.run``: Extract autorun related events. Detecting process-cmdline of programs running from Run/RunOnce Auto startup locations using events Microsoft-Windows-Shell-Core/Operational EID 9707/9708
- ``windows.eventartifacts.SMB``: Extract SMB error events
- ``windows.eventartifacts.powershell``: Extract cached login artifacts
- ``windows.eventartifacts.DCOM``: Extract DCOM connection errors
- ``windows.eventartifacts.wer``: Extracts info about Windows Resource Protection
- ``windows.eventartifacts.msiinstaller``: Extracts info about Windows MsiInstaller
- ``windows.eventartifacts.USBPlugs2``: Extract USB events related with partitions
- ``windows.eventartifacts.VolumeFree``: Extract Volume NTFS events related with free space
- ``windows.eventartifacts.vpn_server``: Extract vpn related events of server
- ``windows.eventartifacts.vpn_client``: Extract vpn related events of client

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to json file gnerated by windows.events job|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/events/events.json`|
|`outdir`|directory where resulting files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events`|

## Job `windows.eventartifacts.logon_rdp`

Extract login and rdp artifacts
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/rdp.csv`|

## Job `windows.eventartifacts.rdp_incoming`

Extract incoming RDP event logs
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile_csv`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/rdp_incoming.csv`|
|`outfile_md`|path where generated md table file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/rdp_incoming.md`|
|`outfile_md2`|path where generated md table file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/rdp_ip_info.md`|

## Job `windows.eventartifacts.rdp_gateway`

Extract incoming RDP event logs
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile_csv`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/rdp_gateway.csv`|
|`outfile_md`|path where generated md table file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/rdp_gateway.md`|
|`outfile_md2`|path where generated md table file related with ip will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/rdp_ip_gateway.md`|

## Job `windows.eventartifacts.rdp_outgoing`

Extract outgoing RDP event logs
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile_csv`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/rdp_outgoing.csv`|
|`outfile_md`|path where generated md table file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/rdp_outgoing.md`|

## Job `windows.eventartifacts.process_start`

Display process execution started events
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/process_start.csv`|

## Job `windows.eventartifacts.cached_logon`

Extract cached login artifacts
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/cachedlogin.csv`|

## Job `windows.eventartifacts.poweron`

Extract poweron poweroff artifacts
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/power.json`|

## Job `windows.eventartifacts.user_accounts`

Extract events related to user account creation or modification
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/user_accounts.csv`|

## Job `windows.eventartifacts.network`

Extract shared object events

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/network.csv`|

## Job `windows.eventartifacts.shares`

Extract shared object events

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/shares.csv`|

## Job `windows.eventartifacts.winupdate`

Extract events related to Windows updates

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/winupdate.csv`|

## Job `windows.eventartifacts.scheduled_tasks`

Extract install related events of processes and services

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/scheduled.csv`|

## Job `windows.eventartifacts.services`

Extract install related events of processes and services

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/services.csv`|

## Job `windows.eventartifacts.UserProfile`

Extract logon/logoff related events in UserProfile

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/user_profile.csv`|

## Job `windows.eventartifacts.tgt`

extracts possible Kerberos tickets (TGT) attacks
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated txt file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/text.txt`|

## Job `windows.eventartifacts.clearlog`

Extract clear log events

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/clearlog.csv`|

## Job `windows.eventartifacts.run`

Extract autorun related events. Detecting process-cmdline of programs running from Run/RunOnce Auto startup locations using events Microsoft-Windows-Shell-Core/Operational EID 9707/9708
Check: <https://blog.menasec.net/2019/02/threat-hunting-20-runrunonce-eid.html>

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/run.csv`|

## Job `windows.eventartifacts.SMB`

Extract SMB error events

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/smb.csv`|

## Job `windows.eventartifacts.BITS`

Extract BITS events

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/bits.csv`|

## Job `windows.eventartifacts.Defender`

Extract Windows Defender events

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/defender.csv`|

## Job `windows.eventartifacts.USB_plug`

Extract USB events

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/usb_plugs.csv`|

## Job `windows.eventartifacts.USBPlugs2`

Extract USB events related with partitions
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/usb_plugs2.csv`|
|`outfile_md`|path where generated md table file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/usb_plugs2.md`|
|`outfile_md2`|path where generated md table file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/usb_info.md`|

## Job `windows.eventartifacts.VolumeFree`

Extract Volume NTFS events related with free space
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/volume_free.csv`|

## Job `windows.eventartifacts.USB_connections`

Extract USB connections events

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/usb_connections.csv`|

## Job `windows.eventartifacts.USB_install`

Extract USB installation events

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/usb_install.csv`|

## Job `windows.eventartifacts.powershell`

Extract cached login artifacts
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/ps.csv`|

## Job `windows.eventartifacts.DCOM`

Extract DCOM connection errors

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/dcomerror.csv`|

## Job `windows.eventartifacts.wer`

Extracts info about Windows Resource Protection

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/wererror.csv`|

## Job `windows.eventartifacts.msiinstaller`

Extracts info about Windows MsiInstaller

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/msiinstaller.csv`|

## Job `windows.eventartifacts.compatibilityassistant`

Extracts info related with compatibility assistant and program telemetry

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/compatibilityassistant.csv`|

## Job `windows.eventartifacts.appid`

Extracts info related with appID. It is related with existence of a program.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/appid.csv`|

## Job `windows.eventartifacts.vpn_server`

Extract vpn related events of server

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/vpn_server.csv`|

## Job `windows.eventartifacts.vpn_client`

Extract vpn related events of client

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/vpn_client.csv`|

## Job `windows.eventartifacts.legacy_services`

Extract install related events of processes and services

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/services_legacy.csv`|

## Job `windows.eventartifacts.legacy_logon`

Extract login and rdp artifacts
The path is the absolute location of event.json file.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated csv file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events/rdp_legacy.csv`|

## Job `windows.scheduled_tasks_all`

Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files

### Jobs
- ``windows.scheduled_tasks``: Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files
- ``windows.scheduled_tasks``: Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files
- ``windows.scheduled_tasks``: Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files
- ``windows.scheduled_tasks``: Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`|
|`mountdir`||`MORGUE/CLIENT/CASENAME/SOURCE/mnt`|

## Job `windows.scheduled_tasks`

Parse Task Scheduler Service artifacts such as SCHEDLGU.TXT and .job files
Set the directory to search for such artifacts in `path`

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/execution`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

## Job `windows.recycle`

Parse files in (or deleted from) Windows Recycle Bin.
You must generate the timeline with `fs_timeline` or `mft_timeline` before running the present job.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/recyclebin`|

## Job `windows.srum`

Extract and parse SRUM (System Resource Utilization Monitor) from a windows OS

SRUM collects statistics on execution of binaries: CPU, memory... It can be used to prove
the execution of a program.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to SRUDB.dat file to parse|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/srum`|
|`software_hive`|path, in glob format, to SOFTWARE hive|`MORGUE/CLIENT/CASENAME/SOURCE/mnt/p*/[Ww]indows/[Ss]ystem32/[Cc]onfig/SOFTWARE`|

## Job `windows.usb`

Extracts USB drives data about drivers installation from setupapi.dev.log
Expects a path to setupapi.dev.log file as argument.
If no argument is provided, it will search on all allocated files mounted. Make sure to run `allocfiles` before this job if this is the case.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to setupapi.dev.log file. If not provided, the job will search in all allocated files|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/usb`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|

## Job `windows.usnjrnl_all`

Parse all NTFS UsnJrnl files found in an image.
UsnJrnl is the journal log of NTFS. You will find recent oprations on files: deletion, modification, renaming...

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/usnjrnl`|

## Job `windows.usnjrnl`

Parse NTFS UsnJrnl file, the journal log of NTFS. You will find recent oprations on files: deletion, modification, renaming...

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/usnjrnl`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|

## Job `windows.hiberfil`

Decompress hiberfil.sys and extract some artifacts
Provide an hiberfil.sys file as an argument or let the job search in allocated files if no argument is provided
Requires `allocfiles` and `windows.characterize` if no path or profile is provided

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/hibernation`|
|`volatility_plugins`|Space separated list of volatility plugins to run|`pslist netscan filescan shutdowntime mftparser`|
|`profile`|Windows profile describing version as expected by volatility. Ex: Win10x64. It will be searched in the current registry if not provided|``|
|`overwrite_imagecopy`|If true, make a new imagecopy of hiberfil.sys even if a previous one already existed|`False`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|

## Job `windows.quarantine`

Parse Windows quarantinefiles.

### Jobs
- ``allocfiles``: Generate allocated files in a disk image

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where the generated file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/quarantine`|

## Job `windows.remotedesktop`

Parse Windows remotedesktop logs of TeamViewer and Anydesk.

### Jobs
- ``windows.remotedesktop.teamviewer_inc_connections``: Parse teamviewer connections_incomming file
- ``windows.remotedesktop.teamviewer_connections``: Parse teamviewer connections_incomming file
- ``windows.remotedesktop.teamviewer_log_connections``: Parse teamviewer connections_incomming file
- ``windows.remotedesktop.anydesk``: Parse teamviewer connections_incomming file
- ``windows.remotedesktop.anydesk``: Parse teamviewer connections_incomming file
- ``windows.remotedesktop.anydesk``: Parse teamviewer connections_incomming file

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where the generated file will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/remotedesktop`|

## Job `windows.remotedesktop.teamviewer_inc_connections`

Parse teamviewer connections_incomming file

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to connections_incoming.txt file|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/remotedesktop`|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/remotedesktop/TeamViewer_incoming_connections.csv`|
|`fieldnames`||`startdate;enddate;teamviewer.hostname;id.connection;machine.hostname;mode;partition`|

## Job `windows.remotedesktop.teamviewer_connections`

Parse teamviewer connections_incomming file

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to connections_incoming.txt file|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/remotedesktop`|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/remotedesktop/TeamViewer_connections.csv`|
|`fieldnames`||`startdate;enddate;machine.hostname;id.connection;mode;partition;winuser`|

## Job `windows.remotedesktop.teamviewer_log_connections`

Parse teamviewer connections_incomming file

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to connections_incoming.txt file|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/remotedesktop`|
|`outfile`||`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/remotedesktop/TeamViewer_Log_connections.csv`|
|`fieldnames`||`startdate;enddate;machine.hostname;id.connection;mode;partition;winuser`|

## Job `windows.remotedesktop.anydesk`

Parse teamviewer connections_incomming file

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to ad.trace file|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/remotedesktop`|

## Job `windows.memory`

Use volatility to get information of a memory image file, such as the physical memory of a device as retrieved by F-ResponseDecompress hiberfil.sys and extract some artifacts.
Requires `windows.characterize` if no profile is provided.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/memory`|
|`volatility_plugins`|Space separated list of volatility plugins to run|`pstree netscan filescan shutdowntime mftparser`|
|`profile`|Windows profile describing version as expected by volatility. Ex: Win10x64. It will be searched in the current registry if not provided|``|
|`volume_id`|volume identifier, such as partition number. Ex: p03|`p01`|

## Job `windows.notifications`

Parse windows Notifications database

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to wpndatabase.db file|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/notifications`|

## Job `windows.bits`

Parse Background Intelligent Transfer Service (BITS). This is a service to transfer binaries between systems, used mainly by Microsoft Update and similar programs.

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to qmgr0.dat file|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/bits`|

## Job `windows.i30`

Parse I30 files to obtain a timeline

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`root`|If True, parse also INDX_ROOT attributes.|`False`|
|`skip_short`|If True, do not output Windows short format filenames.|`True`|
|`only_slack`|If True, parse only the slack space in INDX_ALLOC blocks.|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/output/windows/i30`|

## Job `windows.source_summary`

Create summary tables for most relevant artifacts previously parsed, both in CSV and MD format.
os_summary.md: Operating system characteristics and users
execution_summary.csv/md: Includes the next execution related artifacts:
- amcache
- appcompatcache
- shimcache
- userassist
- prefetch
persistence_summary.csv/md: Includes the next persistence related artifacts:
- scheduled tasks
- installed services
activity_summary.csv/md: Includes the next artifacts describing user interaction:
- recentiles (lnk)
- jumplists
- shellbags
summary.md: Set of all previous tables in MD format. Including also:
- RDP connections
- browsers history

### Jobs

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path to file where results will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/summary.md`|
|`outfile_execution`||`MORGUE/CLIENT/CASENAME/SOURCE/analysis/execution_summary.csv`|
|`outfile_persistence`||`MORGUE/CLIENT/CASENAME/SOURCE/analysis/persistence_summary.csv`|
|`outfile_activity`||`MORGUE/CLIENT/CASENAME/SOURCE/analysis/activity_summary.csv`|
|`outfile_execution_md`||`MORGUE/CLIENT/CASENAME/SOURCE/analysis/execution_summary.md`|
|`outfile_persistence_md`||`MORGUE/CLIENT/CASENAME/SOURCE/analysis/persistence_summary.md`|
|`outfile_activity_md`||`MORGUE/CLIENT/CASENAME/SOURCE/analysis/activity_summary.md`|
|`tz`|tzdata/Olsen timezone name to set for the dates. Examples: `Europe/Berlin`, `America/New_York`, `UTC`. If `local` is set, timezone will be searched on the registry|`local`|

## Job `windows.events.hayabusa`

Extracts timeline alerts from windows events using hayabusa

### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|path to json file gnerated by windows.events job|`MORGUE/CLIENT/CASENAME/SOURCE/mnt/p*/[Ww][Ii][Nn][Dd][Oo][Ww][Ss]/[Ss]ystem32/[Ww]inevt/[Ll]ogs`|
|`outdir`|directory where resulting files will be stored|`MORGUE/CLIENT/CASENAME/SOURCE/analysis/events`|
|`hayabusa_path`|./external_tools/hayabusa-2.12.0|`./external_tools/hayabusa-2.12.0`|


:::warning
This chapter was created automatically using `autodoc.sh`. Do not modify manually this file.
:::

