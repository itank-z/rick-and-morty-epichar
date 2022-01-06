import searchIcon from 'static/icons/search.svg';
import './style.scss';

const Search = () => {
    return (
        <div className='search-container'>
            <span className='search-label'>Search</span>
            <input type='text' placeholder='Enter here to search' className='search-input' />
            <img className='search-icon' src={searchIcon} alt='search icon' onClick={() => {console.log("search")}}/>
        </div>
    );
};

export default Search;
