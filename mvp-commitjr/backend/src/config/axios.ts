import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org'
});

export default api;

// Class responsible for configuring the axios route that will be used in other locations of the project.