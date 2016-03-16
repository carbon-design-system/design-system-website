'use strict';

const itemHeadings = document.querySelectorAll('.item__heading');

export const openItemHeadings = (nodeList = itemHeadings) => {
  Array.prototype.forEach.call(nodeList, function(element) {

    let subNav = element.nextSibling.nextElementSibling;

    element.addEventListener('click', function(e) {
      subNav.classList.toggle('open');
    });

    let urlPath = window.location.pathname.split('/')[1];

    if (urlPath && urlPath === element.id) {
      element.nextSibling.nextElementSibling.classList.add('open');
    }
  });
}
