import React, { useState } from 'react';
export default function DogPics() {
  // API: https://dog.ceo/dog-api/

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data.message);

  return (
    <div className="dog-pics">
      {err && <h2>{err}</h2>}
      <img
        src={
          data.message
            ? data.message
            : 'https://images.dog.ceo/breeds/retriever-golden/n02099601_3494.jpg'
        }
        alt="Dog"
      />
      <button onClick={handleClick}>🐶</button>
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
}
