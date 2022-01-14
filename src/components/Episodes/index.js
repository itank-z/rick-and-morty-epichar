import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Filters from "components/Filters";
import Search from "components/Search";
import SingleEpisode from "components/SingleEpisode";
import Pagination from "components/Pagination";
import { getEpisodesByQueries } from "utils/episodeCalls";
import './style.scss';

const Episodes = () => {
    const filtersInfo = [
        {
            title: 'season',
            options: ['season 1', 'season 2', 'season 3', 'season 4', 'season 5']
        }
    ];

    const filter_query_parameter_map = {
        'season': 'episode',
    };

    const season_episode_map = {
        'season 1': 'S01',
        'season 2': 'S02',
        'season 3': 'S03',
        'season 4': 'S04',
        'season 5': 'S05',
    };

    const [isLoading, setIsLoading] = useState(true);
    const [episodesData, setEpisodesData] = useState();
    const [metaData, setMetaData] = useState({});
    const [queries, setQueries] = useState({
        episode: '',
    });
    const [pageNo, setPageNo] = useState(1);

    const createQuery = (queryObject, page = 1) => {
        let urlQuery = `page=${page}`;
        for (let temp in queryObject) {
            urlQuery += (queryObject[temp] ? `&${temp}=${queryObject[temp]}` : '');
        }
        return urlQuery;
    };

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const rawData = await getEpisodesByQueries(createQuery(queries));
            setEpisodesData(rawData.results);
            setMetaData(rawData.info);
            setIsLoading(false);
        })();
    }, [queries]);

    const handlePageChange = async (pageNo) => {
        setIsLoading(true);
        setPageNo(pageNo);
        const rawData = await getEpisodesByQueries(createQuery(queries, pageNo));
        setEpisodesData(rawData.results);
        setMetaData(rawData.info);
        setIsLoading(false);
    };

    const handleSearchByName = async (episodeName) => {
        const newQueries = JSON.parse(JSON.stringify(queries));
        newQueries.name = episodeName;
        setQueries(newQueries);
        console.log("handleFilterChange check the new value of queries: ", queries);
    };

    const handleFilterChange = (name, value) => {
        const newQueries = JSON.parse(JSON.stringify(queries));
        newQueries[filter_query_parameter_map[name]] = name === 'season' ? season_episode_map[value] : value;
        console.log("handleFilterChange check the new value of queries: ", newQueries);
        setQueries(newQueries);
    };

    const clearFilters = () => {
        const newQueries = JSON.parse(JSON.stringify(queries));
        filtersInfo.forEach(({ title }) => newQueries[filter_query_parameter_map[title]] = '');
        console.log("clearFilters check the new value of queries: ", newQueries);
        setQueries(newQueries);
    };

    return (
        <div className='episodes-section'>
            <Filters filtersInfo={filtersInfo}
                handleFilterChange={(name, value) => { handleFilterChange(name, value) }}
                clearFilters={() => clearFilters()}
            />
            <div className='episodes-container'>
                <Search handleSearch={(name) => { handleSearchByName(name) }} />
                <div className="episodes-pagination">
                    <div className="episodes-list">
                        {
                            (isLoading) ?
                                (
                                    <Spinner animation='border' role='status'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </Spinner>
                                ) :
                                episodesData.map(episode => (<SingleEpisode key={episode.id} episodeInfo={episode} />))
                        }
                    </div>
                    <Pagination activePage={pageNo} totalPages={metaData.pages}
                        handlePageChange={pageVal => { handlePageChange(pageVal) }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Episodes;
