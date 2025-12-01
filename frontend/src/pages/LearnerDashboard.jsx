import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Book, Trophy, Activity, Mic, Play, ChevronRight, Bell, Lock } from 'lucide-react';
import PracticeInterface from '../components/PracticeInterface';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../components/NotificationSystem';
import './LearnerDashboard.css';

const LearnerDashboard = () => {
    const [showPractice, setShowPractice] = useState(false);
    const { user } = useAuth();
    const { addNotification } = useNotification();

    useEffect(() => {
        setTimeout(() => {
            addNotification("New assignment due tomorrow!", "info");
        }, 3000);
    }, [addNotification]);

    return (
        <div className="dashboard-layout">
            {/* Top Navigation Bar */}
            <header className="dashboard-nav">
                <div className="nav-container">
                    <div className="nav-logo">
                        <span className="logo-icon">PB</span>
                        <span className="logo-text">Learning Hub</span>
                    </div>
                    <div className="nav-actions">
                        <div className="streak-pill">
                            <Flame size={16} className="text-orange-500 fill-orange-500" />
                            <span>12</span>
                        </div>
                        <button className="icon-btn"><Bell size={20} /></button>
                        <div className="user-avatar">{user?.name?.charAt(0) || 'L'}</div>
                    </div>
                </div>
            </header>

            <main className="dashboard-content">
                <div className="content-container">

                    {/* Welcome Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="welcome-banner"
                    >
                        <div>
                            <h1>Namaste, {user?.name || 'Learner'}</h1>
                            <p>Ready to continue your Hindi journey?</p>
                        </div>
                    </motion.div>

                    <div className="dashboard-grid">

                        {/* LEFT COLUMN */}
                        <div className="main-feed">
                            {/* Stats Overview */}
                            <div className="stats-row">
                                <div className="stat-widget">
                                    <div className="stat-icon blue"><Book size={20} /></div>
                                    <div className="stat-info">
                                        <span className="stat-label">Lessons</span>
                                        <span className="stat-value">24</span>
                                    </div>
                                </div>
                                <div className="stat-widget">
                                    <div className="stat-icon yellow"><Trophy size={20} /></div>
                                    <div className="stat-info">
                                        <span className="stat-label">XP Earned</span>
                                        <span className="stat-value">1,250</span>
                                    </div>
                                </div>
                                <div className="stat-widget">
                                    <div className="stat-icon green"><Activity size={20} /></div>
                                    <div className="stat-info">
                                        <span className="stat-label">Fluency</span>
                                        <span className="stat-value">78%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Learning Path */}
                            <section className="learning-path">
                                <div className="section-header">
                                    <h3>Current Course</h3>
                                    <a href="#" className="see-all">See Curriculum</a>
                                </div>

                                <div className="lesson-stack">
                                    {[
                                        { title: "Introduction to Hindi", sub: "Basics & Greetings", status: "completed", progress: 100 },
                                        { title: "Common Greetings", sub: "Formal vs Informal", status: "active", progress: 60 },
                                        { title: "Ordering Food", sub: "Restaurant Vocabulary", status: "locked", progress: 0 },
                                    ].map((lesson, idx) => (
                                        <div key={idx} className={`lesson-row ${lesson.status}`}>
                                            <div className="status-indicator">
                                                {lesson.status === 'completed' && <div className="dot completed">✓</div>}
                                                {lesson.status === 'active' && <div className="dot active"><div className="pulse" /></div>}
                                                {lesson.status === 'locked' && <div className="dot locked"><Lock size={12} /></div>}
                                            </div>
                                            <div className="lesson-details">
                                                <h4>{lesson.title}</h4>
                                                <p>{lesson.sub}</p>
                                                {lesson.status === 'active' && (
                                                    <div className="progress-bar-sm">
                                                        <div className="fill" style={{ width: `${lesson.progress}%` }} />
                                                    </div>
                                                )}
                                            </div>
                                            <button className="action-btn">
                                                {lesson.status === 'active' ? 'Resume' : lesson.status === 'completed' ? 'Review' : 'Locked'}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="sidebar">
                            {/* Practice Card */}
                            <motion.div whileHover={{ scale: 1.02 }} className="practice-hero-card">
                                <div className="card-bg-glow" />
                                <div className="card-content">
                                    <div className="icon-circle">
                                        <Mic size={24} />
                                    </div>
                                    <h3>AI Speaking Coach</h3>
                                    <p>Perfect your pronunciation with real-time feedback.</p>
                                    <button onClick={() => setShowPractice(true)} className="start-btn">
                                        Start Session <ChevronRight size={16} />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Daily Challenge */}
                            <div className="challenge-widget">
                                <h4>Daily Challenge</h4>
                                <div className="challenge-box">
                                    <p className="prompt">"Where is the train station?"</p>
                                    <input type="text" placeholder="Type in Hindi..." />
                                    <button>Check</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {showPractice && <PracticeInterface onClose={() => setShowPractice(false)} />}
        </div>
    );
};

export default LearnerDashboard;