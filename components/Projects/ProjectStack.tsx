import React,{FC} from 'react'
interface Props{
  handleCheck(id:number):void,
  id:number,
  name:string,
  checked:boolean
}
const ProjectStack:FC<Props> = ({handleCheck,id,name,checked}) => {
  return (
    <div onClick={()=>handleCheck(id)} className="w-4/5 py-2 space-x-3 cursor-pointer">
        <input type="checkbox" checked={checked} className=" rounded-sm bg-inherit text-secondary border-white border-[0.5px] focus:ring-0"/>
        <span className="capitalize">{name}</span>
    </div>
  )
}

export default ProjectStack