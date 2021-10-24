// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn_select = document.getElementById('horn-select');
  const image = document.querySelector('img');
  const audio_select = document.querySelector('audio');
  
  horn_select.addEventListener('change', (event) => {
    const choice = event.target.value;
    if(choice == 'party-horn') {
      image.src = 'assets/images/party-horn.svg';
      audio_select.src = 'assets/audio/party-horn.mp3';
    }
    else if(choice == 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      audio_select.src = 'assets/audio/car-horn.mp3';
    }
    else if(choice == 'air-horn') {
      image.src ='assets/images/air-horn.svg';
      audio_select.src = 'assets/audio/air-horn.mp3';
    }
  }
  );
 
  const soundcontrol = document.getElementById('volume');
  const soundicon = document.querySelector('div>img');
  soundcontrol.addEventListener('change', (event) => {
    const choicetwo = event.target.value;
    audio_select.volume = choicetwo / 100;
    if (choicetwo == 0) {
      soundicon.src = 'assets/icons/volume-level-0.svg';
    }
    else if(choicetwo < 33) {
      soundicon.src = 'assets/icons/volume-level-1.svg';
    }
    else if(choicetwo < 67 ) {
      soundicon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      soundicon.src = 'assets/icons/volume-level-3.svg';
    }
  });


  const mybutton = document.querySelector('button');
  mybutton.addEventListener('click', (event) => {
    if (horn_select.value == 'party-horn' && audio_select.volume != 0) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    audio_select.play();
  });
}
