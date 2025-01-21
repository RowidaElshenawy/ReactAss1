import React from 'react'
import footerStyle  from './Footer.module.css'
export default function Footer() {
  return (
    <div className={`${footerStyle.footer}`}>
        <div className='container'>
            <div className="row gy-4 text-center">
                <div className='col-md-4'>
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className='col-md-4'>
                    <h3>AROUND THE WEB</h3>
                    <ul className='list-unstyled d-flex justify-content-center'>
                        <li className={`${footerStyle.circle}`}><i class="fa-brands fa-facebook"></i></li>
                        <li className={`${footerStyle.circle}`}><i class="fa-brands fa-twitter"></i></li>
                        <li className={`${footerStyle.circle}`}><i class="fa-brands fa-linkedin-in"></i></li>
                        <li className={`${footerStyle.circle}`}><i class="fa-solid fa-globe"></i></li>
                    </ul>
                </div>
                <div className='col-md-4'>
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </div>
  )
}
