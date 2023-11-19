import React from "react";
import Logofish from "../assets/logo-ilab.png";
import logoIg from "../assets/logo-instagram.png";
import logoTwt from "../assets/logo-twitter.png";
import logoFb from "../assets/logo-facebook.png";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        </section>
        <section className="">
        <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img
                className="margin"
                src={Logofish}
                alt=""
                style={{ marginBottom: "42px", marginTop: "24px" }}
                />
                <p>Copyright 2022. Infinite Learning</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                    <p><a href="#!" className="text-reset">Email Marketing</a></p>
                    <p><a href="#!" className="text-reset">Campaigns</a></p>
                    <p><a href="#!" className="text-reset">Branding</a></p>
                    <p><a href="#!" className="text-reset">Offline</a></p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">About</h6>
                    <p><a href="#!" className="text-reset">Our Story</a></p>
                    <p><a href="#!" className="text-reset">Benefits</a></p>
                    <p><a href="#!" className="text-reset">Team</a></p>
                    <p><a href="#!" className="text-reset">Careers</a></p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
                    <p>
                        <img
                        src={logoFb}
                        alt=""
                        style={{ height: "24px", paddingRight: "18px" }}
                        />
                        <a href="#!" className="text-reset">Facebook</a>
                        </p>
                    <p>
                        <img
                        src={logoTwt}
                        alt=""
                        style={{ height: "24px", paddingRight: "18px" }}
                        />
                        <a href="#!" className="text-reset">Twitter</a>
                        </p>
                    <p>
                        <img
                        src={logoIg}
                        alt=""
                        style={{ height: "24px", paddingRight: "18px" }}
                        />
                        <a href="#!" className="text-reset">Instagram</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
  );
};

export default Footer;
