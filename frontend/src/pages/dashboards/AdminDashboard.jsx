import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Activity, Settings, Search, Plus, X, BarChart3, UserPlus, ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../components/NotificationSystem';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const { user } = useAuth();
    const { addNotification } = useNotification();
    const [showAddUser, setShowAddUser] = useState(false);

    const handleCreateUser = (e) => {
        e.preventDefault();
        setShowAddUser(false);
        addNotification("New user created successfully!", "success");
    };

    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="sidebar-logo">
                    <div className="logo-box">PB</div>
                    <span className="logo-text">Admin</span>
                </div>
                <nav className="sidebar-nav">
                    <a href="#" className="nav-item active"><Activity size={20} /> Dashboard</a>
                    <a href="#" className="nav-item"><Users size={20} /> Users</a>
                    <a href="#" className="nav-item"><BarChart3 size={20} /> Analytics</a>
                    <a href="#" className="nav-item"><Settings size={20} /> Settings</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
                <header className="admin-header-bar">
                    <div>
                        <h1 className="page-title">Overview</h1>
                        <p className="page-subtitle">Welcome back, {user?.name}</p>
                    </div>
                    <button onClick={() => setShowAddUser(true)} className="btn-primary-admin">
                        <UserPlus size={18} /> Add User
                    </button>
                </header>

                {/* Stats Grid */}
                <div className="admin-stats-grid">
                    {[
                        { label: "Total Learners", value: "12,450", change: "+12%", color: "blue", icon: <Users size={20} /> },
                        { label: "Active Trainers", value: "45", change: "+2", color: "green", icon: <Activity size={20} /> },
                        { label: "Lessons Done", value: "85k", change: "+24%", color: "orange", icon: <BookOpen size={20} /> },
                        { label: "AI Usage", value: "3.2k", change: "+18%", color: "purple", icon: <BarChart3 size={20} /> },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="admin-stat-card"
                        >
                            <div className="stat-top">
                                <span className="stat-label">{stat.label}</span>
                                <div className={`stat-icon icon-${stat.color}`}>{stat.icon}</div>
                            </div>
                            <div className="stat-bottom">
                                <h3 className="stat-value">{stat.value}</h3>
                                <span className="stat-change">{stat.change}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Recent Activity Table */}
                <div className="data-table-card">
                    <div className="table-header">
                        <h3>Recent Registrations</h3>
                        <div className="table-search">
                            <Search size={16} className="text-gray-400" />
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>

                    <div className="table-wrapper">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Rahul Sharma", role: "Learner", date: "Today, 10:23 AM", status: "Active" },
                                    { name: "Priya Patel", role: "Trainer", date: "Yesterday, 4:15 PM", status: "Pending" },
                                    { name: "Amit Singh", role: "Learner", date: "Nov 28, 2025", status: "Active" },
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="font-bold text-dark">{row.name}</td>
                                        <td><span className="pill-role">{row.role}</span></td>
                                        <td className="text-muted">{row.date}</td>
                                        <td>
                                            <span className={`pill-status status-${row.status.toLowerCase()}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Add User Modal */}
                {showAddUser && (
                    <div className="modal-overlay">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="modal-container"
                        >
                            <button onClick={() => setShowAddUser(false)} className="close-btn"><X size={20} /></button>
                            <div className="modal-header">
                                <div className="modal-icon"><UserPlus size={28} /></div>
                                <h2>Create New User</h2>
                            </div>
                            <form onSubmit={handleCreateUser} className="modal-form">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="john@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Role</label>
                                    <select>
                                        <option value="learner">Learner</option>
                                        <option value="trainer">Trainer</option>
                                    </select>
                                </div>
                                <button type="submit" className="submit-btn">Create User</button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;