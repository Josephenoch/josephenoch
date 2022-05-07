import React from 'react'

import Link from 'next/link'

export const AboutIcon = ({icon, link}) => {
  return (
    <>
      <Link href={link}>
        <a className="mt-2 text-secondary">
          {icon}
        </a>
      </Link>

    </>
  )
}
