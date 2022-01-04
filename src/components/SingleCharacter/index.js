import location from 'static/icons/location.svg';
import './style.scss';

const SingleCharacter = ({ openModal }) => {
    return (
        <div className='character-profile'>

            <img className='character-image' src='https://rickandmortyapi.com/api/character/avatar/103.jpeg' alt='character profile' />

            <div className='character-details'>
                <span className='character-header'>
                    <div className='status-symbol' />
                    <h3 className='character-name'>Doofus Rick</h3>
                </span>

                <div className='character-info'>
                    <div className='field-label'>
                        <p>Status:</p>
                        <p>Species:</p>
                        <p>Gender:</p>
                    </div>
                    <div className='field-value'>
                        <p className='status-value'>unknown</p>
                        <p>Human</p>
                        <p>Male</p>
                    </div>
                </div>

                <div className='location-access' onClick={openModal}>
                    <p className='location-label'>Locate</p>
                    <img className='location-icon' src={location} alt='location icon' />
                </div>
            </div>

        </div>
    );
}

export default SingleCharacter;