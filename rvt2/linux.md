# Plugin: linux

This plugin is.

You can use this plugin:

- To mount, umount and extract forensics artifacts from logs... from a disk image.

Table of contents:

[[toc]]

## Jobs

The plugin defines these jobs:

- `linuxforensics`:
    -  Mounts partitions
    -  Generates allocfiles
    -  Extracts webrowser history artifacts.
    -  Generates timelines.
    -  Characterizes disk image
    -  Generates strings files.

Example use:

```
[Main]
inherits: index_directory
path: keywords

[linuxpreforensics]
[plugins.linux.RVT_linux.Characterize]
```

## Modules

Currently, this plugin includes the next modules. They are intended to form a chain with the `modules` directive.

### plugins.linux.RVT_linux.Characterize

- Input: None
- Output: Characterizes linux image.
- Output path: ``$disk/output/info``
