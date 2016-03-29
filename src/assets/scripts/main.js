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
import Clipboard from './vendor/clipboard';

////////////////////////////////////////////////////////////////////////
// Bluemix Components
// -------------
// Import all production JS (ES2015) files from bluemix-components

// Base Elements
import FileUploader from '../../../bower_components/bluemix-components/base-elements/inputs/file/file';

// Components
import Spinner from '../../../bower_components/bluemix-components/components/spinner/spinner';
import Modal from '../../../bower_components/bluemix-components/components/modals/modals';
import OverflowMenu from '../../../bower_components/bluemix-components/components/overflow-menu/overflow-menu';
import Tab from '../../../bower_components/bluemix-components/components/tabs-nav/tabs-nav';

////////////////////////////////////////////////////////////////////////
// Site
// -------------
// Import specific scripts for controlling website behavior
import { openItemHeadings } from './site/menu';
import { toggleMenu } from './site/menu';
import { activeMenuLink } from './site/menu';
import { tabsNavigation } from './site/tabs';
import { codeSnippets } from './site/snippets';
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
  activeMenuLink();
  codeSnippets();
});
