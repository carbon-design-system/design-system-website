export const legacyNotification = () => {
  const html = `
    <div class='bx--legacy-notification' role='alert'>
        <div class='bx--notification-inline__details'>
          <svg class='bx--notification-inline__icon--left' aria-label='close'>
            <use xlink:href='https://dev-console.stage1.ng.bluemix.net/api/v4/img/sprite.svg#notifications--warning'></use>
          </svg>
          <div class='bx--notification-inline__text'>
            <p class='bx--notification-inline__title'>Announcement: &nbsp;</p>
            <p class='bx--notification-inline__subtitle'>Carbon Design System is now on Version 8.0, therefore this site and documentation is outdated. Please visit the new <a href="http://www.carbondesignsystem.com">Carbon Design System</a> to get the most up to date designs and code!</p>
          </div>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('afterbegin', html);

  const menu = document.querySelector('.menu');

  menu.style.top = '40px';
};

legacyNotification();
