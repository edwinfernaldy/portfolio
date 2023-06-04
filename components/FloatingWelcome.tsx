import { useEffect, useState } from "react";

export default function FloatingWelcome() {
  const visitors = "17134";
  const duration = "5";
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(visitors.substring(0, 5));
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + visitors.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [visitors, duration]);

  return (
    <div className='fixed top-4 right-4 z-50'>
      <div className='bg-black/10 backdrop-blur-lg border-gray-200 rounded-xl p-3'>
        <h1>Welcome {count} visitors !! </h1>
      </div>
    </div>
  );
}
