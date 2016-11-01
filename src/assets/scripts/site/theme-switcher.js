export const themeSwitcher = () => {
  const themeSwitcherContainer = [... document.querySelectorAll('[data-theme-switcher]')];

  themeSwitcherContainer.forEach(element => {
    const themeSwitcherBtns = [... element.querySelectorAll('[data-toggle-theme]')];
    themeSwitcherBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const exampleBackground = element.parentElement;
        const iframe = element.parentElement.querySelector('.iframe');
        if (btn.dataset.toggleTheme === 'dark') {
          exampleBackground.classList.remove('bx--global-light-ui');
          if (iframe) {
            iframe.contentDocument.children[0].children[1].classList.remove('bx--global-light-ui');
          }
        } else {
          exampleBackground.classList.add('bx--global-light-ui');
          if (iframe) {
            iframe.contentDocument.children[0].children[1].classList.add('bx--global-light-ui');
          }
        }
      });
    });
  });
};

export const responsiveSwitcher = () => {
  const responsiveSwitcherContainer = [... document.querySelectorAll('[data-responsive-switcher]')];
  responsiveSwitcherContainer.forEach(element => {
    const renderedElement = element.parentElement.querySelector('.iframe');
    const responsiveSwitcherBtns = [... element.querySelectorAll('[data-toggle-size]')];
    responsiveSwitcherBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.add('active');
        [... element.querySelectorAll('[data-toggle-size]')].forEach(el => {
          if (el !== btn) {
            el.classList.remove('active');
          }
        });
        if (btn.dataset.toggleSize === 'mobile') {
          renderedElement.classList.add('iframe--mobile');
        } else if (btn.dataset.toggleSize === 'desktop') {
          renderedElement.classList.remove('iframe--mobile');
        }
      });
    });
  });
};
