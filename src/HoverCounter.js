import React,{useState} from 'react'
import withCounter from './withCounter'

const HoverCounterWithoutHOC = (props) => {
  
  return (
    <div>
        <button onMouseOver={props.incrementCount}>Clicked {props.count}</button>
      
    </div>
  )
}

export default withCounter(HoverCounterWithoutHOC);
