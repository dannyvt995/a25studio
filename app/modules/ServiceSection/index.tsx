import React from 'react'
import s from './style.module.css'
import {listService} from '@Constants/page_props'
import Button3 from '@Components/Button3'
export default function index() {
  return (
    <section className={s.serviceSection}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.title}>
            <div className={s.tag}>
              Features
            </div>
            <h2 className={s.label}>
            A complete website builder with all the features you need.
            </h2>
          
          </div>
          <div className={s.listService}>
   
            {Object.keys(listService).map((key) => {
          const service = listService[key as keyof typeof listService];
          return (
            <div className={s.item}  key={key}>
                <h3>{service.name}</h3>
                <p>{service.des}</p>
                <Button3 target={service.link}>Discover more</Button3>
            </div>
          );
        })}
          </div>
        </div>
      </div>
    </section>
  )
}
