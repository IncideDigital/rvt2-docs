# Base modules

The package `base` has the base classes, helpers and modules.

## Classes and functions in config

## Classes and functions in jobs

## Modules in base.input

### base.input.CSVReader

Reads a table in a CSV file and returns a dictionary. You can provide the fieldnames, ignore a number of lines from the input file...

- path: the path to a csv file to read. The first line of this file contains the headers.
- from_module: None
- Returns: a generator with the contents of the CSV file

### base.input.JSONReader

- path: the path to a json file to read.
- from_module: None
- Returns: a generator with the contents of the JSON file

### base.input.SQLiteReader

- path: the path to a sqlite database
- from_module: None
- Returns: a generator with the results of a configurable SQL query.

## Modules in base.output

### base.output.CSVSink

- path: pass the path to from_module
- from_module: a generator of dictionaries
- Outputs: save the content of the generator into a CSV file, with headers
- Returns: the contents returned by from_module, as is

### base.output.JSONSink

- path: pass the path to from_module
- from_module: a generator of dictionaries
- Outputs: save the content of the generator into a JSON file, with headers
- Returns: the contents returned by from_module, as is
