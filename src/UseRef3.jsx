import React, { useRef } from 'react';

const UseRef3 = () => {
  const inputE1 = useRef(null);

  function handleFocus() {
    inputE1.current.style.backgroundColor = 'black';
  }

  function handleBlur() {
    inputE1.current.style.backgroundColor = '';
  }

  return (
    <div>
      <input
        ref={inputE1}
        type='text'
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default UseRef3;
