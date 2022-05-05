import React,{useState} from 'react'
import { SocialIcon } from './SocialIcon'
import Link from "next/link"
import { NavBar } from './NavBar'

export const Layout = ({children}) => {
  const [nav, setNav] = useState(false)
  const handleNav = () =>{
      setNav(prev=> !prev)
  }

  const socials = [
    {
      link: "https://www.linkedin.com/in/joseph-enoch/",
      icon:<i className="ri-linkedin-fill"></i>
    },
    {
      link: "https://www.instagram.com/j.oenoch/",
      icon:<i className="ri-instagram-fill"></i>
    },
    {
      link: "https://web.facebook.com/Kingjoeenoch",
      icon:<i className="ri-facebook-fill"></i>
    },
    {
      link: "https://twitter.com/EnochJoseph01",
      icon:<i className="ri-twitter-fill"></i>
    }
  ]
  return (
    <div className="bg-primary-dark  w-full h-screen flex justify-center items-center font-headline text-white">
      <div className="w-11/12 relative bg-primary-lighter rounded-lg overflow-hidden shadow-md shadow-primary-lighter border-lines border-2 h-[95%] lg:h-[90%]">
        <div className="border-b-2 border-b-lines flex flex-col lg:flex-row">
            <NavBar 
              nav={nav} 
              handleNav={handleNav}
            />
        </div>
        
        <div className={`border-t-2 absolute bottom-0 border-t-lines flex w-full ${nav?"flex":"hidden lg:flex"}`}>
          <Link href="" >
            <a className="text-secondary text-xs inline-block border-r-2 hover:text-white border-r-lines px-2 py-3 hover:border-b-accent border-b-primary-lighter hover:transition-[border] ease-in-out border-b-2">
                <h1 className=" mt-1">find me on:</h1>
            </a>
          </Link>
          {
            socials.map((social,index)=>
              <SocialIcon key={index} link={social.link} icon={social.icon}/>
              )
          }
          <a target="_blank" href={"https://github.com/josephenoch"} rel="noreferrer" className={` text-secondary hover:text-white  flex items-center last:ml-auto border-r-0 border-l-2 border-l-lines px-3  py-3 hover:border-b-accent border-b-primary-lighter hover:transition-[border] ease-in-out border-b-2  `}>
            <span className='text-xs mr-1 hidden lg:inline'>@josephenoch </span> <i className="ri-github-fill"></i>
          </a>
        </div>  
        <div className={` overflow-auto max-h-[85%] h-[85%] text-white `}>
          <div className={`max-h-full h-full ${nav?"hidden lg:block":"block"}`}>
            {children}
          </div>
        </div>     
      </div>
            
    </div>    
  )
}
