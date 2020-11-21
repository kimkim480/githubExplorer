import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: 'kimkim480',
    password: `${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export default api;
