const { breakInterval, betweenBreak } = require('../config.json');
const { remote } = require('electron');
var countdown, timer;

window.onload = () => {
  var win = remote.getCurrentWindow();
  const time = document.querySelector('span');
  const body = document.querySelector('.parent');
  intervals();

  function intervals(){
    win.restore();
    body.style.display = 'flex';
    body.classList.toggle('opaque');
    countdown = breakInterval;
    time.innerText = `Take a break for ${countdown}s`;
    timer = setInterval(tickTock, 1000);
  }

  function tickTock(){
    countdown--;
    time.innerText = `Take a break for ${countdown}s`;
    if(countdown == 0){
      backToWork();
    }
  }

  document.getElementById('skipBtn').addEventListener('click', backToWork);
  document.getElementById('extendBtn').addEventListener('click', () => {
    countdown += 60;
  });

  function backToWork(){
    clearInterval(timer);
    win.minimize();
    body.classList.toggle('opaque');
    body.style.display = 'none';
    setTimeout(intervals, betweenBreak * 1000);
  }

  document.querySelector('.parent').addEventListener('mousemove', (e) => {
    if(e.target.classList.contains("button")){
      win.setIgnoreMouseEvents(false);
    }
    else{
      win.setIgnoreMouseEvents(true, {forward: true});
    }
  });
};
