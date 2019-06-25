function randomNumber(min,max) {
    return Math.random() * (max - min) + min;
}
var failcounter = 0;

function funnyFunc() {
    var button = document.getElementById("lol");
    button.style.position = "absolute";
    button.style.left = randomNumber(0,screen.width-120)+"px";
    button.style.top = randomNumber(0,screen.height-150 )+"px";
    failcounter++;
    let counter =document.querySelector("h2");
    counter.innerHTML = `<h2>Fails: ${failcounter}</h2>`
}
