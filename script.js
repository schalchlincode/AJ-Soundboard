document
  .getElementById('playAudioButton')
  .addEventListener('click', function () {
    var audio = document.getElementById('myAudio')
    if (audio.paused) {
      audio.play()
    } else {
      audio.currentTime = 0
    }
  })
