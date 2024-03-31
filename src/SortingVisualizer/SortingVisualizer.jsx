import React, { useEffect, useState } from 'react'
import './SortingVisualizer.css';


function SortingVisualizer() { 

    const [array, setArray] = useState([]);
    const resetArr = () => {
        const arr = [];
        for(var i = 0; i<425; ++i){
            arr.push(Math.floor(Math.random() * 731)); 
            console.log("Hello");
        }
        setArray(arr);
    } 

    useEffect(()=>{ 
        resetArr();
    },[])
  return (
    <div className='container'>
      {array.map((val, ind)=>{
        return <div className='arr-bar' key={ind} style={{height: `${val}px`}}></div>
      })} 

      <button onClick={()=>resetArr()}>Generate New Array</button>
    </div>
  )
}

export default SortingVisualizer
