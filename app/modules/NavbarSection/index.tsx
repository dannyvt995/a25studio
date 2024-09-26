import React from 'react'
import s from './style.module.css'
import Button1 from '@Components/Button1'
import Button2 from '@Components/Button2'
export default function index() {
  return (
    <section className={s.navbarSection}>
        <div className={s.container}>
          <nav className={s.navbar}>
            <div className={s.logo}>
              A25
            </div>
            <ul className={s.listItemNavDes}>
              <li className={s.item}><Button1>Product</Button1></li>
              <li className={s.item}><Button1>Service</Button1></li>
              <li className={s.item}><Button1>About us</Button1></li>
              <li className={s.item}><Button1>Contact</Button1></li>
              <li className={s.item}><Button1>Summary</Button1></li>
            </ul>
            <div className={s.more}>
                <Button2 style={1}>Lets talk</Button2>
            </div>
          </nav>
        </div>
    </section>
  )
}
