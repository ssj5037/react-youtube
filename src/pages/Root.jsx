import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <div className='flex flex-col'>
            <Header />
            <main className='max-w-screen-2xl m-auto'>
                <Outlet />
            </main>
        </div>
    );
}

