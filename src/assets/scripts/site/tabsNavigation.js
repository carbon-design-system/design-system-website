'use strict';

export const tabsNavigation = () => {
  // Initializing current hash to be empty
  let currentHash = '';

  // Function to update hash
  const updateHash = () => {
    // If URL does not have a hash, set hash to the hash of the first tab
    if (window.location.hash == '') {
      currentHash = tabList[0].firstChild.hash;
    }
    // If not, set the hash to the URL hash
    else {
      currentHash = window.location.hash;
    }
    // Goes through each tab and sets the active view if the current hash matches the hash of the view
    viewList.forEach((element) => {
      if (element.hash === currentHash) {
        setActiveView(element);
      }
    });
  };

  // Function to set the active view
  const setActiveView = (element) => {
    currentHash = element.hash;
    window.location.hash = currentHash;
    element.tabElement.classList.add('bx--tabs--selected');
    element.viewDiv.classList.add('is-active');
    removeActive(element);
    document.querySelector('.bx--tabs__trigger-text').textContent = element.tabElement.textContent;
  };

  // Function to remove inactive views
  const removeActive = (currentElement) => {
    viewList.forEach((element) => {
      if (!(element === currentElement)) {
        element.viewDiv.classList.remove('is-active');
      }
    });
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  // The main tab on the page
  const mainTab = document.querySelector('[data-tabs-navigation]');
  // The list of tabs
  const tabList = [... document.querySelectorAll('.nav__item--light')];
  // An array of views and hash associated with each tab
  const viewList = tabList.map(tab => {
    return {
      hash: tab.firstChild.hash,
      tabElement: tab,
      viewDiv: document.querySelector(tab.firstChild.hash)
    }
  });

  // If main tab exists, update the hash and add a click event to each tab that sets the active view when clicked
  if (mainTab) {
    updateHash();
    viewList.forEach((element) => {
      element.tabElement.addEventListener('click', () => {
        setActiveView(element);
      });
    });
  };

  // On load, scroll to top of the window to prevent page jumping
  window.addEventListener('load', scrollToTop);

  // On hash change, scroll to top of the window to prevent page jumping
  window.addEventListener('hashchange', scrollToTop);
};
