"use strict";
const fs = require('fs');
const Builder = require('systemjs-builder');
const pjson = require('../package.json');
const process = require('process');
const _buildConfig = require('../src/lib/SystemBuildConfig');

const arrgsArr = process.argv.slice(2);
const isMainSource = arrgsArr[0] === 'main';
const buildType = arrgsArr[1];

/**
 * Define BASE_URL
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
const BASE_URL = '.';
/**
 * Source file
 * @type {string}
 */
const SOURCE = `${BASE_URL}/src/index.js`;
/**
 * @param ext - extra sufix
 * @constructor
 */
const PRODUCTION = ext => {
  if(isMainSource) {
    return `${BASE_URL}/${pjson.main.replace('.dev', '')}${ext ? '.' + ext : ''}.js`
  } else {
    console.error(new Error(`\  Not implemented yet!`));
  }
};
/**
 * Configure builder paths
 */
const builder = new Builder(`${BASE_URL}/`, `${BASE_URL}/${pjson.jspm.configFile}`);
/**
 * Configure jspm|SystemJS|Babel
 */
let buildConfig = Object.assign({}, _buildConfig);
/**
 * Bundle settings
 * @type {{inject: boolean, minify: boolean, mangle: boolean, sourceMaps: boolean, format: string}}
 */
let bundleSettings = {
  inject: true,
  minify: true,
  mangle: false,
  sourceMaps: true,
  format: 'umd'
};

/**
 * Method who build production bundle
 */
let buildProd = () => { console.info('Start build prod');
  let builderConfigMeta = {};
  const includeDeps = arrgsArr[2] == '-deps' || arrgsArr[2] == '-deps=true';

  for(let key in pjson.jspm.dependencies) {
    if(!builderConfigMeta.hasOwnProperty(key)) {
      builderConfigMeta[key] = {
        build: includeDeps
      };
    }
  }

  buildConfig.meta = builderConfigMeta;
  builder.config(buildConfig);

  return builder.buildStatic(SOURCE, PRODUCTION(), bundleSettings);
};

/**
 * Method who build development bundle
 */
let buildDev = () => {  console.info('Start build dev');
  let builderConfigMeta = {};

  for(let key in pjson.jspm.dependencies) {
    if(!builderConfigMeta.hasOwnProperty(key)) {
      builderConfigMeta[key] = {
        build: false
      };
    }
  }

  buildConfig.meta = builderConfigMeta;
  builder.config(buildConfig);

  return builder.buildStatic(
    SOURCE,
    PRODUCTION('dev'),
    bundleSettings = Object.assign({}, bundleSettings, {
      minify: false,
    })
  );
};

const start = new Promise((resolve, reject) => {
  console.time('Time to build');

  switch(buildType) {
    case 'dev':
      buildDev().then(res => {
        return console.timeEnd('Time to build');
      });
      break;
    case 'prod':
      buildProd().then(res => {
        return console.timeEnd('Time to build');
      });
      break;
    default:
      buildProd().then(res => {
        buildDev().then(res => {
          return console.timeEnd('Time to build');
        });
      });
  }
});
