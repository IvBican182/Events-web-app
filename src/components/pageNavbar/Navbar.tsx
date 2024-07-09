import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    
    return (
    <nav className="navbar navbar-expand-lg navbar-dark px-2">
        <a className="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <NavLink to ="/" style={{ textDecoration: 'none' }}><a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a></NavLink>
            </li>
            <li className="nav-item">
                <NavLink to ="/events" style={{ textDecoration: 'none' }}><a className="nav-link" href="#">EVENTS</a></NavLink>
            </li>
            <li className="nav-item">
                <NavLink to ="/profile" style={{ textDecoration: 'none' }}><a className="nav-link" href="#">PROFILE</a></NavLink>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 ml-auto">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">SEARCH</button>
            </form>
        </div>
    </nav>
  )
    
}