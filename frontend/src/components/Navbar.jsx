import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    // Handle Scroll Logic (Hide on down, Show on up, Glass effect)
    useEffect(() => {
        const controlHeader = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                // Glass effect trigger
                if (currentScrollY > 10) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }

                // Hide/Show trigger
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsVisible(false); // Scrolling down
                } else {
                    setIsVisible(true); // Scrolling up
                }

                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', controlHeader);
        return () => window.removeEventListener('scroll', controlHeader);
    }, [lastScrollY]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <header
                className={`
                    navbar 
                    ${isScrolled ? 'navbar--scrolled' : ''} 
                    ${!isVisible ? 'navbar--hidden' : ''}
                    ${isMenuOpen ? 'menu-is-open' : ''}
                `}
            >
                <div className="navbar-container">
                    {/* --- Logo Section --- */}
                    <div className="navbar-logo">
                        <Link to="/" onClick={closeMenu} className="logo-link">
                            <div className="logo-icon-wrapper">
                                <Globe size={24} className="text-white" />
                            </div>
                            <span className="logo-text">
                                Project <span className="logo-accent">Bhaasha</span>
                            </span>
                        </Link>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <nav className="navbar-desktop-nav">
                        <ul className="desktop-links">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={location.pathname === link.path ? 'active' : ''}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* --- Desktop CTA Buttons --- */}
                    <div className="navbar-cta">
                        {/* CHANGED: Now using btn-secondary for a distinct button look */}
                        <Link to="/dashboard" className="btn-secondary">Login</Link>
                        <Link to="/contact" className="btn-primary">Book a Demo</Link>
                    </div>

                    {/* --- Mobile Hamburger Toggle --- */}
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* --- Mobile Menu Overlay & Drawer --- */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu} />

            <div className={`mobile-menu-drawer ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-header">
                    <span className="mobile-logo-text">Menu</span>
                    <button className="mobile-close-btn" onClick={closeMenu}>&times;</button>
                </div>

                <div className="mobile-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={closeMenu}
                            className={location.pathname === link.path ? 'active' : ''}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="mobile-cta-section">
                    <Link to="/dashboard" onClick={closeMenu} className="btn-mobile-secondary">
                        Login
                    </Link>
                    <Link to="/contact" onClick={closeMenu} className="btn-mobile-primary">
                        Book a Demo
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;