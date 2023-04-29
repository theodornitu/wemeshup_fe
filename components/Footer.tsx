import Link from 'next/link';
import React from 'react';
import {FaFacebookSquare, FaInstagram, FaEnvelope} from 'react-icons/fa';


export default function Footer() {
    return (
        <div className="flex mb-20 text-slate-50 font-serif"> 
            <div className='w-9/12 m-auto'>
                <div className='text-zinc-500 text-xs'>
                    Universitatea de Arhitectura si Urbanism Ion Mincu Str. Academiei 18-20, sector 1, Bucuresti | wemeshup3d@gmail.com
                </div>
                <div className='flex justify-center'>
                    <div className='px-2 text-zinc-500 hover:text-amber-400 duration-700 text-8'>
                        <a href="https://www.facebook.com/wemeshup/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                    </div>
                    <div className='px-2 text-zinc-500 hover:text-amber-400 duration-700 text-8'>
                        <a href="https://www.instagram.com/wemeshup/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </div>
                    <div className='px-2 text-zinc-500 hover:text-amber-400 duration-700 text-8'>
                        <a href="mailto:wemeshup3d@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-zinc-500 text-xs'>
                            Copyright © WEMESHUP S.R.L 2023
                    </div>
                </div>
            </div>
        </div>
    )
}