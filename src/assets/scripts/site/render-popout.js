'use strict';

export const renderPopout = () => {

  const renderBtn = document.querySelectorAll('.rendered__view-full-size');
  const styleLink = '<link rel="stylesheet" type="text/css" href="http://design-system.stage1.mybluemix.net/assets/styles/main.css">';
  const iconsLink = 'https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg';

  const getHTML = (url, callback) => {

      // Feature detection
      if ( !window.XMLHttpRequest ) return;

      // Create new request
      var xhr = new XMLHttpRequest();

      // Setup callback
      xhr.onload = function() {
          if ( callback && typeof( callback ) === 'function' ) {
              callback( this.responseXML );
          }
      }

      // Get the HTML
      xhr.open( 'GET', url );
      xhr.responseType = 'document';
      xhr.send();
  };


  Array.prototype.forEach.call(renderBtn, function(element) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      const popup = open('', '_blank');
      let renderedContent = element.parentElement.previousElementSibling.innerHTML;

      // pulling stylesheet into page head
      popup.document.head.innerHTML += styleLink;

      // pulling icon svg into the page DOM
      // then the rendered element content
      getHTML(iconsLink, function (response) {
          popup.document.body.innerHTML = response.documentElement.outerHTML + '<div class="rendered">' + renderedContent + "</div>";
      });

    });
  })
};
