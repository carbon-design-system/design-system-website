export const expandType = () => {
  const showMoreButton = document.querySelector('.expand-table');
  const typographyTable = document.querySelector('.table');
  const showMoreButtonText = document.querySelector('.expand-table__text');
  if (showMoreButton) {
    showMoreButton.addEventListener('click', () => {
      typographyTable.classList.toggle('expanded');
      showMoreButton.classList.toggle('expanded');
      if (typographyTable.classList.contains('expanded')) {
        showMoreButtonText.innerHTML = 'Show less';
      } else {
        showMoreButtonText.innerHTML = 'Show more';
      }
    });
  }
};
