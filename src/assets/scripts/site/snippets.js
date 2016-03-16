'use strict';

// Temporary:
// Not seeing this used anywhere right now
// Will modularize and import into main.js in next PR if needed

const showHTMLbuttons = document.querySelectorAll('.snippet__btns--html');
const showJSbuttons = document.querySelectorAll('.snippet__btns--js');
const htmlSnippets = document.querySelectorAll('.snippet__html');
const jsSnippets = document.querySelectorAll('.snippet__js');

if (showHTMLbuttons && showJSbuttons) {
  Array.prototype.forEach.call(showHTMLbuttons, function(el) {
    el.addEventListener('click', function(e) {
      let currentHTMLsnippet = el.parentElement.nextSibling.nextElementSibling;
      let currentJSsnippet = currentHTMLsnippet.nextSibling.nextElementSibling;
      this.classList.add('active-btn');
      this.nextSibling.nextElementSibling.classList.remove('active-btn');
      currentHTMLsnippet.classList.add('show-snippet');
      currentJSsnippet.classList.remove('show-snippet');
    });
  });

  Array.prototype.forEach.call(showJSbuttons, function(el) {
    el.addEventListener('click', function(e) {
      let currentHTMLsnippet = el.parentElement.nextSibling.nextElementSibling;
      let currentJSsnippet = currentHTMLsnippet.nextSibling.nextElementSibling;
      this.classList.add('active-btn');
      this.previousSibling.previousElementSibling.classList.remove('active-btn');
      currentJSsnippet.classList.add('show-snippet');
      currentHTMLsnippet.classList.remove('show-snippet');
    });
  });
}
