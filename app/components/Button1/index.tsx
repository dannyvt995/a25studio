import Link from 'next/link'
import React from 'react'

export default function index({children}:{children:React.ReactNode}) {
  return (
    <Link href="#">{children}</Link>
  )
}
