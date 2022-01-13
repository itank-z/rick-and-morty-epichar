import { useEffect, useState } from 'react';
import './style.scss';

const Pagination = ({ activePage, totalPages, handlePageChange }) => {
    const totalPageIndices = totalPages < 5 ? totalPages : 5;
    const [currentPageNo, setCurrentPageNo] = useState(activePage);
    const [pageOffset, setPageOffset] = useState(1);

    useEffect(() => {
        setCurrentPageNo(activePage);
        if (activePage === 1) {
            setPageOffset(1);
        }
    }, [activePage]);

    useEffect(() => {
        if (totalPages > 5 && currentPageNo > 2 && (currentPageNo + 1) < totalPages) {
            setPageOffset(currentPageNo - 2);
        }

        console.log("changing page inside pagination current page no: ", currentPageNo, totalPages, pageOffset);
    }, [currentPageNo, totalPages]);

    return (
        <div className='pagination-container'>
            <button className='paginate-button previous-button'
                disabled={currentPageNo <= 1}
                onClick={() => {
                    handlePageChange(currentPageNo - 1);
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
                                onClick={() => {
                                    handlePageChange(pageNo);
                                    setCurrentPageNo(pageNo);
                                }}
                            >
                                {pageNo}
                            </button>);
                    })
                }
            </span>
            <button className='paginate-button next-button'
                disabled={currentPageNo >= totalPages}
                onClick={() => {
                    handlePageChange(currentPageNo + 1);
                    setCurrentPageNo(currentPageNo + 1);
                }}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
