/*----------------------
  Gulp-Task / Assemble
------------------------*/

const fabricator = require('fabricator-assemble');
const fs = require('fs');

const assemble = () => {
  const options = {
    layout: 'default',
    layouts: 'src/views/layouts/*',
    layoutIncludes: ['src/views/layouts/includes/*', 'src/views/principles/partials/*', 'src/views/essentials/partials/*', 'src/views/elements/**/*', 'src/views/components/**/*'],
    views: ['src/views/**/*', '!src/views/+(layouts)/**'],
    data: 'src/data/*.json',
    materials: 'src/materials/**/*',
    docs: 'src/docs/**/*.md',
    keys: {
      materials: 'materials',
      views: 'views',
      docs: 'docs'
    },
    helpers: {
      capitalize: function() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
      },
      dasherize: function(str) {
        return str.toLowerCase().trim().replace(/[-_\s]+/g, '-');
      },
      markdown: require('helper-markdown'),
      decode: function (val) {
        return decodeURIComponent(val);
      },
      raw: function (options) {
        return options.fn();
      },
      findFile: function(fileName) {
        let jsFile = fs.readFileSync(`src/materials/${fileName}`, { 'encoding': 'utf8' });
        jsFile = jsFile.replace(/["']/g, '\'');
        return jsFile;
      }
    }
  };

  console.info(`\n====> ASSEMBLE is building dist...\n`);
  return fabricator(options);
}

module.exports = assemble;
