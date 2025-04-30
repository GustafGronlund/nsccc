import { useEffect, useState } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-06-14T08:30:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex cursor-default flex-row justify-center gap-4 text-center font-sans text-xl leading-tight font-light tracking-tighter text-[#29ABE2] lg:text-2xl">
      <div className="flex flex-col items-center">
        <span className="font-mono">{timeLeft.days}</span>
        <span>dage</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-mono">{timeLeft.hours}</span>
        <span>timer</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-mono">{timeLeft.minutes}</span>
        <span>min</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-mono">{timeLeft.seconds}</span>
        <span>sek</span>
      </div>
    </div>
  );
};
