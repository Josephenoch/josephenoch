import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router';

const AboutIcon = ({icon, link}) => {
  const path = useRouter().pathname;
  const style = {
    activePage:path===`/about-me${link}`&&"text-white"
  }
  return (
    <>
      <Link href={`/about-me${link}`} passHref={true}>
        <a className={`mt-2 text-secondary ${style.activePage}`}>
          {icon}
        </a>
      </Link>

    </>
  )
}

export default AboutIcon