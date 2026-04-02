// function SwapingArray(arr){

//     let temp = arr[0];
//     arr[0] = arr[arr.length-1];
//     arr[arr.length-1] = temp ;

//     return arr

// }

// console.log(SwapingArray([22,33,44,55]));


function SwapingArray(arr){

    let temp = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;

    return arr


}

console.log(SwapingArray([22,33,44,55]));
