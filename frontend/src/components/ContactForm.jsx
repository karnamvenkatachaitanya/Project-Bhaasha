import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageCircle, Globe, ChevronDown } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', language: '', message: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

    return (
        <form className="cf-form">
            <h3 className="cf-title">Send a Message</h3>

            <div className="cf-row">
                <div className="cf-group">
                    <label htmlFor="name" className="cf-label">Full Name</label>
                    <div className="cf-input-wrapper">
                        <User className="cf-icon" size={20} />
                        <input
                            type="text"
                            id="name"
                            className="cf-input"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="cf-group">
                    <label htmlFor="email" className="cf-label">Email Address</label>
                    <div className="cf-input-wrapper">
                        <Mail className="cf-icon" size={20} />
                        <input
                            type="email"
                            id="email"
                            className="cf-input"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="cf-row">
                <div className="cf-group">
                    <label htmlFor="phone" className="cf-label">Phone Number</label>
                    <div className="cf-input-wrapper">
                        <Phone className="cf-icon" size={20} />
                        <input
                            type="tel"
                            id="phone"
                            className="cf-input"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="cf-group">
                    <label htmlFor="language" className="cf-label">Interest</label>
                    <div className="cf-input-wrapper">
                        <Globe className="cf-icon" size={20} />
                        <select
                            id="language"
                            className="cf-input"
                            value={formData.language}
                            onChange={handleChange}
                        >
                            <option value="">Select Language</option>
                            <option value="hindi">Hindi</option>
                            <option value="tamil">Tamil</option>
                            <option value="english">Spoken English</option>
                            <option value="kannada">Kannada</option>
                        </select>
                        <ChevronDown className="cf-select-arrow" size={16} />
                    </div>
                </div>
            </div>

            <div className="cf-group">
                <label htmlFor="message" className="cf-label">Message</label>
                <div className="cf-input-wrapper">
                    <MessageCircle className="cf-icon cf-icon-top" size={20} />
                    <textarea
                        id="message"
                        rows="4"
                        className="cf-input"
                        placeholder="Tell us about your goals..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>

            <button type="submit" className="cf-submit-btn">
                <span>Send Message</span>
                <Send size={18} />
            </button>
        </form>
    );
};

export default ContactForm;