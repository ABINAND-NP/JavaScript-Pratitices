
function intersection(arr1,arr2){

    let result = [];
    let r = 0;

    for(let i =0 ; i < arr1.length ; i++){
        for(let j = 0 ; j < arr2.length ; j++){

            if(arr1[i] === arr2[j]){

                result[r] = arr1[i];
                r++ 

            }
        }
    }

    return result

}
console.log(intersection([43,52,35,86,90],[90,56,35,80,43]));
