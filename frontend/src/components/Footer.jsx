import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="container-custom">
                <div className="footer-top">
                    {/* Brand */}
                    <div className="footer-brand">
                        <Link to="/" className="brand-logo">
                            <div className="logo-icon-box"><Globe size={20} /></div>
                            <span className="logo-text">Project <span className="highlight">Bhaasha</span></span>
                        </Link>
                        <p className="brand-desc">
                            Empowering Indians to connect with their roots through language.
                            Authentic, immersive, and effective learning for everyone.
                        </p>
                        <div className="social-stack">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="social-btn"><Icon size={18} /></a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="footer-nav">
                        <div className="nav-col">
                            <h4>Company</h4>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="nav-col">
                            <h4>Programs</h4>
                            <Link to="/services">Spoken English</Link>
                            <Link to="/services">Regional Languages</Link>
                            <Link to="/services">Kids Batch</Link>
                        </div>
                        <div className="nav-col">
                            <h4>Get in Touch</h4>
                            <div className="contact-item">
                                <Phone size={16} /> <span>+91-9182444341</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={16} /> <span>hello@bhaasha.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Project Bhaasha. All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;