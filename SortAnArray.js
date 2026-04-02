
function Sorting(arr){

    let n = arr.length;

    for(let i = 0 ; i < n - 1 ; i++) {      // Repeate the sorting process multiple times  
        for(let j = 0 ; j < n - 1 ; j++) {  // comparing adjesent element and swap them if they are in wrong order

            if(arr[j] > arr[j + 1]){  
                
                // swaping
                let temp = arr[j];
                arr[j] = arr[ j + 1 ] ;
                arr[j + 1] = temp ;
            }            
        }
    }

    return arr

}

console.log(Sorting([3,2,5,4,9,7,1]));
