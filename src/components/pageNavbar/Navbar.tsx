import logo from "../../assets/logo.png";

export default function Navbar() {
    
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
        <a className="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">EVENTS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">PROFILE</a>
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