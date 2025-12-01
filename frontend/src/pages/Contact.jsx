import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-wrapper">
            {/* Header */}
            <section className="contact-hero">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="contact-hero-content"
                    >
                        <h1>Let's Start a Conversation</h1>
                        <p>Have questions about a course? Want to partner with us? We're here to help.</p>
                    </motion.div>
                </div>
            </section>

            {/* Overlapping Content Section */}
            <section className="contact-content">
                <div className="container-custom">
                    <div className="contact-card-container">

                        {/* Left: Info Side */}
                        <div className="contact-info-panel">
                            <h2 className="panel-title">Contact Information</h2>
                            <p className="panel-sub">Reach out to us directly or fill out the form.</p>

                            <div className="info-list">
                                <div className="info-item">
                                    <div className="icon-box"><Phone size={20} /></div>
                                    <div>
                                        <p className="info-label">Phone</p>
                                        <p className="info-value">+91-9182444341</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-box"><Mail size={20} /></div>
                                    <div>
                                        <p className="info-label">Email</p>
                                        <p className="info-value">projectbhaasha@gmail.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-box"><MapPin size={20} /></div>
                                    <div>
                                        <p className="info-label">Location</p>
                                        <p className="info-value">Online (Global)</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-box"><Clock size={20} /></div>
                                    <div>
                                        <p className="info-label">Hours</p>
                                        <p className="info-value">Mon-Sat, 9am - 6pm IST</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links-placeholder">
                                {/* Add social icons here if needed */}
                            </div>
                        </div>

                        {/* Right: Form Side */}
                        <div className="contact-form-panel">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;