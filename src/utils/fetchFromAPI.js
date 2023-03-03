import axios from 'axios';
// const axios = require("axios");
export const BaseUrl = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults:52,
        regionCode: 'IN',
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BaseUrl}/${url}`, options);

    return data;
};

// const options = {
//     params: {
//       maxResults: 50,
//     },
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     },
//   };
  
//   export const fetchFromAPI = async (url) => {
//     const { data } = await axios.get(`${BaseUrl}/${url}`, options);
  
//     return data;
//   };
