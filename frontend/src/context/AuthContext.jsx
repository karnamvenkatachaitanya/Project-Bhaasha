import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../components/NotificationSystem';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const { addNotification } = useNotification();

    const login = async (email, password) => {
        // Simulate backend validation
        // In a real app, this would be an API call to /api/auth/login

        // Mock Database
        const users = [
            { email: 'super@bhaasha.com', password: 'password', role: 'super_admin', name: 'Super Admin' },
            { email: 'admin@bhaasha.com', password: 'password', role: 'admin', name: 'Admin User' },
            { email: 'trainer@bhaasha.com', password: 'password', role: 'trainer', name: 'Guru Ji' },
            { email: 'learner@bhaasha.com', password: 'password', role: 'learner', name: 'Arjun Learner' },
        ];

        const foundUser = users.find(u => u.email === email && u.password === password);

        if (foundUser) {
            setUser(foundUser);
            addNotification(`Welcome back, ${foundUser.name}!`, 'success');

            // Redirect based on role
            switch (foundUser.role) {
                case 'super_admin': navigate('/super-admin'); break;
                case 'admin': navigate('/admin'); break;
                case 'trainer': navigate('/trainer'); break;
                case 'learner': navigate('/dashboard'); break;
                default: navigate('/');
            }
            return true;
        } else {
            addNotification('Invalid credentials. Please try again.', 'error');
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/');
        addNotification('Logged out successfully.');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
