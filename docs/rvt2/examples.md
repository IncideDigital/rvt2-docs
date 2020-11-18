# Examples

## Do not use a general directory structure

The default configuration uses the foldr structure introduced in this document.
This structure is useful in a multiuser environment because you know where you
are goung to find images and output files.

Nevertheless, sometimes you need a fast analyze on a directory.
For example, in a directory there is a file `myiphone.zip` which includes the
backup of an iPhone. In this case, you can run on the same directory:

```
rvt2 --source myiphone --globals imagedir=$(pwd) --globals casedir=$(pwd) -j ios.unback -- myiphone.zip
```

That is: define imagedir and casedir as current directory, unback and analyze
in directory `myiphone` (source name) the file `myiphone.zip`.

`--globals` overwrite a variable in all configuration files. Its syntax is
`[sectionname:]varname=value`.  If `sectionname` is not provided, `DEFAULT` is
used.


