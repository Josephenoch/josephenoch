
export default function* getLines(text,width){
  const letters = text.split("")
  let words =""
  for(let i =0; i<(letters.length/59);i++){
    for(let j =(width*(i)); j<(width*(i+1));j++){
      if(letters[j]){ 
        words+=letters[j]
        if(j==(width*(i+1)-1)&& letters[j+1]!=" "){
          words+="-"
        }
      }

    }
    yield words
    words = ""
  }
}
