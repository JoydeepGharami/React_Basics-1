import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [clicked, setClicked] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert('We are in Use State');
    return () => {
      console.log("return of use state");
    };
  }, [clicked]);

  return (
    <div>
      <button onClick={() => setClicked('Follow')}>Follow</button>
      <br />
      <button onClick={() => setClicked('Me')}>Me</button>
      <br />
      <hr />
      <button onClick={() => setClicked('OnInstagram')}>OnInstagram</button>
      <h1>{clicked}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffect;
