var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

function start() {
  if (!timer) {
    timer = true;
    document.getElementById("start").disabled = true; // Disable the start button
    stopwatch();
  }
}

function stop() {
  timer = false;
  document.getElementById("start").disabled = false; // Enable the start button
}

function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
  document.getElementById("start").disabled = false; // Enable the start button
}

function stopwatch() {
  if (timer) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    var hrString = hr < 10 ? `0${hr}` : hr;
    var minString = min < 10 ? `0${min}` : min;
    var secString = sec < 10 ? `0${sec}` : sec;
    var countString = count < 10 ? `0${count}` : count;

    document.getElementById("count").innerHTML = countString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("hr").innerHTML = hrString;
    setTimeout(stopwatch, 10);
  }
}
