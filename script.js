var paused = false;
var pauseButton = document.getElementById('pauseButton');
//style.display = "none" will remove element from website
//style.visibility = "hidden" will be invisible and retain original position
pauseButton.style.visibility = "hidden";

function pause(){
  if(paused == false){
    tts.pause();
    paused = true;
    pauseButton.innerHTML = "Resume";
  }
  else{
    tts.resume();
    paused = false;
    pauseButton.innerHTML = "Pause";
  }
}

