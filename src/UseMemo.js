import React, { useMemo, useState } from 'react';
import NewComp from './NewComp';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }

  const result = useMemo(function slowFunction() {
    let sum = 0;
    for (let i = 0; i <= 10000000; i++) {
      sum += i;
    }
    console.log("Hello im slow Function");
    return sum;
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <br />
      <hr />
      <input type='text' value={input} onChange={handleInput} />
      <h1>Input: {input}</h1>
      <NewComp newCount={count} />
      {result}
    </div>
  );
};

export default UseMemo;
