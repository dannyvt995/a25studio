import React from 'react'
import s from './style.module.css'
import Button2 from '@Components/Button2'
import ImagePreload from '@Components/ImagePreload'
export default function index() {
  return (
    <section className={s.heroSection}>
      <div className={s.container}>
        <div className={s.content}>
          <h1 className={s.largeTitle}>We help you create better online presence</h1>
          <p className={s.descript}>Metafield is a no-code assistant help store builder build the most creative shop on shopify</p>
          <div className={s.button}>
              <Button2 style={1}>Shop the demo</Button2>
              <Button2 style={2}>Demo App</Button2>
          </div>
        </div>
        <div className={s.video}>
            <ImagePreload src='/hero/1.png' alt="no" w="100%" h="auto"/>
        </div>
      </div>
    </section>
  )
}
