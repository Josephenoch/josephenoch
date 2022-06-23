import React,{useState} from 'react'
import  SocialIcon  from './SocialIcon'
import  NavBar  from './NavBar'
import { useRouter } from 'next/router'
import ColoredText from "../../Components/GeneralComponents/ColoredText"

const Layout = ({children}) => {
  const route = useRouter()
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
      link: "https://twitter.com/techbrojoe",
      icon:<i className="ri-twitter-fill"></i>
    }
  ]
  return (
    <div className="bg-primary-dark  w-screen h-screen flex justify-center items-center font-headline text-white">
      <div className="w-[95%] relative bg-primary-lighter rounded-lg overflow-hidden shadow-md shadow-primary-lighter border-lines border-2 h-[90%]">
        <div className="border-b-2 border-b-lines flex flex-col lg:flex-row">
            <NavBar 
              nav={nav} 
              handleNav={handleNav}
            />
        </div>
        <div className={` h-[calc(100%-2.5rem)] lg:max-h-[85%] lg:h-[85%] overflow-hidden text-white ${nav?"opacity-0 lg:opacity-100  ":"opacity-100 transition-all delay-1000 ease-in-out  duration-1000"}`}>
          <h1 className="ml-8 h-[10%] lg:hidden flex items-center">{route.pathname.slice(1)?route.pathname.slice(1)==="about-me"?`_${route.pathname.slice(1)}/professionalInfo`:`_${route.pathname.slice(1)}`:""}</h1>
          <div className="h-[90%] lg:h-full">
            {children}
          </div>
        </div>
        <div className={`border-t-2 bottom-[-2px] absolute lg:relative border-t-lines w-full ${nav?"opacity-100  flex":"opacity-0 lg:opacity-100 hidden lg:flex transition-all ease-in-out duration-1000 delay-0"}`}>
            <h1 className="text-secondary text-xs inline-block border-r-2 border-r-lines px-2 py-4 border-b-primary-lighter hover:transition-[border] ease-in-out border-b-2 w-full lg:w-fit">
                find me on:
            </h1>
          {
            socials.map((social,index)=>
              <SocialIcon key={index} link={social.link} icon={social.icon}/>
              )
          }
          <a target="_blank" href={"https://github.com/josephenoch"} rel="noreferrer" className={` text-secondary hover:text-white  flex items-center last:ml-auto border-l-2 border-l-lines px-3  py-3 hover:border-b-accent border-b-primary-lighter hover:transition-[border] ease-in-out duration-1000 border-b-2 `}>
            <span className='text-xs mr-1 hidden lg:inline'>@josephenoch </span> <i className="ri-github-fill"></i>
          </a>
        </div>  
             
      </div>
      <div className='absolute w-fit lg:right-[94%] top-2 lg:top-auto lg:rotate-90 text-xs'>
          <p className="text-center">Design by <ColoredText color="accent-green"><a href="https://twitter.com/YankaDarelova" className="underline" rel="noreferrer" target="_blank">Dare Lova</a></ColoredText></p>
      </div>
      <div className='absolute lg:left-[92%] bottom-0 lg:bottom-auto w-fit lg:rotate-[270deg] text-xs'>
        <p className="text-center">Built with <ColoredText color="secondary-purple">&#10084;</ColoredText> by <ColoredText color="accent"><a href="https://www.twitter.com/t`echbrojoe" className="underline" rel="noreferrer" target="_blank">Joseph Enoch</a></ColoredText></p>

      </div>
    </div>    
  )
}
export default Layout