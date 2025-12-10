import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';
export const analyzeSMS = (payload) => axios.post(`${API_BASE}/api/sms/analyze`, payload).then(r=>r.data);
