function findPair(arr, value) {

    let result = [];
    let r = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {
            result[r] = [arr[i],arr[j]] ;
            r++
      }
    }
  }
  return result;
}

console.log(findPair([7,3,4,5,6], 10));
