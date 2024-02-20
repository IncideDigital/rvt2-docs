
# Section linux

This plugin extracts and analyzes forensic artifacts from a Linux system. Calling all linux.job

## Jobs

- ``linux``: This plugin extracts and analyzes forensic artifacts from a Linux system. Calling all linux.job
- ``linuxforensics``: Jobs to be run on a disk image at the beginning with linux distribution
- ``linux.cron``: Includes files such as crontab, anacrontab, cronlogs and the different cron.
- ``linux.ssh``: Includes files such as authorized_keys, known_hosts and config
- ``linux.login``: Includes files such as shadow, passwd, nsswitch, wtmp, group, gshadow, sudoers:  login and accounts files
- ``linux.bash``: Includes files such as bashrc, bash_history, bash_logout, bash_profile, profile
- ``linux.characterize``: Describes basic information about linux partitions and OS.
- ``linux.logs``: Includes file logs such as auth.log, kern.log, syslog, secure, messages, journal, maillog, daemon, config files...
- ``linux.packages``: Includes the analysis of packages: dpkg, apt, yum, dnf, /opt, /usr/local
- ``linux.services``: Find information on the different services/startup scripts of the computer.
- ``linux.network``: Find information on the different network configurations. Interfaces, hosts, resolv, dnsmasq ..
- ``linux.extrafiles``: Includes the analysis of other files such as viminfo, .local/share/recently-used and application_state, Recent, Trash, lesshst ...

## Job `linux`

This plugin extracts and analyzes forensic artifacts from a Linux system. Calling all linux.job

### Jobs
- ``linux.characterize``: Describes basic information about linux partitions and OS.
- ``linux.cron``: Includes files such as crontab, anacrontab, cronlogs and the different cron.
- ``linux.ssh``: Includes files such as authorized_keys, known_hosts and config
- ``linux.login``: Includes files such as shadow, passwd, nsswitch, wtmp, group, gshadow, sudoers:  login and accounts files
- ``linux.bash``: Includes files such as bashrc, bash_history, bash_logout, bash_profile, profile
- ``linux.logs``: Includes file logs such as auth.log, kern.log, syslog, secure, messages, journal, maillog, daemon, config files...
- ``linux.packages``: Includes the analysis of packages: dpkg, apt, yum, dnf, /opt, /usr/local
- ``linux.services``: Find information on the different services/startup scripts of the computer.
- ``linux.network``: Find information on the different network configurations. Interfaces, hosts, resolv, dnsmasq ..
- ``linux.extrafiles``: Includes the analysis of other files such as viminfo, .local/share/recently-used and application_state, Recent, Trash, lesshst ...
- ``browsers``: Parse history, downloads and cookies from most used browsers: Chrome, Firefox, Safari, Edge, InternetExplorer


## Job `linuxforensics`

Jobs to be run on a disk image at the beginning with linux distribution

### Jobs
- ``linux.characterize``: Describes basic information about linux partitions and OS.
- ``linux.cron``: Includes files such as crontab, anacrontab, cronlogs and the different cron.
- ``linux.ssh``: Includes files such as authorized_keys, known_hosts and config
- ``linux.login``: Includes files such as shadow, passwd, nsswitch, wtmp, group, gshadow, sudoers:  login and accounts files
- ``linux.bash``: Includes files such as bashrc, bash_history, bash_logout, bash_profile, profile
- ``linux.logs``: Includes file logs such as auth.log, kern.log, syslog, secure, messages, journal, maillog, daemon, config files...
- ``linux.packages``: Includes the analysis of packages: dpkg, apt, yum, dnf, /opt, /usr/local
- ``linux.services``: Find information on the different services/startup scripts of the computer.
- ``linux.network``: Find information on the different network configurations. Interfaces, hosts, resolv, dnsmasq ..
- ``linux.extrafiles``: Includes the analysis of other files such as viminfo, .local/share/recently-used and application_state, Recent, Trash, lesshst ...
- ``browsers``: Parse history, downloads and cookies from most used browsers: Chrome, Firefox, Safari, Edge, InternetExplorer


## Job `linux.cron`

Includes files such as crontab, anacrontab, cronlogs and the different cron.

### Jobs
- ``linux.cron.crontab``: Get the scheduled tasks or jobs of the crontab file.
- ``linux.cron.anacrontab``: Get the scheduled tasks or jobs of the anacrontab file.
- ``linux.cron.system``: Get the scheduled tasks or jobs of the cron.daily, cron.weekly, cron.hourly, cron.monthly, cron.d folder.
- ``linux.cron.user_specific``: Get the scheduled tasks or jobs of the cron.daily, cron.weekly, cron.hourly, cron.monthly, cron.d folder.
- ``linux.cron.cron_log``: Includes cron log file


## Job `linux.ssh`

Includes files such as authorized_keys, known_hosts and config


## Job `linux.login`

Includes files such as shadow, passwd, nsswitch, wtmp, group, gshadow, sudoers:  login and accounts files

### Jobs
- ``linux.login.output_sorted``: Job to sort wtmp and btmp files
- ``linux.login.analysis``: Make the analysis tables for the users and group


## Job `linux.bash`

Includes files such as bashrc, bash_history, bash_logout, bash_profile, profile


## Job `linux.characterize`

Describes basic information about linux partitions and OS.

### Jobs
- ``linux.characterize.os_summary``: Describes basic information about OS.
- ``linux.characterize.system``: Describes basic information about the file systems in the computer.


## Job `linux.logs`

Includes file logs such as auth.log, kern.log, syslog, secure, messages, journal, maillog, daemon, config files...

### Jobs
- ``linux.logs.auth_log``: Includes auth.log log file
- ``linux.logs.secure``: Includes secure log file
- ``linux.logs.syslog``: Includes syslog filelog
- ``linux.logs.messages``: Includes messages log file
- ``linux.logs.kern_log``: Includes kern.log log file
- ``linux.logs.journal``: Includes journal binary log file
- ``linux.logs.mail``: Includes mail.log and mail.err log file
- ``linux.logs.daemon_log``: Includes daemon.log log file
- ``linux.logs.extract_from_existing_log``: Extract specific log registers/information from auth_log, syslog, messages or kern_log
- ``linux.logs.analysis``: Make the analysis of the different logs
- ``linux.logs.config_files``: Includes syslog filelog


## Job `linux.packages`

Includes the analysis of packages: dpkg, apt, yum, dnf, /opt, /usr/local

### Jobs
- ``linux.packages.dpkg_log``: Includes dpkg.log log file
- ``linux.packages.dpkg_status``: Includes lib/dpkg/status file, contains details about installed packages
- ``linux.packages.apt_history_log``: Includes apt/history.log  file
- ``linux.packages.specific_folders``: Get the third party software in the /opt /usr/local folder
- ``linux.packages.yum_log``: Includes yum.log log file
- ``linux.packages.dnf_log``: Includes dnf.log log file
- ``linux.packages.hawkey_log``: Includes hawkey.log log file
- ``linux.packages.dnf_rpm_log``: Includes dnf.rpm.log log file
- ``linux.packages.dnf_librepo_log``: Includes dnf.librepo.log log file
- ``linux.packages.analysis``: Make the analysis of the different packages


## Job `linux.services`

Find information on the different services/startup scripts of the computer.

### Jobs
- ``linux.services.output``: Find information on the different services of the computer.
- ``linux.services.list``: Makes a list of services in the machine.


## Job `linux.network`

Find information on the different network configurations. Interfaces, hosts, resolv, dnsmasq ..


## Job `linux.extrafiles`

Includes the analysis of other files such as viminfo, .local/share/recently-used and application_state, Recent, Trash, lesshst ...



:::warning
This chapter was created automatically using `autodoc.sh`. Do not modify manually this file.
:::

