function multy(word , replacedChar, originalWord) {
    let inputWord = word;
    let newWord = '';
    for (let index = 0; index < inputWord.length; index++) {
        if (inputWord[index] === '_') {
            newWord += replacedChar;
        }else{
            newWord += inputWord[index] ;
        }
    }
    if (newWord == originalWord) {
        console.log('Matched');
    }else{
        console.log('Not Matched');
    }
}