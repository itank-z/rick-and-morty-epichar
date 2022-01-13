import { getCall } from "./api";

const getAllEpisodes = async () => {
    let rawData = await getCall(process.env.REACT_APP_API_ROOT_URL + process.env.REACT_APP_EPISODE_ENDPOINT);
    return rawData.data;
};

const getEpisodesByPage = async (pageNo) => {
    let rawData = await getCall(process.env.REACT_APP_API_ROOT_URL + process.env.REACT_APP_EPISODE_ENDPOINT
        + `?page=${pageNo}`);
    return rawData.data;
};

const getEpisodesByQueries = async (query) => {
    let rawData = await getCall(process.env.REACT_APP_API_ROOT_URL + process.env.REACT_APP_EPISODE_ENDPOINT
        + '?' + query);
    return rawData.data;
};

export {
    getAllEpisodes,
    getEpisodesByPage,
    getEpisodesByQueries,
};
