export const renderPopout = () => {
  const renderBtn = [... document.querySelectorAll('.rendered__link')];
  const styleLink = '<link rel="stylesheet" type="text/css" href="http://carbondesignsystem.com/assets/styles/main.css">';
  const iconsLink = 'https://dev-console.stage1.ng.bluemix.net/api/v5/img/bluemix-icons.svg';

  const getHTML = (url, callback) => {
    // Feature detection
    if (!window.XMLHttpRequest) return;

    // Create new request
    const xhr = new XMLHttpRequest();

    // Setup callback
    xhr.onload = () => {
      if (callback && typeof(callback) === 'function') {
        callback(xhr.responseXML);
      }
    };

    // Get the HTML
    xhr.open('GET', url);
    xhr.responseType = 'document';
    xhr.send();
  };


  renderBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      const popup = open('', '_blank');
      let renderedContent;
      if (element.parentElement.parentElement.querySelector('iframe')) {
        renderedContent = element.parentElement.previousElementSibling.previousElementSibling.contentDocument.querySelector('body').innerHTML;
      } else {
        renderedContent = element.parentElement.previousElementSibling.previousElementSibling.innerHTML;
      }
      const script = popup.document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'http://carbondesignsystem.com/assets/scripts/bundle.js';

      // pulling stylesheet into page head
      popup.document.head.innerHTML += styleLink;

      // pulling icon svg into the page DOM
      // then the rendered element content
      getHTML(iconsLink, (response) => {
        if (response.documentElement.outerHTML !== undefined) {
          popup.document.body.innerHTML = `
          <div class="generatedIcons">${response.documentElement.outerHTML}</div>
          <div class="rendered">
            ${renderedContent}
          </div>`;
        }
        popup.document.body.appendChild(script);
      });
    });
  });
};
