import React, { useRef, useState, useEffect } from 'react';

const UseRefEx = () => {
  const [userInput, setUserInput] = useState("");
  const renders = useRef(0);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  return (
    <div>
      <input 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
        placeholder="Type something..." 
      />
      <p>The Component rendered {renders.current} times</p>
    </div>
  );
};

export default UseRefEx;
