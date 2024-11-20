import React from 'react';
import '../Styles/component.css';
import Logo from '../assets/logo.png';
import Avatar from '../assets/avatar.jpeg';

function Navbar() {
    return (
        <header className="navbar text-black d-flex justify-content-between p-5">
            <img src={Logo} alt="" className="ms-3 titre" style={{ width: '200px', height: '70px' }} />
            <div className="d-flex align-items-center position-relative w-50">
                <i className="fa fa-search position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'gray' }}></i>
                <input
                    type="text"
                    className="form-control bg-light text-light custom-input ps-5"
                    placeholder="Recherche..."
                />
            </div>
            <div className="d-flex align-items-center me-3">
                <span className="me-2">John Doe</span>
                <img
                    src={Avatar}
                    alt="Avatar"
                    className="rounded-circle"
                    style={{ width: '70px', height: '70px' }}
                />
            </div>
        </header>
    );
}

export default Navbar;
