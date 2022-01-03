import './style.scss';

const SingleCharacter = () => {
    return (
        <div className='character-profile'>
            <img className='character-image' src='https://rickandmortyapi.com/api/character/avatar/103.jpeg' alt='character profile' />
            <div className='character-details'>
                <h3 className='character-name'>Doofus Rick</h3>
                <div className='character-info'>
                <div className='field-label'>
                    <p>Status:</p>
                    <p>Species:</p>
                    <p>Gender:</p>
                </div>
                <div className='field-value'>
                    <p>unknown</p>
                    <p>Human</p>
                    <p>Male</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default SingleCharacter;