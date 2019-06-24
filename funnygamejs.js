function randomNumber(min,max) {
    return Math.random() * (max - min) + min;
}

function funnyFunc() {
    var button = document.getElementById("lol");
    button.style.position = "absolute";
    button.style.left = randomNumber(0,screen.width-120)+"px";
    button.style.top = randomNumber(0,screen.height-150 )+"px";
}
