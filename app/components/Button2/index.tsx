import Link from 'next/link'
import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
export default function index({children,style}:{style?:number,children:React.ReactNode}) {
 
  return (
    <Link href="#" 
      className={cn(s.button, {
        [s.style1]: style === 1, 
        [s.style2]: style === 2,
      })}
    >
      {children}
    </Link>
  )
}
