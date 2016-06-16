'use strict';

const iconSearch = document.querySelector('.icon-search');
const iconList = document.querySelector('.icon-container');
const iconItems = document.querySelectorAll('.icon');

const queryIcons = () => {
  iconList.innerHTML = '';
  for (let i = 0; i < iconItems.length; i ++) {
    let queryTest = iconItems[i].getAttribute('data-tags').indexOf(iconSearch.value);
    if (queryTest > -1) {
      iconList.appendChild(iconItems[i]);
    }
  }
};

export const filterIcons = () => {
	iconSearch.addEventListener('input', function(event) {
		event.preventDefault();
		queryIcons();
	});
};
