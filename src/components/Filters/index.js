import { useState } from 'react';
import SingleFilter from 'components/SingleFilter';
import './style.scss';

const Filters = ({ filtersInfo, handleFilterChange, clearFilters }) => {
    const [clearFilter, setClearFilter] = useState(false);

    return (
        <div className='filters-section'>
            <div className='filters-header'>Filters</div>
            <button className='clear-filters-button ' onClick={() => { setClearFilter(!clearFilter); clearFilters(); }}>
                Clear Filters
            </button>
            {
                <div className='filters-container'>
                    {
                        filtersInfo.map(({ title, options }, index) => (
                            <SingleFilter
                                key={index}
                                title={title}
                                options={options}
                                handleFilterChange={handleFilterChange}
                                clearFilter={clearFilter}
                            />
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default Filters;
