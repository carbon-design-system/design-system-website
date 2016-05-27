'use strict';

export const lineNumbers = () => {
  const codeSnippets = document.querySelectorAll('pre');
  if (codeSnippets) {
    for (let i = 0; i < codeSnippets.length; i+= 1) {
      codeSnippets[i].classList.add('line-numbers');
    }
  }
}

export const codeSnippets = () => {

  const showFullCode = document.querySelectorAll('.code__show-full');
  const htmlCode = document.querySelector('.code__html');
  const copyHtmlButtons = document.querySelectorAll('.code__copy--html');
  const copyJSButtons = document.querySelectorAll('.code__copy--js');
  const jsCode = document.querySelector('.code__js');
  const jsButton = document.querySelector('.tabs__js');
  const htmlButton = document.querySelector('.tabs__html');
  const code = document.querySelectorAll('.hiddenHTMLSnippet');
  const copyJsCode = document.querySelectorAll('.hiddenJSSnippet');

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
    if (el.parentNode.clientHeight < 190) {
      if (((!(window.ActiveXObject) && "ActiveXObject" in window)) == false) {
        el.style.display = "none";
      }
    }
    el.addEventListener('click', function(e) {
      e.preventDefault();
      let codeSnippet = el.parentNode;
      console.log(codeSnippet);
      codeSnippet.classList.toggle('is-expanded');
      if (this.innerHTML === 'Show full code <img src="../assets/images/icon--down-arrow.svg">') {
        this.innerHTML = 'Show less code <img src="../assets/images/icon--up-arrow.svg">';
      }
      else {
        this.innerHTML = 'Show full code <img src="../assets/images/icon--down-arrow.svg">';
      }
    });
  });

  Array.prototype.forEach.call(copyHtmlButtons, function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      let htmlElement = el.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.innerHTML;
      let codeSnippet = el.parentElement.parentElement.previousSibling.previousSibling.firstChild.nextSibling.nextElementSibling;
      codeSnippet.value = htmlElement;
      codeSnippet.focus();
      codeSnippet.select();
      copyCode(el, codeSnippet);
    });
  });

  Array.prototype.forEach.call(copyJSButtons, function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      let codeSnippet = el.parentElement.parentElement.previousSibling.nextElementSibling.nextSibling.nextElementSibling;
      let rex = /(<([^>]+)>)|(&lt;([^>]+)&gt;)/ig;
      codeSnippet.value = codeSnippet.value.replace(rex, "");
      copyCode(el, codeSnippet);
    });
  });

  const copyCode = (el, codeSnippet) => {
    codeSnippet.focus();
    codeSnippet.select();
    console.log(el.childNodes[5]);
    let copyFeedback = el.childNodes[5];
    let isSupported = document.queryCommandSupported('copy');
    if (isSupported) {
      try {
        document.execCommand('copy');
        copyFeedback.style.visibility = "visible";
        setTimeout(function() {
          copyFeedback.style.visibility = "hidden";
        }, 1000);
      }
      catch (err) {
        copyFeedback.style.visibility = "visible";
        copyFeedback.style.width = "20em";
        copyFeedback.style.marginLeft = "-10em";
        copyFeedback.innerHTML = "Please press CMD/Ctrl + C now to copy";
        setTimeout(function() {
          copyFeedback.style.visibility = "hidden";
        }, 2000);
      }
    }
    else {
      console.log('here');
      copyFeedback.style.visibility = "visible";
      copyFeedback.innerHTML = "Please press CMD/Ctrl + C now to copy";
      copyFeedback.style.width = "20em";
      copyFeedback.style.marginLeft = "-10em";
      setTimeout(function() {
        copyFeedback.style.visibility = "hidden";
      }, 2000);
    }
  };
};
