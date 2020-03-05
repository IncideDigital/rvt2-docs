# Plugin: extensions

You can add new modules to the RVT2. This is an example module.

## New module: a CSV parser

A new module to parse a CSV file and index it contents in ElasticSearch, ready to be
searched with rvt2-analyzer.

1. Create a directory `mkdir myjob` and then `cd myjob`.
2. File: `input.csv`. This will be the file to parse.

```csv
english,hello
spanish,hola
french,bonjour
```
3. File: `myjob.cfg`. This file defines global variables, configures two new jobs and the location of the ElasticSearch server.

```ini
[DEFAULT]
casename: rvt2-test
source: rvt2-test

[myjob-test]
description: This job outputs to the standard output, for testing
modules:
  base.print.JSONSink{'outfile':'CONSOLE'}
  myjob.MyJob

[myjob-elastic]
description: This job outputs a file than can be indexed using elasticdump or the job save_indexed_documents
modules:
  base.print.JSONSink{'outfile':'output.json'}
  plugins.indexer.elastic.ElasticSearchAdapter
  myjob.MyJob

[plugin.indexer.elastic.ElasticSearchAdapter]
eshosts: http://localhost:9200
```

4. Check the jobs are registered: `rvt2 -c myjob.cfg`
3. File: `myjob.py`. Notice the class `myjob.MyJob` is loaded in the jobs described above.

```python
import base.job
import csv

class MyJob(base.job.BaseModule):
  def run(self, path):
    with open(path, 'r') as csvfile:
      csvreader = csv.reader(csvfile,delimiter=',')
      for row in csvreader:
        yield dict(language=row[0], content=row[1])
```

6. Run: `rvt2 -c myjob.cfg -j myjob-test input.csv` and check everything is OK.
5. Run: `rvt2 -c myjob.cfg -j myjob-elastic input.csv`. The output will be in `output.json`. You can send this file to an ElasticSearch server using  one of the default jobs provided by the RVT2 or [elasticdump](https://github.com/taskrabbit/elasticsearch-dump).
5. Run: `rvt2 -c myjob.cfg -j save_indexed_documents output.json`. The output will be indexed in an ElasticSearch server. Notice the job `save_indexed_documents` is not defined in `myjob.cfg`, but it is one of the default jobs in `$RVT2HOME/conf/indexer/jobs.cfg`
