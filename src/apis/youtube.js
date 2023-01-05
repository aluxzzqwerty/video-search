import axios from 'axios';

const KEY = 'AIzaSyDQAtvaB6PRTjaT3EqGYTLyN0Jl3gquq68';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});