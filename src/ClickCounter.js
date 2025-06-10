import React,{useState} from 'react'
import withCounter from './withCounter';

const ClickCounterWithoutHOC = (props) => {
    
  return (
    <div>
        <button onClick={props.incrementCount}>Clicked {props.count}</button>
      
    </div>
  )
}

export default withCounter(ClickCounterWithoutHOC);
