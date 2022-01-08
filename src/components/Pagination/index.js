import './style.scss';

const Pagination = () => {
    return (
        <div className='pagination-container'>
            <button className='paginate-button previous-button'>Previous</button>
            <span>
                <button className='paginate-button page-button'>1</button>
                <button className='paginate-button page-button'>2</button>
            </span>
            <button className='paginate-button next-button'>Next</button>
        </div>
    );
};

export default Pagination;
