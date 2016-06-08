'use strict';

////////////////////////////////////////////////////////////////////////
// Node Modules
// -------------
// Import packages from node_modules needed for the website.
import 'svgxuse';

////////////////////////////////////////////////////////////////////////
// Vendor
// -------------
// Import third-party scripts that could not be installed with npm.
// These are not meant to be edited.
import './vendor/prism';

////////////////////////////////////////////////////////////////////////
// Bluemix Components
// -------------
// Import all production JS (ES2015) files from bluemix-components

import {
  // Base Elements
  FileUploader, NumberInput, Table,
  // Components
  ContentSwitcher, Dropdown, Loading, Modal, OverflowMenu, Tab,
} from '@console/bluemix-components';

////////////////////////////////////////////////////////////////////////
// Site
// -------------
// Import specific scripts for controlling website behavior
import { openItemHeadings, toggleMenu, activeMenuLink, autoCloseMenu } from './site/menu';
import { tabsNavigation } from './site/tabsNavigation';
import { codeSnippets } from './site/snippets';
import { themeSwitcher } from './site/theme-switcher';
import { renderPopout } from './site/render-popout';
import { copyHexValue } from './site/copy-hex';
import { expandType } from './site/expand-type';

// import snippets stuff here

document.addEventListener('DOMContentLoaded', function(e) {

  [... document.querySelectorAll('[data-loading]')].forEach((element) => {
    // Toggles on and off animations for Loading as a demo but may be misleading for users
    setInterval(() => Loading.components.get(element).toggle(), 3000);
  });

  const alertModalElement = document.querySelector('#under-construction');
  if (alertModalElement) {
    const alertModal = Modal.create(alertModalElement);
    alertModal.show();
  }

  openItemHeadings();
  toggleMenu();
  tabsNavigation();
  autoCloseMenu();
  activeMenuLink();
  codeSnippets();
  themeSwitcher();
  renderPopout();
  copyHexValue();
  expandType();

});
