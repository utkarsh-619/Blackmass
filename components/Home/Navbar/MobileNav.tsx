"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { BiSearch, BiX } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { navLinks } from '@/constant/Constant';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='lg:hidden'>
            <div className='flex items-center justify-between p-4'>
                <BiSearch className='w-6 h-6 cursor-pointer hover:text-green-600' />
                <FaBars className='w-6 h-6 cursor-pointer hover:text-green-600' onClick={toggleNav} />
            </div>

            {isOpen && (
                <div className='absolute top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center'>
                    <BiX className='w-8 h-8 cursor-pointer absolute top-4 right-4 hover:text-green-600' onClick={toggleNav} />
                    <div className='flex flex-col items-center space-y-6'>
                        {navLinks.map((link) => (
                            <Link href={link.url} key={link.id}>
                                <p className='text-lg font-semibold cursor-pointer hover:text-green-600 hover:underline transition-all duration-200 text-gray-900'>
                                    {link.label}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default MobileNav;
