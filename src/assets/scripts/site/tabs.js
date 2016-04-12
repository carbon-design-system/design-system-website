'use strict';

export const tabsNavigation = () => {

  // Tabs navigation variables
  const toggleFoundationView = document.querySelector('.toggle-view--foundation');
  const toggleUsageView = document.querySelector('.toggle-view--usage');
  const toggleStyleView = document.querySelector('.toggle-view--style');
  const viewFoundation = document.querySelector('.view--foundation');
  const viewUsage = document.querySelector('.view--usage');
  const viewStyle = document.querySelector('.view--style');
  const toggleTypographyView = document.querySelector('.toggle-view--typography');
  const toggleColorView = document.querySelector('.toggle-view--color');
  const toggleGridView = document.querySelector('.toggle-view--grid');
  const toggleIconographyView = document.querySelector('.toggle-view--iconography');
  const viewTypography = document.querySelector('.view--typography');
  const viewColor= document.querySelector('.view--color');
  const viewGrid = document.querySelector('.view--grid');
  const viewIconography = document.querySelector('.view--iconography');


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

  if (toggleTypographyView) {
    toggleTypographyView.addEventListener('click', function(e) {
      viewTypography.classList.add('is-active');
      viewColor.classList.remove('is-active');
      viewGrid.classList.remove('is-active');
      viewIconography.classList.remove('is-active');
      toggleTypographyView.classList.add('is-selected');
      toggleColorView.classList.remove('is-selected');
      toggleGridView.classList.remove('is-selected');
      toggleIconographyView.classList.remove('is-selected');
    });
  }

  if (toggleColorView) {
    toggleColorView.addEventListener('click', function(e) {
      viewColor.classList.add('is-active');
      viewTypography.classList.remove('is-active');
      viewGrid.classList.remove('is-active');
      viewIconography.classList.remove('is-active');
      toggleColorView.classList.add('is-selected');
      toggleTypographyView.classList.remove('is-selected');
      toggleGridView.classList.remove('is-selected');
      toggleIconographyView.classList.remove('is-selected');
    });
  }

  if (toggleGridView) {
    toggleGridView.addEventListener('click', function(e) {
      viewGrid.classList.add('is-active');
      viewColor.classList.remove('is-active');
      viewTypography.classList.remove('is-active');
      viewIconography.classList.remove('is-active');
      toggleGridView.classList.add('is-selected');
      toggleTypographyView.classList.remove('is-selected');
      toggleColorView.classList.remove('is-selected');
      toggleIconographyView.classList.remove('is-selected');
    });
  }

  if (toggleIconographyView) {
    toggleIconographyView.addEventListener('click', function(e) {
      viewIconography.classList.add('is-active');
      viewColor.classList.remove('is-active');
      viewTypography.classList.remove('is-active');
      viewGrid.classList.remove('is-active');
      toggleIconographyView.classList.add('is-selected');
      toggleTypographyView.classList.remove('is-selected');
      toggleColorView.classList.remove('is-selected');
      toggleGridView.classList.remove('is-selected');
    });
  }
};
