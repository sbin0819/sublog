import axios from 'axios';

export const baseNewsAPI = `http://newsapi.org/v2/top-headlines?country=kr&apiKey=6f82e4c06d4a42389d24f2871721d740`;

export const specificNewsAPI = (name) =>
  `http://newsapi.org/v2/top-headlines?country=kr&category=${name}&apiKey=6f82e4c06d4a42389d24f2871721d740`;

const baseURL = 'http://localhost:4000';
export const getUsers = (data) => axios.post(baseURL + '/users', data);
