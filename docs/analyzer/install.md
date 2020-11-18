# Installation

Table of contents:

[[toc]]

## Install and run

You must install [Yarn dependency manager](https://yarnpkg.com/lang/en/docs/install/). Then, run:

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn serve

# when satisfied, build for production. The result will be in the directory 'dist'
yarn run build
```

## Local configuration and remote indices

Edit `src/config.js` for the main configuration options at compilation time, such as:

- `ESSERVER`: the URL to the default ElasticSearch server, if not specified in `local.js`.
- `QUERY_TEMPLATES`: a dictionary of available query templates.
- Pre-classified label categories. Analyst can use any arbitrary text to label documents, but some labels are already recognized and colorized differently by **RVT2 analyzer**. These are defined in arrays `IMPORTANT_LABELS` (red color), `CHECK_LABELS` (yellow color) and `SEEN_LABELS` (green color). The default color for labels is blue.
- `DEFAULT_ANALYST`: the default name for analysts. The analyst name is used to identify comments and queries and it must be always provided. Use `null` to force the analyst to explicitly enter a name in the home page.

Edit `dist/local/local.js` and `dist/local/local.css` for some configuration options at run time local for a specific system. Do not include these files in your control version system!

- variable `window.ESSERVER` in `local.js`: the URL to the default ElasticSearch server.
- `local.css`: any additional CSS for this site. For example, a background.

Some indices must exist in ElasticSearch before running *RVT2 indexer*. The name of these indices can be configured in `src/config.js` and these are the default names:

- `RVTINDEX: "rvtindexer"` is used to identify indices than can be analyzed with *RVT2 analyzer*. It is normally created and managed by the *indexer* plugin of *RVT2*.
- `RVTINDEX_QUERIES: "rvtindexer-queries"` is used by the web interface to log queries. It is not created automatically, but the default options and mappings for indices in ElasticSearch should be fine.

In case you must create these indices:

```bash
curl -XPUT ESSERVER/rvtindexer
curl -XPUT ESSERVER/rvtindexer-queries
```

### Index RVTINDEX

Each document in this index describes a **job** that was launched in **RVT2**. This index is usually created and managed by the **indexer** plugin of the **RVT2** (module `plugins.indexer.elastic.ElasticSearchSink`).

Each job in this index has these fields:

- **_id**: the name of the index the job is using to index document. It is equal to **name**.
- **casename**: the name of the case.
- **name**: the name of the index the job is using to index document.
- **source**: the name of the source.
- **path**: the list of paths the job is using.
- **description**: a description of the job. It is usually a description of the source.
- **server**: the server to download files. Files will be downloaded from `server + filepath`.
- **status**: the status of the parsing: *started*, *ended*, *error* or *interrupted*.
- **started**: the date when the job started
- **ended**: if not currently running, the date when the job ended.

### Index RVTINDEX_QUERIES

This index logs the queries made with this interface. It is managed entirely by **RVT2 analyzer**.

Queries have these fields:

- **query**: the query.
- **query_type**: the query type.
- **offset**: the offset of the query.
- **results**: the number of results (integer).
- **timestamp**: the date when the query finished.
- **analyst**: the name of the analyst that run the query.
