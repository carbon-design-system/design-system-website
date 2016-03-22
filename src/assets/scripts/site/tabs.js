'use strict';

export const tabsNavigation = () => {

  // Tabs navigation variables
  const toggleFoundationView = document.querySelector('.toggle-view--foundation');
  const toggleUsageView = document.querySelector('.toggle-view--usage');
  const toggleStyleView = document.querySelector('.toggle-view--style');
  const viewFoundation = document.querySelector('.view--foundation');
  const viewUsage = document.querySelector('.view--usage');
  const viewStyle = document.querySelector('.view--style');

  if (toggleFoundationView) {
    toggleFoundationView.addEventListener('click', function(e) {
      viewFoundation.classList.add('is-active');
      viewUsage.classList.remove('is-active');
      viewStyle.classList.remove('is-active');
      toggleFoundationView.classList.add('is-selected');
      toggleUsageView.classList.remove('is-selected');
      toggleStyleView.classList.remove('is-selected');
    });
  }

  if (toggleUsageView) {
    toggleUsageView.addEventListener('click', function(e) {
      viewUsage.classList.add('is-active');
      viewFoundation.classList.remove('is-active');
      viewStyle.classList.remove('is-active');
      toggleUsageView.classList.add('is-selected');
      toggleFoundationView.classList.remove('is-selected');
      toggleStyleView.classList.remove('is-selected');
    });
  }

  if (toggleStyleView) {
    toggleStyleView.addEventListener('click', function(e) {
      viewStyle.classList.add('is-active');
      viewUsage.classList.remove('is-active');
      viewFoundation.classList.remove('is-active');
      toggleStyleView.classList.add('is-selected');
      toggleUsageView.classList.remove('is-selected');
      toggleFoundationView.classList.remove('is-selected');
    });
  }
};
