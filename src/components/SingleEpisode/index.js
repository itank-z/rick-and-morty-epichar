// import viewList from 'static/icons/list.svg';
import './style.scss';

const SingleEpisode = ({ episodeInfo }) => {

    const {
        name,
        air_date,
        episode,
    } = episodeInfo;

    const episodeIndices = episode.match(/\d+/g);
    const episodeNo = episodeIndices[0];
    const seasonNo = episodeIndices[1];

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
            {/* <img className='view-character-icon' src={viewList} alt='character list icon' onClick={openModal} /> */}
        </div>
    );
};

export default SingleEpisode;
