import './style.scss';

const SingleEpisode = ({ episodeInfo }) => {

    const {
        name,
        air_date,
        episode,
    } = episodeInfo;

    const episodeIndices = episode.match(/\d+/g);
    const seasonNo = episodeIndices[0];
    const episodeNo = episodeIndices[1];

    return (
        <div className='episode-container'>
            <div className='episode-info'>
                <div>
                    {'S' + seasonNo + ' E' + episodeNo}
                </div>
                <div>
                    {name}
                </div>
                <div>
                    Released on {air_date}
                </div>
            </div>
            <div className='episode-placement'>
                <div>Season</div>
                <div>{seasonNo}</div>
                <div>Episode</div>
                <div>{episodeNo}</div>
            </div>
        </div>
    );
};

export default SingleEpisode;
