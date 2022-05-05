import Link from 'next/link'
import {useRouter} from 'next/router'



import React from 'react'


export const PageTitle = ({pageTitle, userName, lastItem, notLink}) => {
  const router= useRouter()
  const styles = {
      activeStyle: router.pathname===`/${pageTitle}`|| (router.pathname==="/" && notLink)? "lg:border-b-2 border-b-accent lg:text-white":"hover:border-b-accent  hover:transition-[border] ease-in-ou border-b-primary-lighter text-secondary"
  }
  return (
  
    <>
        <Link href={!notLink ? `/${pageTitle}` : "/" }>
            <a className={`border-b-2  ${styles.activeStyle} ${styles.contactStyle} ${styles.username}  hover:text-white  inline-block px-6 py-3   `}>
                <h1 className=" text-xs">{userName?pageTitle.toLowerCase():`_${pageTitle.toLowerCase()}`}</h1>
            </a>
        </Link>
    </>
  )
}
