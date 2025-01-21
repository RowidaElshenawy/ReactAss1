import React from 'react'
import footerStyle1 from './Footer1.module.css'
export default function Footer1() {
  return (
    <div>
       <div className={`${footerStyle1.footer1} text-center`}>
          <p>Copyright  &#169; Your Website 2021</p>
       </div>
    </div>
  )
}

