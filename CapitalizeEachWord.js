
function capitalizeEachWords(str){

    let words = str.split(" "); //   ["hello", "world", "user", sam"]

    let result = [];

    for( let i = 0 ; i < words.length ; i++) {

        let word = words[i];

        let Capitalized = word.charAt(0).toUpperCase() + word.slice(1) ;
        
        result.push(Capitalized);

    }



    return result.join(' ')

}

console.log(capitalizeEachWords("hello world user sam"));
