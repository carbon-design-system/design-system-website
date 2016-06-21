import Clipboard from 'clipboard';

export const clipboardConfig = () => {

  const clipboard = new Clipboard('.clipboard-button');

  clipboard.on('success', function(evt) {
    evt.trigger.innerHTML = 'Copied!';

    const resetButtonText = () => {
      evt.trigger.innerHTML = 'Copy Code';
    };

    window.setTimeout(resetButtonText, 3000);
    evt.clearSelection();
  });

  clipboard.on('error', function(evt) {
    evt.trigger.classList.add('bx--tooltip__top');
    evt.trigger.setAttribute('style', 'z-index: 10;');
    evt.trigger.setAttribute('data-tooltip', 'Press CMD/CTRL + C to copy');

    const resetTooltip = () => {
      evt.trigger.innerHTML = 'Copy Code';
      evt.trigger.classList.remove('bx--tooltip__top');
      evt.trigger.removeAttribute('style');
      evt.trigger.removeAttribute('data-tooltip');
    };

    window.setTimeout(resetTooltip, 10000);
  });
};
