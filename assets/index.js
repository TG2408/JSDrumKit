let pressedKey = document.getElementsByTagName("data-key");

document.getElementById("demo").onkeydown = function() {
    pressedKey.setAttribute("class", "playing keys")
}
pressedKey.onkeyup = function() {
    pressedKey.setAttribute("class", "keys")
}