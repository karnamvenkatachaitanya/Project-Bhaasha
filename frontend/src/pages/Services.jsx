import React from 'react';
import { motion } from 'framer-motion';
import { Check, BookOpen, Users, Globe, ArrowRight, Mic, PenTool, MessageCircle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const programs = [
        {
            id: "telugu",
            title: "Telugu Nerchuko",
            subtitle: "Essential Spoken Telugu for Daily Use",
            description: "Build your spoken fluency through real-life phrases and cultural nuance.",
            features: [
                "Learn to read & write Telugu from scratch",
                "Practice with script-tracing worksheets",
                "Audio stories to boost comprehension",
                "Perfect for beginners & heritage learners"
            ],
            icon: <MessageCircle size={28} />,
            color: "orange",
            gradient: "from-orange-500 to-amber-600"
        },
        {
            id: "tamil",
            title: "Tamil Karupom",
            subtitle: "Structured Learning of Tamil Language & Culture",
            description: "Master sentence building, grammar basics, and native expressions.",
            features: [
                "Interactive vocabulary & script flashcards",
                "Role-play sessions for daily conversations",
                "Learn proverbs & native family expressions",
                "Cultural tidbits for deeper connection"
            ],
            icon: <PenTool size={28} />,
            color: "blue",
            gradient: "from-blue-600 to-indigo-600"
        },
        {
            id: "kannada",
            title: "Kannada Kalike",
            subtitle: "Speak and Understand Everyday Kannada",
            description: "Emphasis on spoken fluency, authentic pronunciation, and real-life usage.",
            features: [
                "Learn alphabets & authentic pronunciation",
                "Practice live with native-speaking trainers",
                "Vocabulary games for immersive learning",
                "Weekend practice circles with community"
            ],
            icon: <Users size={28} />,
            color: "green",
            gradient: "from-green-600 to-emerald-600"
        },
        {
            id: "hindi",
            title: "Hindi Sikhao",
            subtitle: "Beginner to Basic Conversational Hindi",
            description: "Speak confidently using everyday phrases and real-life dialogues.",
            features: [
                "Learn to read/write in Devanagari script",
                "Real-life dialogues & expression-building",
                "Voice note-based speaking assignments",
                "Join community chats for consistent practice"
            ],
            icon: <Mic size={28} />,
            color: "yellow",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            id: "english",
            title: "English Learning",
            subtitle: "Spoken English for Beginners & Professionals",
            description: "Focused training on clear, confident speaking and job readiness.",
            features: [
                "Grammar made simple: quick crash courses",
                "Modules for interview prep & job readiness",
                "WhatsApp-based speaking & correction groups",
                "Ideal for professionals, homemakers & students"
            ],
            icon: <Globe size={28} />,
            color: "red",
            gradient: "from-red-500 to-rose-600"
        }
    ];

    const levels = [
        { name: "Basic", label: "Beginner", price: "₹2999" },
        { name: "Medium", label: "Intermediate", price: "₹4999" },
        { name: "High", label: "Advanced", price: "₹6999" }
    ];

    return (
        <div className="services-wrapper">
            <section className="services-header">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="services-badge"
                    >
                        <Layers size={16} className="text-secondary" />
                        <span className="font-bold text-secondary">Our Curriculum</span>
                    </motion.div>
                    <h1 className="services-title">Choose Your Path</h1>
                    <p className="services-subtitle">Expert-led curriculums designed for tangible results.</p>
                </div>
            </section>

            <section className="services-grid-section">
                <div className="container-custom">
                    <div className="programs-grid">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className={`program-card accent-${program.color}`}
                            >
                                <div className="program-header">
                                    <div className={`program-icon-box bg-gradient-to-br ${program.gradient}`}>
                                        {program.icon}
                                    </div>
                                    <h3 className="program-title">{program.title}</h3>
                                    <p className={`program-subtitle-text text-${program.color}-600`}>{program.subtitle}</p>
                                </div>

                                <div className="program-features">
                                    {program.features.map((feature, idx) => (
                                        <div key={idx} className="feature-row">
                                            <div className={`check-circle text-${program.color}-600 bg-${program.color}-50`}>
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="program-levels-section">
                                    <p className="level-label">Select Level to Enroll:</p>
                                    <div className="levels-grid">
                                        {levels.map((level) => (
                                            <Link
                                                key={level.name}
                                                to={`/contact?course=${program.title}&level=${level.name}`}
                                                className={`level-btn level-${program.color}`}
                                            >
                                                <span className="level-name">{level.name}</span>
                                                {/* <span className="level-tag">{level.label}</span> */}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;