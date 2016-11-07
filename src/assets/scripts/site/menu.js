import formatText from './formatText';

const itemHeadings = [... document.querySelectorAll('.item__heading')];
const menu = document.querySelector('.menu');
const container = document.querySelector('.container');
const toggleButton = document.querySelector('.sidebar-toggle');
const itemLinks = [... document.querySelectorAll('.item__link')];
const mobileWidth = 800;
const showIssueFormButton = document.querySelector('.show-issue-form');
const issueForm = document.querySelector('.issue-form');
const closeIssueButton = document.querySelector('.issue-form__close');
const submitNewButton = document.querySelector('.form-container__submit-new-issue');
const marked = require('marked');

export const toggleMenu = () => {
  toggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    toggleButton.classList.toggle('active');
    menu.classList.toggle('is-hidden');
    container.classList.toggle('is-expanded');
    issueForm.classList.toggle('full-width');
  });
};

export const showIssueForm = () => {
  showIssueFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.innerWidth < mobileWidth) {
      menu.classList.add('is-hidden');
      toggleButton.classList.remove('active');
      container.classList.remove('fixed');
    }
    container.classList.toggle('fixed');
    issueForm.classList.toggle('is-active');
  });

  if (issueForm.classList.contains('is-active')) {
    document.addEventListener('keyup', (evt) => {
      const key = evt.keyCode || evt.which;
      if (key === 27) {
        issueForm.classList.remove('is-active');
      }
    });
  }

  const resetForm = () => {
    const confirmationView = document.querySelector('[data-view="confirmation"]');
    const issueView = document.querySelector('[data-view="issue"]');
    const form = issueForm.querySelector('form');
    const submitBtn = issueView.querySelector('.bx--btn');
    confirmationView.classList.remove('is-active');
    issueView.classList.add('is-active');
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Submit issue';
  };

  closeIssueButton.addEventListener('click', () => {
    issueForm.classList.remove('is-active');
    container.classList.remove('fixed');
    const views = [... issueForm.querySelectorAll('.form-container')];
    views.forEach(view => {
      if (view.classList.contains('is-active') && view.dataset.view === 'confirmation') {
        resetForm();
      }
    });
  });

  submitNewButton.addEventListener('click', () => {
    resetForm();
  });

  const writeTabSelector = issueForm.querySelector('.write-tab');
  const previewTabSelector = issueForm.querySelector('.preview-tab');
  const writeTab = issueForm.querySelector('.description__write');
  const previewTab = issueForm.querySelector('.description__preview');
  const formatButtons = [... issueForm.querySelectorAll('.toolbar-btn')];
  let start;
  let end;

  const saveSelection = () => {
    const element = document.getElementById('description');
    start = element.selectionStart;
    end = element.selectionEnd;
  };

  const setSelection = (type) => {
    const element = document.getElementById('description');
    element.selectionStart = start;
    element.selectionEnd = end;
    element.focus();
    const beforeWord = element.value.slice(0, element.selectionStart);
    const afterWord = element.value.slice(element.selectionEnd, element.value.length);
    const word = element.value.slice(element.selectionStart, element.selectionEnd);
    const newWord = formatText(type, word);
    element.value = beforeWord + newWord + afterWord;
  };

  document.querySelector('#description').addEventListener('select', () => {
    saveSelection();
  });

  document.querySelector('#description').addEventListener('input', () => {
    saveSelection();
  });

  document.querySelector('.description__toolbar--header').addEventListener('click', () => {
    const headerStyles = document.querySelector('.toolbar-header-styles');
    headerStyles.classList.toggle('active');
  });

  formatButtons.forEach(button => {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      setSelection(button.dataset.format);
    });
  });

  writeTabSelector.addEventListener('click', () => {
    writeTabSelector.classList.add('selected');
    previewTabSelector.classList.remove('selected');
    writeTab.classList.add('show');
    previewTab.classList.remove('show');
  });

  previewTabSelector.addEventListener('click', () => {
    previewTabSelector.classList.add('selected');
    writeTabSelector.classList.remove('selected');
    writeTab.classList.remove('show');
    previewTab.classList.add('show');
    const textArea = writeTab.querySelector('#description');
    const markdownContent = marked(textArea.value);
    previewTab.querySelector('.preview').innerHTML = markdownContent;
  });
};

export const autoCloseMenu = () => {
  const checkWindowSize = () => {
    if (window.innerWidth < mobileWidth) {
      if (!(menu.classList.contains('is-hidden'))) {
        menu.classList.add('is-hidden');
        toggleButton.classList.remove('active');
        container.classList.add('is-expanded');
      }
    } else {
      if (menu.classList.contains('is-hidden')) {
        toggleButton.classList.add('active');
        menu.classList.remove('is-hidden');
        container.classList.remove('is-expanded');
        issueForm.classList.remove('full-width');
      }
    }
  };

  window.onresize = checkWindowSize;
  window.onload = checkWindowSize;
};

export const activeMenuLink = () => {
  itemLinks.forEach(element => {
    const itemPath = element.pathname.split('/')[2];
    const windowPath = window.location.href.split('/')[4];

    if (windowPath) {
      const windowHashPath = windowPath.split('#')[0];

      if (itemPath === windowHashPath) {
        element.parentElement.classList.add('active');
      }
    }
  });
};

export const openItemHeadings = (nodeList = itemHeadings) => {
  nodeList.forEach((element) => {
    const subNav = element.nextSibling.nextSibling;
    const itemArrow = element.querySelector('.item__arrow');
    let isClosed;
    let itemHeadingName;

    if (subNav) {
      itemHeadingName = element.getAttribute('data-category');
    }

    element.addEventListener('click', () => {
      itemArrow.classList.add('transition');
      subNav.classList.add('transition');
      subNav.classList.toggle('open');
      itemArrow.classList.toggle('rotated');
      isClosed = !(subNav.classList.contains('open'));
      localStorage.setItem(itemHeadingName, isClosed);
    });
  });
};
