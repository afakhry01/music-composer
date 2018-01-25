window.addEventListener('keydown', function(evt) {
  const audio = document.querySelector("audio[data-key='"+evt.keyCode+"']");
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
});
