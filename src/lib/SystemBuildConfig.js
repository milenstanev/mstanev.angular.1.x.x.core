/*
import 'plugin-babel';
import 'babel-preset-es2017';
import 'babel-plugin-transform-decorators-legacy';
*/

const SystemBuildConfig = {
  defaultJSExtensions: true,
  transpiler: "plugin-babel",
  babelOptions: {
    presets: ['babel-preset-es2017'],
    plugins: ['babel-plugin-transform-decorators-legacy']
  },
  map: {
    // In fact it's browser version of package: plugin-babel
    "systemjs-babel-build": "npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js"
  }
};

window.SystemJS.config(SystemBuildConfig);

export { SystemBuildConfig };