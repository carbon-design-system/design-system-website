'use strict';

export const themeSwitcher = () => {

  const switcherBtn = document.querySelectorAll('.btn--theme-switcher');

  Array.prototype.forEach.call(switcherBtn, function(element) {
    element.addEventListener('click', function(e) {
      let parentBox = element.parentElement;
      parentBox.classList.toggle('light-ui');

      if (parentBox.classList.contains('light-ui')) {
        element.innerHTML = "Dark Theme";
      } else {
        element.innerHTML = "Light Theme";
      }
    });
  })
};
