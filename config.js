System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "src/index.js",
      "npm:angular-strap@2.3.12.js",
      "npm:angular-strap@2.3.12/index.js",
      "npm:angular-strap@2.3.12/dist/angular-strap.tpl.min.js",
      "npm:angular-strap@2.3.12/dist/angular-strap.js",
      "github:jirikavi/AngularJS-Toaster@2.2.0.js",
      "github:jirikavi/AngularJS-Toaster@2.2.0/toaster.js",
      "github:jirikavi/AngularJS-Toaster@2.2.0/toaster.css!github:systemjs/plugin-css@0.1.36.js",
      "github:angular/bower-angular-animate@1.6.6.js",
      "github:angular/bower-angular-animate@1.6.6/angular-animate.js",
      "github:angular/bower-angular@1.6.6.js",
      "github:angular/bower-angular@1.6.6/angular.js",
      "github:angular/bower-angular-sanitize@1.6.6.js",
      "github:angular/bower-angular-sanitize@1.6.6/angular-sanitize.js",
      "npm:@uirouter/angularjs@1.0.6.js",
      "npm:@uirouter/angularjs@1.0.6/release/ui-router-angularjs.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js",
      "npm:@uirouter/core@5.0.6.js",
      "npm:@uirouter/core@5.0.6/_bundles/ui-router-core.js",
      "npm:angular@1.6.6.js",
      "npm:angular@1.6.6/angular.js"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.6.6",
    "angular-animate": "github:angular/bower-angular-animate@1.6.6",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.6.6",
    "angular-strap": "npm:angular-strap@2.3.12",
    "angular-ui-router": "npm:@uirouter/angularjs@1.0.6",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "jirikavi/AngularJS-Toaster": "github:jirikavi/AngularJS-Toaster@2.2.0",
    "json": "github:systemjs/plugin-json@0.3.0",
    "github:angular/bower-angular-animate@1.6.6": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:angular/bower-angular-sanitize@1.6.6": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:jirikavi/AngularJS-Toaster@2.2.0": {
      "css": "github:systemjs/plugin-css@0.1.36"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.7"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@uirouter/angularjs@1.0.6": {
      "@uirouter/core": "npm:@uirouter/core@5.0.6",
      "angular": "npm:angular@1.6.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:@uirouter/core@5.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:angular-strap@2.3.12": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.7": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
