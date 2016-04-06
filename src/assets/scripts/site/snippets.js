'use strict';

export const codeSnippets = () => {

  const showFullCode = document.querySelectorAll('.code__show-full');
  const htmlCode = document.querySelector('.code__html');
  const copyButton = document.querySelector('.code__copy');
  const jsCode = document.querySelector('.code__js');
  const jsButton = document.querySelector('.tabs__js');
  const htmlButton = document.querySelector('.tabs__html');

  if (jsButton) {
    jsButton.addEventListener('click', function() {
      jsCode.classList.add('is-active');
      htmlCode.classList.remove('is-active');
      jsButton.classList.add('is-selected');
      htmlButton.classList.remove('is-selected');
    });
  }

  if (htmlButton) {
    htmlButton.addEventListener('click', function() {
      htmlCode.classList.add('is-active');
      jsCode.classList.remove('is-active');
      htmlButton.classList.add('is-selected');
      jsButton.classList.remove('is-selected');
    });
  }

  Array.prototype.forEach.call(showFullCode, function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      let codeSnippet = el.parentNode;
      codeSnippet.classList.toggle('is-expanded');
      if (this.innerHTML === 'Show full code <img src="../assets/images/icon--down-arrow.svg">') {
        this.innerHTML = 'Show less code <img src="../assets/images/icon--up-arrow.svg">';
      }
      else {
        this.innerHTML = 'Show full code <img src="../assets/images/icon--down-arrow.svg">';
      }
    });
  });
};
