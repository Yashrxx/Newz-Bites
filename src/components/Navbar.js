import React, { Component } from 'react'
// import './App.css';
import { Link } from 'react-router-dom'
export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/buisness">Buisness</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item dropdown">
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true" to='/'>About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
//<Link className="nav-link dropdown-toggle" to="/news" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//Dropdown
// </Link>
// {/* <ul className="dropdown-menu"> */}
// {/* <li><Link className="dropdown-item" to="/news">Action</Link></li>
// <li><Link className="dropdown-item" to="/news">Another action</Link></li>
// <li><hr className="dropdown-divider" /></li>
// <li><Link className="dropdown-item" to="/news">Something else here</Link></li>
// </ul> */}
