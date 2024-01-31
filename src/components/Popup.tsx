import { useState, useEffect } from 'react';
import Project from './icons/Project';
import Link from 'next/link';

interface PopupProps {
    onClose: () => void;
    isPopupVisible: boolean; // the prop 
}

const Popup: React.FC<PopupProps> = ({ onClose, isPopupVisible }) => {
    useEffect(() => {
        // logic for auto-popup close after a certain time
        const timeout = setTimeout(() => {
            onClose(); // Close the popup by calling the onClose function
        }, 60000); // Adjust the time as needed (5000 milliseconds = 5 seconds)

        // Clear the timeout when the component unmounts or onClose is triggered
        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <div style={{ zIndex: 99999999 }} className={`popup ${isPopupVisible ? 'block' : 'hidden'} fixed top-5 left-[50%] translate-x-[-50%] max-w-[480px] w-full`}>
            <div className="bg-[#121212] p-4 rounded border border-gray-300 shadow">
                <div className='flex items-center justify-between w-full'>
                    <h1 className='text-lg font-medium'>Hey buddy!</h1>
                    <button className="w-[24px] h-[24px] flex items-center justify-center bg-blue-500 text-white text-lg rounded" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className='mt-5 flex items-center gap-6'>
                    <i className='w-[84px]'><Project /></i>
                    <div>
                        <h1 className='text-base font-medium'>Try my new project <span className='text-[#09c478]'>InnerBeat</span></h1>
                        <p className='text-[14px] text-white/70 line-clamp-2'>InnerBeat let you stream your favroute music online for free without any ads</p>
                    </div>
                </div>
                <Link href={`https://innerbeat.vercel.app`} target='_blank'>
                    <button className='w-full h-[30px] flex items-center justify-center bg-[#09c478]/70 hover:bg-[#09c478] rounded-lg text-base font-medium mt-4'>
                        Open InnerBeat
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Popup;
