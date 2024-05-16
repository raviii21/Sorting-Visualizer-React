import React, { useEffect, useState } from 'react'
import './SortingVisualizer.css';
import * as sortingAlgorithm from "../sortingAlgorithms/sortingAlgorithms";


function SortingVisualizer() { 

    const [array, setArray] = useState([]);
    const resetArr = () => {
        const arr = [];
        for(var i = 0; i<425; ++i){
            arr.push(Math.floor(Math.random() * 731)); 
        }
        setArray(arr);
    } 

    const mergeSort = () => {
      const animation = sortingAlgorithm.getSortAnimation(array);
      for(let i = 0; i<animation.length; ++i){
        const arrayBar = document.querySelectorAll(".arr-bar");

        const isColorChange = (i%3 !== 2);
        if(isColorChange) {
          // Change comparing array bar's color.
          const [firstBarInd, secondBarInd] = animation[i];
          const firstBarStyle = arrayBar[firstBarInd].style;
          const secondBarStyle = arrayBar[secondBarInd].style;

          const color = i%3 === 0 ? "red" : "turquoise";

          setTimeout(()=>{
            firstBarStyle.backgroundColor = color;
            secondBarStyle.backgroundColor = color;
          }, i * 1);
        }else{
          // Overwrite comparing array bar's height.
          setTimeout(() => {
            const [firstInd, newHeight] = animation[i];
            arrayBar[firstInd].style.height = `${newHeight}px`;
          }, i * 1);
        }
      }
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
      <button onClick={()=>mergeSort()}>Merge Sort</button>
    </div>
  )
}

export default SortingVisualizer
