
function MoveNegativesToOneSide01(arr) {

    let negative = [];
    let posituve = [];

    let n = 0 ;
    let p = 0 ;

    for(let i = 0 ; i < arr.length ; i++ ) {

        if(arr[i] < 0){

            negative[n] = arr[i] ;
            n++ ;
        } else {

            posituve[p] = arr[i];
            p++;

        }

    }

    let result = [] ;
    let r = 0 ;    

    for(let i = 0 ; i < negative.length ; i++ ){

        result[r] = negative[i];
        r++; 
        
    }

    for(let i = 0 ; i < posituve.length ; i++){

        result[r] = posituve[i];
        r++;
    }

    return result

}

console.log(MoveNegativesToOneSide01([1,4,-2,5,-6,-9,7,-1,10,15,-3]));
