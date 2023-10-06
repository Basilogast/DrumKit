var tom1 = new Audio('sounds/tom-1.mp3');
var buttons = document.querySelectorAll(".drum");
function playsound (letter)
{
    var buttonInnerHTML = letter;
    switch (buttonInnerHTML){
        case 'w':
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        case 'k':
            var kick_bass = new Audio ("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case 'l':
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;
        default: console.log(buttonInnerHTML); break;
    }
}
//clicktoplaysound
for (var i = 0; i < buttons.length ; i++)
{
    buttons[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        playsound(buttonInnerHTML);
        playAnimation(buttonInnerHTML);
    });
}
//pressbuttontoplaysound
document.addEventListener("keydown",function(event){
    var pressedKey = event.key;
    console.log(pressedKey);
    playsound(pressedKey);
    playAnimation(pressedKey);
});
//animation
function playAnimation(letter)
{
    var activeButton = document.querySelector("." + letter);
    activeButton.classList.add("pressed");
    setTimeout(function() {activeButton.classList.remove("pressed")}
    ,100);
}