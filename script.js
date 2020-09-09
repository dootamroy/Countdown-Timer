const min = 10; // 10 min counter.
let time = min * 60;

const countdown = document.getElementById("timer");

setInterval(cuntdowntimer, 1000);

function cuntdowntimer() {
  const min = Math.floor(time / 60);
  let sec = time % 60;

  sec = sec < 10 ? "0" + sec : sec;

  countdown.innerHTML = min + ":" + sec;

  time--;
  time = time < 0 ? 0 : time; //to avoid -ve;
}
