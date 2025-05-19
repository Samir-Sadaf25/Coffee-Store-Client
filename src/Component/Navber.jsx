import React from "react";
import { FaCoffee } from "react-icons/fa";

const Navber = () => {
    return (
        <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <FaCoffee className="text-orange-600 text-2xl" />
                    <h1 className="text-xl font-bold text-gray-800">Espresso Emporium</h1>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-6 text-gray-600">
                    <li className="hover:text-orange-600"><a href="/">Home</a></li>
                    <li className="hover:text-orange-600"><a href="/menu">Menu</a></li>
                    <li className="hover:text-orange-600"><a href="/about">About Us</a></li>
                    <li className="hover:text-orange-600"><a href="/contact">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-800">
                    ☰
                </button>
            </div>
        </nav>
    );
};

export default Navber;
