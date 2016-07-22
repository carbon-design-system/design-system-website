export const playPause = () => {
  const motionDemos = [... document.querySelectorAll('.motion-demo__overlay')];
  motionDemos.forEach((demo) => {
    demo.addEventListener('click', evt => {
      const demoButton = evt.target.querySelector('.overlay__button');
      const playIcon = demoButton.querySelector('.play-icon');
      const pauseIcon = demoButton.querySelector('.pause-icon');
      const demoContainer = demoButton.parentNode.parentNode;
      demoContainer.classList.toggle('paused');
      playIcon.classList.toggle('hidden');
      pauseIcon.classList.toggle('hidden');
    });
  });
};
