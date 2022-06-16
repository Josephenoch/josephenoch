import React from 'react'


import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'

import CodeShowCaseSection from "../../Components/AboutMe/PersonalInfo/CodeShowCaseSection"
import LeftComponent from '../../Components/AboutMe/LeftComponent'
import { usePersonalInfo } from '../../Contexts/PersonalInfoContext'

const Index = () => {
  const {data,loading,error} = usePersonalInfo()
  return (
    <>
      <LeftComponent error={error} files={data} pageTitle="personal-info" loading={loading}/>
        <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
              <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
              </div>
        </div>
        <section className="w-[41.4%] h-full border-l-2 border-lines">
          <aside className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7  overflow-y-auto scrollbar-y text-secondary text-sm">
            <CodeShowCaseSection/>
          </aside>
        </section>
    </>
    )
}

Index.Layout = AboutLayout

export default Index