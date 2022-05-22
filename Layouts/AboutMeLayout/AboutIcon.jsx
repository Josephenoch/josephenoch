import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router';

export const AboutIcon = ({icon, link}) => {
  const router = useRouter();
  const { projectId } = router.query;
  return (
    <>
      <Link href={`/about-me/${link}`} passHref={true}>
        <a className="mt-2 text-secondary">
          {icon}
        </a>
      </Link>

    </>
  )
}
