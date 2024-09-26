import Link from 'next/link'
import React from 'react'
import s from './style.module.css'
export default function index({children,target,classAdd}:{target:string,classAdd?:string,children:React.ReactNode}) {
  return (
    <Link href={target} className={classAdd}>{children}</Link>
  )
}
