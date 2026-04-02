function FindSmallest(arr) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(FindSmallest([12, 35, 14, 2, 63, 76, 89]));
