// //////////////////////////////////////////////////////////////////////
// Node Modules
// -------------
// Import packages from node_modules needed for the website.
import 'svgxuse';

// //////////////////////////////////////////////////////////////////////
// Vendor
// -------------
// Import third-party scripts that could not be installed with npm.
// These are not meant to be edited.
import './vendor/prism';

// //////////////////////////////////////////////////////////////////////
// Bluemix Components
// -------------
// Import all production JS (ES2015) files from bluemix-components

import {
  Loading,
} from '@console/bluemix-components';

// /////////////////////////////////////////////////////////////////////
// Site
// -------------
// Import specific scripts for controlling website behavior
import { playPause } from './site/motionDemos.js';
import { openItemHeadings,
         toggleMenu,
         activeMenuLink,
         autoCloseMenu,
         showIssueForm } from './site/menu';
import { tabsNavigation } from './site/tabsNavigation';
import { codeSnippets } from './site/snippets';
import { themeSwitcher, responsiveSwitcher } from './site/theme-switcher';
import { renderPopout } from './site/render-popout';
import { copyHexValue } from './site/copy-hex';
import { expandType } from './site/expand-type';
import { filterIcons } from './site/icon-search';
import { iconSymbols } from './site/icon-symbols';
import { taxonomyMap } from './site/taxonomy-map';
import { accordion } from './site/accordion';
import { clipboardConfig } from './site/clipboardConfig';
import { glossaryNav } from './site/glossary';
import { formatText } from './site/formatText';
import analytics from './site/analytics';
import toggleClassForSvg from './site/toggle-class-for-svg';
import './site/fileIssue';

// import snippets stuff here

document.addEventListener('DOMContentLoaded', () => {
  const syncHeight = (frame, h) => {
    const iframe = frame;
    iframe.style.height = `${h}px`;
  };

  setTimeout(() => {
    [... document.querySelectorAll('.iframe')].forEach(iframe => {
      const head = iframe.contentDocument.querySelector('head');
      const body = iframe.contentDocument.querySelector('body');
      body.classList.add('iframe__body');
      iframe.classList.add('visible');
      const svgLinks = [... body.querySelectorAll('use')];
      if (svgLinks) {
        svgLinks.forEach(link => {
          const linkArray = link.getAttribute('xlink:href').split('#');
          link.setAttribute('xlink:href',
            `${linkArray[0].replace(/^.*\/(.+\.svg)$/i, '/assets/$1')}#${linkArray[1] || ''}`
              .replace(/#$/, ''));
        });
      }
      // BUNDLE JS
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/assets/scripts/bundle.js';

      // CSS LINK
      const cssLink = document.createElement('link');
      cssLink.href = '/assets/styles/main.css';
      cssLink.rel = 'stylesheet';

      head.appendChild(cssLink);
      body.appendChild(script);
      body.addEventListener('click', () => {
        syncHeight(iframe, body.offsetHeight);
      });
    });
  }, 1000);

  setTimeout(() => {
    [... document.querySelectorAll('.iframe')].forEach(iframe => {
      const height = iframe.contentDocument.querySelector('body').offsetHeight;
      iframe.addEventListener('load', syncHeight(iframe, height));
    });
  }, 1200);

  [... document.querySelectorAll('[data-loading]')].forEach((element) => {
    setInterval(() => Loading.components.get(element).toggle(), 3000);
  });

  document.addEventListener('scroll', () => {
    const themeSwitcherBtns = [... document.querySelectorAll('.view .theme-switcher-btns')];
    const glossarySideNav = document.querySelector('.glossary__side-nav');
    const y = window.scrollY || window.pageYOffset;

    if (themeSwitcherBtns) {
      if (y > 315) {
        themeSwitcherBtns.forEach(btn => {
          btn.classList.add('scrolled');
        });
      } else {
        themeSwitcherBtns.forEach(btn => {
          btn.classList.remove('scrolled');
        });
      }
    }

    if (glossarySideNav) {
      if (y > 614) {
        glossarySideNav.classList.add('fixed');
      } else {
        glossarySideNav.classList.remove('fixed');
      }
    }
  });

  playPause();
  openItemHeadings();
  toggleMenu();
  showIssueForm();
  tabsNavigation();
  autoCloseMenu();
  activeMenuLink();
  codeSnippets();
  themeSwitcher();
  responsiveSwitcher();
  renderPopout();
  copyHexValue();
  expandType();
  filterIcons();
  iconSymbols();
  clipboardConfig();
  taxonomyMap();
  accordion();
  analytics();
  glossaryNav();
});
