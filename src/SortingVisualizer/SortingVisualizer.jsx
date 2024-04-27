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
      const sortedJSArray = array.sort((a,b)=>a-b);
      const mergeSortArray = sortingAlgorithm.mergeSort(array);

      if(sortedJSArray.length != mergeSortArray.length){
        console.log("False");
        return;
      }
      for(let i = 0; i< mergeSortArray.length; ++i){
        if(mergeSortArray[i] != sortedJSArray[i]){
          console.log("False");
          return;
        }
      }
      console.log("True");
      return;
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
