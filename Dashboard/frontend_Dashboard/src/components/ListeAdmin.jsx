import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function ListeAdmin() {
    return ( 
        <div className="home d-flex">
            <Navbar />
            <div className="main-content d-flex w-100">
                <Sidebar />
                <div className="d-flex w-100">
                <div className="contenu-side p-3 bg-light">
                        <h3 className='titre_tab'>Liste des clients</h3>
                        <div className="tab_content">
                            <input type="text" className="form-control form-control-sm p-2 bg-light search_client" placeholder="Recherche ......"/>
                            <button className='btnAjout' ><i className="fa-solid fa-user-plus p-2"></i> Client</button>
                            <table className="admin-table">
                                <thead>
                                    <tr> 
                                        <th>Nom</th>
                                        <th>Secteur</th> 
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td>Nom</td>
                                            <td>secteur</td>
                                            <td>email@gmail.com</td>
                                            <td>
                                                <button className='p-1 btn_action' ><i className="fa-solid fa-pen valider_icon"></i></button>
                                                <button className='p-1 btn_action' ><i className="fa-solid fa-trash refuser_icon"></i></button>
                                                <button className='p-1 btn_action'><i className="fa-solid fa-envelope message_icon"></i></button>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListeAdmin;
