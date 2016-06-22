export const themeSwitcher = () => {
  const switcherBtn = [... document.querySelectorAll('.btn--theme-switcher')];

  switcherBtn.forEach((element) => {
    const button = element;
    button.addEventListener('click', () => {
      const parentBox = element.parentElement;
      parentBox.classList.toggle('light-ui');
      if (parentBox.classList.contains('light-ui')) {
        button.innerHTML = 'Dark Theme';
      } else {
        button.innerHTML = 'Light Theme';
      }
    });
  });
};
