# Examples

## Commands without a configuration file

Default configuration values should be OK for most situations. If the RVT2 is configured properly, you can run these commands without the need of a configuration file.

Parse a single file to the standard output:

```bash
> rvt2 -j parse_file FILENAME
```

Run *preforensics* on a source:

```bash
> rvt2 --casename 112233-test --source 112233-00-1 -j preforensics
```

Parse all files in `$MORGUE/112233-test/112233-00-1/mnt` and save the output to `$MORGUE/112233-test/112233-00-1/output/indexer/112233-00-1.json`, ready to be uploaded to an ElasticSearch server using `elasticdump`:

```bash
> rvt2 --casename 112233-test --source 112233-00-1 -j index_directory
```
