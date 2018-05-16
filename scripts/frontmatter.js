/* eslint-disable */

const fs = require('fs');
const yamlFront = require('yaml-front-matter');
const path = require('path');

const templates = require('./templates');

/**
 * Fractal handle for default variant.
 * @type {RegExp}
 */
const reDefault = /--default$/;

/*
Function that goes through the folder `pages/components` and finds all the files with the name `code.md`.
It then runs the function `loadFront` on each file and its content and saves this into a new file where it is also
exported to a js object based on the front matter it finds in the md file.
In the file writing process it also adds `module.exports = ` to the top of the file so that it can be
imported where it's needed as an object.
*/
const renderFrontMatter = targetFile => {
  const dir = path.resolve(__dirname, '..');
  const folders = fs
    .readdirSync(`${dir}/src/content/components/`)
    .filter(folder =>
      fs
        .statSync(path.join(`${dir}/src/content/components/`, folder))
        .isDirectory()
    );
  folders.forEach(component => {
    const componentFolder = fs.readdirSync(
      `${dir}/src/content/components/${component}/`
    );
    let componentContent;
    componentFolder.forEach(file => {
      if (file === targetFile) {
        componentContent = yamlFront.loadFront(
          fs.readFileSync(`${dir}/src/content/components/${component}/${file}`)
        );
      }
    });
    if (!(componentContent === undefined)) {
      templates.promiseCache.then(({ componentSource }) => {
        if (!componentContent.metadata) {
          componentContent.metadata = {};
        }

        if (!componentContent.variations) {
          // If variations list is not found in `code.md`, use the one from Fractal
          let hasNonDefault = false;
          const variations = {};
          componentSource
            .filter(metadata => component === metadata.handle)
            .forEach(metadata => {
              (metadata.isCollection ? metadata : !metadata.isCollated && metadata.variants && metadata.variants())
                .forEach(item => {
                  if (!reDefault.test(item.handle)) {
                    hasNonDefault = true;
                  }
                  variations[item.handle.replace(reDefault, '')] = [];
                });
            });

          if (hasNonDefault) {
            componentContent.variations = variations;
          }
        }

        if (componentContent.variations) {
          componentContent.variations = Object.keys(componentContent.variations)
            .reduce((o, key) => {
              if (!Array.isArray(componentContent.variations[key]) || componentContent.variations[key].length === 0) {
                // If the label is not found in `code.md`, use the one from Fractal
                const labels = [];
                componentSource
                  .forEach(metadata => {
                    const items = (metadata.isCollection ? metadata : !metadata.isCollated && metadata.variants && metadata.variants())
                      .filter(item => key === item.handle.replace(reDefault, ''))
                      .forEach(item => {
                        labels.push(item.label === 'Default' ? metadata.label : item.label);
                      });
                  });
                o[key] = labels;
              } else {
                o[key] = componentContent.variations[key];
              }
              return o;
            }, {});
        }

          fs.writeFileSync(
            `${dir}/src/data/components/${component}.js`,
            `/* eslint-disable */\n module.exports = ${JSON.stringify(
              componentContent,
              null,
              2
            )}`
          );
      });
    }
  });
};

const renderGlossaryFile = targetFile => {
  const dir = path.resolve(__dirname, '..');
  const glossaryContent = yamlFront.loadFront(
    fs.readFileSync(`${dir}/src/content/guidelines/content/glossary.md`)
  );
  fs.writeFileSync(
    `${dir}/src/data/guidelines/glossary.js`,
    `/* eslint-disable */\n module.exports = ${JSON.stringify(
      glossaryContent,
      null,
      2
    )}`
  );
};

renderFrontMatter('code.md');
renderGlossaryFile('glossary.md');
