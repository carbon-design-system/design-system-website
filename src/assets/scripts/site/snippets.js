export const lineNumbers = () => {
  const codeSnippets = [... document.querySelectorAll('pre')];
  if (codeSnippets) {
    codeSnippets.forEach((snippet) => {
      snippet.classList.add('line-numbers');
    });
  }
};

export const codeSnippets = () => {
  const showFullCode = [... document.querySelectorAll('.code__show-full')];
  const htmlCode = document.querySelector('.code__html');
  const copyHtmlButtons = [... document.querySelectorAll('.code__copy--html')];
  const copyJSButtons = [... document.querySelectorAll('.code__copy--js')];
  const jsCode = document.querySelector('.code__js');
  const jsButton = document.querySelector('.tabs__js');
  const htmlButton = document.querySelector('.tabs__html');

  if (jsButton) {
    jsButton.addEventListener('click', () => {
      jsCode.classList.add('is-active');
      htmlCode.classList.remove('is-active');
      jsButton.classList.add('is-selected');
      htmlButton.classList.remove('is-selected');
    });
  }

  if (htmlButton) {
    htmlButton.addEventListener('click', () => {
      htmlCode.classList.add('is-active');
      jsCode.classList.remove('is-active');
      htmlButton.classList.add('is-selected');
      jsButton.classList.remove('is-selected');
    });
  }

  showFullCode.forEach((el) => {
    const element = el;
    if (element.parentNode.clientHeight < 190) {
      if (((!(window.ActiveXObject) && 'ActiveXObject' in window)) === false) {
        element.style.display = 'none';
      }
    }
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      const codeSnippet = el.parentNode;
      codeSnippet.classList.toggle('is-expanded');
      if (element.dataset.closed === 'true') {
        element.innerHTML = 'Show less code <img src="../assets/images/icon--up-arrow.svg">';
        element.dataset.closed = 'false';
      } else {
        element.innerHTML = 'Show full code <img src="../assets/images/icon--down-arrow.svg">';
        element.dataset.closed = 'true';
      }
    });
  });

  const copyCode = (el, codeSnippet) => {
    codeSnippet.focus();
    codeSnippet.select();
    const copyFeedback = el;
    const isSupported = document.queryCommandSupported('copy');
    if (isSupported) {
      try {
        document.execCommand('copy');
        copyFeedback.style.visibility = 'visible';
        setTimeout(() => {
          copyFeedback.style.visibility = 'hidden';
        }, 1000);
      } catch (err) {
        copyFeedback.style.visibility = 'visible';
        copyFeedback.style.width = '20em';
        copyFeedback.style.marginLeft = '-10em';
        copyFeedback.innerHTML = 'Please press CMD/Ctrl + C now to copy';
        setTimeout(() => {
          copyFeedback.style.visibility = 'hidden';
        }, 2000);
      }
    } else {
      copyFeedback.style.visibility = 'visible';
      copyFeedback.innerHTML = 'Please press CMD/Ctrl + C now to copy';
      copyFeedback.style.width = '20em';
      copyFeedback.style.marginLeft = '-10em';
      setTimeout(() => {
        copyFeedback.style.visibility = 'hidden';
      }, 2000);
    }
  };

  copyHtmlButtons.forEach((el) => {
    el.addEventListener('click', (evt) => {
      evt.preventDefault();
      const htmlElement = el.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.innerHTML;
      const codeSnippet = el.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.nextElementSibling;
      codeSnippet.value = htmlElement;
      codeSnippet.focus();
      codeSnippet.select();
      copyCode(el.childNodes[5], codeSnippet);
    });
  });

  copyJSButtons.forEach((el) => {
    el.addEventListener('click', (evt) => {
      evt.preventDefault();
      const codeSnippet = el.parentElement.parentElement.previousSibling.nextElementSibling.nextSibling.nextElementSibling;
      const rex = /(<([^>]+)>)|(&lt;([^>]+)&gt;)/ig;
      codeSnippet.value = codeSnippet.value.replace(rex, '');
      copyCode(el.childNodes[5], codeSnippet);
    });
  });
};
