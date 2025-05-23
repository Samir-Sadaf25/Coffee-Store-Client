import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffeeData = useLoaderData();
    const navigate = useNavigate();
    const { _id, name, supplier, price, quantity, taste, details, photo } = coffeeData;
    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formDataa = new FormData(form);
        const formData = Object.fromEntries(formDataa.entries());
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)

        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Coffee Data has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/")
                }
            })
    }
    return (
        <div className='p-24 bg-[#d2b48c4d] mt-16 mb-20'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-5xl font-bold '>Update Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div>
                        <fieldset className="fieldset  border-base-300 rounded-box  border p-4 w-full border-none">

                            <label className="label">name</label>
                            <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter coffee name" />

                            <label className="label">Supplier</label>
                            <input defaultValue={supplier} type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />

                            <label className="label">Price</label>
                            <input defaultValue={price} type="text" name='price' className="input w-full" placeholder="Enter coffee price" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="fieldset  border-base-300 rounded-box  border p-4 w-full border-none">

                            <label className="label">Quantity</label>
                            <input defaultValue={quantity} type="text" name='quantity' className="input w-full" placeholder="Enter coffee chef" />

                            <label className="label">Taste</label>
                            <input defaultValue={taste} type="text" name='taste' className="input w-full" placeholder="Enter coffee taste" />

                            <label className="label">Details</label>
                            <input defaultValue={details} type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
                        </fieldset>
                    </div>
                    <div className='col-span-2'>
                        <label className="label">Photo</label>
                        <input defaultValue={photo} type="text" name='photo' className="input w-full" placeholder="Enter photo URL" />
                    </div>
                    <div className='col-span-2 '>
                        <input type="submit" className='btn btn-block bg-[#D2B48C]' value="Add coffee" />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default UpdateCoffee;