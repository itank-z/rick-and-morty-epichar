import { useEffect, useState } from 'react';
import './style.scss';

const Pagination = ({ totalPages, handlePageChange }) => {
    const totalPageIndices = totalPages < 5 ? totalPages : 5;
    const [currentPageNo, setCurrentPageNo] = useState(1);
    const [pageOffset, setPageOffset] = useState(1);

    useEffect(() => {
        if (totalPages > 5 && currentPageNo > 2 && (currentPageNo + 2) < totalPages) {
            setPageOffset(currentPageNo - 2);
        }

        console.log("changing page inside pagination current page no: ", currentPageNo);
        handlePageChange(currentPageNo);
    }, [currentPageNo, handlePageChange, totalPages]);

    return (
        <div className='pagination-container'>
            <button className='paginate-button previous-button'
                disabled={currentPageNo <= 1}
                onClick={() => {
                    setCurrentPageNo(currentPageNo - 1);
                }}
            >
                Previous
            </button>
            <span>
                {
                    Array(totalPageIndices).fill(0).map((_, index) => index + pageOffset).map(pageNo => {
                        return (pageNo === currentPageNo) ?
                            (<button key={pageNo}
                                className='paginate-button page-button active-page-button'
                                disabled={true}
                            >
                                {pageNo}
                            </button>)
                            :
                            (<button key={pageNo}
                                className='paginate-button page-button'
                                onClick={() => setCurrentPageNo(pageNo)}
                            >
                                {pageNo}
                            </button>);
                    })
                }
            </span>
            <button className='paginate-button next-button'
                disabled={currentPageNo >= totalPages}
                onClick={() => {
                    setCurrentPageNo(currentPageNo + 1);
                }}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
