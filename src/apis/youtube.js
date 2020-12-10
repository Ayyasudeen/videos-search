import axios from 'axios';      

const KEY = 'AIzaSyB2g-5-Me5rmTK1XXDqyZ9AInTd1QiUkRo';

export default axios.create(
    {
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY
        }
    }
);