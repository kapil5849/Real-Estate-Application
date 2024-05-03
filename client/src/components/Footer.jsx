import React from 'react';
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-slate-200 shadow-inner mt-10">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
                <div className="text-sm sm:text-base text-slate-700">
                    © {new Date().getFullYear()} Kapil RealEstate, Inc.
                </div>
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link to="/" className="text-slate-700 hover:underline">
                            Privacy
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-slate-700 hover:underline">
                            Terms
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-slate-700 hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="flex space-x-4">
                    <a href="https://wa.me/918112263958/" className="text-slate-700 hover:text-slate-900">
                        <FaWhatsapp className="h-5 w-5" />
                    </a>
                    <a href="https://www.instagram.com/kapil____vaishnav/?hl=en" className="text-slate-700 hover:text-slate-900">
                        <FaInstagram className="h-5 w-5" />
                    </a>
                    <a href="https://twitter.com/kapil__vaishnav/" className="text-slate-700 hover:text-slate-900">
                        <FaTwitter className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/kapil--vaishnav" className="text-slate-700 hover:text-slate-900">
                        <FaLinkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
