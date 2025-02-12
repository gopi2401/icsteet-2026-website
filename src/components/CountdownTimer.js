import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold"> Countdown to Conference </h3>
      <div className="flex justify-center space-x-4 mt-2">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="text-blue-600 text-xl font-semibold">
            {value} <span className="text-gray-600 text-sm"> {key} </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
