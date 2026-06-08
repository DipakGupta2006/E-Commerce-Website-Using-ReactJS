import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="FooterContainer">
                <footer className="footer">

                    <div className="back-to-top"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        
                            Back to Top
                    </div>

                    <div className="footer-top">

                        <div className="footer-column">
                            <h3>About Cartify</h3>
                            <a href="#">About Us</a>
                            <a href="#">Careers</a>
                            <a href="#">Press Releases</a>
                            <a href="#">Blog</a>
                            <a href="#">Investor Relations</a>
                        </div>

                        <div className="footer-column">
                            <h3>Connect With Us</h3>
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">YouTube</a>
                        </div>

                        <div className="footer-column">
                            <h3>Earn With Cartify</h3>
                            <a href="#">Sell Products</a>
                            <a href="#">Become Affiliate</a>
                            <a href="#">Advertise</a>
                            <a href="#">Partner Program</a>
                            <a href="#">Cartify Business</a>
                        </div>

                        <div className="footer-column">
                            <h3>Help Center</h3>
                            <a href="#">Your Account</a>
                            <a href="#">Returns</a>
                            <a href="#">Shipping</a>
                            <a href="#">Track Order</a>
                            <a href="#">Customer Support</a>
                        </div>

                        <div className="footer-column">
                            <h3>Policies</h3>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Refund Policy</a>
                            <a href="#">Cookie Policy</a>
                        </div>

                    </div>

                    <div className="footer-middle">

                        <div className="footer-logo">
                            <h1>Cartify</h1>
                        </div>

                        <div className="footer-address">
                            <h3>Registered Office</h3>
                            <p>
                                Cartify Pvt Ltd,<br />
                                Business Park,<br />
                                Mumbai, Maharashtra,<br />
                                India
                            </p>
                        </div>

                        <div className="footer-contact">
                            <h3>Contact</h3>
                            <p>Email: support@cartify.com</p>
                            <p>Phone: +91 9876543210</p>
                        </div>

                    </div>

                    <div className="footer-bottom">

                        <div className="footer-links">
                            <span>Become Seller</span>
                            <span>Advertise</span>
                            <span>Gift Cards</span>
                            <span>Help Center</span>
                        </div>

                        <div className="copyright">
                            <i class="fa-brands fa-facebook"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-whatsapp"></i><i class="fa-brands fa-x-twitter"></i>
                            {/* <i class="fa-brands fa-linkedin-in"></i><i class="fa-brands fa-telegram"></i><i class="fa-brands fa-youtube"></i> */}
                        </div>

                    </div>

                </footer>

            </div>

        </div>
    )
}

export default Footer

