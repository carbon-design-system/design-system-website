export const copyHexValue = () => {
  const colors = [... document.querySelectorAll('.color__example')];

  colors.forEach((el) => {
    el.addEventListener('click', () => {
      const hexValue = el.nextElementSibling.nextElementSibling.innerHTML;
      const hiddenInput = el.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
      const copyText = el.childNodes[1];
      hiddenInput.value = hexValue;
      hiddenInput.focus();
      hiddenInput.select();
      const isSupported = document.queryCommandSupported('copy');
      if (isSupported) {
        try {
          document.execCommand('copy');
          copyText.innerHTML = 'HEX copied!';
          setTimeout(() => {
            copyText.innerHTML = 'Copy HEX';
          }, 2000);
        } catch (err) {
          copyText.innerHTML = 'Press CMD/CTRL + C to copy';
          setTimeout(() => {
            copyText.innerHTML = 'Copy HEX';
          }, 2000);
        }
      } else {
        copyText.innerHTML = 'Press CMD/CTRL + C to copy';
        setTimeout(() => {
          copyText.innerHTML = 'Copy HEX';
        }, 2000);
      }
    });
  });
};
