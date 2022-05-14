export default function getLines (text) {
    const letters = text.split("")
    const words = []
    for (let i =0;i<(letters.length)/59;i++){
      words[i] =""
    }
    for(let i =0 ; i<letters.length;i++){
      if(i/59<=1){ 
        if(i===59 && letters[59]!==" "){
          words[0]+="-"
          words[1]+=letters[59]
          continue
        }
        words[0]+=letters[i]
      }
      else if(i/59<=2){ 
        if(i===118 && letters[118]!==" "){
          words[1]+="-"
          words[2]+=letters[119]

          continue
        }
        words[1]+=letters[i]
      }
      else if(i/59<=3){ 
        if(i===177 && letters[177]!==" "){
          words[2]+="-"
          words[3]+=letters[177]

          continue
        }
        words[2]+=letters[i]
      }
      else if(i/59<=4){ 
        if(i===236 && letters[236]!==" "){
          words[3]+="-"
          words[4]+=letters[236]

          continue
        }
        words[3]+=letters[i]
      }
      else if(i/59<=5){ 
        if(i===295 && letters[295]!==" "){
          words[4]+="-"
          words[5]+=letters[236]

          continue
        }
        words[4]+=letters[i]
      }
      else if(i/59<=6){ 
        if(i===354 && letters[354]!==" "){
          words[5]+="-"
          words[6]+=letters[354]

          continue
        }
        words[5]+=letters[i]
      }
      else if(i/59<=7){ 
        if(i===413 && letters[413]!==" "){
          words[6]+="-"
          words[7]+=letters[413]

          continue
        }
        words[6]+=letters[i]
      }
      else if(i/59<=8){ 
        if(i===472 && letters[472]!==" "){
          words[7]+="-"
          words[8]+=letters[472]

          continue
        }
        words[7]+=letters[i]
      }
      else if(i/59<=9){ 
        if(i===531 && letters[531]!==" "){
          words[8]+="-"
          words[9]+=letters[531]

          continue
        }
        words[8]+=letters[i]
      }
    }
    return[...words]
  }