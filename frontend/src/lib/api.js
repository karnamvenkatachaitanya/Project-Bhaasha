import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const practiceSpeaking = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post('/ai/practice', formData);
    return response.data;
};

export default api;
