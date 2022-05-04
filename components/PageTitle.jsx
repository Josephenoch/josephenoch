import Link from 'next/link'


import React from 'react'


export const PageTitle = ({pageTitle, userName, lastItem, notLink}) => {
  const styles = {
      rightPadding:userName ? "pr-24" : "",
      leftPadding:userName? "pl-5":"",
      contactStyle:lastItem? "last:ml-auto border-r-0 border-l-2 border-l-lines" : " border-r-2 border-r-lines",
  }
  console.log(notLink&&notLink ===true )
  return (
  
    <>
        <Link href={!notLink ? pageTitle : "/" }>
            <a className={`border-b-primary-lighter hover:border-b-accent  hover:transition-[border] ease-in-out ${styles.rightPadding} ${styles.contactStyle} ${styles.leftPadding} hover:text-white text-secondary inline-block px-6 py-3  border-b-2  `}>
                <h1 className=" text-xs">{userName?pageTitle.toLowerCase():`_${pageTitle.toLowerCase()}`}</h1>
            </a>
        </Link>
    </>
  )
}
