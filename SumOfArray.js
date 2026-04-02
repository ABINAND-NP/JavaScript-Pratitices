

function sum(arr){

    let sum = 0 ;

    for(let i = 0 ; i < arr.length ; i++) {

        sum = sum + arr[i];
    }
return sum;
}

console.log(sum([12,4,35,56,45]));
