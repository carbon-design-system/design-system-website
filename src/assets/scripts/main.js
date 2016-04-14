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

// Base Elements
import FileUploader from '../../../bower_components/bluemix-components/consumables/js/es2015/file-uploader';

// Components
import Spinner from '../../../bower_components/bluemix-components/consumables/js/es2015/loading';
import Modal from '../../../bower_components/bluemix-components/consumables/js/es2015/modals';
import OverflowMenu from '../../../bower_components/bluemix-components/consumables/js/es2015/overflow-menu';
import Tab from '../../../bower_components/bluemix-components/consumables/js/es2015/tabs-nav';

////////////////////////////////////////////////////////////////////////
// Site
// -------------
// Import specific scripts for controlling website behavior
import { openItemHeadings } from './site/menu';
import { toggleMenu } from './site/menu';
import { activeMenuLink } from './site/menu';
import { autoCloseMenu } from './site/menu';
import { tabsNavigation } from './site/tabs';
import { codeSnippets } from './site/snippets';
import { themeSwitcher } from './site/theme-switcher';
import { renderPopout } from './site/render-popout';

// import snippets stuff here

document.addEventListener('DOMContentLoaded', function(e) {

  [... document.querySelectorAll('[data-file-input]')].forEach((element) => new FileUploader(element));
  [... document.querySelectorAll('[data-spinner]')].forEach((element) => {
    const spinner = new Spinner(element);
    setInterval(() => spinner.toggle(), 3000);
  });
  [... document.querySelectorAll('[data-modal-target]')].forEach((element) => Modal.hook(element));
  [... document.querySelectorAll('[data-overflow-menu]')].forEach((element) => new OverflowMenu(element));
  [... document.querySelectorAll('[data-tabs]')].forEach((element) => new Tab(element));
  Array.prototype.forEach.call(document.querySelectorAll('[data-tabs] .item__link'), function (element) {
    // Don't follow links in tab
    element.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });

  openItemHeadings();
  toggleMenu();
  tabsNavigation();
  autoCloseMenu();
  activeMenuLink();
  codeSnippets();
  themeSwitcher();
  renderPopout();

  const alertModalElement = document.querySelector('#under-construction');
  if (alertModalElement) {
    const alertModal = Modal.create(alertModalElement);
    alertModal.show();
  }

});
