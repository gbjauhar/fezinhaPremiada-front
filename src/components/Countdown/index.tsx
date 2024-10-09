import { useState, useEffect } from 'react';
import { CountDown, CountDownContainer, CountDownSpan } from './style';

function CountdownTimer({ targetDate, setFinished }: { targetDate: string, setFinished?: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [timeRemaining, setTimeRemaining] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeRemaining = new Date(targetDate).getTime() - new Date().getTime();
      if (newTimeRemaining <= 0) {
        clearInterval(interval);
      }
      setTimeRemaining(newTimeRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);
  if(!targetDate) return 0
  if (timeRemaining <= 0) {
    if(!setFinished) {
      return (<></>)
    } else {
      setFinished(true)
      return(<div>FECHANDO</div>)
    }
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <CountDownContainer>
    <CountDown><CountDownSpan> Tempo restante:</CountDownSpan><br />
      <div>
      {days}d {hours}h:{minutes}m:{seconds}s
      </div>
    </CountDown>
  </CountDownContainer>
  );
}

export default CountdownTimer;