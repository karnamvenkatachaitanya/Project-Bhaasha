import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Globe, Sparkles, Target, MapPin, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
    const trainers = [
        {
            name: "Rohini",
            role: "Kannada Language Trainer",
            location: "Bangalore, Karnataka",
            image: "https://lh3.googleusercontent.com/sitesv/AAzXCkfnh_KuXcndVtxwbV6qL5_Nhnj6ABQt2pyd-fveurrl2Wx6ToQeQ3purD1YbhdsGcp88vqUKzR6h-zbuLgt9QnW86R4bIwgbP9wFO3gevgo0VuXCiHFJNWAfMhjfVe9LdbYM7cWPyUO5sl2oojJTjagT7bKgR9v9JMfGuZJIc7Fsg0_dO5JGEhB2wJlyYKwtWKarfheK0C1cQzA1FJ3nBkYsP3KKKsD8g=w1280",
            bio: "A native of Bangalore who loves traveling. She focuses on making Kannada learning simple, enjoyable, and culturally enriching. A passionate dancer who enjoys reading and sports."
        },
        {
            name: "Shenbegam",
            role: "Tamil Language Trainer",
            location: "Dindigul, Tamil Nadu",
            image: "https://lh3.googleusercontent.com/sitesv/AAzXCkeKK-BpkW5K8Vks-3XlrxTE4P4NnTjbNVxg0P1G-z-LBVH-EgqY1WYe-tcUWzustS5TG6BlPreVsnpcAm3RV1r9Ush3TNqeznf58FtVSey-3DRKqVrxCD4V5a24V2_A4zOSKCRtyO4SBexyVQnR42AfKxAgbNHzWO4vj-x5DM0UjgByKUILLY6Uhiqv-EFP-Lilw2iTxmMyYvDonDMWEb6TU1IZf0a5aQg_SBo=w1280",
            bio: "A passionate traveler and mentor from Palani Town. She guides freshers to achieve their dreams and loves reading books and writing stories & poems in Tamil."
        },
        {
            name: "Shriraksha Gudadari",
            role: "Kannada Language Trainer",
            location: "Dharwad, Karnataka",
            image: "https://lh3.googleusercontent.com/sitesv/AAzXCkf4VzXXtSrD3fAK_zxPzYz-SMwdOrLTMItVWOlxI-z2uiUm4ebpZ0dwwiS8Arf_kXohPkRpXYTSCHPCDYtM82a8lJeNrf5HxAkE9sT6HIdRE4b9ONISKBz_1IcPRI69nK9TR2MvwDgmRSiE5HIanVM8AiVpODVp9HOiaNKNZcrUBUYt7ZsxCyONDe9quMZPdz3ejCg6ACo-jm72Bb-gkDac-1DjFb138xSvbG4=w1280",
            bio: "A passionate dancer and photographer who loves teaching people in need. Always eager to learn new things, she enjoys dancing, singing, and painting."
        },
        {
            name: "Shivani",
            role: "Hindi Language Trainer",
            location: "Rajasthan",
            image: "https://lh3.googleusercontent.com/sitesv/AAzXCkfPSwohuFsstaLsEwIzyO812Qx-wGjojCtMPP9y2fUPk2-ErhkFBGk0lJhgIRitYaq5AgXKDM8LjQy-21NLXT2xDNvh2JJG5O9kuKZFcwWaoM9oeffuLSpWFhdB6DnmKFXzFOvPCuFBDiKvL6YEhWHe6XGSHl4F9ONwVXTXT4UE3IJcPIdj0UcOuBFrFN_aXRTzLPA8T5_FNS_04JqwuGH6E7v-5KUyou1v=w1280",
            bio: "A skilled communicator with a deep love for literature and culture. Passionate about guiding learners, exploring creative writing, and helping others grow."
        }
    ];

    return (
        <div className="about-wrapper">
            {/* --- Hero Section --- */}
            <section className="about-hero">
                <div className="about-hero-bg-mesh" />
                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pill-badge"
                    >
                        <Sparkles size={14} className="text-orange-500" />
                        <span>Our Story</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="about-hero-title"
                    >
                        Connecting Hearts through <br />
                        <span className="text-gradient">Language & Culture</span>
                    </motion.h1>
                </div>
            </section>

            {/* --- Philosophy Section --- */}
            <section className="philosophy-section">
                <div className="container-custom">
                    <div className="philosophy-grid">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="philosophy-visual"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Community gathering"
                            />
                            <div className="floating-quote-card">
                                <p>"Language is the road map of a culture. It tells you where its people come from and where they are going."</p>
                            </div>
                        </motion.div>

                        <div className="philosophy-content">
                            <h2 className="section-title">Who We Are</h2>
                            <p className="lead-text">
                                Project Bhaasha is more than just a learning platform; it is a movement to <span className="highlight">revive and celebrate</span> our linguistic roots.
                            </p>
                            <p className="body-text">
                                We believe that learning a language is the first step towards understanding a culture. Our team consists of passionate educators, linguists, and artists who bring the warmth of their native soil into every virtual classroom. We don't just teach you to speak; we teach you to belong.
                            </p>

                            <div className="stats-row">
                                <div className="stat-block">
                                    <h3>50+</h3>
                                    <p>Expert Linguists</p>
                                </div>
                                <div className="stat-block">
                                    <h3>10k+</h3>
                                    <p>Lives Touched</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Trainers Section (New) --- */}
            <section className="trainers-section">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Meet Our Mentors</h2>
                        <p className="section-subtitle">Native speakers, passionate educators, and cultural ambassadors.</p>
                    </div>

                    <div className="trainers-grid">
                        {trainers.map((trainer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="trainer-card"
                            >
                                <div className="trainer-img-container">
                                    <img src={trainer.image} alt={trainer.name} onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + trainer.name }} />
                                    <div className="trainer-overlay" />
                                </div>
                                <div className="trainer-info">
                                    <div className="trainer-header-row">
                                        <h3>{trainer.name}</h3>
                                        <span className="trainer-role-badge">{trainer.role.split(' ')[0]}</span>
                                    </div>
                                    <p className="trainer-role-full">{trainer.role}</p>

                                    <div className="trainer-location">
                                        <MapPin size={14} />
                                        <span>{trainer.location}</span>
                                    </div>

                                    <p className="trainer-bio">{trainer.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* "And Many More" Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="trainers-more-banner"
                    >
                        <div className="more-content">
                            <h3>And many more passionate trainers...</h3>
                            <p>Our community is growing every day with experts from every corner of India.</p>
                        </div>
                        <button className="join-team-btn">
                            Join our Team <ArrowRight size={18} />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* --- Values Section --- */}
            <section className="values-section">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Core Values</h2>
                        <p className="section-subtitle">The principles that guide our curriculum.</p>
                    </div>

                    <div className="bento-values-grid">
                        {[
                            { title: "Empowerment", desc: "Building confidence through fluency.", icon: <Target className="text-orange-500" />, size: "large" },
                            { title: "Inclusivity", desc: "Learning is for everyone.", icon: <Users className="text-blue-500" />, size: "small" },
                            { title: "Authenticity", desc: "Real conversations, not textbooks.", icon: <Heart className="text-red-500" />, size: "small" },
                            { title: "Excellence", desc: "Scientific pedagogy.", icon: <BookOpen className="text-green-500" />, size: "medium" },
                            { title: "Community", desc: "Grow together.", icon: <Globe className="text-purple-500" />, size: "medium" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`bento-value-card ${item.size}`}
                            >
                                <div className="value-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;