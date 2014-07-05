require.config({
  baseUrl: "/javascripts",
  paths: {
    "jquery": "jquery-2.1.1.min",
    "affix": "bootstrap/affix",
    "alert": "bootstrap/alert",
    "button": "bootstrap/button",
    "collapse": "bootstrap/collapse",
    "dropdown": "bootstrap/dropdown",
    "modal": "bootstrap/modal",
    "popover": "bootstrap/popover",
    "scrollspy": "bootstrap/scrollspy",
    "tab": "bootstrap/tab",
    "tooltip": "bootstrap/tooltip",
    "transition": "bootstrap/transition",
    "main": "main",
    "tc": "TestClass"
  },
  shim: {
    "jquery": {
      "exports": "$"
    },

    "affix": {
      "deps": ["jquery"]
    },
    "alert": {
      "deps": ["jquery"]
    },
    "button": {
      "deps": ["jquery"]
    },
    "collapse": {
      "deps": ["jquery", "transition"]
    },
    "dropdown": {
      "deps": ["jquery"]
    },
    "modal": {
      "deps": ["jquery"]
    },
    "popover": {
      "deps": ["jquery", "tooltip"]
    },
    "scrollspy": {
      "deps": ["jquery"]
    },
    "tab": {
      "deps": ["jquery"]
    },
    "tooltip": {
      "deps": ["jquery"]
    },
    "transition": {
      "deps": ["jquery"]
    },
    "main": {
      "deps": ["jquery"]
    }
  }
});


require(["main"]);
