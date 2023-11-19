import React from "react";
import { Link } from "react-router-dom";
import Logofish from "../assets/logo mancing.png";


const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg" style={{ padding: "18px" }}>
        <div className="container-fluid">
            <img src={Logofish} alt="iLab" width="70" />
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 col justify-content-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">
                            HOME
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">
                            ABOUT ME
                            </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                            CONTACT
                            </Link>
                    </li>
                    </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  