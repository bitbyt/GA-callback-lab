// your code here:
var timer = function() {
  var secondsCounter = 0;
  var Interval;

  var startButton = document.getElementById('start');
  var pauseButton = document.getElementById('pause');
  var resetButton = document.getElementById('reset');
  var counter = document.getElementById('timer');

  /*
  startButton.addEventListener('click', startWatch);
  pauseButton.addEventListener('click', pauseWatch);
  resetButton.addEventListener('click', resetWatch);
  */

  startButton.onclick = function() {
    clearInterval(setInterval);
    Interval = setInterval(startTimer, 1000);
    counter.innerHTML = secondsCounter;
  };

  pauseButton.onclick = function() {
    clearInterval(Interval);
  };

  resetButton.onclick = function() {
    clearInterval(Interval);
    counter.innerHTML = "Stop Watch";
    secondsCounter = 0;
  };

  function startTimer() {
    secondsCounter += 1;
    counter.innerHTML = secondsCounter;
  }


}

window.onload = timer;
