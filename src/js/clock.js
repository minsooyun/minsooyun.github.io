const clock = document.querySelector("#clock");
const hoursBox = clock.querySelector(".hours");
const minutesBox = clock.querySelector(".minutes");
const secondsBox = clock.querySelector(".seconds");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  hoursBox.innerText = `${hours}`;
  minutesBox.innerText = `${minutes}`;
  secondsBox.innerText = `${seconds}`;
}

getClock();
setInterval(getClock, 1000);
