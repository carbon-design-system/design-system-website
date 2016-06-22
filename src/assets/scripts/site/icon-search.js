const iconSearch = document.querySelector('.icon-search');
const iconList = document.querySelector('.icon-container');
const iconItems = [... document.querySelectorAll('.icon')];

const queryIcons = () => {
  if (iconList) {
    iconList.innerHTML = '';
  }

  iconItems.forEach((icon) => {
    const queryTest = icon.getAttribute('data-tags').indexOf(iconSearch.value);
    if (queryTest > -1) {
      iconList.appendChild(icon);
    }
  });
};

export const filterIcons = () => {
  iconSearch.addEventListener('input', (evt) => {
    evt.preventDefault();
    queryIcons();
  });
};
