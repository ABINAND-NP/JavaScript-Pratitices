function findlargest(arr) {

  let largest = arr[0]; // assuming index 0 as a largest number for now ...

  for(let i = 1 ; i < arr.length ; i++ ){
    if(arr[i] > largest){ 
       largest = arr[i];
    }
  }
  return largest
}

console.log(findlargest([1, 54, 23, 35, 42, 32]));



   

    

    



