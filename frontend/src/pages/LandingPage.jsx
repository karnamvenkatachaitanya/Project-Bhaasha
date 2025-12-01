import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Globe, BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="landing-wrapper">
            <Hero />

            {/* --- Features Section (Bento Grid) --- */}
            <section className="features-section">
                <div className="container-custom">
                    <div className="features-grid-layout">

                        {/* Left: Text Content */}
                        <motion.div
                            className="features-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeIn} className="badge-wrapper">
                                <span className="badge-dot"></span>
                                <span className="badge-text">Why Choose Us</span>
                            </motion.div>

                            <motion.h2 variants={fadeIn} className="section-heading">
                                Redefining Language <br />
                                <span className="text-gradient">Learning Education</span>
                            </motion.h2>

                            <motion.p variants={fadeIn} className="section-desc">
                                We believe language is a gateway to identity. Our approach combines modern pedagogy with deep cultural immersion to ensure you don't just speak, but belong.
                            </motion.p>

                            <motion.div variants={fadeIn} className="features-list">
                                {[
                                    "Curated by Expert Linguists",
                                    "Live Interactive Sessions",
                                    "Culturally Rich Curriculum",
                                    "Confidence-First Approach"
                                ].map((feature, index) => (
                                    <div key={index} className="feature-list-item">
                                        <div className="check-icon">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div variants={fadeIn}>
                                <Link to="/about" className="link-with-arrow">
                                    <span>Discover our methodology</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right: Feature Cards (Bento Style) */}
                        <motion.div
                            className="bento-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {/* Card 1 */}
                            <motion.div variants={fadeIn} className="bento-card card-blue">
                                <div className="card-icon-wrapper icon-blue">
                                    <Users size={24} />
                                </div>
                                <div className="card-content">
                                    <h3>Expert Trainers</h3>
                                    <p>Learn directly from certified native speakers who understand the nuance.</p>
                                </div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div variants={fadeIn} className="bento-card card-orange">
                                <div className="card-icon-wrapper icon-orange">
                                    <Globe size={24} />
                                </div>
                                <div className="card-content">
                                    <h3>Global Access</h3>
                                    <p>Connect with a worldwide community of learners from your home.</p>
                                </div>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div variants={fadeIn} className="bento-card card-green">
                                <div className="card-icon-wrapper icon-green">
                                    <BookOpen size={24} />
                                </div>
                                <div className="card-content">
                                    <h3>Custom Path</h3>
                                    <p>Tailored curriculum that adapts to your personal learning pace.</p>
                                </div>
                            </motion.div>

                            {/* Card 4 */}
                            <motion.div variants={fadeIn} className="bento-card card-purple">
                                <div className="card-icon-wrapper icon-purple">
                                    <Sparkles size={24} />
                                </div>
                                <div className="card-content">
                                    <h3>AI Practice</h3>
                                    <p>24/7 smart speaking partner to refine your pronunciation.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Component */}
            <Testimonials />

            {/* --- CTA Section (Immersive) --- */}
            <section className="cta-section-wrapper">
                <div className="container-custom">
                    <motion.div
                        className="cta-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Abstract Background Shapes within Card */}
                        <div className="cta-bg-glow glow-1"></div>
                        <div className="cta-bg-glow glow-2"></div>

                        <div className="cta-content">
                            <h2 className="cta-heading">
                                Ready to embrace your <br />
                                <span className="text-white-gradient">Mother Tongue?</span>
                            </h2>
                            <p className="cta-sub">
                                Join 5,000+ learners who have rediscovered their roots and boosted their careers with Project Bhaasha.
                            </p>

                            <div className="cta-buttons">
                                <Link to="/contact" className="btn-cta-primary">
                                    Book a Free Demo
                                </Link>
                                <Link to="/services" className="btn-cta-secondary">
                                    Explore Courses
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;