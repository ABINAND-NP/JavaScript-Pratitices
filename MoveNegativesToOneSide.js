
function moveNegativesToOneSide(arr){

    let Negative = [] ;
    let positive =[] ;
    
    for(let i = 0 ; i < arr.length ; i++){

        if( arr[i] < 0) {

            Negative.push(arr[i]);

        } else {

            positive.push(arr[i]);

        }    
    
    }

    return [...Negative,...positive]
    
}

console.log(moveNegativesToOneSide([1,4,-2,5,-6,-9,7,-1,10]));
