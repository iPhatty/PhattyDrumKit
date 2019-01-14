function keyPress(event) {
  const audio = document.querySelector(`audio[data-key="${event.key}"]`);

  if (!audio) return;
  //rewind to beginning
  audio.currentTime = 0;
  audio.play();

  //style pressed button
  const key = document.querySelector(`div[data-key="${event.key}"]`);
  addClass(key, 'play');
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  removeClass(this, 'play');
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

const keys = document.querySelectorAll('.drumkit__key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', keyPress);
