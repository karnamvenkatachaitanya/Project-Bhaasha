import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, ArrowRight, Star, Globe } from 'lucide-react';
import './Login.css';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await login(email, password);
        setIsLoading(false);
    };

    return (
        <div className="login-wrapper">
            {/* Left Side - Visuals */}
            <div className="login-visual-side">
                <div className="visual-overlay" />
                <div className="visual-content">
                    <div className="visual-logo">
                        <Globe className="text-white" size={32} />
                        <span className="font-bold text-2xl text-white">Project Bhaasha</span>
                    </div>

                    <div className="testimonial-card">
                        <div className="flex gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#fbbf24" className="text-amber-400" />)}
                        </div>
                        <p className="text-lg text-white font-medium leading-relaxed mb-4">
                            "This platform completely transformed how I connect with my heritage. The live sessions are incredible."
                        </p>
                        <div className="flex items-center gap-3">
                            <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-10 h-10 rounded-full border-2 border-white/20" />
                            <div>
                                <p className="text-white font-bold text-sm">Ananya Gupta</p>
                                <p className="text-white/60 text-xs">Hindi Learner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="login-form-side">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="form-container"
                >
                    <div className="form-header">
                        <h2 className="form-heading">Welcome Back</h2>
                        <p className="form-subheading">Please enter your details to sign in.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="input-group">
                            <label>Email Address</label>
                            <div className="input-field-wrapper">
                                <Mail size={18} className="input-icon" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <div className="input-field-wrapper">
                                <Lock size={18} className="input-icon" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" disabled={isLoading} className="btn-login-submit">
                            {isLoading ? 'Signing in...' : 'Sign In'}
                            {!isLoading && <ArrowRight size={18} />}
                        </button>
                    </form>

                    {/* Quick Demo Section */}
                    <div className="demo-section">
                        <p className="demo-label">Quick Access (Demo Mode)</p>
                        <div className="demo-chips">
                            <button onClick={() => { setEmail('learner@bhaasha.com'); setPassword('password'); }} className="chip chip-learner">Learner</button>
                            <button onClick={() => { setEmail('trainer@bhaasha.com'); setPassword('password'); }} className="chip chip-trainer">Trainer</button>
                            <button onClick={() => { setEmail('admin@bhaasha.com'); setPassword('password'); }} className="chip chip-admin">Admin</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;