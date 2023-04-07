// set initial work and break periods
let workMinutes = 25;
let workSeconds = 0;
let breakMinutes = 5;
let breakSeconds = 0;

// initialize timer variables
let timerRunning = false;
let timerInterval;
let currentMinutes = workMinutes;
let currentSeconds = workSeconds;

// initialize completed sessions counter
let completedSessions = 0;

// update timer display every second
function updateTimer() {
  if (currentSeconds === 0) {
    if (currentMinutes === 0) {
      // end of work or break period
      clearInterval(timerInterval);
      timerRunning = false;
      completedSessions++;
      document.getElementById('completed').innerHTML = `${completedSessions} sessions completed`;
      return;
    } else {
      // end of minute, decrement minute counter
      currentMinutes--;
      currentSeconds = 59;
    }
  } else {
    // decrement second counter
    currentSeconds--;
  }

  // update timer display
  document.getElementById('minutes').innerHTML = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
  document.getElementById('seconds').innerHTML = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
}

// start timer
function startTimer() {
  if (!timerRunning) {
    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

// stop timer
function stopTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

// reset timer
function resetTimer() {
  stopTimer();
  currentMinutes = workMinutes;
  currentSeconds = workSeconds;
  document.getElementById('minutes').innerHTML = workMinutes < 10 ? `0${workMinutes}` : workMinutes;
  document.getElementById('seconds').innerHTML = workSeconds < 10 ? `0${workSeconds}` : workSeconds;
}

// update work and break periods
document.getElementById('work-minutes').addEventListener('change', function() {
  workMinutes = parseInt(this.value);
  resetTimer();
});
document.getElementById('work-seconds').addEventListener('change', function() {
  workSeconds = parseInt(this.value);
  resetTimer();
});
document.getElementById('break-minutes').addEventListener('change', function() {
  breakMinutes = parseInt(this.value);
});
document.getElementById('break-seconds').addEventListener('change', function() {
  breakSeconds = parseInt(this.value);
});

// update timer periods based on work/break selection
function updateTimerPeriods() {
  if (timerRunning) {
    stopTimer();
  }
  if (currentMinutes === workMinutes && currentSeconds === workSeconds) {
    currentMinutes = breakMinutes;
    currentSeconds = breakSeconds;
    document.getElementById('minutes').innerHTML = breakMinutes < 10 ? `0${breakMinutes}` : breakMinutes;
    document.getElementById('seconds').innerHTML = breakSeconds < 10 ? `0${breakSeconds}` : breakSeconds;
  } else {
    currentMinutes = workMinutes;
    currentSeconds = workSeconds;
    document.getElementById('minutes').innerHTML = workMinutes < 10 ? `0${workMinutes}` : workMinutes;
    document.getElementById('seconds').innerHTML = workSeconds < 10 ? `0${workSeconds}` : workSeconds;
  }
}

// add event listeners to buttons
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('toggle-mode').addEventListener('click', toggleMode);
document.getElementById('toggle-periods').addEventListener('click', updateTimerPeriods);
``

// toggle dark mode
function toggleMode() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
}

document.getElementById('toggle-mode').addEventListener('click', toggleMode);
