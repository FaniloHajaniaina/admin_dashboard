import React from 'react';
import '../Styles/component.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    return (
        <section className="sidebar bg-light text-dark p-5 ms-5">
            <ul className="list-unstyled">
                <li className="mb-4 d-flex align-items-center fs-5 mb-5" onClick={() => navigate('/')}>
                    <i className="fa fa-dashboard me-2 fs-4"></i> Dashboard
                </li>
                <li className="mb-4 d-flex align-items-center fs-5 mb-5" onClick={() => navigate('/liste')}>
                    <i className="fas fa-user me-2 fs-4"></i> Client
                </li>
                <li className="mb-4 d-flex align-items-center fs-5 mb-5">
                    <i className="fas fa-envelope me-2 fs-4"></i> Demande
                </li>
                <li className="mb-4 d-flex align-items-center fs-5 mb-5">
                    <i className="fa fa-user me-2 fs-4"></i> Account
                </li>
                <li className="d-flex align-items-center fs-5 mb-5">
                    <i className="fa fa-cog me-2 fs-4"></i> Settings
                </li>
                <li className="mb-4 d-flex align-items-center fs-5 mb-5">
                    <i className="fa fa-user me-2 fs-4"></i> Account
                </li>
            </ul>
        </section>
    );
}

export default Sidebar;
