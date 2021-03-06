import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.4:3333/',
    method: 'POST',
    contentType: 'application/json',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Headers':'application/json',
        'Content-Type': 'application/json',
    },
})
export default api;

