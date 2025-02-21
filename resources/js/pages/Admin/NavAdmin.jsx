import { Link } from '@inertiajs/react';
import React, { useState } from 'react'
import {FaMoon,FaSun} from 'react-icons/fa';
function NavAdmin({handleMode}) {
    const [switchMode,setSwitchMode] = useState(true);
    function handleSitchMode(mode){
        setSwitchMode(!switchMode);
        handleMode(!switchMode);
    }
  return (
    <div>
        <header className={`pb-2 ${!switchMode ? 'text-dark':'text-light'}`}>
            <nav className='row'>
                <div className='col-6 '>
                    Admin Dashboard
                </div>
                <div className='col-6 text-end'>
                    <ul className='list-unstyled'>
                        <li className='d-inline px-1' onClick={handleSitchMode} style={{cursor:'pointer'}}>
                            { switchMode ? <FaSun/> :<FaMoon className='text-dark'/> }
                        </li>
                        <Link className='d-inline px-1 btn mx-2 btn-outline-light ' style={{fontSize:'12px'}} href='/Admin/logout'>Log Out</Link>
                        <li></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default NavAdmin