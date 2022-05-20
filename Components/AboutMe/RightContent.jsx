import React from 'react'
import { CodeShowCase } from './CodeShowCase'

export const RightContent = () => {
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
          <iframe src="https://codesandbox.io/embed/quizzical-cartwright-u7559h?fontsize=10&hidenavigation=1&theme=dark&view=editor"
            style={{
              width:"100%", 
              height:"fit",
              minHeight:"300px",
              border:"0px",
              borderRadius: "4px",
              overflow:"hidden"
            }}
            title="React"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          >

          </iframe>
   </CodeShowCase>
    </div>
  )
}
