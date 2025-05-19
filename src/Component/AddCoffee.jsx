import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffeeData = Object.fromEntries(formData.entries());
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffeeData),
        }).then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Coffee added Successfully",
                    icon: "success",
                    draggable: true
                    
                });
                form.reset();
            })
    }

    return (
        <div className='p-24 bg-[#d2b48c4d]'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-5xl font-bold '>Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div>
                        <fieldset className="fieldset  border-base-300 rounded-box  border p-4 w-full border-none">

                            <label className="label">name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Enter coffee name" />

                            <label className="label">Supplier</label>
                            <input type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />

                            <label className="label">Price</label>
                            <input type="text" name='price' className="input w-full" placeholder="Enter coffee price" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="fieldset  border-base-300 rounded-box  border p-4 w-full border-none">

                            <label className="label">Quantity</label>
                            <input type="text" name='quantity' className="input w-full" placeholder="Enter coffee chef" />

                            <label className="label">Taste</label>
                            <input type="text" name='taste' className="input w-full" placeholder="Enter coffee taste" />

                            <label className="label">Details</label>
                            <input type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
                        </fieldset>
                    </div>
                    <div className='col-span-2'>
                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Enter photo URL" />
                    </div>
                    <div className='col-span-2 '>
                        <input type="submit" className='btn btn-block bg-[#D2B48C]' value="Add coffee" />
                    </div>
                </div>


            </form>
        </div>
    );
};

export default AddCoffee;