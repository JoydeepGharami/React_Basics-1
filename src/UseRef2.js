import React, { useRef, useEffect } from 'react';

const UseRef2 = () => {
  const count = useRef(0);

  useEffect(() => {
    console.log("The Component has been rendered");
  }, []); // ✅ useEffect with dependency array

  const handle = () => {
    count.current = count.current + 1;
    console.log(`Clicked ${count.current} times`); // ✅ backticks used
  };

  return (
    <div>
      <button onClick={handle}>ClickMe</button> {/* ✅ onClick (lowercase) */}
    </div>
  );
};

export default UseRef2;
