import Axios from 'axios';

export const getAuth = () => Axios.get('/api/me');
