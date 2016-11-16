import Promise from 'es6-promise';
import 'whatwg-fetch';

Promise.Promise; // eslint-disable-line

const githubAPI = 'https://github.ibm.com/api/v3';
const form = document.querySelector('[data-issues]');

const toggleState = (currentState, newState) => {
  currentState.classList.remove('is-active');
  newState.classList.add('is-active');
};

const confirmation = (data) => {
  const issueView = document.querySelector('[data-view="issue"]');
  const confirmationView = document.querySelector('[data-view="confirmation"]');
  const link = confirmationView.querySelector('[data-link]');

  // toggle view state
  toggleState(issueView, confirmationView);

  // View issue link
  link.href = data.html_url;
  link.innerHTML = `#${data.number}`;
};


const postIssue = (fetchConfig) => {
  fetch(`${githubAPI}/repos/Bluemix/bluemix-components/issues`, fetchConfig)
    .then(res => res.json())
    .then(confirmation)
    .catch(err => console.log(err)); // eslint-disable-line
};

const setupData = (evt) => {
  evt.preventDefault();
  const submitBtn = evt.currentTarget.querySelector('.bx--btn');
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Submitting issue..';

  const type = form.querySelector('#issue-type').value;
  const title = `[Website Feedback: ${type}] ${form.querySelector('#title').value}`;
  let userName = form.querySelector('#username').value;
  if (!(userName.charAt(0) === '@')) {
    userName = `@${userName}`;
  }
  const description = form.querySelector('#description').value;
  const team = form.querySelector('#team').value;
  const tagCheckboxes = [... document.querySelectorAll('[tag]')];
  const labels = ['website-feedback'];
  tagCheckboxes
    .filter(tag => {
      return tag.checked;
    })
    .forEach(checkedTag => {
      labels.push(checkedTag.value);
    });
  const formatBody = `
**Submitted by: ${userName}**
**Team: ${team}**

**Message:**

${description}
`;

  const body = JSON.stringify({
    title,
    body: formatBody,
    labels,
  });

  const config = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer d502410cddc31354f35796285e3843691bf66801',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  };

  postIssue(config);
};

// The bundle can be loaded in component demo <iframe>, which doesn't have <form> for filing issues
if (form) {
  form.addEventListener('submit', setupData);
}
