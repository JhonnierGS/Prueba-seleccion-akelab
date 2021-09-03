import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Navbar.css';

function Navbar() {

        return(
        <div>
            
            <div className="Navbar">
                <div>
                    <h1>Peliculas</h1>
                </div>
                <div className="rute__buttons">
                    <Link to="/badges/akelab" className="btn btn-dark">
                        Akelab
                    </Link>
                    <Link to="/badges/fibo" className="btn btn-dark">
                        fibonacci
                    </Link>
                </div>
            </div>

        </div>
        ) 
}
export default Navbar;