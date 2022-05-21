import React from 'react'
import { CodeShowCase } from './CodeShowCase'

export const RightContent = () => {
  const codeFromServer = `<code>
    function add(n1,n2){
      console.log(x + y);
    }

    const x = 8;
    const y = 10;

    add(x,y);
    </code>
  `;
  return (
    <div className="mt-10">
        <CodeShowCase>
          <p> 
              <span className="text-accent">export default</span>
              <span className="text-secondary-purple"> function*</span> 
              <span className="text-accent-green">{" getLines("}</span>
              <span className="text-accent-pink">text, width</span>
              <span className="text-accent-green">{")"}</span>
              {"{"}
          </p>
          <div className="ml-5">
            <p>
              <span className="text-secondary-purple"><span className="italic text-secondary-purple/70">const</span> letters</span>
              <span className="text-accent-pink"> = </span>
              text.
              <span className="text-accent-green">{`split(`}</span>
              {`""`}
              <span className="text-accent-green">{`)`}</span>  
            </p> 
            <p>
              <span className="text-secondary-purple"><span className="italic  text-secondary-purple/70">let</span> words</span>
              <span className="text-accent-pink"> = </span>
              {`""`}
            </p> 
            <p>
              <span className="text-secondary-purple">for</span>
              <span className="text-accent-green">{"("}</span>  
              <span className="text-secondary-purple"><span className="italic  text-secondary-purple/70">let</span> i</span>
              <span className="text-accent-pink"> =</span>
              <span className="text-accent-green">{")"}</span>  
            </p> 
          </div>
        </CodeShowCase>
        <CodeShowCase>
        <pre className="prettyprint" 
      dangerouslySetInnerHTML={{
                    __html: codeFromServer
                  }}></pre>
   </CodeShowCase>
    </div>
  )
}
