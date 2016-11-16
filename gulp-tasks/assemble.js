/*----------------------
  Gulp-Task / Assemble
------------------------*/
'use strict'

const fabricator = require('fabricator-assemble');
const fs = require('fs');

const assemble = () => {
  const env = process.env.ENV || 'internal';

  const internalOnly = env === 'internal' ? [
    '!src/views/getting-started/service-providers.html',
  ] : [];

  const views = ['src/views/**/*', '!src/views/+(layouts)/**'].concat(internalOnly);

  const options = {
    layout: 'default',
    layouts: 'src/views/layouts/*',
    layoutIncludes: ['src/views/layouts/includes/*', 'src/views/principles/partials/*', 'src/views/essentials/partials/*', 'src/views/elements/**/*', 'src/views/components/**/*'],
    views,
    data: 'src/data/*.json',
    materials: ['src/materials/**/*', 'src/views/temp-materials/**/*'],
    docs: 'src/docs/**/*.md',
    keys: {
      materials: 'materials',
      views: 'views',
      docs: 'docs',
    },
    helpers: {
      capitalize: function() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
      },
      dasherize: function(str) {
        return str.toLowerCase().trim().replace(/[-_\s]+/g, '-');
      },
      checkIfVariations: function(iterations) {
        let returnText = '';
        if (Object.keys(iterations).length > 1) {
          returnText = 'Variations';
        } else {
          returnText = 'Foundation';
        }
        return returnText;
      },
      markdown: require('helper-markdown'),
      decode: function (val) {
        return decodeURIComponent(val);
      },
      raw: function (options) {
        return options.fn();
      },
      findFile: function(fileNamePath) {
        let jsFile = fs.readFileSync(`${fileNamePath}`, { 'encoding': 'utf8' });
        jsFile = jsFile.replace(/["']/g, '\'');
        return jsFile;
      },
      json: function(context) {
        console.log(context);
        return JSON.stringify(context);
      },
    }
  };

  console.info(`\n====> ASSEMBLE is building dist...\n`);
  return fabricator(options);
}

module.exports = assemble;
