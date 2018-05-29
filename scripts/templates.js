'use strict';

const path = require('path');
const Fractal = require('@frctl/fractal');

let carbonComponentDir;
try {
  carbonComponentDir = path.resolve(path.dirname(require.resolve('carbon-components')), '..');
} catch (err) {}

const fractal = Fractal.create();
fractal.components.set('path', path.resolve(carbonComponentDir, 'src/components'));
fractal.components.set('ext', '.hbs');
fractal.docs.set('path', path.resolve(carbonComponentDir, 'docs'));

const promiseCache = fractal.load().then(([componentSource, docSource]) => ({
  componentSource,
  docSource,
}));

module.exports = {
  promiseCache,
};
