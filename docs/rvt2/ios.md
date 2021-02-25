
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

If the backup is encrypted, an additinal step to decrypt the backup is needed. Currently, the RVT2 does not include directly the tools to decrypt an iOS backup and you must install or clone an external tool such as <https://github.com/dinosec/iphone-dataprotection>. Once installed, add this configuration to the RVT2:

```ini
[ios.unback]
unback_command: PATH_TO_IOS_DATAPROTECTION/python_scripts/backup_tool.py {bk_path} {extract_path}
```

If ios_dataprotection is used, the password will be asked during the job `ios.unback`.


## Jobs

- ``ios.preforensics``: Run a selected set of jobs in this module: unback, characterize, databases, cookies, whatsapp
- ``ios.apollo``: Parse iOS databases from the APOLLO project (https://github.com/mac4n6/APOLLO). You must include also the relevant configuration file from RVT2HOME/conf/ios/apollo
- ``ios.unback``: Unback an iOS backup directory or zip file
- ``ios.characterize``: Characterizes an iPhone backup. This backup must be previously unbacked. See job plugins.ios.unback.Unback
- ``ios.databases``: Parse iOS databases not in the APOLLO project
- ``ios.timeline``: Parse manifest file and generate a body and a timeline csv using mactime
- ``ios.cookies``: Parse cookies in /HomeDomain/Library/Cookies
- ``ios.whatsapp_single``: Parse WhatsApp database filtered by message_group
- ``ios.whatsapp``: Split WhastApp messages into several CSVs
- ``ios.avere_whatsapp``: Avere WhastApp messages in IOS
- ``ios.chat_to_html``: Convert a WhatsApp conversation to an html file.

### Job `ios.preforensics`

Run a selected set of jobs in this module: unback, characterize, databases, cookies, whatsapp
The path is an absolute path to a directory containing an iTunes backup, or a ZIP file containing an iTunes backup.
If the backup is encrypted, define unback_command in the `ios.unback` section.

### Job `ios.apollo`

Parse iOS databases from the APOLLO project (https://github.com/mac4n6/APOLLO). You must include also the relevant configuration file from RVT2HOME/conf/ios/apollo

### Job `ios.unback`

Unback an iOS backup directory or zip file

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|The path to the backup directory or the zip file to unback|``|
|`extract_path`|The output directory for the unback|`MORGUE/CASENAME/SOURCE/mnt/p01`|
|`unzip_path`|In case of unbacking from a zip file, unzip the source to this path before unbacking|`MORGUE/CASENAME/SOURCE/unzip`|
|`remove_unzip_path`|If set to True (default), delete the unzip directory after unzipping the backup zip file|`True`|
|`unback_command`|External command to unback in case of encrypted backups. It is a Python string template that receives variables "bk_path" and "extract_path". For example: "python2 backup_tool.py {bk_path} {extract_path}". Check https://github.com/dinosec/iphone-dataprotection/blob/master/python_scripts/backup_tool.py|``|

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
|`message_group`|Select a specific conversation to parse|``|
|`start_date`|If set, output only messages from this date. Example format: 2018-12-25|``|
|`end_date`|If set, output only messages until this date. Example format: 2020-01-15|``|
|`username`|Whatsapp owner name. If not provided is taken from other WhatsApp configuration files|``|
|`localtime`|If True, convert timestamps to current computer local timezone. If False, use UTC.|`True`|

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
|`input_whatsapp_csv`|CSV input file with transcripted conversation to convert, relative to message_group folder|`whatsapp.csv`|
|`template`|Mako template file with html configuration. Relative to current working directory or RVTHOME|`templates/chat2html.mako`|
|`outfile_name`||`conversation.html`|


:::warning
This chapter was created automatically using `autodoc.sh`. Do not modify manually this file.
:::


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

If the backup is encrypted, an additinal step to decrypt the backup is needed. Currently, the RVT2 does not include directly the tools to decrypt an iOS backup and you must install or clone an external tool such as <https://github.com/dinosec/iphone-dataprotection>. Once installed, add this configuration to the RVT2:

```ini
[ios.unback]
unback_command: PATH_TO_IOS_DATAPROTECTION/python_scripts/backup_tool.py {bk_path} {extract_path}
```

If ios_dataprotection is used, the password will be asked during the job `ios.unback`.


## Jobs

- ``ios.preforensics``: Run a selected set of jobs in this module: unback, characterize, databases, cookies, whatsapp
- ``ios.apollo``: Parse iOS databases from the APOLLO project (https://github.com/mac4n6/APOLLO). You must include also the relevant configuration file from RVT2HOME/conf/ios/apollo
- ``ios.unback``: Unback an iOS backup directory or zip file
- ``ios.characterize``: Characterizes an iPhone backup. This backup must be previously unbacked. See job plugins.ios.unback.Unback
- ``ios.databases``: Parse iOS databases not in the APOLLO project
- ``ios.timeline``: Parse manifest file and generate a body and a timeline csv using mactime
- ``ios.cookies``: Parse cookies in /HomeDomain/Library/Cookies
- ``ios.whatsapp_single``: Parse WhatsApp database filtered by message_group
- ``ios.whatsapp``: Split WhastApp messages into several CSVs
- ``ios.avere_whatsapp``: Avere WhastApp messages in IOS
- ``ios.chat_to_html``: Convert a WhatsApp conversation to an html file
- ``ios.jailbreak``: Search for jailbreak traces in iOS devices

### Job `ios.preforensics`

Run a selected set of jobs in this module: unback, characterize, databases, cookies, whatsapp
The path is an absolute path to a directory containing an iTunes backup, or a ZIP file containing an iTunes backup.
If the backup is encrypted, define unback_command in the `ios.unback` section.

### Job `ios.apollo`

Parse iOS databases from the APOLLO project (https://github.com/mac4n6/APOLLO). You must include also the relevant configuration file from RVT2HOME/conf/ios/apollo

### Job `ios.unback`

Unback an iOS backup directory or zip file

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|The path to the backup directory or the zip file to unback|``|
|`extract_path`|The output directory for the unback|`/morgue/mycase/mysource/mnt/p01`|
|`unzip_path`|In case of unbacking from a zip file, unzip the source to this path before unbacking|`/morgue/mycase/mysource/unzip`|
|`remove_unzip_path`|If set to True (default), delete the unzip directory after unzipping the backup zip file|`True`|
|`unback_command`|External command to unback in case of encrypted backups. It is a Python string template that receives variables "bk_path" and "extract_path". For example: "python2 backup_tool.py {bk_path} {extract_path}". Check https://github.com/dinosec/iphone-dataprotection/blob/master/python_scripts/backup_tool.py|``|

### Job `ios.characterize`

Characterizes an iPhone backup. This backup must be previously unbacked. See job plugins.ios.unback.Unback

### Job `ios.databases`

Parse iOS databases not in the APOLLO project

### Job `ios.timeline`

Parse manifest file and generate a body and a timeline csv using mactime

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile_body`||`/morgue/mycase/mysource/output/timeline/mysource_BODY.csv`|
|`outfile_csv_hour`||`/morgue/mycase/mysource/output/timeline/mysource_hour_sum.csv`|
|`outfile_csv`||`/morgue/mycase/mysource/output/timeline/mysource_TL.csv`|

### Job `ios.cookies`

Parse cookies in /HomeDomain/Library/Cookies

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`||`/morgue/mycase/mysource/output/ios/cookies.csv`|

### Job `ios.whatsapp_single`

Parse WhatsApp database filtered by message_group

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`path`|The path to the directory to parse|``|
|`message_group`|Select a specific conversation to parse|``|
|`start_date`|If set, output only messages from this date. Example format: 2018-12-25|``|
|`end_date`|If set, output only messages until this date. Example format: 2020-01-15|``|
|`username`|Whatsapp owner name. If not provided is taken from other WhatsApp configuration files|``|
|`localtime`|If True, convert timestamps to current computer local timezone. If False, use UTC.|`True`|

### Job `ios.whatsapp`

Split WhastApp messages into several CSVs

### Job `ios.avere_whatsapp`

Avere WhastApp messages in IOS

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outfile`|Save the result in this file|`/morgue/mycase/mysource/output/ios/adv_whatsapp.txt`|
|`extract_path`|The path to the IOS root directory|`/morgue/mycase/mysource/mnt/p01/`|

### Job `ios.chat_to_html`

Convert a WhatsApp conversation to an html file

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`message_group`|Group the conversation belongs to. It is a number|`1`|
|`input_whatsapp_csv`|CSV input file with transcripted conversation to convert, relative to message_group folder|`whatsapp.csv`|
|`template`|Mako template file with html configuration. Relative to current working directory or RVTHOME|`templates/chat2html.mako`|
|`outfile_name`||`conversation.html`|

### Job `ios.jailbreak`

Search for jailbreak traces in iOS devices

#### Configurable parameters

|Parameter|Description|Default|
|--|--|--|
|`outdir`|path to directory where generated files will be stored|`/morgue/mycase/mysource/output/ios/jailbreak`|

