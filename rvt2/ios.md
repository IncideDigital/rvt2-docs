
# Section ios

This plugin extracts and analyzes forensic artifacts from a iOS system, used in iPhones and iPads.


## Creating iOS backups

The main input for the jobs in this plugin is an iOS backup. You can create this backup using iTunes or idevicebackup2 from the libimobile library (<https://www.libimobiledevice.org/>). Encrypted backups are preferred, since they include additional information not present in regular backups.

```bash
idevicebackup2 encryption on "PASSWORD"
idevicebackup2 backup .
idevicebackup2 encryption off "PASSWORD"
```

You *need* the backup password. Write it down somewhere.

The *path* to the main job is the path to the folder containing the backup, or a .zip file containing the backup.

Save the backup as the folder `%(imagedir)s/CASE_NAME/SOURCE_NAME` or zip file `%(imagedir)s/images/CASE_NAME/SOURCE_NAME.zip`.

If the backup is encrypted, and additinal step to decrypt the backup is needed. Currently, the RVT2 does not include directly the tools to decrypt an iOS backup and you must install an external tool such as <https://github.com/dinosec/iphone-dataprotection>. Once installed, add this configuration to the RVT2:

```ini
[ios.unback]
unback_command: PATH_TO_BACKUPTOOL//backup_tool.py {bk_path} {extract_path}
```

## Jobs

- ``ios.unback``: Unback an iOS backup directory or zip file
- ``ios.preforensics``: Run a selected set of jobs in this module: unback, characterize, databases, cookies, whatsapp
- ``ios.apollo``: Parse iOS databases from the APOLLO project (https://github.com/mac4n6/APOLLO). You must include also the relevant configuration file from RVT2HOME/conf/ios/apollo
- ``ios.characterize``: Characterizes an iPhone backup. This backup must be previously unbacked. See job plugins.ios.unback.Unback
- ``ios.databases``: Parse iOS databases not in the APOLLO project
- ``ios.timeline``: Parse manifest file and generate a body and a timeline csv using mactime
- ``ios.cookies``: Parse cookies in /HomeDomain/Library/Cookies
- ``ios.whatsapp_single``: Parse WhatsApp database filtered by message_group
- ``ios.whatsapp``: Split WhastApp messages into several CSVs
- ``ios.avere_whatsapp``: Avere WhastApp messages in IOS
- ``ios.chat_to_html``: Convert a WhatsApp conversation to an html file.

### Job `ios.unback`

Unback an iOS backup directory or zip file

### Job `ios.preforensics`

Run a selected set of jobs in this module: unback, characterize, databases, cookies, whatsapp
The path is an absolute path to a directory containing an iTunes backup, or a ZIP file containing an iTunes backup.
If the backup is encrypted, define unback_command in the `ios.unback` section.

### Job `ios.apollo`

Parse iOS databases from the APOLLO project (https://github.com/mac4n6/APOLLO). You must include also the relevant configuration file from RVT2HOME/conf/ios/apollo

### Job `ios.characterize`

Characterizes an iPhone backup. This backup must be previously unbacked. See job plugins.ios.unback.Unback

### Job `ios.databases`

Parse iOS databases not in the APOLLO project

### Job `ios.timeline`

Parse manifest file and generate a body and a timeline csv using mactime

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile_body`||`MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_BODY.csv`|
|`outfile_csv_hour`||`MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_hour_sum.csv`|
|`outfile_csv`||`MORGUE/CASENAME/SOURCE/output/timeline/SOURCE_TL.csv`|

### Job `ios.cookies`

Parse cookies in /HomeDomain/Library/Cookies

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`MORGUE/CASENAME/SOURCE/output/ios/cookies.csv`|

### Job `ios.whatsapp_single`

Parse WhatsApp database filtered by message_group

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|The path to the directory to parse|``|
|`outfile`|Save the result to this csv file. IMPORTANT: Be careful to redirect this path to the group folder when using message_group|`MORGUE/CASENAME/SOURCE/output/ios/whatsapp/whatsapp.csv`|
|`message_group`|Select a specific conversation to parse|``|
|`start_date`|If set, output only messages from this date. Example format: 2018-12-25|``|
|`end_date`|If set, output only messages until this date. Example format: 2020-01-15|``|

### Job `ios.whatsapp`

Split WhastApp messages into several CSVs

### Job `ios.avere_whatsapp`

Avere WhastApp messages in IOS

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|Save the result in this file|`MORGUE/CASENAME/SOURCE/output/ios/adv_whatsapp.txt`|
|`extract_path`|The path to the IOS root directory|`MORGUE/CASENAME/SOURCE/mnt/p01/`|

### Job `ios.chat_to_html`

Convert a WhatsApp conversation to an html file.

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`message_group`|Group the conversation belongs to. It is a number|`1`|
|`template`|Mako template file with html configuration. Relative to current working directory or RVTHOME|`templates/chat2html.mako`|


:::warning
This chapter was created automatically using `rvt2 -j help ios --params show_vars="" template_file="templates/help_section_complete.mako" outfile="rvt2/ios.md"`. Do not modify manually this file.
:::

