import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <div className='flex flex-col max-w-7xl m-auto'>
            <Header />
            <Outlet />
        </div>
    );
}

