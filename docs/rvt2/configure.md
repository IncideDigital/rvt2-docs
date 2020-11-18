# Configuration and running

Table of contents:

[[toc]]

## Running jobs

Most of the time, you are going to run one of the predefined jobs with the default configuration. For example, to index the content of a disk in ElasticSearch, run:

```sh
rvt2 \
    --casename 112233 --source 01 \
    -j indexer.save_directory \
    --params option1=1 option2 -- \
    path_to_a_directory
```

There are dozens of predefined jobs with a default configuration you won't need to change.
Check the [examples section](/rvt2/examples.md) for some examples.
You can get the list of predefined by running the job `show_jobs`, which is also the default job:

```sh
> rvt2

# Available jobs

- show_jobs: Show available jobs.
- mount: Mount all partitions of a disk image
- umount: Unmount all partitions of a disk image
(...)
```

## Configuration files

Sometimes, you would want to run a customized job. In these cases, you must write a configuration file and load it.
If there is a file named `rvt2.cfg` in the current directory, the system will load it automatically:

```
rvt2 [OPTIONAL_PATH]
```

Alternatively, you can create a `numcase.cfg` with information about the job and then:

```
rvt2 --config numcase.cfg [OPTIONAL_PATH]
```

The default jobs, modules and configuration is read from the system configuration files.
These files are included in the directory `$RVTHOME/conf`. If you are a user of the RVT2,
you SHOULDN'T modify these files. Your system administrator can modify the file `$RVTHOME/conf/local.cfg`.
If your case needs a specific configuration, use your own configuration file and load it with the *--config* parameter.

## The syntax of the configuration files

The configuration system uses the standard Python package [`configparser`](https://docs.python.org/3/library/configparser.html), in which configuration files are standard *ini* files with a slightly modified `configparser.ExtendedInterpolation` to allow one section to inherits all options from another section.

These are some examples:

```ini
[DEFAULT]
; this is the default value for name, and it is automatically included in all sections
name: Johny

[Job1]
; the configuration system uses the ExtendedInterpolation syntax for the options.
; In this case, greetings="Hello, Terry"
greetings: Hello, ${name}
name: Terry

[Job2]
; if name is not defined, the value in the DEFAULT section is used.
; In this case, greetings="Hello, Johny"
greetings: Hello, ${name}

[Job3]
; you can use options from another sections with the ${SECTION:OPTION} syntax
; In this case, greetings="Bye, Terry!"
greetings: Bye, ${Job1:name}!

[Job4]
; "inherits" copies in this section all options from another section
; except if they are already defined.
; In this case, greetings (inherited, not explicitely defined)="Hello, Tim"
inherits: Job1
name: Tim
```

:::warning
The `inherits` option was useful in the early versions of the RVT2. Currently, the configuration system uses `configparser.ExtendedInterpolation` and passing options through the command line, and the support to the `inherits` option might be deprecated in the future. The use of the `inherits` option is discouraged for new modules and jobs.
:::

## Configuring modules and jobs

From the [Basic concepts](/rvt2/definitions.md) chapter, we learnt that the RVT2 uses modules (classes extending `base.job.ModuleBase`), single jobs (a chain of modules) and composite jobs (a queue of single or composite jobs).

The section describing a **module** has a `module` option with the name of the class to load. Modules are free to use any number of options. The options available to a module are described in the [Developers manual](https://portal.incide.es/rvt2-dev).

```ini
[base.input.CSVReader]
; The module option tells the class to load.
; If a module option is not provided, the RVT2 will try to
; load the name of the section as a class name
module: base.input.CSVReader
; any additional configuration you might need
outfile: outfile.csv
delimiter: ;
```

The section describing a **single job** has a `modules` option with the chain of modules to run, one module per line. You can set the value for any option in this line and it will overwrite the option defined in the module configuration section.

```ini
[MyJob]
; (optional) A help message for your job
description: Write here a help message
; (optional) Help messages are organized in sections (base, indexer, windows...)
; Tell here the name of the section for this job
help_section: mysection
; the module chain. You can pass options to overwrite the default configuration of the module.
modules:
    base.output.JSONSink outfile=CONSOLE
    base.input.CSVReader delimiter={delimiter}
; the path for the job, if not provided from the command line
path: myfile.csv
; Params configurable from the command line. See below
default_params: {'delimiter':'${base.input.CSVReader:delimiter}'}
```

Actually, the `modules` option is managed as a [format string](https://docs.python.org/3/library/string.html#custom-string-formatting) where `kwargs` is the `default_params` option. In the example above, note the the `delimiter` option inside `modules` is referred as *{delimiter}*, without the leading '$': it is not interpolated by `configparser` but like this: `modules = config.get('modules').format(**default_params)`.

You can overwrite the default params object when the job is run:

```bash
rvt2 -j MyJob --params delimiter="," -- myfile.csv
```

Using the command line (or any other way that uses the function `run_job()`, as modules in package `base.threads` do), you can not configure all parameters in a job section but only the parameters included in the *default_params* dictionary.

:::warning
The *default_params* is used only by single or composite jobs, not modules. The job might want to send the custom param only to a few selected modules and not all of them. Think about this example:

```
[MyJob]ini
modules:
    module1 option1=1 option2={option2}
    module1 option1={option1} option2=2
default_params: {'option1':'3','option2':'4'}
```

Can be run as:

```bash
rvt2 -j MyJob --params option1=5 option2=6
```

:::

:::tip
Sometimes, it might be useful to have a module that is also a single job configurable from the command line. In this case, define a `module` option as well as `modules` and set the *default_params* option using own interpolation:

```ini
[mypackage.myclass]
module: mypackage.myclass
someparam: 1
modules:
    base.output.CSVSink outfile="{outfile}"
    mypackage.myclass someparam={someparam}
default_params: {'outfile':'outfile.csv','someparam':'${someparam}'}
```
:::

The section describing a **composite job** has a `jobs` option. The configuration is similar to a single job but with `jobs` instead of `modules`. Note you can also overwrite the `path` option of the single jobs, if needed.

```ini
[MyCompositeJob]
description: Write here a help message
help_section: mysection
jobs:
    MyJob path="${path}" delimiter={delimiter}
    help
path: myfile.csv
default_params: {'delimiter':';'}
```

## Loading order of the configuration files

All configuration files are loaded to create a common configuration object. The order in which the configuration files matters: if two different options for the same section are defined in two configuration files, the one read the last will overwrite the value of the first configuration file.

The RVT2 reads the configuration from these files and in this order. Every file is able to overwrite the configuration of the previous files.

1. `$RVTHOME/conf/*.cfg`: default configuration for the core jobs and modules. These files must be modified only by the package manager. In order to help us organizing the configuration files, jobs are defined in files names `jobs.cfg` and modules in files named `modules.cfg`.
1. `$PLUGIN/*.cfg`: if a plugin is defined (see below), configuration for the jobs and modules provided by _PLUGIN_. This file must be modified only by the _PLUGIN_ developer. Plugins are encouraged to follow the same organization than the conf directory: the jobs provided by the plugin are defined in a file named `jobs.cfg` and modules in a file named `modules.cfg`.
1. `$RVTHOME/conf/local.cfg`: any configuration valid only for the current computer. For example, the ElasticSearch server or the location of the log files. This file is optional, overwrites the previous files and should not be under version control.  This file must be modified only by the system administrator.
1. `$(pwd)/rvt2.cfg`: any configuration specific for the current execution. This file is optional. This file can be created by case analysts.
1. Any other files passed with the `--config` parameter. This parameter can be used multiple times. These files can be created by case analysts.

## An example of a configuration file

In the configuration system, sections configure jobs and modules. Some special sections are used to configure the RVT2 (such as the `[logging]` or the `[rvt2]` sections) and other sections might be values shared by other sections. The special `[DEFAULT]` section defines the options shared by all the other sections.

This is an example of a configuration file:

```ini
[DEFAULT]
source: 112233-01-1
casename: 112233-case
morgue: /morgue
rvthome: /usr/local/lib/rvt2

[logging]
logfile: ${rvthome}/rvt2.log

[rvt2]
plugins:
    ${rvthome}/plugins/indexer

[Main]
jobs:
   indexer.save_directory
path: ${sourcedir}/mnt/p01

[OtherJob]
jobs: ${Main:jobs}
path: ${sourcedir}/mnt/p02
```

(This configuration file is equivalent to the default configuration of the job: `rvt --casename 112233-case --source 112233-01-1 -j indexer.save_directory`)

This configuration defines two composite jobs: `Main` and `OtherJob`. Any of these composite jobs  will run a job named `indexer.save_directory`, which indexes the contents of the directory `/morgue/112233-case/112233-01-1/mnt/p0x`.

You probably notice there are some options such as `sourcedir` and some jobs such as `indexer.directory_save` that are not declared in this configuration files. These are the default options, as defined in a configuration file inside `$RVTHOME/conf` or `$RVTHOME/plugins/indexer`. Many of these options are not global, but specific to the modules that need them. If you want to change any of these options you must override the default values provided by the specific module.

The next example explicitly configures all these options, including the specific chain of modules to run instead of using a predefined job.

```ini
[DEFAULT]
source: 112233-01-1
casename: 112233-case
morgue: /media/morgue
stop_on_error: false

[Main]
jobs:
    parse_directory
    index_output
path: ${sourcedir}

[parse_directory]
description: Parse the contents of a source
path: ${sourcedir}/mnt/p01
modules:
    base.output.JSONSink outfile='${outputdir}/indexer/${source}.json'
    indexer.elastic.ElasticSearchAdapter
    indexer.directory.DirectoryFilter
    indexer.tikarpaser.TikaParser

[index_output]
description: Index a previously parsed source
modules:
    indexer.elastic.ElasticSearchHelper
path: ${outputdir}/indexer/${source}.json

[indexer.elastic.ElasticSearchHelper]
es_hosts: http://localhost:9200
create_index: True

[indexer.tikaparser.TikaParser]
tika_server: http://localhost:9998
```

(This configuration file is roughly equivalent to the predefined job *indexer.save_directory*. You can just run the predefined job instead)

The rest of this document explores the configuration files in depth.

## Special configuration sections

There are some special configuration sections:

- `DEFAULT` holds default values for all other sections, when necessary.
- `rvt2`, to configure the rvt2 and its plugins.
- `logging`, section to configure the logging system.
- `Main`, the job to run, if no job is defined in the command line.

### DEFAULT section

Configure in this section at least these values:

- *casename*: The name of the case. In this documentation, we assume the case name has the format *IDENTIFIER-CODENAME*. For example, *12345-mycase*. Anyway, the RVT won't impose a format for the case names.
- *source*: The name of a source of information inside a case, such as disk images or zip files. In this documentation, we assume the source has the format *IDENTIFIER-NUMBER*, where *IDENTIFIER* is the same identifier than the case name. Anyway, the RVT2 won't impose a format to the source names.
- *morgue*: The directory where images, outputs and case files are stored. Check [an example of organization for the morgue directory](/rvt2/folder.md).
All the paths are meant to be configurable, but we STRONGLY recommend to follow the same organization for all cases.

The morgue is usually configured in the `RVTHOME/conf/local.cfg` file, but you might prefer to have several morgues to run tests.
These three values are so important that you can also set them from the command line when running the RVT.

```
rvt2 --casename 12345-mycase --source 12345-01 --morgue /morgue -j index_and_save_directory
```

If you check the system configuration files, you'll notice there are other options created from these values. For example:

- *casedir*: the main directory for the output files. We recommend to have your notes and reports in this same directory.
- *imagesdir*: the directory where the disk images are saved. If you are seriously into DFIR,
this directory should be read only, in a RAID volume and backed-up externally in a safe place.
- *sourcedir*: the directory where the source is going to be mounted and the output of the several jobs is going to be saved. For example:
    - By default, a disk image is expected to be mounted in `$sourcedir/mnt/p01/indexer/source.json`.
    - By default, the indexer save files in `$sourcedir/output/indexer/source.json`
- *outputdir*: the directory where the output files are going to be writen.

See chapter [Folder structure](/rvt2/folder.md) for a deeper explanation of this directories.

If you are not satisfied with the default configuration of these values, change them in `RVTHOME/conf/local.cfg`.

### rvt2 section and plugins

Plugins are modules and jobs specific for a task. For example, modules to read the Windows registry, or modules to parse files using Apache Tika and index the result in a ElasticSearch server.

These plugins reside in their own directory. You must declare them in the `plugins` option of the `[rvt2]` section. The source tree of the RVT2 provide some plugins, and you can write your own plugins for the RVT2 and save them in a completely different path in your computer.

```ini
[rvt2]
plugins:
    ${rvthome}/plugins/indexer
    ${rvthome}/plugins/ios
    /some/other/path/yourplugin
pythonpath:
    ${cwd}
```

Note you can load any additional python path you might need in the option `rvt2:pythonpath`. By default, the current directory is added to the python path. Also, the plugin might define its own additional pythonpath in this way:

```ini
; in the jobs.cfg inside the "yourplugin" directory

[yourplugin]
pythonpath:
    ${userhome}/.local/lib/python3.7/site-packages
; this option will be set automatically when the plugin loads, in case you must refer to the pluin directory
plugindir:
```

The default plugins are designed to be loaded always, even if their jobs are not used. This fact isn't going to make the initial run of the RVT2 any slower. In any case, you can decide to not load the plugins you don't need. Be aware one plugin might depend on the modules of other plugin: read the plugin documentation for the additional details.

### Main section

The `Main` section is the entry point to the system. It defines either:

- The list of jobs to run (if the section includes the option `jobs`)
- The description of a single job (if the section includes the option `modules`)
- The description of a single module (if the section include the option `module`)

By default, the `Main` section shows the avaible jobs in the system.