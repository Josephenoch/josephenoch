import React,{useState} from 'react'


import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'

import RightContent from '../../Components/AboutMe/RightContent'
import LeftComponent from '../../Components/AboutMe/LeftComponent'

const Index = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil."
  const files = [
    {
      folderName:"none",
      pages:[
        {
          title:"bio",
          text:text+"bio"
        }
      ],
    },{
      folderName:"Interest",
      pages:[
        {
          title:"FrontEnd Dev",
          text:text+"FrontEnd Dev"
        },
        {
          title:"BackEnd Dev",
          text:text+"BackEnd Dev"
        }
      ]
    },
    {
      folderName:"School",
      pages:[
        {
          title:"AUL",
          text:text+"AUL"
        },
        {
          title:"BSI",
          text:text+"BSI"
        }
      ]
    }
  ]
  return (
    <>
      <LeftComponent files={files}/>
        <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
              <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
              </div>
        </div>
        <div className="w-[41.4%] h-full border-l-2 border-lines">
          <div className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7  overflow-y-auto scrollbar text-secondary text-sm">
            <RightContent/>
          </div>
        </div>
    </>
    )
}

Index.Layout = AboutLayout

export default Index