addEventListener("keydown", function(e) {
    let sound = this.document.querySelector(`audio[data-key="${e.keyCode}"]`) ;
    if(sound != undefined && sound != null) {
        this.document.querySelector(`div[data-key="${e.keyCode}"]`).setAttribute("class", "key playing");
        sound.play();
    }
    else return;
})

addEventListener("keyup", function(e) {
    this.document.querySelector(`div[data-key="${e.keyCode}"]`).setAttribute("class", "key");
})






