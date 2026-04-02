
function removeAnElement(arr,value){

    let result = [];
    let r = 0;

    for(let i = 0 ; i < arr.length ; i++){

        if(arr[i] !== value){

            result[r] = arr[i];
            r++;
        }

    }

    return result

}

console.log(removeAnElement([33,44,22,45,66],45));
