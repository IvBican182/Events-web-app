import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";


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
                <NavLink to ="/" className="nav-link"><span className={styles.latoBold}>HOME</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/events" className="nav-link"><span className={styles.latoBold}>EVENTS</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/profile" className="nav-link"><span className={styles.latoBold}>PROFILE</span></NavLink>
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