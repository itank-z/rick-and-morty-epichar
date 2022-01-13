import { getCall } from "./api";

const getAllCharacters = async () => {
    let rawData = await getCall(process.env.REACT_APP_API_ROOT_URL + process.env.REACT_APP_CHARACTER_ENDPOINT);
    return rawData.data;
};

const getCharactersByPage = async (pageNo) => {
    let rawData = await getCall(process.env.REACT_APP_API_ROOT_URL + process.env.REACT_APP_CHARACTER_ENDPOINT
        + `?page=${pageNo}`);
    return rawData.data;
};

const getCharactersByQueries = async (query) => {
    let rawData = await getCall(process.env.REACT_APP_API_ROOT_URL + process.env.REACT_APP_CHARACTER_ENDPOINT
        + '?' + query);
    return rawData.data;
};

export {
    getAllCharacters,
    getCharactersByPage,
    getCharactersByQueries,
};
