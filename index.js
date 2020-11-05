var i;
for (i = 0; i <= 6; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", cl);
  function cl(nav) {
    nav = this.innerHTML;
    makeSound(nav);
    animation(nav);
  }
}
document.addEventListener("keypress",k);
function k() {
  makeSound(event.key);
  animation(event.key);
}
function animation(currentkey)
{
document.querySelector("."+currentkey).classList.add("pressed");
setTimeout(time,1000);
function time()
{
  document.querySelector("."+currentkey).classList.remove("pressed");
}
}
function makeSound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log("nav");
  }
}
