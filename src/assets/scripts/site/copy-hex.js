'use strict';

export const copyHexValue = () => {
  const colors = document.querySelectorAll('.color__example');

  Array.prototype.forEach.call(colors, function(el) {
    el.addEventListener('click', function(e) {
      let hexValue = el.nextElementSibling.nextElementSibling.innerHTML;
      let hiddenInput = el.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
      let copyText = el.childNodes[1];
      hiddenInput.value = hexValue;
      hiddenInput.focus();
      hiddenInput.select();
      let isSupported = document.queryCommandSupported('copy');
      if (isSupported) {
        try {
          document.execCommand('copy');
          copyText.innerHTML = "HEX copied!";
          setTimeout(function() {
            copyText.innerHTML = "Copy HEX";
          }, 2000);
        }
        catch (err) {
          copyText.innerHTML = "Press CMD/CTRL + C to copy";
          setTimeout(function() {
            copyText.innerHTML = "Copy HEX";
          }, 2000);
        }
      }
      else {
        copyText.innerHTML = "Press CMD/CTRL + C to copy";
        setTimeout(function() {
          copyText.innerHTML = "Copy HEX";
        }, 2000);
      }
    });
  });
};
