let [minutes, seconds, one hundered of seconds] = [0, 0, 0];
let display = document.getElementById("display");
let startStopBtn = document.getElementById("startStop");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let laps = document.getElementById("laps");

let timer = null;
let isRunning = false;

function updateDisplay() {
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let o = one hundered of seconds < 10 ? "100" + seconds : seconds;
  display.innerText = `${m}:${s}:${o}`;
}

function stopwatch() {
  one hundered of seconds;
  if (one hundered of seconds === 60) {
    one hundered of seconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

startStopBtn.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    startStopBtn.innerText = "Pause";
    isRunning = true;
  } else {
    clearInterval(timer);
    startStopBtn.innerText = "Start";
    isRunning = false;
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  [minutes, seconds, one hundered of seconds] = [0, 0, 0];
  updateDisplay();
  startStopBtn.innerText = "Start";
  isRunning = false;
  laps.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
  if (isRunning) {
    const lapTime = display.innerText;
    const p = document.createElement("p");
    p.innerText = `Lap: ${lapTime}`;
    laps.prepend(p);
  }
});
