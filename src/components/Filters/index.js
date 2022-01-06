import SingleFilter from 'components/SingleFilter';
import './style.scss';

const Filters = ({filtersInfo}) => {
    return (
        <div className='filters-section'>
            <div className='filters-header'>Filters</div>
            <div className='filters-container'>
                {
                    filtersInfo.map(({title, options}, index) => (
                        <SingleFilter key={index} title={title} options={options} />
                    ))
                }
            </div>
        </div>
    );
};

export default Filters;
