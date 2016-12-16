/* global ga */

// Track:

// Number of clicks per items in the left nav
// Clicks on "Design Kit” links/button (left nav and homepage)
// Clicks on “Developer Kit” links/buttons (left nav and homepage)
// Tab Clicks
// Copy Clicks
// Copy Hex

const mainNav = [...document.querySelectorAll('.main-nav a')];
const designKit = [...document.querySelectorAll('[data-design-kit]')];
const developerKit = [...document.querySelectorAll('[data-developer-kit]')];
const foundation = [...document.querySelectorAll('[href="#foundation"]')];
const usage = [...document.querySelectorAll('[href="#usage"]')];
const style = [...document.querySelectorAll('[href="#style"]')];
const pages = [...document.querySelectorAll('.page')];
const colors = [...document.querySelectorAll('.ui-color')];

const gaEvent = (category, action, label) => {
  ga('send', 'event', category, action, label);
};

const copyCodeHandler = () => {
  if (pages) {
    const copyArray = pages.map(page => {
      return {
        title: page.querySelector('h2').textContent.trim(),
        node: page.querySelector('.code__copy'),
      };
    });

    if (copyArray) {
      copyArray.forEach(copyItem => {
        if (copyItem.node) {
          copyItem.node.addEventListener('click', () => {
            gaEvent('Copy Code', 'click', copyItem.title);
          });
        }
      });
    }
  }
};

const copyHex = () => {
  if (colors) {
    const hexArray = colors.map(colorEl => {
      return {
        title: colorEl.querySelector('.bold').textContent.trim(), // could also tag the titles
        node: colorEl.querySelector('.color__example'),
      };
    });

    hexArray.forEach(hexEl => {
      hexEl.node.addEventListener('click', () => {
        gaEvent('Copy Color', 'click', hexEl.title);
      });
    });
  }
};

const eventHandler = (nodes, category, dataAttrib, action = 'click') => {
  if (nodes) {
    if (!dataAttrib) {
      nodes.forEach(node => {
        node.addEventListener('click', () => {
          gaEvent(category, action, node.textContent.trim());
        });
      });
    } else {
      nodes.forEach(node => {
        node.addEventListener('click', () => {
          gaEvent(category, action, node.dataset[dataAttrib]);
        });
      });
    }
  }
};

const onLoadHandler = (category, label, hash, action = 'click') => {
  if (window.location.hash === hash) {
    gaEvent(category, action, label);
  }
};

export default function analytics() {
  eventHandler(mainNav, 'Left Nav');
  eventHandler(designKit, 'Design Kit', 'designKit');
  eventHandler(developerKit, 'Developer Kit', 'developerKit');
  eventHandler(foundation, 'Tabs');
  eventHandler(usage, 'Tabs');
  eventHandler(style, 'Tabs');

  onLoadHandler('Tabs', 'Foundation', '#foundation', 'load');
  onLoadHandler('Tabs', 'Usage', '#usage', 'load');
  onLoadHandler('Tabs', 'Style', '#style', 'load');

  copyCodeHandler();
  copyHex();
}
