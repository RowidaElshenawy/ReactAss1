import React, { useEffect } from 'react'
import aboutStyle from './About.module.css'

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div className={`${aboutStyle.about}`}>
      <div className="container">
          <div className="text-center">
            <h2>ABOUT COMPONENT</h2>
            <hr/>
            <i class="fa-solid fa-star m-2"></i>
            <hr />
          </div>
         <div className="row pt-4">
            <div className='col-md-6'>
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
         </div>
        </div>
    </div>
  )
}
