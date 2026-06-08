import React, { useEffect, useRef } from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const mobileToggleRef = useRef(null);
    const navLinksRef = useRef(null);

    useEffect(() => {
        const mobileToggle = mobileToggleRef.current;
        const navLinks = navLinksRef.current;
        if (!mobileToggle || !navLinks) return;

        const handleToggle = (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('open');
            mobileToggle.classList.toggle('open');
        };

        mobileToggle.addEventListener('click', handleToggle);

        const linkHandlers = [];
        const allLinks = navLinks.querySelectorAll('a');
        allLinks.forEach(link => {
            const onClick = () => {
                navLinks.classList.remove('open');
                mobileToggle.classList.remove('open');
            };
            link.addEventListener('click', onClick);
            linkHandlers.push({ link, onClick });
        });

        return () => {
            mobileToggle.removeEventListener('click', handleToggle);
            linkHandlers.forEach(({ link, onClick }) => link.removeEventListener('click', onClick));
        };
    }, []);

    return (
        <div>
            <div className="nav-container">
                <div className="brand">
                    {/* <i className="fas fa-store brand-icon"></i> */}
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span className="brand-name">Cartify</span>
                    <span></span>
                </div>

                <div className="nav-links" id="navLinks" ref={navLinksRef}>
                    {/* <a href="#" className="active"><i className="fas fa-home"></i> Home</a>
                    <a href="#"><i className="fas fa-tag"></i> Bestsellers</a>
                    <a href="#"><i className="fas fa-fire"></i> Trending</a>
                    <a href="#"><i className="fas fa-percent"></i> Mobiles</a>
                    <a href="#"><i className="fas fa-blog"></i> Fashion</a>
                    <a href="#"><i className="fas fa-headset"></i> Fresh</a> */}
                    <Link to="/">Home</Link>
                    <Link to="/bestsellers">Bestsellers</Link>
                    <Link to="/trending">Trending</Link>
                    <Link to="/mobiles">Mobiles</Link>
                    <Link to="/fashion">Fashion</Link>
                    <Link to="/fresh">Fresh</Link>
                </div>

                <div className="nav-icons">
                    <div className="search-wrapper">
                        <input type="text" placeholder="Search products..." aria-label="Search" />
                        <button aria-label="submit search"><i className="fas fa-search"></i></button>
                    </div>

                    <button className="icon-btn" aria-label="Account">
                        <i className="fas fa-user-circle"></i>
                        <span>Sign in</span>
                    </button>

                    <button className="icon-btn" aria-label="Wishlist">
                        <i className="fas fa-heart"></i>
                        <span>Wishlist</span>
                    </button>

                    <button className="icon-btn" id="cartBtn" aria-label="Shopping cart">
                        <i className="fas fa-bag-shopping"></i>
                        <span>Cart</span>
                        <span className="cart-badge" id="cartCountBadge">0</span>
                    </button>

                    <button className="mobile-toggle" id="mobileToggleBtn" aria-label="Menu" ref={mobileToggleRef}>
                        <i className="fas fa-bars" aria-hidden="true"></i>
                        <span className="hamburger" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
