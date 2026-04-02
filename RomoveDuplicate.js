
function RemoveDuplicate(arr){

    let UpdatedArray = [];  

    for(let i = 0 ; i < arr.length ; i++ ) {

    if(!UpdatedArray.includes(arr[i])){

        UpdatedArray.push(arr[i]);
    }
    }
    return UpdatedArray

}
console.log(RemoveDuplicate([1,2,3,4,4,5,6,2,3,7,8,5]));
