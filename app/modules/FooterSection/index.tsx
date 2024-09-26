import React from 'react'
import s from './style.module.css'
export default function index() {
  return (
    <section className={s.footerSection}>
      <div className={s.container}>
        <div className={s.content}>
            <div className={s.col1}>
                <h3>Product</h3>
                <ul className={s.list}>
                  <li>Digital Invoice</li>
                  <li>Insights</li>
                  <li>Reimbursements</li>
                  <li>Virtual Assistant</li>
                  <li>Artificial Intelligence</li>
                </ul>
            </div>
            <div className={s.col2}>
                <h3>Company</h3>
                <ul className={s.list}>
                  <li>About Us</li>
                  <li>Blogs</li>
                  <li>Contact Us</li>
                </ul>
            </div>
            <div className={s.col3}>
                <div className={s.canvas}></div>
                <div className={s.form}>
                  <h4>Subscribe to our newsletter</h4>
                  <input placeholder='Fill your email'></input>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
