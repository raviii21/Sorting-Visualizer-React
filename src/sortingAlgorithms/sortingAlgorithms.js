// export const mergeSort = (array) => {
//     if(array.length == 1) return array;

//     const middle = Math.floor(array.length / 2);
//     const firstHalf = mergeSort(array.slice(0, middle));
//     const secondHalf = mergeSort(array.slice(middle));

//     const sortedArray = [];
//     let i=0, j=0;
//     while(i<firstHalf.length && j<secondHalf.length){
//         if(firstHalf[i] < secondHalf[j]) sortedArray.push(firstHalf[i++]);
//         else sortedArray.push(secondHalf[j++]);
//     }
//     while(i<firstHalf.length) sortedArray.push(firstHalf[i++]);
//     while(j<secondHalf.length) sortedArray.push(secondHalf[j++]);
//     return sortedArray;
// } 

export const getSortAnimation = (array) => {
    if(array.length <= 1) return array;
    const animation = [];
    const auxArray = array.slice();
    mergeSort(array, 0, array.length-1, auxArray, animation);
    return animation;
}

const mergeSort = (array, startInd, endInd, auxArray, animation) => {
    if(startInd === endInd) return;
    const middleInd = Math.floor((startInd + endInd) / 2);
    mergeSort(auxArray, startInd, middleInd, array, animation);
    mergeSort(auxArray, middleInd+1, endInd, array, animation);
    combine(array, startInd, middleInd, endInd, auxArray, animation);
}

const combine = (array, startInd, middleInd, endInd, auxArray, animation) => {
    let i = startInd;
    let j = middleInd + 1;
    let k = startInd;

    while(i <= middleInd && j <= endInd){ 
        // Compare I and J. Change their color.
        animation.push([i,j]);
        // Revert their color. 
        animation.push([i,j]);


        if(auxArray[i] <= auxArray[j]){

            // Overwrite the value of k in array with value of i in auxArray.
            animation.push([k, auxArray[i]]);
            array[k++] = auxArray[i++];
        }else{
            // Overwrite the value of k in array with value of j in auxArray.
            animation.push([k, auxArray[j]]);
            array[k++] = auxArray[j++];
        }
    }

    while(i <= middleInd){
        // Compare I and I. Change their color.
        animation.push([i,i]);
        // Revert their color. 
        animation.push([i,i]);

        // Overwrite the value of k in array with value of i in auxArray.
        animation.push([k, auxArray[i]]);
        array[k++] = auxArray[i++];
    }
    while(j <= endInd){
        // Compare I and J. Change their color.
        animation.push([j, j]);
        // Revert their color. 
        animation.push([j, j]); 

        // Overwrite the value of k in array with value of j in auxArray.
        animation.push([k, auxArray[j]]);
        array[k++] = auxArray[j++];
    }
}
