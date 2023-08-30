import axios from 'axios';

export default axios.create({
    baseURL: 'http://18.228.152.38:3001',
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
});