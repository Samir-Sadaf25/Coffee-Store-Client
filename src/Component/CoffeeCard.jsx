import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {

    const { _id, name, supplier, price, quantity, taste, details, photo } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(coffee)
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className=" shadow-lg rounded-lg p-4 flex items-center gap-4 border bg-[#d2b48c2c]">
            {/* Coffee Image */}
            <img src={photo} alt={name} className="w-24 h-24 object-cover rounded-lg" />

            {/* Coffee Details */}
            <div className="flex-1">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-600 text-sm">Supplier: {supplier}</p>
                <p className="text-gray-600 text-sm">Quantity: {quantity}</p>
                <p className="text-gray-600 text-sm">Taste: {taste}</p>
                <p className="text-gray-600 text-sm">Details: {details}</p>
                <p className="text-lg font-semibold text-orange-600">Price: {price}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
                <Link to={`/coffees/${_id}`}><button className="hover:bg-gray-200">
                    <IoEyeOutline size={20} />
                </button></Link>
                <Link to={`/updateCoffee/${_id}`}> <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit size={20} />
                </button></Link>
                <button onClick={() => handleDelete(_id)} className="text-red-500 hover:text-red-700">
                    <FaTrash size={20} />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
