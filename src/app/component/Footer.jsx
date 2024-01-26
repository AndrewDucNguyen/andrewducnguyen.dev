import React from 'react'
import { Github, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <div className='mx-auto w-full px-20 mt-8 mb-16'>
            <div className='flex justify-between'>
                <a className='font-bold' href="/">Andrew<span className='font-normal'>Duc</span>Nguyen</a>
                <div className='flex gap-x-6'>
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
            </div>


        </div>
    )
}

export default Footer