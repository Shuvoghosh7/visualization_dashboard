import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card/Card';

const DashboardHome = () => {
    const { pathname } = useLocation()
    return (
        <div className='mx-12 mt-5'>
        <label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button lg:hidden">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

            </label>
            <Card />
        </div>
    );
};

export default DashboardHome;