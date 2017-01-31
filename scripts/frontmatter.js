/* eslint-disable */

const fs = require('fs');
const yamlFront = require('yaml-front-matter');
const path = require('path');

/*
Function that goes through the folder `pages/components` and finds all the files with the name `code.md`.
It then runs the function `loadFront` on each file and its content and saves this into a new file where it is also
exported to a js object based on the front matter it finds in the md file.
In the file writing process it also adds `module.exports = ` to the top of the file so that it can be
imported where it's needed as an object.
*/
const renderFrontMatter = (targetFile) => {
  const dir = path.resolve(__dirname, '..');
  const folders = fs.readdirSync(`${dir}/src/content/components/`)
      .filter(folder => fs.statSync(path.join(`${dir}/src/content/components/`, folder)).isDirectory())
  folders.forEach(component => {
    const componentContent = fs.readdirSync(`${dir}/src/content/components/${component}/`)
      .map(file => {
        if (file.includes(targetFile)) {
          return fs.readFileSync(`${dir}/src/content/components/${component}/${file}`);
        }
      })
      .map(data => {
        return yamlFront.loadFront(data)
      });
    fs.writeFileSync(`${dir}/src/data/components/${component}.js`, `/* eslint-disable */\n module.exports = ${JSON.stringify(componentContent, null, 2)}`);
  });
};

renderFrontMatter('code.md');
