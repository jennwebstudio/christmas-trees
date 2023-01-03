
const declOfNum = (n, titles) => n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
		0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];

const timer = () => {
  const timer = document.createElement('div');
  const timerText = document.createElement('p');
  const timerCount = document.createElement('span');

  timer.classList.add('timer');
  timerText.classList.add('timer__text');
  timerCount.classList.add('timer__count');

  timerText.textContent = 'До конца распродажи осталось: ';
  
  timerText.append(timerCount);
  timer.append(timerText);
  document.body.prepend(timer);

  const startTimer = () => {

    const deadline = new Date(2023, 0, 5, 0, 0, 0),
          now = new Date(),
          timeRemaining = (deadline - now) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor((timeRemaining/3600) % 24),
          days = Math.floor(timeRemaining/3600/24);
          console.log('days: ', days);
          console.log('hours: ', hours);
          console.log('minutes: ', minutes);

    const s = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);     
    const m = declOfNum(minutes, ['минута', 'минуты', 'минут']);     
    const h = declOfNum(hours, ['час', 'часа', 'часов']);     
    const d = declOfNum(days, ['день', 'дня', 'дней']);     
    timerCount.textContent = `${d} ${h} ${m} ${s}`;      
        
    if ( timeRemaining > 0) {
      setTimeout(startTimer, 1000);
    } else {
      timer.remove();
    }
    
  }

  startTimer();
};

timer();