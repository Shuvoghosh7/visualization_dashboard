import React from 'react';
import { Link,useLocation  } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    const { pathname } = useLocation()
    return (
        <div className='nav-bar'>
            {pathname.includes('dashboard') && <label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button lg:hidden">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

            </label>}
            <Link className='menu-item' to='/'>HOME</Link>
            <Link className='menu-item' to='/dashboard'>DESHBOARD</Link>
        </div>
    );
};

export default Navbar;