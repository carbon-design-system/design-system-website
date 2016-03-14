var itemHeadings = document.querySelectorAll('.item__heading');
var showHTML = document.querySelector('.snippet__btns--html');
var showJS = document.querySelector('.snippet__btns--js');
var htmlSnippet = document.querySelector('.snippet__html');
var jsSnippet = document.querySelector('.snippet__js');

document.addEventListener('DOMContentLoaded', function(e) {
  Array.prototype.forEach.call(itemHeadings, function(el) {
    var subNav = el.nextSibling.nextElementSibling;

    // urlPath gets the current URL path (i.e. /components)
    var urlPath = window.location.pathname.split('/').pop();

    // When urlPath is equal to the href value in the element, add open class
    if (urlPath === el.getAttribute('href')) {
      subNav.classList.add('open');
    } else {
      subNav.classList.remove('open');
    }

    el.addEventListener('click', function(e) {
      e.preventDefault();
      subNav.classList.toggle('open');
    });
  });
});

showHTML.addEventListener('click', function(e) {
  e.preventDefault();
  htmlSnippet.classList.add('show-snippet');
  jsSnippet.classList.remove('show-snippet');
  showHTML.classList.add('active-btn');
  showJS.classList.remove('active-btn');
});

showJS.addEventListener('click', function(e) {
  e.preventDefault();
  jsSnippet.classList.add('show-snippet');
  htmlSnippet.classList.remove('show-snippet');
  showJS.classList.add('active-btn');
  showHTML.classList.remove('active-btn');
});
