import Link from 'next/link'
import React from 'react'
import s from './style.module.css'
export default function index({children}:{children:React.ReactNode}) {
  return (
    <Link href="#">{children}</Link>
  )
}
