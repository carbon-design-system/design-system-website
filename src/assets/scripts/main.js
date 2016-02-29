var itemHeadings = document.querySelectorAll('.item__heading');

Array.prototype.forEach.call(itemHeadings, function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        var subNav = el.nextSibling.nextElementSibling;
        subNav.classList.toggle('open');
    });
});
