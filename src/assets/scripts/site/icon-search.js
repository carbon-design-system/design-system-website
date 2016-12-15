const iconSearch = document.querySelector('.icon-search');
const iconItems = [... document.querySelectorAll('.icon')];

const queryIcons = () => {
  iconItems.forEach((icon) => {
    const currentIcon = icon;
    currentIcon.style.display = 'none';
    const queryTest = currentIcon.getAttribute('data-tags').indexOf(iconSearch.value);
    if (queryTest > -1) {
      currentIcon.style.display = 'block';
    }
  });
};

export const filterIcons = () => {
  if (iconSearch) {
    iconSearch.addEventListener('input', evt => {
      evt.preventDefault();
      queryIcons();
    });
  }
};
