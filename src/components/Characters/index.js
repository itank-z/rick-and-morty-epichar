import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Filters from 'components/Filters';
import Search from 'components/Search';
import SingleCharacter from 'components/SingleCharacter';
import LocationModal from 'components/LocationModal';
import Pagination from 'components/Pagination';
import { getCall } from 'utils/api.js';
import './style.scss';

const Characters = () => {
    const filtersInfo = [
        {
            title: 'Status',
            options: ['alive', 'dead', 'unknown']
        },
        {
            title: 'Gender',
            options: ['male', 'female', 'genderless', 'unknown']
        }
    ];

    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [charactersData, setCharactersData] = useState(null);
    const [metaData, setMetaData] = useState({});
    const [modalData, setModalData] = useState({});
    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            let rawData = await getCall(process.env.REACT_APP_API_ROOT_URL + process.env.REACT_APP_CHARACTER_ENDPOINT + `?page=${pageNo}`);

            setCharactersData(rawData.data.results);
            setMetaData(rawData.data.info);
            setIsLoading(false);
        })();
    }, [pageNo]);

    return (
        <div className='characters-section'>
            <Filters filtersInfo={filtersInfo} />
            <div className='characters-container'>
                <Search />
                {
                    (isLoading) ?
                        (
                            <Spinner animation='border' role='status'>
                                <span className='visually-hidden'>Loading...</span>
                            </Spinner>
                        )
                        :
                        charactersData.map(character => (
                            <SingleCharacter key={character.id} data={character}
                                openModal={() => {
                                    setModalData({ name: character.name, origin: character.origin.name, location: character.location.name })
                                    setShowModal(true);
                                }}
                            />
                        ))
                }
                <Pagination totalPages={metaData.pages} handlePageChange={pageVal => { setPageNo(pageVal) }} />
                <LocationModal modalData={modalData} show={showModal} closeModal={() => { setShowModal(false) }} />
            </div>
        </div>
    );
}

export default Characters;
