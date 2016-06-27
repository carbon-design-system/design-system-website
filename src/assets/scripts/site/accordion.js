export const accordion = () => {
  const panelLinks = [... document.querySelectorAll('[data-toggle="open"]')];

  if (panelLinks) {
    panelLinks.forEach(link => {
      const panel = document.querySelector(link.getAttribute('href'));
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        const icon = link.nextSibling.nextElementSibling;
        panel.classList.toggle('open');
        icon.classList.toggle('expanded');
      });
    });
  }
};
