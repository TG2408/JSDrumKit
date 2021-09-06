addEventListener("keydown", function(e) {
    let sound = this.document.querySelector(`audio[data-key="${e.keyCode}"]`) ;
    if(sound != undefined && sound != null) {
        document.querySelector(`div[data-key="${e.keyCode}"]`).setAttribute("class", "key playing");
        sound.currentTime = 0; //revind to start
        sound.play();
        /* 
        during playtime of audio sound.play() will not entertain a new key, 
        therefore we set sound.currentTime = 0 on every keydown
         */
    }
    else return;
})

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.setAttribute("class", "key");
}

let k = document.querySelectorAll(".key");
k.forEach(key => key.addEventListener("transitionend", removeTransition));


console.log(k)