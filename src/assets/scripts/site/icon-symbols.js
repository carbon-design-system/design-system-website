export const iconSymbols = () => {
  window.setTimeout(() => {
    const iconItems = [... document.querySelectorAll('.icon')];
    const iconSprite = document.querySelector('svg');

    if (iconItems) {
      iconItems.forEach((icon) => {
        const iconId = icon.querySelector('use').getAttribute('xlink:href');
        const iconSymbol = iconSprite.querySelector(iconId);
        const iconSymbolHTML = iconSymbol.outerHTML;
        icon.querySelector('.icon__button').setAttribute('data-clipboard-text', iconSymbolHTML);
      });
    }
  }, 4000);
};
