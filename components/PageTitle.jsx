import Link from 'next/link'
import {useRouter} from 'next/router'



import React from 'react'


export const PageTitle = ({pageTitle, userName, lastItem, notLink}) => {
  const router= useRouter()
  const styles = {
      rightPadding:userName ? "pr-24" : "",
      leftPadding:userName? "pl-5":"",
      contactStyle:lastItem? "last:ml-auto border-r-0 border-l-2 border-l-lines" : " border-r-2 border-r-lines",
      activeStyle: router.pathname===`/${pageTitle}`|| (router.pathname==="/" && notLink)? "border-b-accent text-white":"hover:border-b-accent  hover:transition-[border] ease-in-ou border-b-primary-lighter text-secondary"
  }
  return (
  
    <>
        <Link href={!notLink ? `/${pageTitle}` : "/" }>
            <a className={`border-b-2  ${styles.activeStyle} t ${styles.rightPadding} ${styles.contactStyle} ${styles.leftPadding} hover:text-white  inline-block px-6 py-3   `}>
                <h1 className=" text-xs">{userName?pageTitle.toLowerCase():`_${pageTitle.toLowerCase()}`}</h1>
            </a>
        </Link>
    </>
  )
}
