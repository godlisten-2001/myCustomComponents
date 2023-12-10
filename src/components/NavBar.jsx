import React from 'react'
import { useState } from 'react'
function NavBar() {
    const[toggleStatus, setToggleStatus] = useState(false);
    const handleClick = () => {
        setToggleStatus(!toggleStatus)
    }
  return (
      <nav className='navbar navbar-expand-lg bg-primary'>
        <div className='container-fluid '>
            <a href="#" className='navbar-brand'>StenTech</a>
            <button type="button" className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation' onClick={handleClick}>
                <span className='navbar-toggler-icon'></span>
            </button>
            {toggleStatus?  <div className='navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a href="#" className='nav-link text-white'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link text-white'>About Us</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link text-white'>Services</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link text-white'>Contact</a>
                            </li>
                        </ul>
                        </div> :                        
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a href="#" className='nav-link text-white'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link text-white'>About Us</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link text-white'>Services</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#" className='nav-link text-white'>Contact</a>
                            </li>
                        </ul>
                        </div>}
                            
        </div>
      </nav>
  )
}

export default NavBar
