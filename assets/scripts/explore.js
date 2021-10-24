// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
var synth = window.speechSynthesis;
var text_area = document.querySelector('textarea');
var voices =[];
var faceimage = document.querySelector('img');
var thebutton = document.querySelector('button');
var voicechoice = document.getElementById('voice-select');

function populateVoiceList() {
    voices = synth.getVoices();
  
    for(var i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voicechoice.appendChild(option);
    }
  };

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  };
  
  thebutton.addEventListener('click', (event) => {
    var utterThis = new SpeechSynthesisUtterance(text_area.value);
    var selectedOption = voicechoice.selectedOptions[0].getAttribute('data-name');
    for (var i = 0; i < voices.length; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    
  
    utterThis.addEventListener('start', (event) =>{
      faceimage.src = 'assets/images/smiling-open.png';
    });

    utterThis.addEventListener('end', (event) => {
      faceimage.src = 'assets/images/smiling.png';
    });
    
    synth.speak(utterThis);
    text_area.blur();
  });
}
