let currentAccount, timer;

const startLogOutTimer = function () {
  let time = 1200;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //print remaining time
    document.querySelector('.timer').textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    //decrease 1s
    time--;

    //when 0 seconds, stop timer and log out user
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
