import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: 'kimkim480',
    password: '6c4f454f3edab811052649fb854a45c53de0e456',
  },
});

export default api;
