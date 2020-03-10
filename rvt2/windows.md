
# Section windows

This plugin extracts and analyzes forensic artifacts from a Windows system.

## Jobs

- ``windows.preforensics``: Main set of forensic analysis jobs to run on a Windows disk partition.
- ``windows.characterize``: Describes basic information about disk and Windows partitions.
- ``windows.recentfiles``: Parse lnk and jumplist files from a Windows image. Generates a summary file with all recent files sources.
- ``windows.exec``: Extract and parse Windows artifacts related with applications execution (Prefetch, RFC, BAM).
- ``windows.autorip``: Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
- ``windows.registry``: Dumps Windows Registry hives. Used for indexing.
- ``windows.hives``: Parse extra registry hives, such as AmCache, ShimCache, ScheduledTasks or ScheduledTasks
- ``windows.recycle``: Parse files in (or deleted from) Windows Recycle Bin
- ``windows.srum``: Extract and parse SRUM (System Resource Utilization Monitor) from a windows OS
- ``windows.usb``: Extracts USB drives data about drivers installation from setupapi.dev.log
- ``windows.usnjrnl``: Parse NTFS UsnJrnl
- ``windows.hiberfil``: Decompress hiberfil.sys and extract some artifacts
- ``windows.bits``: Parse Background Intelligent Transfer Service (BITS)
- ``windows.activity_cache``: Parse ActivitiesCache database
- ``windows.i30``: Parse I30 files to obtain a timeline
- ``windows.evtx_export``: Extract Windows Event Logs into `txt` format.
- ``windows.evtx``: Extract and parse Windows Event Logs.
- ``windows.events``: Parse Windows event files to get relevant logs events. Job 'windows.evtx' must be executed first
- ``windows.events.Security``: Parse Windows Securty event file to get relevant logs events
- ``windows.events.System``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPRemote``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPLocal``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPClient``: Parse Windows System event file to get relevant logs events
- ``windows.events.RDPCoreTS``: Parse Windows System event file to get relevant logs events
- ``windows.events.Scheduled``: Parse Windows event files to get relevant scheduled tasks logs events
- ``windows.events.Bits``: Parse Windows event files to get relevant scheduled tasks logs events
- ``windows.events.Network``: Parse Windows event files to get relevant networking logs events
- ``windows.events.USB``: Parse Windows event files to get relevant usb logs events
- ``windows.RVT_eventartifacts.logon_rdp``: Extract login and rdp artifacts
- ``windows.RVT_eventartifacts.poweron``: Extract poweron poweroff artifacts

### Job `windows.preforensics`

Main set of forensic analysis jobs to run on a Windows disk partition.
Artifacts parsed:
- MFT Timeline
- Registry
- Event Logs
- Lnk and Jumplists
- UsnJrnl
- Prefetch
- Browser History
- Recycle Bin
- RFC
- Activities Cache
- USB artifacts
- SRUM
- BITS

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`timeline_outdir`||`MORGUE/CASENAME/SOURCE/output/timeline`|
|`characterize_outfile`||`MORGUE/CASENAME/SOURCE/analysis/characterize.md`|
|`autorip_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/hives`|
|`lnk_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/recentfiles`|
|`lnk_analysis_outdir`||`MORGUE/CASENAME/SOURCE/analysis/recentfiles`|
|`event_logs_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/events`|
|`event_analysis_outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|
|`browsers_outdir`||`MORGUE/CASENAME/SOURCE/output/browsers`|
|`recycle_bin_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/recyclebin`|
|`prefetch_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`RFC_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`SRUM_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/srum`|
|`usb_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/usb`|
|`BITS_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/bits`|
|`usn_jrnl_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/usnjrnl`|
|`BAM_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/execution`|
|`activities_cache_outdir`||`MORGUE/CASENAME/SOURCE/output/windows/execution`|

### Job `windows.characterize`

Describes basic information about disk and Windows partitions.
Information includes:
- Partition Table
- Disk model and serial number (if cloning log provided)
- OS name, version, ID and owner
- OS Installation (or update) date
- Creation and last login/logoff dates for every user present

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path to file were results are stored (in markdown format)|`MORGUE/CASENAME/SOURCE/analysis/characterize.md`|
|`template_file`|mako template to display results|`templates/disk.mako`|
|`file_exists`||`OVERWRITE`|

### Job `windows.recentfiles`

Parse lnk and jumplist files from a Windows image. Generates a summary file with all recent files sources.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/recentfiles`|
|`outdir_analysis`|path to directory where generated analysis files will be stored|`MORGUE/CASENAME/SOURCE/analysis/recentfiles`|
|`appid`|path to file relating applications id with names|`/home/jvera/rvt2/plugins/windows/appID.txt`|

### Job `windows.exec`

Extract and parse Windows artifacts related with applications execution (Prefetch, RFC, BAM).

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|

### Job `windows.autorip`

Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`ripplugins`|path to json file containing the organized list of regripper plugins to run|`/home/jvera/rvt2/plugins/windows/autorip.json`|
|`pluginshives`|path to json file associating each regripper plugin with a list of hives|`/home/jvera/rvt2/plugins/windows/regripper_plugins.json`|
|`errorfile`|path to log file to register regripper errors|`MORGUE/CASENAME/SOURCE/SOURCE_aux.log`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|

### Job `windows.registry`

Dumps Windows Registry hives. Used for indexing.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where generated file will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives/registry_dump.json`|
|`vss`|process Volume Shadow Snapshot|`False`|

### Job `windows.hives`

Parse extra registry hives, such as AmCache, ShimCache, ScheduledTasks or ScheduledTasks

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|
|`voutdir`|directory where VSS generated files will be stored|`MORGUE/CASENAME/SOURCE/output/vss/hives`|
|`vss`|process Volume Shadow Snapshot|`False`|

### Job `windows.recycle`

Parse files in (or deleted from) Windows Recycle Bin

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/recyclebin`|

### Job `windows.srum`

Extract and parse SRUM (System Resource Utilization Monitor) from a windows OS

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/srum`|

### Job `windows.usb`

Extracts USB drives data about drivers installation from setupapi.dev.log

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/usb`|

### Job `windows.usnjrnl`

Parse NTFS UsnJrnl

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/usnjrnl`|

### Job `windows.hiberfil`

Decompress hiberfil.sys and extract some artifacts

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hibernation`|

### Job `windows.bits`

Parse Background Intelligent Transfer Service (BITS)

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/bits`|

### Job `windows.activity_cache`

Parse ActivitiesCache database

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|

### Job `windows.i30`

Parse I30 files to obtain a timeline

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`root`|If True, parse also INDX_ROOT attributes.|`False`|
|`skip_short`|If True, do not output Windows short format filenames.|`True`|
|`only_slack`|If True, parse only the slack space in INDX_ALLOC blocks.|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/i30`|

### Job `windows.evtx_export`

Extract Windows Event Logs into `txt` format.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/events`|

### Job `windows.evtx`

Extract and parse Windows Event Logs.

Includes the processing of events related to:
- Login / Logoff
- Update
- Network connections
- Scheduled Tasks
- InstallServices
- Oalert Application
- Devices

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/events`|
|`outdir_analysis`|path to directory where generated analysis files will be stored|`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.events`

Parse Windows event files to get relevant logs events. Job 'windows.evtx' must be executed first
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

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|path where the generated file will be stored|`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.events.Security`

Parse Windows Securty event file to get relevant logs events
The path is the absolute location of eventlogs files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.events.System`

Parse Windows System event file to get relevant logs events
The path is the absolute location of eventlogs files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.events.RDPRemote`

Parse Windows System event file to get relevant logs events
The path is the absolute location of eventlogs files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.events.RDPLocal`

Parse Windows System event file to get relevant logs events
The path is the absolute location of eventlogs files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.events.RDPClient`

Parse Windows System event file to get relevant logs events
The path is the absolute location of eventlogs files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.events.RDPCoreTS`

Parse Windows System event file to get relevant logs events
The path is the absolute location of eventlogs files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.events.Scheduled`

Parse Windows event files to get relevant scheduled tasks logs events
The path is the absolute location of eventlogs files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.events.Bits`

Parse Windows event files to get relevant scheduled tasks logs events
The path is the absolute location of eventlogs files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.events.Network`

Parse Windows event files to get relevant networking logs events
The path is the absolute location of eventlogs files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.events.USB`

Parse Windows event files to get relevant usb logs events
The path is the absolute location of eventlogs files.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/events.json`|

### Job `windows.RVT_eventartifacts.logon_rdp`

Extract login and rdp artifacts
The path is the absolute location of event.json file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/rdp.json`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.RVT_eventartifacts.poweron`

Extract poweron poweroff artifacts
The path is the absolute location of event.json file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/power.json`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|


:::warning
This chapter was created automatically using `rvt2 -j help windows --params show_vars="" template_file="templates/help_section_complete.mako" outfile="rvt2/windows.md"`. Do not modify manually this file.
:::

