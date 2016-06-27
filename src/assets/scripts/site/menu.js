const itemHeadings = [... document.querySelectorAll('.item__heading')];
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const toggleButton = document.querySelector('.sidebar-toggle');
const itemLinks = [... document.querySelectorAll('.item__link')];
const mobileWidth = 800;

export const toggleMenu = () => {
  toggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    toggleButton.classList.toggle('active');
    menu.classList.toggle('is-hidden');
    container.classList.toggle('is-expanded');
  });
};

export const autoCloseMenu = () => {
  const checkWindowSize = () => {
    if (window.innerWidth < mobileWidth) {
      if (!(menu.classList.contains('is-hidden'))) {
        menu.classList.add('is-hidden');
        toggleButton.classList.remove('active');
        container.classList.add('is-expanded');
      }
    } else {
      if (menu.classList.contains('is-hidden')) {
        toggleButton.classList.add('active');
        menu.classList.remove('is-hidden');
        container.classList.remove('is-expanded');
      }
    }
  };

  window.onresize = checkWindowSize;
  window.onload = checkWindowSize;
};

export const activeMenuLink = () => {
  itemLinks.forEach((element) => {
    const itemPath = element.pathname.split('/')[2];
    const windowPath = window.location.href.split('/')[4].split('#')[0];
    if (itemPath === windowPath) {
      element.parentElement.classList.add('active');
    }
  });
};

export const openItemHeadings = (nodeList = itemHeadings) => {
  nodeList.forEach((element) => {
    const subNav = element.nextSibling.nextSibling;

    element.addEventListener('click', () => {
      subNav.classList.toggle('open');
    });

    const urlPath = window.location.pathname.split('/')[1];

    if (urlPath && urlPath === element.id) {
      element.nextSibling.nextSibling.classList.add('open');
    }
  });
};
