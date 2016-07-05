/*----------------------
  Gulp-Task / Icons
------------------------*/

const parseString = require('xml2js').parseString;
const fs = require('fs');

/*
  iconJSON()
  * Converts XML to JSON
  * Creates new JSON Array of icon objects
  * Writes new JSON Array to icons.json file.
*/
const iconJSON = () => {
  // Read XML from sprite.svg
  const xml = fs.readFileSync('node_modules/@console/bluemix-icons/sprite.svg', { 'encoding': 'utf8' });

  // parseString - Use xml2js to convert XML to JSON
  parseString(xml, (err, result) => {
    if (err) {
      throw err;
    }

    // iconMeta - returns new JSON Array of icon Objects
    const iconMeta = (result.svg.symbol).map(symbol => {

      // Split `id` key into an Array - [{{tags}}, '--', {{name}}]
      const splitId = symbol.$.id.split('--')

      // For each "symbol", create new Objects with these keys/values
      return {
        id: symbol.$.id,
        name: splitId[1],
        tags: splitId[0]
      }
    });

    // Stringify iconMeta's return value to JSON for use in template
    const iconString = JSON.stringify(iconMeta);

    // Write iconString to icons.json file
    fs.writeFile('./src/data/icons.json', iconString);
  });
}

const icons = (cb) => {
  iconJSON();
  cb();
};

module.exports = icons;
