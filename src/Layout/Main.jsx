import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = (props) => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;