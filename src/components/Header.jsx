import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";

export default function Header() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const handleChange = (e) => setSearch(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
    }

    return (
        <header className='flex justify-between p-5 mb-2'>
            <Link to='/'>
                <img
                    className=''
                    src='Youtubelogo.png'
                    alt='유튜브로고'
                    width='100px'
                />
            </Link>
            <form
                className='flex w-96'
                onSubmit={handleSubmit}
            >
                <input
                    className='rounded-l-full border border-solid border-slate-300 px-3 py-1 w-full outline-1 outline-slate-400'
                    type='text'
                    placeholder='검색'
                    value={search}
                    onChange={handleChange}
                />
                <button className='rounded-r-full border border-solid border-slate-300 px-3 py-1 border-l-0 bg-slate-200'>
                    <IoIosSearch className='text-2xl' />
                </button>
            </form>
            <div></div>
        </header>
    );
}

