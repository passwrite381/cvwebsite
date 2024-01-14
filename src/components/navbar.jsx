import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logofish from "../assets/logo mancing.png";
import AnotherLogo from "../assets/logo mancing.png"; // Import another logo image

const Navbar = () => {
  const [dataImage, setData] = useState([]);
  useEffect(() => {

    axios.get('http://localhost:8000/api/images')
      .then(response => {
        console.log('Insite', response);
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  console.log('dataImage', dataImage);
  return (
    <nav className="navbar navbar-expand-lg" style={{ padding: "18px" }}>
      <div className="container-fluid">
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
          <img
            src={logoSource}
            alt="iLab"
            width="70"
            style={{ cursor: "pointer" }}
            onClick={toggleLogo}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
