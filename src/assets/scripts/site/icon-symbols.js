export const iconSymbols = () => {
  const iconItems = [... document.querySelectorAll('.icon')];

  if (iconItems) {
    iconItems.forEach((icon) => {
      const iconId = icon.querySelector('span').innerHTML;
      const svgCode =
`<svg class="your-class">
<use xlink:href="https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg${iconId}"></use>
</svg>`;
      icon.querySelector('.icon__button').setAttribute('data-clipboard-text', svgCode);
    });
  }
};
