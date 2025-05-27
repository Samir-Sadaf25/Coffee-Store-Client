import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';
// import { AuthContext } from '../Provider/AuthProvider';

const Registar = () => {
    const { createUser } = use(AuthContext);
    const handleRegistar = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form)
        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());
        // console.log(restFormData);


        createUser(email, password)
            .then(result => {
                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                fetch('http://localhost:3000/users', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(restFormData)

                }).then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: "acoount created Successfully",
                                icon: "success",
                                draggable: true

                            });
                        }
                    })


            }).catch(error => {
                // console.log(error.message);
            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-5 py-5 mt-10 place-self-center">
            <h1 className="text-xl font-bold text-center mt-2.5">Registar your account</h1>
            <div className="card-body">
                <form onSubmit={handleRegistar} className="fieldset">
                    <label className="label">name</label>
                    <input type="text" className="input" name='name' placeholder="Your name" />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" name='photo' placeholder="Enter your image Link" />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">Password</label>
                    <div className=''>
                        <input type="password" className="input" name='password' placeholder="Password" />

                    </div>
                    <label className="label">
                        <input type="checkbox" name='terms' defaultChecked className="checkbox mt-1.5" />
                        Accept our Terms and Condition
                    </label>

                    <input className='btn btn-neutral mt-4' type="submit" value="Submit" />
                </form>
                <p className='mt-3'>already have an account? Please <Link className='text-blue-500 underline' to={"/login"}>Login</Link></p>
            </div>

        </div>
    );
};

export default Registar;