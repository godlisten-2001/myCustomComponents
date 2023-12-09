import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
function Dashboard() {
  return (
    <div className='container-fluid'>
    <div className='flex-nowrap row'>
    <div className='col-auto col-md-3 px-sm-2 px-0 bg-dark'>
     <div className='d-flex flex-column align-items-center px-3 pt-2 align-items-sm-start min-vh-100 text-white pb-3'>
        <div className='d-flex align-items-center me-md-auto mb-md-1 mt-md-3 align-items-sm-start px-3 pt-2 pb-3'>
        <span className='d-sm-inline d-none fs-5 fx-bolder'>
            STENTECH
       </span>

        </div>
            <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start'>
                <li className='w-100'>
                <div className='nav-link align-middle px-0 text-white'>
                <i className="bi bi-speedometer2 fs-4 ms-2"></i>
                <span className='d-sm-inline ms-2 d-none'>
                    Dashboard
                </span>
                </div>
                </li>

                <li className='w-100'>
                <div className='nav-link align-middle px-0 text-white'>

                <i className="bi bi-people fs-4 ms-2"></i>
                <span className='d-sm-inline ms-2 d-none' >
                    Manage Employees
                </span>
                </div>
                </li>

                <li className='w-100' >
                <div className='nav-link align-middle px-0 text-white'>
                <i class="bi bi-layout-text-window-reverse fs-4 ms-2"></i>
                <span className='d-sm-inline ms-2 d-none'>
                    Categories
                </span>
                </div>
                </li>
                <li className='w-100'>
                <div className='nav-link align-middle px-0 text-white'>
                <i class="bi bi-person fs-4 ms-2"></i>
                <span className='d-sm-inline ms-2 d-none'>
                    Profile
                </span>
                </div>
                </li>
                <li className='w-100'>
                <div className='nav-link align-middle px-0 text-white'>
                <i class="bi bi-power fs-4 ms-2"></i>
                <span className='d-sm-inline ms-2 d-none'>
                    Logout
                </span>
                </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard
