const Second_Hand = document.querySelector(".second");
const Minute_Hand = document.querySelector(".minute");
const Hour_hand = document.querySelector(".hour");

function setDate() {
  const now = new Date();

  const sec = now.getSeconds();
  const SDegree = (sec / 60) * 360 + 90;
  Second_Hand.style.transform = `rotate(${SDegree}deg)`;

  const min = now.getMinutes();
  const MDegree = (mins / 60) * 360 + (sec / 60) * 6 + 90;
  Minute_hand.style.transform = `rotate(${MDegree}deg)`;

  const hour = now.getHours();
  const HDegree = (hour / 12) * 360 + (min / 60) * 30 + 90;
  Hour_hand.style.transform = `rotate(${HDegree}deg)`;
}

setInterval(setDate, 1000);
setDate();
