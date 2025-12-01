import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, Clock, MessageSquare, Plus, X, Search, Filter, BookOpen, TrendingUp, ChevronRight } from 'lucide-react';
import { useNotification } from '../../components/NotificationSystem';
import './TrainerDashboard.css';

const TrainerDashboard = () => {
    const { addNotification } = useNotification();
    const [showAssign, setShowAssign] = useState(false);

    const handleAssign = (e) => {
        e.preventDefault();
        setShowAssign(false);
        addNotification("Lesson assigned to students successfully!", "success");
    };

    return (
        <div className="trainer-layout">
            {/* Header */}
            <header className="trainer-header">
                <div className="header-container">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="header-title"
                        >
                            Trainer <span className="text-gradient">Portal</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="header-subtitle"
                        >
                            Managing <span className="text-highlight">24 Active Students</span>
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="header-actions"
                    >
                        <button className="btn-icon-text">
                            <Filter size={18} /> <span>Filter</span>
                        </button>
                        <button onClick={() => setShowAssign(true)} className="btn-primary-action">
                            <Plus size={18} /> <span>Assign Lesson</span>
                        </button>
                    </motion.div>
                </div>
            </header>

            <main className="dashboard-grid">
                {/* Left Column: Student Progress */}
                <div className="main-column">
                    <section className="progress-card">
                        <div className="card-header">
                            <div className="title-group">
                                <Users className="text-secondary" size={24} />
                                <h2>Student Progress</h2>
                            </div>
                            <div className="search-field">
                                <Search className="search-icon" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search students..."
                                />
                            </div>
                        </div>

                        <div className="student-list">
                            {[
                                { name: "Arjun Kumar", lesson: "Intermediate Hindi", progress: 75, status: "On Track", avatar: "blue" },
                                { name: "Sarah Jenkins", lesson: "Basic Tamil", progress: 40, status: "Needs Help", avatar: "orange" },
                                { name: "Mohammed Ali", lesson: "Business Urdu", progress: 90, status: "Excellent", avatar: "green" },
                                { name: "Priya Sharma", lesson: "Advanced Bengali", progress: 65, status: "On Track", avatar: "purple" },
                            ].map((student, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="student-row"
                                >
                                    <div className="student-info">
                                        <div className={`avatar avatar-${student.avatar}`}>
                                            {student.name[0]}
                                        </div>
                                        <div>
                                            <h3>{student.name}</h3>
                                            <p>{student.lesson}</p>
                                        </div>
                                    </div>

                                    <div className="progress-meta">
                                        <div className="progress-bar-wrapper">
                                            <div className="progress-text">
                                                <span>Progress</span>
                                                <span className="value">{student.progress}%</span>
                                            </div>
                                            <div className="progress-track">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${student.progress}%` }}
                                                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                                    className={`progress-fill ${student.status === 'Needs Help' ? 'warning' : 'success'}`}
                                                />
                                            </div>
                                        </div>
                                        <span className={`status-badge status-${student.status.toLowerCase().replace(' ', '-')}`}>
                                            {student.status}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Quick Actions & Schedule */}
                <div className="sidebar-column">
                    <div className="quick-actions-card">
                        <div className="card-bg-glow" />

                        <h3 className="card-title-light">
                            <TrendingUp size={20} /> Quick Actions
                        </h3>

                        <div className="action-buttons-stack">
                            <button onClick={() => setShowAssign(true)} className="action-btn">
                                <div className="icon-box gradient-orange">
                                    <BookOpen size={20} />
                                </div>
                                <span>Assign New Lesson</span>
                                <ChevronRight size={16} className="arrow" />
                            </button>
                            <button className="action-btn">
                                <div className="icon-box gradient-blue">
                                    <MessageSquare size={20} />
                                </div>
                                <span>Message Group</span>
                                <ChevronRight size={16} className="arrow" />
                            </button>
                        </div>
                    </div>

                    <div className="upcoming-card">
                        <h3 className="card-title">
                            <Clock size={20} className="text-secondary" />
                            Upcoming Classes
                        </h3>
                        <div className="events-list">
                            {[
                                { time: "10:00 AM", title: "Hindi Grammar", type: "Live Session", color: "blue" },
                                { time: "02:00 PM", title: "Tamil Basics", type: "Group Call", color: "orange" },
                                { time: "04:30 PM", title: "Urdu Poetry", type: "Workshop", color: "purple" }
                            ].map((event, i) => (
                                <div key={i} className="event-item">
                                    <div className={`time-box box-${event.color}`}>
                                        <span className="time">{event.time.split(' ')[0]}</span>
                                        <span className="period">{event.time.split(' ')[1]}</span>
                                    </div>
                                    <div className="event-details">
                                        <h4>{event.title}</h4>
                                        <p><Clock size={12} /> {event.type}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Assign Lesson Modal */}
            {showAssign && (
                <div className="modal-overlay">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        className="modal-container"
                    >
                        <button onClick={() => setShowAssign(false)} className="close-btn">
                            <X size={20} />
                        </button>

                        <div className="modal-header">
                            <div className="modal-icon"><BookOpen size={28} /></div>
                            <h2>Assign New Lesson</h2>
                            <p>Send coursework to your students</p>
                        </div>

                        <form onSubmit={handleAssign} className="modal-form">
                            <div className="form-group">
                                <label>Select Student/Group</label>
                                <select>
                                    <option>All Students</option>
                                    <option>Beginner Batch A</option>
                                    <option>Arjun Kumar</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Lesson Module</label>
                                <select>
                                    <option>Unit 5: Past Tense</option>
                                    <option>Unit 6: Market Vocabulary</option>
                                    <option>Unit 7: Family Relations</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Due Date</label>
                                <input type="date" />
                            </div>

                            <button type="submit" className="submit-btn">
                                Assign Work
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default TrainerDashboard;