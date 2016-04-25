'use strict';

export const expandType = () => {
  const showMoreButton = document.querySelector('.view--typography__show-more');
  const typographyTable = document.querySelector('.view--typography__table');
  if (showMoreButton) {
    showMoreButton.addEventListener('click', function() {
      typographyTable.classList.toggle('expanded');
      if (this.innerHTML === '<p>Show more</p> <img src="../assets/images/icon--down-arrow.svg">') {
        this.innerHTML = '<p>Show less</p> <img src="../assets/images/icon--up-arrow.svg">';
      }
      else {
        this.innerHTML = '<p>Show more</p> <img src="../assets/images/icon--down-arrow.svg">';
      }
    });
  }
};
