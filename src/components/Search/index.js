import { useState } from 'react';
import searchIcon from 'static/icons/search.svg';
import './style.scss';

const Search = ({ handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className='search-container'>
            <span className='search-label'>Search</span>
            <input type='text' placeholder='Enter here to search' className='search-input'
                value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch(searchQuery);
                    }
                }}
            />
            <img className='search-icon' src={searchIcon} alt='search icon' onClick={() => { handleSearch(searchQuery) }} />
        </div>
    );
};

export default Search;
