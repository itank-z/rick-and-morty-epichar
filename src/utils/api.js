import axios from 'axios';

const getCall = async (url) => {
    const data = await axios.get(url);
    return data;
};

const postCall = async (url, body) => {
    const data = await axios.get(url, body);
    return data;
};

export {
    getCall,
    postCall,
};
