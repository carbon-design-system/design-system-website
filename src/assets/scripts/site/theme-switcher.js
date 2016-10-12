export const themeSwitcher = () => {
  const themeSwitcherContainer = [... document.querySelectorAll('[data-theme-switcher]')];

  themeSwitcherContainer.forEach(element => {
    const themeSwitcherBtns = [... element.querySelectorAll('[data-toggle-theme]')];
    themeSwitcherBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const exampleBackground = element.parentElement;
        if (btn.dataset.toggleTheme === 'dark') {
          exampleBackground.classList.remove('bx--global-light-ui');
        } else {
          exampleBackground.classList.add('bx--global-light-ui');
        }
      });
    });
  });
};
