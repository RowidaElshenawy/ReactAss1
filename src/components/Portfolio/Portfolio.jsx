import React, { useEffect } from 'react'
import poert1 from'../../assets/images/poert1.png'
import port2 from '../../assets/images/port2.png'
import port3 from'../../assets/images/port3.png'
import portfolioStyle from './Portfolio.module.css'
export default function Portfolio() {
    useEffect(() => {
        document.title = "Portfolio";
      }, []);
  return (
    <div className={`${portfolioStyle.portfolio} container`}>
        <div className={`${portfolioStyle.portfolioText} text-center`}>
            <h2>PORTFOLIO COMPONENT</h2>
            <hr/>
            <i class="fa-solid fa-star m-2"></i>
            <hr />
        </div>
        <div className="row gy-4 pt-2">
            <div className="col-md-6 col-lg-4">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className={`${portfolioStyle.btnPort}`}>
                    <div className={`${portfolioStyle.parent} position-relative`}>
                        <img className='w-100' src={poert1} alt="" />
                        <div className={`${portfolioStyle.layer} position-absolute d-flex justify-content-center align-items-center`}>
                            <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div class="modal-content">
                            <div className={`${portfolioStyle.modalPort} modal-body`}>
                                <img className='w-100' src={poert1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" className={`${portfolioStyle.btnPort}`}>
                    <div className={`${portfolioStyle.parent} position-relative`}>
                        <img className='w-100' src={port2} alt="" />
                        <div className={`${portfolioStyle.layer} position-absolute d-flex justify-content-center align-items-center`}>
                            <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </button>
                <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div class="modal-content">
                            <div className={`${portfolioStyle.modalPort} modal-body`}>
                                <img className='w-100' src={port2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" className={`${portfolioStyle.btnPort}`}>
                    <div className={`${portfolioStyle.parent} position-relative`}>
                        <img className='w-100' src={port3} alt="" />
                        <div className={`${portfolioStyle.layer} position-absolute d-flex justify-content-center align-items-center`}>
                            <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </button>
                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div class="modal-content">
                            <div className={`${portfolioStyle.modalPort} modal-body`}>
                                <img className='w-100' src={port3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3" className={`${portfolioStyle.btnPort}`}>
                    <div className={`${portfolioStyle.parent} position-relative`}>
                        <img className='w-100' src={poert1} alt="" />
                        <div className={`${portfolioStyle.layer} position-absolute d-flex justify-content-center align-items-center`}>
                            <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </button>
                <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div class="modal-content">
                            <div className={`${portfolioStyle.modalPort} modal-body`}>
                                <img className='w-100' src={poert1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal4" className={`${portfolioStyle.btnPort}`}>
                    <div className={`${portfolioStyle.parent} position-relative`}>
                        <img className='w-100' src={port2} alt="" />
                        <div className={`${portfolioStyle.layer} position-absolute d-flex justify-content-center align-items-center`}>
                            <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </button>
                <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div class="modal-content">
                            <div className={`${portfolioStyle.modalPort} modal-body`}>
                                <img className='w-100' src={port2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5" className={`${portfolioStyle.btnPort}`}>
                    <div className={`${portfolioStyle.parent} position-relative`}>
                        <img className='w-100' src={port3} alt="" />
                        <div className={`${portfolioStyle.layer} position-absolute d-flex justify-content-center align-items-center`}>
                            <i class="fa-solid fa-plus fs-1 text-white"></i>
                        </div>
                    </div>
                </button>
                <div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className={`${portfolioStyle.modalPort} modal-body`}>
                            <div className="modal-body">
                                <img className='w-100' src={port3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
