import React from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router';
import Navber from '../Component/Navber';
import Home from '../Pages/Home';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div >
                <Outlet>
                    <Home></Home>
                </Outlet>
            </div>
        </div>
    );
};

export default MainLayout;