import React from 'react'
import s from './style.module.css'
import { clientLogo } from '@Constants/page_props'
import ImagePreload from '@/app/components/ImagePreload'
export default function index() {

  return (
    <section className={s.clientSection}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.title}>
            <div className={s.tag}>
              Clients
            </div>
            <h2 className={s.label}>
              World-class engineering teams rely on Cortex
            </h2>
            <p className={s.subtitle}>
              Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco la
            </p>
          </div>
          <div className={s.listPartner}>
            <div className={s.row}>
              {clientLogo.index.slice(0, 4).map((index) => (
                <div className={s.item} key={index}>
                  <ImagePreload
                    key={index}
                    src={`/client/${index}.svg`}
                    alt={`client_${index}`}
                    w="100%"
                    h="auto"
                  />
                </div>
              ))}
            </div>
            <div className={s.row}>
              {clientLogo.index.slice(4, 9).map((index) => (
                <div className={s.item} key={index}>
                  <ImagePreload
                    key={index}
                    src={`/client/${index}.svg`}
                    alt={`client_${index}`}
                    w="100%"
                    h="auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
