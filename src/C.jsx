import React, { useContext } from 'react'
import { GreetContext,Greet2Context } from './A'


const C = () => {
    const useCon = useContext(GreetContext);
  return (
    <h1> Greet: {useCon.greet} {useCon.greet2}</h1>
    );
};

export default C;
