import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../Component/CoffeeCard';

const Home = () => {

    const coffeeData = useLoaderData();
    // console.log(allCoffees);

    return (
        <div className='mt-20 mb-20'>
            <div className='text-center mb-10 space-y-2'>
                <p className='text-gray-400'>--- Sip & Savor ---</p>
                <h3 className='text-3xl font-semibold'>Our Popular Products</h3>
                <button className='btn bg-[#E3B577]'>Add Coffee</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coffeeData.map((coffee, index) => (
                    <CoffeeCard key={index} coffee={coffee} />
                ))}
            </div>
        </div>
    );
};

export default Home;