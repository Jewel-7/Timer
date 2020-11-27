// import { photo } from "./data.js";

// const backImage = (imageUrl) => {
//   const div = document.createElement("div");
//   div.classList.add("back-image");
//   const img = document.createElement("img");
//   img.classList.add("image1");
//   img.src = imageUrl;
//   img.alt = "alternate des";
//   div.appendChild(img);

//   return div;
// };

let seconds = 0;
let minutes = 0;
let hours = 0;

let dSeconds = 0;
let dMinutes = 0;
let dHours = 0;

let interval = 0;

let status = false;

let timer = () => {
  seconds++;

  if (seconds / 60 == 1) {
    seconds = 0;
    minutes++;
  }
  if (minutes / 60 == 1) {
    minutes = 0;
    hours++;
  }

  if (seconds < 10) {
    dSeconds = "0" + seconds.toString();
  } else {
    dSeconds = seconds;
  }

  if (minutes < 10) {
    dMinutes = "0" + minutes.toString();
  } else {
    dMinutes = minutes;
  }
  if (hours < 10) {
    dHours = "0" + hours.toString();
  } else {
    dHours = hours;
  }

  document.getElementById("display").innerHTML =
    dHours + ":" + dMinutes + ":" + dSeconds;
};

// window.setInterval(timer, 1000);

const ss = () => {
  if (status == false) {
    interval = window.setInterval(timer, 1000);
    document.getElementById("startStop");
    startStop.innerHTML = "Stop";
    status = true;
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop");
    startStop.innerHTML = "Start";
    status = false;
  }
};

const reset = () => {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display");
  display.innerHTML = "00:00:00";
  document.getElementById("startStop");
  startStop.innerHTML = "Start";
};
