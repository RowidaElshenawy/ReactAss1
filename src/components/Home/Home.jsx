import React, { useEffect } from 'react'
import img from '../../../public/avataaars.svg'
import homeStyle from './Home.module.css'
export default function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);
  return (
    <div className={`${homeStyle.homeContant}`}>
        <div className='container'>
            <div className="row  flex-column align-items-center gy-5 text-center ">
                <div className='col-md-4'>
                    <img className='w-100' src={img} alt="" />
                </div>
                <div className='col-md-4'>
                    <h2>START FRAMEWORK</h2>
                    <hr/>
                    <i class="fa-solid fa-star m-2"></i>
                    <hr />
                    <p className='pt-4'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
    </div>
  )
}
