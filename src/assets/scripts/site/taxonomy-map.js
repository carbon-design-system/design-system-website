export const taxonomyMap = () => {
  const taxonomyMapItems = [... document.querySelectorAll('.taxonomy-map__card .content')];

  const closeViews = (openItem) => {
    taxonomyMapItems.forEach(item => {
      const view = item.parentElement.children[1];
      if (!(openItem === item)) {
        view.classList.remove('is-open');
      }
    });
  };

  const addCloseActions = (item) => {
    const associatedView = item.parentElement.children[1];
    document.addEventListener('keydown', evt => {
      if (evt.which === 27) {
        associatedView.classList.remove('is-open');
      }
    });
    document.addEventListener('click', evt => {
      const isOfSelf = item.contains(evt.target);
      const isOpen = associatedView.classList.contains('is-open');
      if ((!isOfSelf) && isOpen) {
        associatedView.classList.remove('is-open');
      }
    });
  };

  taxonomyMapItems.forEach(item => {
    item.addEventListener('click', () => {
      const associatedView = item.parentElement.children[1];
      associatedView.classList.toggle('is-open');
      closeViews(item);
      addCloseActions(item);
    });
  });
};
