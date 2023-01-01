import { useEffect, useState } from 'react';

export default function ScoreKeeper() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem('myScore'));
    if (storedScore) {
      setScore(storedScore);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myScore', JSON.stringify(score));
  }, [score]);

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore((prevScore) => prevScore + 1)}>+</button>
      <button onClick={() => setScore((prevScore) => prevScore - 1)}>-</button>
    </div>
  );
}
