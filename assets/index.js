addEventListener("keydown", function(e) {
    let sound = this.document.querySelector(`audio[data-key="${e.keyCode}"]`) ;
    if(sound != undefined && sound != null) {
        this.document.querySelector(`div[data-key="${e.keyCode}"]`).setAttribute("class", "key playing");
        sound.currentTime = 0; //revind to start
        sound.play();

        /* 
        during playtime of audio sound.play() will not entertain a new key, 
        therefore we set sound.currentTime = 0 on every keydown
         */
    }
    else return;
})

addEventListener("keyup", function(e) {
    this.document.querySelector(`div[data-key="${e.keyCode}"]`).setAttribute("class", "key");
})






