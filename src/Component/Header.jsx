import React from 'react';
import Navber from './Navber';

const Header = () => {
    return (
        <div className=''>
            <header className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white "
                style={{ backgroundImage: "url('https://i.ibb.co/Tq23h1Fq/6.jpg')" }}>

                {/* Hero Section */}
                <div className="text-center max-w-xl">
                    <h1 className="text-4xl font-bold drop-shadow-md">Welcome to Espresso Emporium</h1>
                    <p className="mt-4 text-lg drop-shadow-sm">
                        A world of rich flavors and handcrafted perfection awaits you.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-orange-600 rounded-md hover:bg-orange-500">
                        Browse Coffees
                    </button>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 "></div>
            </header>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#ECEAE3] p-8">
                <div className="text-center  p-6 ">
                    <img src="https://i.ibb.co/qYwhQnYk/1.png" alt="Awesome Aroma" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-xl font-bold">Awesome Aroma</h3>
                    <p className="text-gray-600">You will definitely be a fan of the design & aroma of your coffee.</p>
                </div>

                <div className="text-center  p-6 ">
                    <img src="https://i.ibb.co/spM34PMf/2.png" alt="High Quality" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-xl font-bold">High Quality</h3>
                    <p className="text-gray-600">We served the coffee to you maintaining the best quality.</p>
                </div>

                <div className="text-center  p-6 ">
                    <img src="https://i.ibb.co/s9v4J6f2/3.png" alt="Pure Grades" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-xl font-bold">Pure Grades</h3>
                    <p className="text-gray-600">The coffee is made of the green coffee beans which you will love.</p>
                </div>

                <div className="text-center  p-6 ">
                    <img src="https://i.ibb.co/N6LdZ6th/4.png" alt="Proper Roasting" className="mx-auto mb-4 w-16 h-16" />
                    <h3 className="text-xl font-bold">Proper Roasting</h3>
                    <p className="text-gray-600">Your coffee is brewed by first roasting the green coffee beans.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;