# Installation

These commands will clone the RVT2 source code and install the external dependencies:

```bash
> git clone https://gitlab.incide.es/incide-repos/rvt2.git
> cd rvt2
> bash setup.sh run
```

The directory where the RVT2 was cloned will be referred as the `$RVT2_HOME` directory in this documentation.

RVT2 manages the Python dependencies or the core plugins internally. The first time the RVT2 is run, it will create a *pyenv* environment and install these dependecies. As a result, the first run of the RVT2 will be very slow!

If you prefer a manual installation of the Python dependencies, run these commands from the `$RVT2_HOME` directory.

```bash
> pip3 install --user pipenv
> pipenv --three
> pipenv install
```

## External tools

Some plugins may need additional external tools. For example:

- **indexer**: The indexer needs [Tika](https://tika.apache.org/index.html) and [ElasticSearch](https://www.elastic.co). Check section [Running the indexer](indexer.html#running).
- **ios**: If you are planning to use encrypted iOS backups, check section [Creating iOS backups](ios.html#creating-ios-backups)

In addition, if you download additional plugins, be sure to check their documentation for any additional plugins they might need.

## Local configuration

The RVT2 provides an additional configuration in the `$RVT2_HOME/conf` directory. You can overwrite any of the default values (such as default paths, location of additional servers, path to logging files...) in a file `$RVT2_HOME/conf/local.conf` with the configuration specific to your system.
This is an example configuration with some configuration you most probably want to change:

```ini
[DEFAULT]
morgue: /media/morgue
server: http://localhost
rvthome: /usr/local/lib/rvt2

[logging]
logfile: /var/log/rvt2/rvt2.log

[indexer.elastic.ElasticSearchHelper]
es_hosts: http://192.168.109.28:9200

[indexer.tikaparser.TikaParser]
tika_server: http://192.168.109.28:9998

[ios.unback]
unback_command: /usr/local/lib/backup_tool/backup_tool.py {bk_path} {extract_path}
```

Check the section [Configuration and running](/rvt2/configure.md) to learn about the structure of this file.

Do not upload your `$RVT2_HOME/conf/local.conf` to version control!

## Permissions

RVT2 uses many system commands (such as `mount`) that must executed with root privileges. This is not a problem if the analyst is the only user of the machine. 

In a multi-user environment, you might consider adding some extra security to prevent analysts to be root of the machine.
Add a `rvt` user and `analysts` group to your OS:

```bash
> groupadd analysts
> useradd -M -N -s /bin/false -r -G analyst rvt
```

Change loopdevices permissions to allow members of the `analyst` group to read from them:

```bash
> echo "for i in $(seq 8 31) ; do mknod -m 660 /dev/loop$i b 7 $i ; done\nchgrp analysts /dev/loop*" > /etc/rc.local
```

Edit ``/etc/sudoers`` with ``visudo`` and allow the `rvt` user to run these commands without promping for a password:

```bash
%analyst (rvt) NOPASSWD: $RVT2_HOME/rvt2/rvt2
rvt ALL=(root) NOPASSWD: /bin/mount, /bin/umount, /sbin/losetup, /usr/local/bin/vshadowmount, /usr/bin/bindfs, /usr/local/bin/icat
```

Then, run ``rvt2`` command as ``rvt`` user:

```bash
sudo -u rvt $RVT2_HOME/rvt2 [options]
```

Finally, it is recommended that directories storing information about a case must have the user `rvt` as owner and the group `analyst` with reading permissions but not writing.
