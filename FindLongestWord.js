
function findLongestWord(str){

    let words = str.split(" "); //["The", "sun", "was", "setting", "behind""]
    let longest = "";


    for(let i = 0 ; i < words.length ; i++){

        if(words[i].length > longest.length){

            longest = words[i];
        }

    }
    return longest

}
console.log(findLongestWord("The sun was setting behind"));
