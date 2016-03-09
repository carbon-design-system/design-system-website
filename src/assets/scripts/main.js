var itemHeadings = document.querySelectorAll('.item__heading');

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
