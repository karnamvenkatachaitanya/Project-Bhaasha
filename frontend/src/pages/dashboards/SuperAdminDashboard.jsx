import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Plus, Trash2, Activity, Search, Settings, MoreVertical, BarChart3, Lock } from 'lucide-react';
import { useNotification } from '../../components/NotificationSystem';
import './SuperAdminDashboard.css';

const SuperAdminDashboard = () => {
    const { addNotification } = useNotification();
    const [admins, setAdmins] = useState([
        { id: 1, name: "Admin User", email: "admin@bhaasha.com", status: "Active", role: "System Admin" },
        { id: 2, name: "Regional Head", email: "north@bhaasha.com", status: "Active", role: "Region Manager" },
        { id: 3, name: "Content Lead", email: "content@bhaasha.com", status: "Inactive", role: "Editor" },
    ]);

    const handleRemoveAdmin = (id) => {
        setAdmins(admins.filter(a => a.id !== id));
        addNotification("Admin removed successfully", "success");
    };

    return (
        <div className="super-admin-layout">
            <header className="sa-header">
                <div className="header-content">
                    <div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="badge-super">
                            <Shield size={14} /> Super Admin
                        </motion.div>
                        <h1 className="sa-title">System Control</h1>
                    </div>
                    <div className="sa-profile">
                        <button className="settings-btn"><Settings size={20} /></button>
                        <div className="sa-avatar">SA</div>
                    </div>
                </div>
            </header>

            <main className="sa-main">
                {/* Stats */}
                <div className="sa-stats-grid">
                    <div className="sa-card stat-card">
                        <div className="icon-wrapper purple"><Users size={24} /></div>
                        <div>
                            <p className="label">Total Admins</p>
                            <h3>{admins.length}</h3>
                        </div>
                    </div>
                    <div className="sa-card stat-card">
                        <div className="icon-wrapper blue"><BarChart3 size={24} /></div>
                        <div>
                            <p className="label">System Health</p>
                            <h3>99.9%</h3>
                        </div>
                    </div>
                    <div className="sa-card stat-card">
                        <div className="icon-wrapper orange"><Lock size={24} /></div>
                        <div>
                            <p className="label">Security</p>
                            <h3>Secure</h3>
                        </div>
                    </div>
                </div>

                {/* Main Table */}
                <div className="sa-card table-card">
                    <div className="table-header">
                        <h2>Administrator Access</h2>
                        <button className="add-btn" onClick={() => addNotification("Coming soon", "info")}>
                            <Plus size={18} /> Add Admin
                        </button>
                    </div>

                    <table className="sa-table">
                        <thead>
                            <tr>
                                <th>Administrator</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th className="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((admin) => (
                                <tr key={admin.id}>
                                    <td>
                                        <div className="user-cell">
                                            <div className="user-initials">{admin.name.substring(0, 2).toUpperCase()}</div>
                                            <div>
                                                <div className="font-bold">{admin.name}</div>
                                                <div className="text-sm text-gray-500">{admin.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span className="role-badge">{admin.role}</span></td>
                                    <td>
                                        <span className={`status-dot ${admin.status === 'Active' ? 'active' : 'inactive'}`}>
                                            {admin.status}
                                        </span>
                                    </td>
                                    <td className="text-right">
                                        <button onClick={() => handleRemoveAdmin(admin.id)} className="icon-btn-danger">
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default SuperAdminDashboard;