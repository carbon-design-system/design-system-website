export const glossaryNav = () => {
  const currentHash = window.location.hash.split('#');
  const glossaryNavLinks = [... document.querySelectorAll('.glossary__side-nav--link')];
  const letters = [... document.querySelectorAll('.glossary-letter__img')];
  if (currentHash[1] === 'glossary') {
    window.addEventListener('hashchange', () => {
      window.scrollTo(0, window.scrollY - 40);
      if (currentHash.length === 2) {
        glossaryNavLinks.forEach(link => {
          link.classList.remove('selected');
        });
      }

      window.addEventListener('scroll', () => {
        letters.forEach(letter => {
          const scrollPos = (letter.offsetTop + letter.getBoundingClientRect().height - 200);
          if (window.scrollY > (scrollPos)) {
            glossaryNavLinks.forEach(link => {
              if (link.href.substring(link.href.indexOf('#')) === `#${letter.id}`) {
                link.classList.add('selected');
              } else {
                link.classList.remove('selected');
              }
            });
          }
        });
      });
    });

    window.addEventListener('scroll', () => {
      letters.forEach(letter => {
        const scrollPos = (letter.offsetTop + letter.getBoundingClientRect().height - 200);
        if (window.scrollY > (scrollPos)) {
          glossaryNavLinks.forEach(link => {
            if (link.href.substring(link.href.indexOf('#')) === `#${letter.id}`) {
              link.classList.add('selected');
            } else {
              link.classList.remove('selected');
            }
          });
        }
      });
    });
  }

  glossaryNavLinks.forEach(link => {
    link.addEventListener('click', (evt) => {
      glossaryNavLinks.forEach(item => {
        if (evt.target === item) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      });
    });
  });
};
