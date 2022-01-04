import SingleFilter from 'components/SingleFilter';
import './style.scss';

const Filters = () => {
    return (
        <div className='filters-section'>
            <div className='filters-header'>Filters</div>
            <div className='filters-container'>
                <SingleFilter />
            </div>
        </div>
    );
};

export default Filters;
