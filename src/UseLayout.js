import React, { useEffect,useLayoutEffect } from 'react'

const UseLayout = () => {
  
    useEffect(()=>{
        console.log("Use Effect Part")
    },[])
    useLayoutEffect(()=>{
        console.log("use Layout Part");
    },[])
 return (
    <div>
      
    </div>
 )
}

export default UseLayout
