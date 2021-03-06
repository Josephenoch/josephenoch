import Link from 'next/link'

import React, { FC } from 'react'

import { useRouter } from 'next/router'

interface Props{
    nav:boolean,
    handleNav():void
}
const NavBar:FC<Props> = ({nav, handleNav}) => {
  const path = useRouter().pathname
  const styles = {
      nav :nav?"opacity-100 flex":"h-0 lg:h-full opacity-0 lg:opacity-100 hidden lg:flex",
      home:path=="/"?"border-b-accent text-white":"",
      about:path.includes("/about-me")?"border-b-accent text-white":"",
      projects:path==="/projects"?"border-b-accent text-white":"",
      contact:path==="/contact-me"?"border-b-accent text-white":"",

  }
  return (
    <>
        <div className="flex w-full h-10 lg:w-52">
            <h1 className=" text-sm lg:text-xs lg:border-b-2 lg:border-b-primary-lighter lg:border-r-2 lg:border-r-lines w-full text-secondary inline-block pl-6 py-3">joseph-enoch</h1>
            
            <button onClick={handleNav} className="flex justify-center w-[15%] items-center text-[20px] text-secondary lg:hidden">
                {nav?<i className="ri-close-line"></i>:<i className="ri-menu-line"></i>}
            </button>
        </div> 
        <div className={`w-full lg:w-[85%] transition-all ease-in-out duration-1000 flex-col lg:flex-row ${styles.nav}`} >
            <Link href="/">
                <a onClick={handleNav} className={`${styles.home} duration-1000 lg:border-t-0 border-t-2 border-t-lines text-sm lg:text-xs lg:border-b-2 lg:border-r-2 lg:border-r-lines lg:w-fit lg:block hover:border-b-accent  hover:transition-[border] ease-in-out border-b-primary-lighter hover:text-white px-6 py-4 lg:py-3`}>
                    _hello
                </a>
            </Link>
            <Link href="/about-me">
                <a onClick={handleNav} className={`${styles.about} duration-1000 lg:border-t-0 border-t-2 border-t-lines text-sm lg:text-xs lg:border-b-2 lg:border-r-2 lg:border-r-lines  w-full lg:w-fit hover:border-b-accent  hover:transition-[border] ease-in-out border-b-primary-lighter hover:text-white px-6 py-4 lg:py-3`}>
                    _about-me
                </a>
            </Link>
            <Link href="/projects">
                <a onClick={handleNav} className={`${styles.projects} duration-1000 lg:border-t-0 border-t-2 border-t-lines text-sm lg:text-xs lg:border-b-2 lg:border-r-2 lg:border-r-lines  w-full lg:w-fit hover:border-b-accent  hover:transition-[border] ease-in-out border-b-primary-lighter hover:text-white px-6 py-4 lg:py-3`}>
                    _projects
                </a>
            </Link>
            <Link href="/contact-me">
                <a onClick={handleNav} className={`${styles.contact}}duration-1000 lg:border-t-0 border-t-2 last:ml-auto border-t-lines text-sm lg:text-xs lg:border-b-2  lg:border-r-0 w-full lg:w-fit lg:border-l-2 lg:border-l-lines hover:border-b-accent  hover:transition-[border] ease-in-out border-b-primary-lighter hover:text-white px-6 py-4 lg:py-3`}>
                    _contact-me
                </a>
            </Link>
        </div>
    </>
  )
}

export default NavBar