# Development

Table of contents:

[[toc]]

## Development tools

*RVT2 analyzer* uses these frameworks and libraries:

- **Vue.js** (<https://vuejs.org>) is the JavaScript framework.
- **Vuetify** (<https://vuetifyjs.com>) is the UI component framework, based on Google’s material design.
- **axios** (<https://github.com/axios/axios>) is the HTTP client.
- **vue-router** (<https://router.vuejs.org/en/>) if the *vuejs* plugin to manage *RVT2 analyzer* as a SPA (single page application).
- **yarn**, **webpack** and other tools for the development environment.

::: warning
This documentation assumes you are familiar with these technologies, specially Vue.js.
:::

*RVT2 analyzer* source code must follow the [Vue.js Style Guide](https://vuejs.org/v2/style-guide/).

## Folder structure

*RVT2 analyzer* uses the default files and folders created by [Vue CLI 3](https://cli.vuejs.org/).

Main files:

- `src/App.vue`: the skeleton of the page. It defines a jumbotron, footer, alerts and the *router-view* of *vue-router*.
- `src/main.js`: the root JavaScript in the application, providing the Vue object.
- `src/config.js`: the default configuration for the application.
- `src/router.js`: the configuration of *vue-router*.
- `src/plugins/vuetify.js`: the configuration of *vuetify*, specially the main theme.
- `src/lib`: utility JavaScript files without an interface.
- `src/analyst`: the "select analyst" page and its specific components. Root file: `TheAnalyst`.
- `src/search`: the "search page" and its specific components. Root file: `TheSearch.vue`.
- `src/indices`: the "list of indices" and its specific components. Root files: `TheIndices.vue` and `TheIndicesAdmin.vue`.
- `src/components`: common Components for all pages.
	- `src/BaseTag`: Component to manage tags. It can colorize tags depending on some groups.
	- `src/IndexTable`: Component to show a table with the metadata of the available indexes. It uses the *rvtindexer* index.
    - `src/ConfirmDialog`: Component to show a dialog to confirm an action using async/await.
