import axios from 'axios';

const request = axios.create({
    baseURL: 'http://bustime.mta.info/api/siri',
    headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
        'Key': '5ca2e6cc-7522-4bce-9589-0bfa2dded14a'
    },
});

export default request;