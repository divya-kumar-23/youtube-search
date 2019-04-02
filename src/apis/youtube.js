import axios from 'axios';
const KEY='AIzaSyDwQgLiLF5koKS7ZYp_pQrttZpHRUZBG20';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResult:5,
        key:KEY
    }
});

