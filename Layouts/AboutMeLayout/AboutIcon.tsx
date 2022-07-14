import React, { FC, ReactElement } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router';

interface Props{
  icon:ReactElement,
  link:string
}

const AboutIcon:FC<Props> = ({icon, link}) => {
  const path:string = useRouter().pathname;
  const style = {
    activePage:path===`/about-me${link}`&&"text-white"
  }
  return (
    <Link href={`/about-me${link}`} passHref={true}>
      <a className={`mt-2 text-secondary ${style.activePage}`}>
        {icon}
      </a>
    </Link>
  )
}

export default AboutIcon