import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../Contexts/AuthContext';

const MenuComponent = () => {
    const {isLoggedIn,toggleAuth}=useContext(AuthContext);
    if(isLoggedIn)
    return ( 
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a className="navbar-brand" href="#">mStock</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLogin" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarLogin">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/companies">Companies</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/watchlist">Watch List</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/performance">Compare Performance</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={toggleAuth}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
     )
     else
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand" href="#">mStock</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarGuest" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarGuest">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Login</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/companies">Companies</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        )

}
 
export default MenuComponent;