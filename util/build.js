const Builder = require('systemjs-builder');
const pjson = require('../package.json');
/**
 * Define baseUrl
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
const baseUrl = '.';
/**
 * Configure builder paths
 */
const builder = new Builder(`${baseUrl}/`, `${baseUrl}/config.js`);

builder.config({
  /*meta: {
    'angular': {
      build: false
    },
    'angular-animate': {
      build: false
    },
    'angular-sanitize': {
      build: false
    },
    'angular-ui-router': {
      build: false
    },
    'jirikavi/AngularJS-Toaster': {
      build: false
    },
    'json': {
      build: false
    },
    'text': {
      build: false
    },
    'css': {
      build: false
    }
  }*/
});

//======= Settings =======//
const MINIFY = true;
const SOURCE_MAP = true;
const FORMAT = 'umd';

builder
  .buildStatic(
    `${baseUrl}/src/index.js`,
    `${baseUrl}/index.js`,
    {
      minify: MINIFY,
      mangle: false,
      sourceMaps: SOURCE_MAP,
      format: FORMAT,
      runtime: false
    }
  ).then(function() {
    console.log('Build complete\n');
    console.log(`Build name: ${pjson.registry}:${pjson.name}@${pjson.version}`);
    console.log(`Build info: \n - minify: ${MINIFY}\n - sourceMaps: ${SOURCE_MAP}\n - format: ${FORMAT}`);
  })
  .catch(function(err) {
    console.log('Build error\n');
    console.log(err);
  });
