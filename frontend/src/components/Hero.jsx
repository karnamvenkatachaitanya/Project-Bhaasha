import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Star, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    // Animation variants for staggered text
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="hero-section">
            {/* Background Atmosphere */}
            <div className="hero-bg-mesh" />
            <div className="hero-bg-grain" />

            <div className="hero-container">
                <div className="hero-grid">

                    {/* --- LEFT: Text Content --- */}
                    <motion.div
                        className="hero-content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Premium Badge */}
                        <motion.div variants={itemVariants} className="hero-pill">
                            <span className="hero-pill-dot"></span>
                            <span className="hero-pill-text">#1 Platform for Indian Languages</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1 variants={itemVariants} className="hero-title">
                            Master the Art of <br />
                            <span className="hero-title-gradient">Native Communication</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="hero-subtitle">
                            Connect deeper with your heritage. We combine linguist-designed curriculums with cultural immersion to help you speak with confidence and pride.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="hero-actions">
                            <Link to="/contact" className="btn-hero-primary">
                                <span>Start Learning Free</span>
                                <ArrowRight size={18} />
                            </Link>

                            <Link to="/about" className="btn-hero-secondary">
                                <div className="play-icon-wrapper">
                                    <Play size={14} fill="currentColor" />
                                </div>
                                <span>Watch Video</span>
                            </Link>
                        </motion.div>

                        {/* Social Proof / Stats */}
                        <motion.div variants={itemVariants} className="hero-trust">
                            <div className="avatar-stack">
                                <img src="https://i.pravatar.cc/100?img=1" alt="Student" />
                                <img src="https://i.pravatar.cc/100?img=5" alt="Student" />
                                <img src="https://i.pravatar.cc/100?img=8" alt="Student" />
                                <div className="avatar-placeholder">5k+</div>
                            </div>
                            <div className="trust-text">
                                <div className="trust-rating">
                                    <Star size={14} fill="#fbbf24" className="text-amber-400" />
                                    <span className="font-bold">4.9/5</span> Rating
                                </div>
                                <p className="text-xs text-slate-500">Trusted by global learners</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* --- RIGHT: Visual Composition --- */}
                    <div className="hero-visuals">
                        {/* Main Portrait */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="visual-main-card"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Confident Speaker"
                                className="visual-img"
                            />

                            {/* Floating "Live" Badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="floating-badge badge-top-right glass-panel"
                            >
                                <div className="live-indicator">
                                    <span className="ping-dot"></span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm">Live Session</p>
                                    <p className="text-xs text-slate-500">Speaking Hindi 101</p>
                                </div>
                            </motion.div>

                            {/* Floating "Success" Card */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="floating-badge badge-bottom-left glass-panel"
                            >
                                <div className="icon-circle bg-green-100 text-green-600">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-primary">Fluency Unlocked</p>
                                    <p className="text-xs text-slate-500">Just now</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Background Decoration Circle */}
                        <div className="visual-circle-bg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;