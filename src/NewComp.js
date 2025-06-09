import React from 'react'
import {memo} from 'react';

const NewComp = (props) => {
    console.log("newComp render",props)
  return (
    <div>
        <h1> NewComp</h1>
      
    </div>
  )
}

export default memo(NewComp);
