export const expandType = () => {
  const showMoreButton = document.querySelector('.expand-table');
  const typographyTable = document.querySelector('.table');
  if (showMoreButton) {
    showMoreButton.addEventListener('click', () => {
      typographyTable.classList.toggle('expanded');
      if (this.innerHTML === '<p class="pb0">Show more</p><img class="width-auto" src="../assets/images/icon--down-arrow.svg">') {
        this.innerHTML = '<p class="pb0">Show less</p><img class="width-auto" src="../assets/images/icon--up-arrow.svg">';
      } else {
        this.innerHTML = '<p class="pb0">Show more</p><img class="width-auto" src="../assets/images/icon--down-arrow.svg">';
      }
    });
  }
};
