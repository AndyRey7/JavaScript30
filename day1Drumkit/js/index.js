
const keys = document.querySelectorAll('.key');


//helper functions

function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return // stops the function from running
    audio.currentTime = 0; // rewinds to the start of the sound
    key.classList.add("playing");
    audio.play();
    //console.log(key)
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if its not a transform effect
    this.classList.remove("playing");
}

//eventListeners

keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
