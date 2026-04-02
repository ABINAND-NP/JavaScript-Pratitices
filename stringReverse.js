
function reverse(str){

    let reveresed = "";

    for(let i = str.length - 1 ; i>=0 ; i--){

        reveresed = reveresed + str[i];

    }

    return reveresed

}

console.log(reverse("Hello"));
