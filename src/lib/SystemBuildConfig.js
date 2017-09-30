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

if(typeof window === 'object') {
  window.SystemJS.config(SystemBuildConfig);
}

module.exports = SystemBuildConfig;
