import React from 'react'
import { CodeShowCase } from './CodeShowCase'

export const RightContent = () => {
  const getLinesCode = `
  <code>
    export default function* getLines(text,width){
      const letters = text.split("")
      let words =""
      for(let i =0; i<(letters.length/59);i++){
        for(let j =(width*(i)); j<(width*(i+1));j++){
          if(letters[j]){ 
            words+=letters[j]
            if(j==(width*(i+1)-1)&& letters[j+1]!=" " && letters[j]!=" "){
              words+="-"
            }
          }
    
        }
        yield words
        words = ""
      }
    </code>
    
  `;
  const useGetLinesCode = `
    <code>
      const WIDTH = 59

      const lines = useMemo(()=>{
        const genobj = getLines(text, WIDTH)
        const res = []
        let result = genobj.next()
        while(!result.done){
          res.push(result.value)
          result = genobj.next()
        }
        return res
      },[])
    </code>
  `;
  const codeToShowCase = [
    {
      title:"getLinesGeneratorFunction",
      code:getLinesCode
    },
    {
      title:"useGetLinesGeneratorFunction",
      code:useGetLinesCode
    }
  ]
  
  
  return (
    <div className="mt-10">
      <style jsx global>
        {
          `.prettyprint {
            background: #011221;
            font-family: Menlo, "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Consolas, monospace;
            border: 0 !important;
          }

          .pln {
            color: #607B96;
          }

          /* Specify class=linenums on a pre to get line numbering */
          ol.linenums {
            margin-top: 0;
            margin-bottom: 0;
            color: #655f6d;
          }

          li.L0,
          li.L1,
          li.L2,
          li.L3,
          li.L4,
          li.L5,
          li.L6,
          li.L7,
          li.L8,
          li.L9 {
            padding-left: 1em;
            background-color: #19171c;
            list-style-type: decimal;
          }

          @media screen {

            /* string content */

            .str {
              color: #2a9292;
            }

            /* keyword */

            .kwd {
              color: #E99287;
            }

            /* comment */

            .com {
              color: #655f6d;
            }

            /* type name */

            .typ {
              color: #576ddb;
            }

            /* literal value */

            .lit {
              color: #607B96;
            }

            /* punctuation */

            .pun {
              color: #607B96;
            }

            /* lisp open bracket */

            .opn {
              color: #efecf4;
            }

            /* lisp close bracket */

            .clo {
              color: #efecf4;
            }

            /* markup tag name */

            .tag {
              color: #be4678;
            }

            /* markup attribute name */

            .atn {
              color: #aa573c;
            }

            /* markup attribute value */

            .atv {
              color: #398bc6;
            }

            /* declaration */

            .dec {
              color: #aa573c;
            }

            /* variable name */

            .var {
              color: #be4678;
            }

            /* function name */

            .fun {
              color: #576ddb;
            }
          }`
        }
      </style>
      {
        codeToShowCase.map(code=>
            {
              return(
                <CodeShowCase
                  key={code.title}
                >
                  <pre 
                    className="prettyprint language-js" 
                    dangerouslySetInnerHTML={{
                            __html: code.code
                    }}
                            >
                    </pre>
                </CodeShowCase>
              )
            }
        
        )
      }
    </div>
  )
}
