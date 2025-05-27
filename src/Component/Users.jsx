import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const userData = useLoaderData();
    return (
        <div>
            this is {userData.length}
        </div>
    );
};

export default Users;