
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            {/* Logo */}

            <Link href="/"
                className="flex items-center gap-2 focus:outline-none"
            >
                <Image src="https://i.ibb.co.com/gL3JVwXz/Gemini-Generated-Image-sq680asq680asq68-removebg-preview.png"
                    alt="Logo"
                    width={500}
                    height={500}
                    className="w-13 h-13 rounded-full object-cover bg-gray-200/80"
                />
                <span className="text-xl font-extrabold text-white">
                    NextGen<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"> Tech</span>
                </span>
            </Link>
        </div>
    );
};

export default Logo;