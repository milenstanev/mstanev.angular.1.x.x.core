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

let builderConfigMeta = {
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
};

for(let key in pjson.jspm.dependencies) {
  builderConfigMeta[key] = {
    build: false
  };
}

console.log( JSON.stringify(builderConfigMeta) )

//======= Settings =======//
builder.config({
  meta: builderConfigMeta
});

builder
  .buildStatic(
    `${baseUrl}/src/index.js`,
    `${baseUrl}/${pjson.main}`,
    {
      inject: true,
      minify: true,
      mangle: false,
      sourceMaps: true,
      format: 'umd',
      runtime: true
    }
  ).then(function() {
    console.log('Build complete\n');
    console.log(`Build name: ${pjson.registry}:${pjson.name}@${pjson.version}`);
  })
  .catch(function(err) {
    console.log('Build error\n');
    console.log(err);
  });
