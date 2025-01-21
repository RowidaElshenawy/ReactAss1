import React from 'react'
import NotFoundImg from '../../assets/images/notFound.jpg'
export default function NotFound() {
  return (
    <div className='text-center p-5'>
      <img className='w-100' src={NotFoundImg} alt="" />
    </div>
  )
}
