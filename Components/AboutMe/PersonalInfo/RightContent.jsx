import React,{memo} from 'react'
import CodeShowCaseSection from './CodeShowCaseSection'

const RightContent = () => {
  console.log("hi")
  return (
    <>
        <CodeShowCaseSection/>
    </>
  )
}

export default memo(RightContent)