const seperateWords = (word) =>{
    const words = word.split("-")
    let newWord = words[0]
    for(let i=1; i<words.length; i++){
        newWord = newWord+words[i][0].toUpperCase()+words[i].slice(1)
    }
    return newWord
}

export default seperateWords