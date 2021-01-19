(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{388:function(e,t,o){"use strict";o.r(t);var r=o(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"development"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[e._v("#")]),e._v(" Development")]),e._v(" "),o("p",[e._v("Table of contents:")]),e._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#development-tools"}},[e._v("Development tools")])]),o("li",[o("a",{attrs:{href:"#folder-structure"}},[e._v("Folder structure")])])])]),o("p"),e._v(" "),o("h2",{attrs:{id:"development-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#development-tools"}},[e._v("#")]),e._v(" Development tools")]),e._v(" "),o("p",[o("em",[e._v("RVT2 analyzer")]),e._v(" uses these frameworks and libraries:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Vue.js")]),e._v(" ("),o("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuejs.org"),o("OutboundLink")],1),e._v(") is the JavaScript framework.")]),e._v(" "),o("li",[o("strong",[e._v("Vuetify")]),e._v(" ("),o("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuetifyjs.com"),o("OutboundLink")],1),e._v(") is the UI component framework, based on Google’s material design.")]),e._v(" "),o("li",[o("strong",[e._v("axios")]),e._v(" ("),o("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/axios/axios"),o("OutboundLink")],1),e._v(") is the HTTP client.")]),e._v(" "),o("li",[o("strong",[e._v("vue-router")]),e._v(" ("),o("a",{attrs:{href:"https://router.vuejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://router.vuejs.org/en/"),o("OutboundLink")],1),e._v(") if the "),o("em",[e._v("vuejs")]),e._v(" plugin to manage "),o("em",[e._v("RVT2 analyzer")]),e._v(" as a SPA (single page application).")]),e._v(" "),o("li",[o("strong",[e._v("yarn")]),e._v(", "),o("strong",[e._v("webpack")]),e._v(" and other tools for the development environment.")])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("This documentation assumes you are familiar with these technologies, specially Vue.js.")])]),e._v(" "),o("p",[o("em",[e._v("RVT2 analyzer")]),e._v(" source code must follow the "),o("a",{attrs:{href:"https://vuejs.org/v2/style-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js Style Guide"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"folder-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[e._v("#")]),e._v(" Folder structure")]),e._v(" "),o("p",[o("em",[e._v("RVT2 analyzer")]),e._v(" uses the default files and folders created by "),o("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue CLI 3"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Main files:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("src/App.vue")]),e._v(": the skeleton of the page. It defines a jumbotron, footer, alerts and the "),o("em",[e._v("router-view")]),e._v(" of "),o("em",[e._v("vue-router")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("src/main.js")]),e._v(": the root JavaScript in the application, providing the Vue object.")]),e._v(" "),o("li",[o("code",[e._v("src/config.js")]),e._v(": the default configuration for the application.")]),e._v(" "),o("li",[o("code",[e._v("src/router.js")]),e._v(": the configuration of "),o("em",[e._v("vue-router")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("src/plugins/vuetify.js")]),e._v(": the configuration of "),o("em",[e._v("vuetify")]),e._v(", specially the main theme.")]),e._v(" "),o("li",[o("code",[e._v("src/lib")]),e._v(": utility JavaScript files without an interface.")]),e._v(" "),o("li",[o("code",[e._v("src/analyst")]),e._v(': the "select analyst" page and its specific components. Root file: '),o("code",[e._v("TheAnalyst")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("src/search")]),e._v(': the "search page" and its specific components. Root file: '),o("code",[e._v("TheSearch.vue")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("src/indices")]),e._v(': the "list of indices" and its specific components. Root files: '),o("code",[e._v("TheIndices.vue")]),e._v(" and "),o("code",[e._v("TheIndicesAdmin.vue")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("src/components")]),e._v(": common Components for all pages.\n"),o("ul",[o("li",[o("code",[e._v("src/BaseTag")]),e._v(": Component to manage tags. It can colorize tags depending on some groups.")]),e._v(" "),o("li",[o("code",[e._v("src/IndexTable")]),e._v(": Component to show a table with the metadata of the available indexes. It uses the "),o("em",[e._v("rvtindexer")]),e._v(" index.")]),e._v(" "),o("li",[o("code",[e._v("src/ConfirmDialog")]),e._v(": Component to show a dialog to confirm an action using async/await.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);