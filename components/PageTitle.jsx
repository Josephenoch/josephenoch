import Link from 'next/link'
import React from 'react'

export const PageTitle = ({pageTitle, userName, contact}) => {
  const styles = {
      rightPadding:userName ? "pr-24" : "",
      leftPadding:userName? "pl-5":"",
      contactStyle:contact? "last:ml-auto border-r-0 border-l-2 border-l-lines" : ""
  }
  return (
    <>
        <Link href={pageTitle}>
            <a className={`${styles.rightPadding} ${styles.contactStyle} ${styles.leftPadding} inline-block px-10 py-3 hover:border-b-accent border-b-primary-lighter border-b-2 border-r-2 border-r-lines`}>
                <h1 className="font-headline text-white text-xs">{userName?pageTitle.toLowerCase():`_${pageTitle.toLowerCase()}`}</h1>
            </a>
        </Link>
    </>
  )
}
