const keys = document.querySelectorAll(".key");

//click the button

keys.forEach((key) => {
  key.addEventListener("click", () => clickButton(key));
});

function clickButton(key) {
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("push");

  setTimeout(() => {
    key.classList.remove("push");
  }, 300);
}

//push the button

function pushButton(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("push");

  setTimeout(() => {
    key.classList.remove("push");
  }, 300);
}

window.addEventListener("keydown", pushButton);
