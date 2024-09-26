import React from 'react'
import s from './style.module.css'
import Button2 from '@Components/Button2'
import { listPackage } from '@/app/constants/page_props'
import ImagePreload from '@/app/components/ImagePreload'
export default function index() {
  return (
    <section className={s.priceSection}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.title}>
            <div className={s.tag}>
              Plans
            </div>
            <h2 className={s.label}>
              Chose A Plan
            </h2>

          </div>


          <div className={s.showChoice}>
            <p className={s.m}>Monthly</p>
            <span className={s.toggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="white" />
              </svg>
            </span>
            <p className={s.y}>Yearly</p>
            <span className={s.outTag}>
              Save 65%
            </span>
          </div>


          <div className={s.packageList}>
            {Object.keys(listPackage).map((key) => {
              const item = listPackage[key as keyof typeof listPackage];
              return (
                <div className={s.itemPackage} key={key}>
                  <h3>
                    <ImagePreload src={`/icon/${item.icon}.svg`} alt='sdf' w="30px" h="30px" />
                   {item.name}
                  </h3>
                  <span>{item.susgest}</span>
                  <div className={s.price}>
                    <span>{item.price}$</span>
                    <p>/month</p>
                  </div>
                  <p>A free plan grants you access to some cool features of Spend.In.</p>
                  <ul>
                    {item.detail.map((detailItem, index) => (
                      <li key={index}>{detailItem}</li>  
                    ))}
                  </ul>
                  <Button2>Contact Us</Button2>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  )
}
