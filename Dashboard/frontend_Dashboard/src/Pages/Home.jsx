import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import ContenuSide from '../components/ContenuSide';

function Home() {
    return ( 
        <div className="home d-flex">
            <Navbar />
            <div className="main-content d-flex w-100">
                <Sidebar />
                <div className="d-flex w-100">
                    <Content />
                    <ContenuSide />
                </div>
            </div>
        </div>
    );
}

export default Home;
