import { useState, useEffect } from "react";
import "./index.css";

function Splash({ setIsLoading }) {
  const [count, setCount] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const quotes = [
    "Reordering Vincent's thoughts and ideas",
    "Restoring Vincent's memory",
    "Creating an eportfolio for Vincent",
    "Generating new cells to improve Vincent",
    "Loading Vincent's past",
    "Tracking Vincent's position & movements",
  ];

  useEffect(() => {
    const decrementInterval = setInterval(() => {
      const decrement = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
      setCount((prevCount) => Math.min(prevCount + decrement, 100)); // Ensure count doesn't go below 0
    }, Math.random() * 1000); // Generate a random interval between 0 and 1000ms

    const changeQuoteIndexInterval = setInterval(() => {
      if (count === 100) return; // Stop generating new quote index when count reaches 0

      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * quotes.length);
      } while (newIndex === prevIndex);

      setPrevIndex(quoteIndex);
      setQuoteIndex(newIndex);
    }, Math.random() * 1000 + 1000); // Generate a random interval between 1000 and 2000ms

    return () => {
      clearInterval(decrementInterval);
      clearInterval(changeQuoteIndexInterval);
    };
  }, []);

  useEffect(() => {
    if (count === 100) setIsLoading(false);
  }, [count]);
  
  return (
    <div className="Splash">
      <p>{count}%</p>
      <p>{quotes[quoteIndex]}...</p>
      <div className="progress-bar" style={{ width: count + "%" }}></div>
    </div>
  );
}

export default Splash;
