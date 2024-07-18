import React from 'react'
import Image from 'next/image';
import { navLinks } from '@/constant/Constant';
import { link } from 'fs';
import Link from 'next/link';
import { BiAlbum, BiSearch, BiUser, BiWallet } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
const Nav = () => {
    return (
        <div className='w-full h-[vh] bg-gray-200 mb-10'>
            <div className='w-[95%] sm:w-[85%] md:w-[80%] h-full mx-auto flex items-center justify-between'>
                <Image src="/images/logo.svg" alt="logo" width={120} height={100} className='rounded-[50%]' />
                {/* navLinks */}
                <div className='lg:flex hidden items-center space-x-10'>
                    {navLinks.map((link)=>{
                        return(
                            <Link href={link.url} key={link.id}>
                                <p className='text-lg font-semibold cursor-pointer hover:text-green-600 hover:underline  transition-all duration-200 text-gray-900'
                                >
                                    {link.label}
                                </p>
                            </Link>
                        );
                    })}
                </div>
                {/* icons */}
                <div className='flex items-center space-x-8'>
                    <BiSearch className='w-6 h-6 cursor-pointer hover:text-green-600'/>
                    <FaBars className='w-6 h-6 cursor-pointer lg:hidden hover:text-green-600'/>
                </div>
            </div>

        </div>
    )
}

export default Nav