# Plugin: macos

This plugin is.

You can use this plugin:

- To mount, umount and extract forensics artifacts from win events, registry, lnk... from a disk image.

Table of contents:

[[toc]]

## Jobs

The plugin defines these jobs:

- `macpreforensics`:
    -  Mounts partitions
    -  Generates allocfiles
    -  Generates timelines.
    -  Extracts QuickLook artifacts.
    -  Extract ASL artifacts and separates login, logoff, poweron and poweroff system events.
    -  Extracts filesystem events.
    -  Extracts spotlight data.
    -  Extract artifacts from knowledgeC database.
    -  Extract `.DS_Store` filenames.
    -  Dumps plist files.
    -  Parses Most Recently Used plist files.
    -  Extract OS basic information.
    -  Extract network usage artifacts.
    -  Extract network artifacts.
    -  Generates strings files.

Example use:

```
[Main]
inherits: index_directory
path: keywords

[macpreforensics]
[plugins.macos.RVT_macos.MacMRU]
```

## Modules

Currently, this plugin includes the next modules. They are intended to form a chain with the `modules` directive.

### plugins.macos.RVT_quick_look.QuickLook

- Input: None
- Output: Extracts artifacts from quicklook (similar to thumbnails).
- Output path: ``$disk/output/info/quicklook``.

### plugins.macos.RVT_macos.ASL

- Input: None
- Output: Extract ASL artifacts and separates login, logoff, poweron and poweroff system events.
- Output path: ``$disk/output/info``.

### plugins.macos.RVT_macos.FSEvents

- Input: None
- Output: Extracts filesystem events.
- Output path: ``$disk/output/info/fsevents``.

### plugins.macos.RVT_macos.Spotlight

- Input: None
- Output: Extracts spotlight data.
- Output path: ``$disk/output/info/sporlight``.

### plugins.macos.RVT_macos.KnowledgeC

- Input: None
- Output: Extract artifacts from knowledgeC database.
- Output path: ``$disk/output/info/knowledgec``.

### plugins.macos.RVT_macos.ParseDSStore

- Input: None
- Output: Extract `.DS_Store` filenames.
- Output path: ``$disk/output/info``.

### plugins.macos.RVT_macos.ParsePlist

- Input: None
- Output: Dumps plist files.
- Output path: ``$disk/output/info``.

### plugins.macos.RVT_macos.MacMRU

- Input: None
- Output: Parses Most Recently Used plist files.
- Output path: ``$disk/output/info/macMRU``.

### plugins.macos.RVT_macos.BasicInfo

- Input: None
- Output: Extract OS basic information.
- Output path: ``$disk/output/info``.

### plugins.macos.RVT_macos.NetworkUsage

- Input: None
- Output: Extract network usage artifacts.
- Output path: ``$disk/output/info``.

### plugins.macos.RVT_macos.Network

- Input: None
- Output: Extract network artifacts.
- Output path: ``$disk/output/info``.
