import React from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Logohero from "../assets/Capture001.jpg";
import logoIfb from "../assets/invert-fb.png";
import logoIig from "../assets/invert-ig.png";
import logoIwa from "../assets/invert-wa.png";

const ContactPage = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ padding: "18px" }}>
            <div className="container-fluid">
                    <img src={Logohero} alt="" width="70" />
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

            <main>
                <img
                src={Logohero}
                className="img-fluid position-relative"
                alt=""
                style={{ width: "100%" }}
                />
                <div
                className="text-white position-absolute top-50 translate-left"
                style={{ marginLeft: "80px" }}
                >
                <h1>Contact Service</h1>
                <p style={{ fontSize: "21px" }}>Hubungi saya: </p>
                <p>
                    <img
                    src={logoIwa} alt="" style={{ height: "24px", paddingRight: "18px" }} // Gunakan objek style
                    /><a href="#!" className="text-reset"> Whatsapp </a>
                    </p>
                    <p>
                    <img
                    src={logoIfb} alt="" style={{ height: "24px", paddingRight: "18px" }} // Gunakan objek style
                    /><a href="https://www.facebook.com/zuck" className="text-reset">Facebook</a>
                    </p> 
                    <p>
                    <img
                    src={logoIig} alt="" style={{ height: "24px", paddingRight: "18px" }} // Gunakan objek style
                    /><a href="https://www.instagram.com/zuck/" className="text-reset">Instagram</a>
                    </p> 
                        
                </div>
            </main>
        </div>
    )
}
export default ContactPage;