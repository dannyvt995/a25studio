import React from 'react'
import s from './style.module.css'
import ImagePreload from '@/app/components/ImagePreload'
export default function index() {
  return (
    <section className={s.hightlightSection}>
      <div className={s.content}>
        <div className={s.background}>
          <ImagePreload src="/hightlight/1.png" alt="hl" w="100%" h="auto" />
        </div>
      </div>
    </section>
  )
}
