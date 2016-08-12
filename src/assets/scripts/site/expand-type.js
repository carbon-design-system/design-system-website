export const expandType = () => {
  const showMoreButton = document.querySelector('.expand-table');
  const typographyTable = document.querySelector('.table');
  if (showMoreButton) {
    showMoreButton.addEventListener('click', () => {
      typographyTable.classList.toggle('expanded');
      if (showMoreButton.innerHTML === '<p class="pb0">Show more</p><img class="width-auto" src="../assets/images/icons/icon--down-arrow.svg">') {
        showMoreButton.innerHTML = '<p class="pb0">Show less</p><img class="width-auto" src="../assets/images/icons/icon--up-arrow.svg">';
      } else {
        showMoreButton.innerHTML = '<p class="pb0">Show more</p><img class="width-auto" src="../assets/images/icons/icon--down-arrow.svg">';
      }
    });
  }
};
