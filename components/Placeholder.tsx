import Link from 'next/link';
import React from 'react';

interface pHolderData {
    pHolderTitle: string;
    pHolderText: string;
}

export default function Placeholder(props: pHolderData) {

    return (
        <div className="flex mb-20 text-slate-50 font-serif"> 
            <div className='w-3/4 m-auto'>
                <div className='bg-zinc-600'>
                    <div className='flex align-top justify-center'>
                        <div className='text-amber-400 text-8'>
                            {props.pHolderTitle}
                        </div>
                    </div>
                </div>
                <div className='flex align-top rounded-b-2'>
                    <div className='text-4 px-4 py-4 bg-zinc-800 rounded-b-4'>
                        {props.pHolderText}
                    </div>
                </div>
            </div>
        </div>
    )
}
