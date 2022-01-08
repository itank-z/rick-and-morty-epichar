import { useEffect, useState } from "react";
import Filters from "components/Filters";
import Search from "components/Search";
import SingleEpisode from "components/SingleEpisode";
import { getCall } from "utils/api";
import './style.scss';
import data from 'stubData/episodes.json';

const Episodes = () => {
    const filtersInfo = [
        {
            title: 'season',
            options: ['season 1', 'season 2', 'season 3', 'season 4', 'season 5']
        }
    ];

    const [episodesData, setEpisodesData] = useState([]);

    useEffect(() => {
        (async () => {
            const rawData = await getCall('https://jsonplaceholder.typicode.com/posts');
            console.log("received data episodes: ", rawData);
            console.log(data);
            setEpisodesData(JSON.parse(JSON.stringify(data)));
        })();
    }, []);

    return (
        <div className='episodes-section'>
            <Filters filtersInfo={filtersInfo} />
            <div className='episodes-container'>
                <Search />
                {
                    episodesData.map(episode => (<SingleEpisode key={episode.id} episodeInfo={episode} />))
                }
            </div>
        </div>
    );
}

export default Episodes;