import React, { useEffect, useState } from 'react'
import contactStyle from './Contact.module.css'
export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  const [Data , setData] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''})
  function inputChange(e){
    setData({
      ...Data,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div>
      <div className={`${contactStyle.contact} container`}>
        <div className={`${contactStyle.contactText} text-center`}>
          <h2>CONATCT SECTION</h2>
          <hr/>
          <i class="fa-solid fa-star m-2"></i>
          <hr />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row offset-2  pt-4">
            <div className="col-10 ">
              {Data.userName !== '' && <label  htmlFor="userName" className=' ps-2' >userName:</label> }
              <input  onChange={inputChange } id='userName' className='w-100' name='userName' placeholder='userName' type="text" />
              {Data.userAge !== '' && <label  htmlFor="userAge" className=' ps-2' >userAge:</label> }
              <input onChange={inputChange } className='w-100' name='userAge' placeholder='userAge' type="number" />
              {Data.userEmail !== '' && <label  htmlFor="userEmail" className=' ps-2' >userEmail:</label> }
              <input onChange={inputChange } className='w-100' name='userEmail' placeholder='userEmail' type="email" />
              {Data.userPassword !== '' && <label  htmlFor="userPassword" className=' ps-2' >userPassword:</label> }
              <input onChange={inputChange } className='w-100' name='userPassword' placeholder='userPassword' type="password" />
              <button className={`${contactStyle.btn}`}>Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}