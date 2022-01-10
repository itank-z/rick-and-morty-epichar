import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Filters from "components/Filters";
import Search from "components/Search";
import SingleEpisode from "components/SingleEpisode";
import Pagination from "components/Pagination";
import { getCall } from "utils/api";
import './style.scss';

const Episodes = () => {
    const filtersInfo = [
        {
            title: 'season',
            options: ['season 1', 'season 2', 'season 3', 'season 4', 'season 5']
        }
    ];

    const [isLoading, setIsLoading] = useState(true);
    const [episodesData, setEpisodesData] = useState();
    const [metaData, setMetaData] = useState({});
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const rawData = await getCall(process.env.REACT_APP_API_ROOT_URL + process.env.REACT_APP_EPISODE_ENDPOINT + `?page=${pageNo}`);

            setEpisodesData(rawData.data.results);
            setMetaData(rawData.data.info);
            setIsLoading(false);
        })();
    }, [pageNo]);

    return (
        <div className='episodes-section'>
            <Filters filtersInfo={filtersInfo} />
            <div className='episodes-container'>
                <Search />
                {
                    (isLoading) ?
                        (
                            <Spinner animation='border' role='status'>
                                <span className='visually-hidden'>Loading...</span>
                            </Spinner>
                        ) :
                        episodesData.map(episode => (<SingleEpisode key={episode.id} episodeInfo={episode} />))
                }
                <Pagination totalPages={metaData.pages} handlePageChange={(pageVal) => setPageNo(pageVal)} />
            </div>
        </div>
    );
}

export default Episodes;
