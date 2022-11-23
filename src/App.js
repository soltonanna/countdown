import React, { useState, useEffect } from 'react';
import './index.css';
import Clock from './components/Clock';

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  const [invalidTimer, setInvalidTimer] = useState(false);
  let interval;
  
  const startTimer = () => {
    const countDownDate = new Date("November 30, 2022").getTime();
    interval=setInterval(()=>{
      const now = new Date().getTime();
      const distance = countDownDate - now;
      //console.log({now});
      console.log({countDownDate})
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor( (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor( (distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor( (distance % (60 * 1000)) / 1000 );

      if (countDownDate < now || isNaN(countDownDate)) {
        setInvalidTimer(true);
      }
      if(distance < 0) {
        // Stop Timer
        clearInterval(interval);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    })
  };

  useEffect(()=>{
    startTimer();
  });

  return (
    <div className="App">
      { invalidTimer && <div className='invalid'> <p>Invalid date. Timer can't work ... </p></div>}
      { !invalidTimer && 
        <Clock 
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      }
      
    </div>
  );
}

export default App;
