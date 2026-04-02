

function countofevenNumbers(arr){

    let count = 0 ;

    for(let i = 0 ; i < arr.length ; i++){

        if(arr[i] % 2 === 0 ){
            
            count = count + 1;
        }
    }
    return count

}

console.log(countofevenNumbers([1,2,3,4,5,6,7,8,9,10,11,12]));
