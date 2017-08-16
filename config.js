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
      "github:jirikavi/AngularJS-Toaster@2.1.0.js",
      "github:jirikavi/AngularJS-Toaster@2.1.0/toaster.js",
      "github:jirikavi/AngularJS-Toaster@2.1.0/toaster.css!github:systemjs/plugin-css@0.1.35.js",
      "github:angular/bower-angular-animate@1.6.5.js",
      "github:angular/bower-angular-animate@1.6.5/angular-animate.js",
      "github:angular/bower-angular@1.6.5.js",
      "github:angular/bower-angular@1.6.5/angular.js",
      "github:angular/bower-angular-sanitize@1.6.5.js",
      "github:angular/bower-angular-sanitize@1.6.5/angular-sanitize.js",
      "npm:angular-ui-router@1.0.3.js",
      "npm:angular-ui-router@1.0.3/lib/index.js",
      "npm:angular-ui-router@1.0.3/lib/viewScroll.js",
      "npm:angular-ui-router@1.0.3/lib/angular.js",
      "npm:angular@1.6.5.js",
      "npm:angular@1.6.5/angular.js",
      "npm:angular-ui-router@1.0.3/lib/directives/viewDirective.js",
      "npm:angular-ui-router@1.0.3/lib/services.js",
      "npm:angular-ui-router@1.0.3/lib/urlRouterProvider.js",
      "npm:@uirouter/core@5.0.3.js",
      "npm:@uirouter/core@5.0.3/lib/index.js",
      "npm:@uirouter/core@5.0.3/lib/interface.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/index.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/plugins.js",
      "npm:@uirouter/core@5.0.3/lib/common/coreservices.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/q.js",
      "npm:@uirouter/core@5.0.3/lib/common/index.js",
      "npm:@uirouter/core@5.0.3/lib/common/trace.js",
      "npm:@uirouter/core@5.0.3/lib/common/strings.js",
      "npm:@uirouter/core@5.0.3/lib/resolve/resolvable.js",
      "npm:@uirouter/core@5.0.3/lib/common/predicates.js",
      "npm:@uirouter/core@5.0.3/lib/state/stateObject.js",
      "npm:@uirouter/core@5.0.3/lib/common/glob.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js",
      "npm:@uirouter/core@5.0.3/lib/common/hof.js",
      "npm:@uirouter/core@5.0.3/lib/common/common.js",
      "npm:@uirouter/core@5.0.3/lib/transition/transition.js",
      "npm:@uirouter/core@5.0.3/lib/resolve/resolveContext.js",
      "npm:@uirouter/core@5.0.3/lib/path/pathFactory.js",
      "npm:@uirouter/core@5.0.3/lib/path/pathNode.js",
      "npm:@uirouter/core@5.0.3/lib/params/param.js",
      "npm:@uirouter/core@5.0.3/lib/params/paramType.js",
      "npm:@uirouter/core@5.0.3/lib/state/targetState.js",
      "npm:@uirouter/core@5.0.3/lib/resolve/interface.js",
      "npm:@uirouter/core@5.0.3/lib/transition/hookBuilder.js",
      "npm:@uirouter/core@5.0.3/lib/transition/transitionHook.js",
      "npm:@uirouter/core@5.0.3/lib/transition/rejectFactory.js",
      "npm:@uirouter/core@5.0.3/lib/transition/interface.js",
      "npm:@uirouter/core@5.0.3/lib/transition/hookRegistry.js",
      "npm:@uirouter/core@5.0.3/lib/common/queue.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/injector.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/memoryLocationConfig.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/memoryLocationService.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/baseLocationService.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/utils.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/pushStateLocationService.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/hashLocationService.js",
      "npm:@uirouter/core@5.0.3/lib/vanilla/browserLocationConfig.js",
      "npm:@uirouter/core@5.0.3/lib/router.js",
      "npm:@uirouter/core@5.0.3/lib/url/urlService.js",
      "npm:@uirouter/core@5.0.3/lib/globals.js",
      "npm:@uirouter/core@5.0.3/lib/params/stateParams.js",
      "npm:@uirouter/core@5.0.3/lib/state/stateService.js",
      "npm:@uirouter/core@5.0.3/lib/hooks/lazyLoad.js",
      "npm:@uirouter/core@5.0.3/lib/transition/transitionService.js",
      "npm:@uirouter/core@5.0.3/lib/hooks/invalidTransition.js",
      "npm:@uirouter/core@5.0.3/lib/hooks/ignoredTransition.js",
      "npm:@uirouter/core@5.0.3/lib/transition/transitionEventType.js",
      "npm:@uirouter/core@5.0.3/lib/hooks/url.js",
      "npm:@uirouter/core@5.0.3/lib/hooks/updateGlobals.js",
      "npm:@uirouter/core@5.0.3/lib/hooks/views.js",
      "npm:@uirouter/core@5.0.3/lib/hooks/resolve.js",
      "npm:@uirouter/core@5.0.3/lib/hooks/onEnterExitRetain.js",
      "npm:@uirouter/core@5.0.3/lib/hooks/redirectTo.js",
      "npm:@uirouter/core@5.0.3/lib/hooks/coreResolvables.js",
      "npm:@uirouter/core@5.0.3/lib/state/stateRegistry.js",
      "npm:@uirouter/core@5.0.3/lib/state/stateQueueManager.js",
      "npm:@uirouter/core@5.0.3/lib/state/stateBuilder.js",
      "npm:@uirouter/core@5.0.3/lib/state/stateMatcher.js",
      "npm:@uirouter/core@5.0.3/lib/view/view.js",
      "npm:@uirouter/core@5.0.3/lib/url/urlRouter.js",
      "npm:@uirouter/core@5.0.3/lib/url/urlRule.js",
      "npm:@uirouter/core@5.0.3/lib/url/urlMatcher.js",
      "npm:@uirouter/core@5.0.3/lib/url/urlMatcherFactory.js",
      "npm:@uirouter/core@5.0.3/lib/params/paramTypes.js",
      "npm:@uirouter/core@5.0.3/lib/view/index.js",
      "npm:@uirouter/core@5.0.3/lib/url/index.js",
      "npm:@uirouter/core@5.0.3/lib/transition/index.js",
      "npm:@uirouter/core@5.0.3/lib/state/index.js",
      "npm:@uirouter/core@5.0.3/lib/resolve/index.js",
      "npm:@uirouter/core@5.0.3/lib/path/index.js",
      "npm:@uirouter/core@5.0.3/lib/params/index.js",
      "npm:angular-ui-router@1.0.3/lib/locationServices.js",
      "npm:angular-ui-router@1.0.3/lib/statebuilders/onEnterExitRetain.js",
      "npm:angular-ui-router@1.0.3/lib/stateProvider.js",
      "npm:angular-ui-router@1.0.3/lib/templateFactory.js",
      "npm:angular-ui-router@1.0.3/lib/statebuilders/views.js",
      "npm:angular-ui-router@1.0.3/lib/stateFilters.js",
      "npm:angular-ui-router@1.0.3/lib/directives/stateDirectives.js",
      "npm:angular-ui-router@1.0.3/lib/injectables.js"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.6.5",
    "angular-animate": "github:angular/bower-angular-animate@1.6.5",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.6.5",
    "angular-strap": "npm:angular-strap@2.3.12",
    "angular-ui-router": "npm:angular-ui-router@1.0.3",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "jirikavi/AngularJS-Toaster": "github:jirikavi/AngularJS-Toaster@2.1.0",
    "json": "github:systemjs/plugin-json@0.3.0",
    "github:angular/bower-angular-animate@1.6.5": {
      "angular": "github:angular/bower-angular@1.6.5"
    },
    "github:angular/bower-angular-sanitize@1.6.5": {
      "angular": "github:angular/bower-angular@1.6.5"
    },
    "github:jirikavi/AngularJS-Toaster@2.1.0": {
      "css": "github:systemjs/plugin-css@0.1.35"
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
    "npm:@uirouter/core@5.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:angular-strap@2.3.12": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:angular-ui-router@1.0.3": {
      "@uirouter/core": "npm:@uirouter/core@5.0.3",
      "angular": "npm:angular@1.6.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
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
