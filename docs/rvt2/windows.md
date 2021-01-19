
# Section windows

This plugin extracts and analyzes forensic artifacts from a Windows system.

## Jobs

- ``windows.preforensics``: Main set of forensic analysis jobs to run on a Windows disk partition.
- ``windows.IR_preforensics``: Main set of forensic analysis jobs to run on Windows artifacts. It assumes artifact files are located under `MORGUE/CASENAME/SOURCE/mnt`
- ``windows.characterize``: Describes basic information about disk and Windows partitions.
- ``windows.recentfiles``: Parse lnk and jumplist files in a directory
- ``windows.recentfiles_report``: Generates a summary file with all recent files sources.
- ``windows.recentfiles_default``: Parse lnk and jumplist files from a Windows image. Generates a summary file with all recent files sources.
- ``windows.exec``: Extract and parse Windows artifacts related with applications execution (Prefetch, RFC).
- ``windows.prefetch``: Extract and parse Windows artifacts related with applications execution (Prefetch)
- ``windows.rfc``: Extract and parse Windows artifacts related with applications execution (RFC)
- ``windows.exec.CCM``: Extracts CCM info to get more information about executions
- ``windows.autorip``: Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
- ``windows.autorip_default``: Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.
- ``windows.registry``: Dumps Windows Registry hives. Used for indexing.
- ``windows.hives``: Parse extra registry hives, such as AmCache, ShimCache, ScheduledTasks or ScheduledTasks
- ``windows.recycle``: Parse files in (or deleted from) Windows Recycle Bin
- ``windows.srum``: Extract and parse SRUM (System Resource Utilization Monitor) from a windows OS
- ``windows.usb``: Extracts USB drives data about drivers installation from setupapi.dev.log
- ``windows.usnjrnl``: Parse NTFS UsnJrnl, the journal log of NTFS. You will find recent oprations on files: deletion, modification, renaming...
- ``windows.hiberfil``: Decompress hiberfil.sys and extract some artifacts
- ``windows.bits``: Parse Background Intelligent Transfer Service (BITS). This is a service to transfer binaries between systems, used mainly by Microsoft Update and similar programs.
- ``windows.activity_cache``: Parse ActivitiesCache database
- ``windows.i30``: Parse I30 files to obtain a timeline
- ``windows.events``: Parse Windows event files to get relevant logs events.
- ``windows.events.OAlerts``: Parse Windows Securty event file to get relevant logs events
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
- ``windows.events.UserProfile``: Parse Windows UserProfile event file to get relevant logs events
- ``windows.events.Run``: Parse Windows Microsoft-Windows-Shell-Core%4Operational event file to get relevant logs events
- ``windows.events.PartitionDiagnostic``: Parse Windows Microsoft-Windows-Partition%4Diagnostic event file to get relevant logs events
- ``windows.events.KernelPnp``: Parse Windows Microsoft-Windows-Kernel-PnP%4Configuration event file to get relevant logs events
- ``windows.events.NtfsOperational``: Parse Windows Microsoft-Windows-Ntfs%4Operational event file to get relevant logs events
- ``windows.events.StorageClassPnp``: Parse Windows Microsoft-Windows-Storage-ClassPnP%4Operational event file to get relevant logs events
- ``windows.events.DeviceSetupManagerAdmin``: Parse Windows Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Admin event file to get relevant logs events
- ``windows.events.DeviceSetupManagerOperational``: Parse Windows Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Operational event file to get relevant logs events
- ``windows.eventsartifacts``: Extracts windows artifacts from event files. Job 'windows.events' must be executed first
- ``windows.eventartifacts.logon_rdp``: Extract login and rdp artifacts
- ``windows.eventartifacts.logon_rdp2``: Extract login and rdp artifacts
- ``windows.eventartifacts.logon_rdp_out``: Extract login and rdp artifacts
- ``windows.eventartifacts.poweron``: Extract poweron poweroff artifacts
- ``windows.eventartifacts.network``: Extract shared object events
- ``windows.eventartifacts.shares``: Extract shared object events
- ``windows.eventartifacts.winupdate``: Extract install related events of processes and services
- ``windows.eventartifacts.scheduled_tasks``: Extract install related events of processes and services
- ``windows.eventartifacts.install``: Extract install related events of processes and services
- ``windows.eventartifacts.UserProfile``: Extract autorun related events
- ``windows.eventartifacts.run``: Extract autorun related events
- ``windows.eventartifacts.BITS``: Extract BITS events
- ``windows.eventartifacts.USB_plug``: Extract USB events
- ``windows.eventartifacts.USB_connections``: Extract USB events 2
- ``windows.eventartifacts.USB_install``: Extract USB events
- ``windows.source_summary``: Tables summary of previously parsed artefacts

### Job `windows.preforensics`

Main set of forensic analysis jobs to run on a Windows disk partition.

Artifacts parsed:

- MFT Timeline
- Characterize: `MORGUE/CASENAME/SOURCE/analysis/characterize.md`
- Registry (using Regripper): `MORGUE/CASENAME/SOURCE/output/windows/hives`
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
- USB artifacts'MORGUE/CASENAME/SOURCE/output/windows/usb`
- BAM: `MORGUE/CASENAME/SOURCE/output/windows/execution`

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`timeline_outdir`||`MORGUE/CASENAME/SOURCE/output/timeline`|

### Job `windows.IR_preforensics`

Main set of forensic analysis jobs to run on Windows artifacts. It assumes artifact files are located under `MORGUE/CASENAME/SOURCE/mnt`

Artifacts parsed:

- MFT Timeline
- Registry (using Regripper): `MORGUE/CASENAME/SOURCE/output/windows/hives`
- Event Logs:
- `MORGUE/CASENAME/SOURCE/output/windows/events`
- `MORGUE/CASENAME/SOURCE/analysis/events`
- Lnk and Jumplists:
- `MORGUE/CASENAME/SOURCE/output/windows/recentfiles`
- `MORGUE/CASENAME/SOURCE/analysis/recentfiles`
- Prefetch: `MORGUE/CASENAME/SOURCE/output/windows/execution`
- Browser History: `MORGUE/CASENAME/SOURCE/output/browsers`

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`timeline_outdir`||`MORGUE/CASENAME/SOURCE/output/timeline`|

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

Parse lnk and jumplist files in a directory

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path to folder containing lnk|automaticdestestination|customdestination files|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/recentfiles`|
|`outdir_analysis`|path to directory where generated analysis files will be stored|`MORGUE/CASENAME/SOURCE/analysis/recentfiles`|
|`appid`|path to file relating applications id with names|`/home/juanvi/Incide/Projects/rvt2/plugins/windows/appID.txt`|
|`volume_id`||``|
|`username`||``|

### Job `windows.recentfiles_report`

Generates a summary file with all recent files sources.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`lnk_dir`|path to directory where files generated by windows.recentfiles are be stored|`MORGUE/CASENAME/SOURCE/output/windows/recentfiles`|
|`outdir`|path to directory where generated analysis files will be stored|`MORGUE/CASENAME/SOURCE/analysis/recentfiles`|

### Job `windows.recentfiles_default`

Parse lnk and jumplist files from a Windows image. Generates a summary file with all recent files sources.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshots|`False`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/recentfiles`|
|`outdir_analysis`|path to directory where generated analysis files will be stored|`MORGUE/CASENAME/SOURCE/analysis/recentfiles`|
|`appid`|path to file relating applications id with names|`/home/juanvi/Incide/Projects/rvt2/plugins/windows/appID.txt`|

### Job `windows.exec`

Extract and parse Windows artifacts related with applications execution (Prefetch, RFC).

- Prefetch: files designed to speed up the execution of processes. Contain DLLs used, how many times the executable run (in <W10), timestamp
- RFC: process creation data stored by ProgramDataUpdater.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`vss`|process Volume Shadow Snapshot|`False`|
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
|`path`|path to directory containing pf files|``|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/execution`|

### Job `windows.exec.CCM`

Extracts CCM info to get more information about executions
The path is the absolute location of Windows/System32/wbem/Repository folder.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/execution/CCM.json`|
|`outfile2`||`MORGUE/CASENAME/SOURCE/output/windows/execution/CCM.csv`|

### Job `windows.autorip`

Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.

The list of regripper modules, its description and output file can be found at: `/home/juanvi/Incide/Projects/rvt2/plugins/windows/autorip.json`

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
|`vss`|process Volume Shadow Snapshot|`False`|
|`ripplugins`|path to json file containing the organized list of regripper plugins to run|`/home/juanvi/Incide/Projects/rvt2/plugins/windows/autorip.json`|
|`pluginshives`|path to json file associating each regripper plugin with a list of hives|`/home/juanvi/Incide/Projects/rvt2/plugins/windows/regripper_plugins.json`|
|`errorfile`|path to log file to register regripper errors|`MORGUE/CASENAME/SOURCE/SOURCE_aux.log`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|

### Job `windows.autorip_default`

Extracts an extensive set of keys from Windows Registry hives. Results are organized according to its information type.

This job takes the default configuration of mounted devices as base to locate hive files to parse

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|absolute path to folder containing hives|``|
|`ripplugins`|path to json file containing the organized list of regripper plugins to run|`/home/juanvi/Incide/Projects/rvt2/plugins/windows/autorip.json`|
|`pluginshives`|path to json file associating each regripper plugin with a list of hives|`/home/juanvi/Incide/Projects/rvt2/plugins/windows/regripper_plugins.json`|
|`errorfile`|path to log file to register regripper errors|`MORGUE/CASENAME/SOURCE/SOURCE_aux.log`|
|`outdir`|path to directory where generated files will be stored|`MORGUE/CASENAME/SOURCE/output/windows/hives`|
|`volume_id`|volume identifier, such as partition number. Ex: p03|``|
|`casedir`||`MORGUE/CASENAME`|

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

SRUM collects statistics on execution of binaries: CPU, memory... It can be used to prove
the execution of a program.

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

Parse NTFS UsnJrnl, the journal log of NTFS. You will find recent oprations on files: deletion, modification, renaming...

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

Parse Background Intelligent Transfer Service (BITS). This is a service to transfer binaries between systems, used mainly by Microsoft Update and similar programs.

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

### Job `windows.events`

Parse Windows event files to get relevant logs events.
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
|`outfile`|path where the generated file will be stored|`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.OAlerts`

Parse Windows Securty event file to get relevant logs events
The path is the absolute location of OAlerts.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.Security`

Parse Windows Securty event file to get relevant logs events
The path is the absolute location of Security.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.System`

Parse Windows System event file to get relevant logs events
The path is the absolute location of System.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.RDPRemote`

Parse Windows System event file to get relevant logs events
The path is the absolute location of Microsoft-Windows-TerminalServices-RemoteConnectionManager%4Operational.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.RDPLocal`

Parse Windows System event file to get relevant logs events
The path is the absolute location Microsoft-Windows-TerminalServices-LocalSessionManager%4Operational.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.RDPClient`

Parse Windows System event file to get relevant logs events
The path is the absolute location of Microsoft-Windows-TerminalServices-RDPClient%4Operational.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.RDPCoreTS`

Parse Windows System event file to get relevant logs events
The path is the absolute location of Microsoft-Windows-RemoteDesktopServices-RdpCoreTS%4Operational.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.Scheduled`

Parse Windows event files to get relevant scheduled tasks logs events
The path is the absolute location of Microsoft-Windows-TaskScheduler%4Operational.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.Bits`

Parse Windows event files to get relevant scheduled tasks logs events
The path is the absolute location of Microsoft-Windows-Bits-Client%4Operational.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.Network`

Parse Windows event files to get relevant networking logs events
The path is the absolute location of Microsoft-Windows-WLAN-AutoConfig%4Operational.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.USB`

Parse Windows event files to get relevant usb logs events
The path is the absolute location of Microsoft-Windows-DriverFrameworks-UserMode%4Operational.evtx file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.UserProfile`

Parse Windows UserProfile event file to get relevant logs events
The path is the absolute location of Microsoft-Windows-User Profile Service%4Operational file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.Run`

Parse Windows Microsoft-Windows-Shell-Core%4Operational event file to get relevant logs events
The path is the absolute location of Microsoft-Windows-Shell-Core%4Operational file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.PartitionDiagnostic`

Parse Windows Microsoft-Windows-Partition%4Diagnostic event file to get relevant logs events
The path is the absolute location of Microsoft-Windows-Partition%4Diagnostic file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.KernelPnp`

Parse Windows Microsoft-Windows-Kernel-PnP%4Configuration event file to get relevant logs events
The path is the absolute location of Microsoft-Windows-Kernel-PnP%4Configuration file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.NtfsOperational`

Parse Windows Microsoft-Windows-Ntfs%4Operational event file to get relevant logs events
The path is the absolute location of Microsoft-Windows-Ntfs%4Operational file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.StorageClassPnp`

Parse Windows Microsoft-Windows-Storage-ClassPnP%4Operational event file to get relevant logs events
The path is the absolute location of Microsoft-Storage-ClassPnP%4Operational file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.DeviceSetupManagerAdmin`

Parse Windows Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Admin event file to get relevant logs events
The path is the absolute location of Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Admin file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.events.DeviceSetupManagerOperational`

Parse Windows Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Operational event file to get relevant logs events
The path is the absolute location of Microsoft-Windows-Micrsoft-Windows-DeviceSetupManager%4Operational file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/windows/events/events.json`|

### Job `windows.eventsartifacts`

Extracts windows artifacts from event files. Job 'windows.events' must be executed first
Artifacts extraced:
- Login, logoff
- Poweron, poweroff
- wifi network artifacts
- shared objects
- winupdate events
- scheduled tasks
- Install processes and services
- BITS
- Usb plugs
- Usb install drivers
- OAlerts

### Job `windows.eventartifacts.logon_rdp`

Extract login and rdp artifacts
The path is the absolute location of event.json file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/rdp.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.logon_rdp2`

Extract login and rdp artifacts
The path is the absolute location of event.json file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/rdp2.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.logon_rdp_out`

Extract login and rdp artifacts
The path is the absolute location of event.json file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/rdp_out.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.poweron`

Extract poweron poweroff artifacts
The path is the absolute location of event.json file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/power.json`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.network`

Extract shared object events

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/network.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.shares`

Extract shared object events

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/shares.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.winupdate`

Extract install related events of processes and services

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/winupdate.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.scheduled_tasks`

Extract install related events of processes and services

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/scheduled.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.install`

Extract install related events of processes and services

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/install.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.UserProfile`

Extract autorun related events

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/user_profile.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.run`

Extract autorun related events

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/run.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.BITS`

Extract BITS events

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/bits.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.USB_plug`

Extract USB events

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/usb_plugs.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.USB_connections`

Extract USB events 2

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/usb_connections.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.eventartifacts.USB_install`

Extract USB events

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/events/usb_install.csv`|
|`outdir`||`MORGUE/CASENAME/SOURCE/analysis/events`|

### Job `windows.source_summary`

Tables summary of previously parsed artefacts

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`sourcedir`||`MORGUE/CASENAME/SOURCE`|
|`outfile`||`MORGUE/CASENAME/SOURCE/analysis/SOURCE_summary.md`|


:::warning
This chapter was created automatically using `rvt2 -j help windows --params show_vars="" template_file="templates/help_section_complete.mako" outfile="docs/rvt2/windows.md"`. Do not modify manually this file.
:::

