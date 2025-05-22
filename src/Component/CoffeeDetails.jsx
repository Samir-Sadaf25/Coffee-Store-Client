import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CoffeeDetails = () => {
    const coffeeData = useLoaderData();
    // const { _id, name, supplier, price, quantity, taste, details, photo } = coffeeData;
    const { id } = useParams();
    const singleCoffee = coffeeData.find(coffee => coffee._id === id);
    
    return (
        <div className='mt-16'>
            <div className="flex items-center gap-8 p-6 bg-[#f9f8f4] rounded-xl shadow-md max-w-4xl mx-auto">
                {/* Image */}
                <div className="w-48 h-64 flex-shrink-0">
                    <img
                        src={singleCoffee.photo}
                        
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Text content */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-[#401f1f] drop-shadow-md">{singleCoffee.name}</h2>           
                    <p><span className="font-semibold">Supplier:</span> {singleCoffee.supplier}</p>
                    <p><span className="font-semibold">Taste:</span> {singleCoffee.taste}</p>
                    <p><span className="font-semibold">Category:</span> Coffee</p>
                    <p><span className="font-semibold">Details:</span> {singleCoffee.details}</p>
                    <p><span className="font-semibold">Price:</span> {singleCoffee.price}</p>
                    <p><span className="font-semibold">Quantity:</span> {singleCoffee.quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;