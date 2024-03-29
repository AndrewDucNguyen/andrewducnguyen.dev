import React from 'react'
import { Github, Instagram, Linkedin } from 'lucide-react'

const Header = () => {
    return (
        <div className='mx-auto w-full px-20 mt-16'>
            <div className='topHeader mb-16'>
                <a className='font-bold' href="/">Andrew<span className='font-normal'>Duc</span>Nguyen</a>
            </div>
            <div className='bottomHeader flex flex-row justify-between items-center'>
                <div className='flex gap-x-6 items'>
                    <a href='https://www.instagram.com/_andrewducnguyen/' target="_blank" rel="noopener noreferrer">
                        <Instagram color='#d4d4d4' />
                    </a>
                    <a href='https://www.linkedin.com/in/andrew-nguyen-b4038912b/' target="_blank" rel="noopener noreferrer">
                        <Linkedin color='#d4d4d4' />
                    </a>
                    <a href='https://github.com/AndrewDucNguyen' target="_blank" rel="noopener noreferrer">
                        <Github color='#d4d4d4' />
                    </a>
                </div>
                <hr className='hidden md:flex max-w-80 h-[.05rem] w-full bg-[#d4d4d4]' />
            </div>
        </div>
    )
}

export default Header