import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Filters from 'components/Filters';
import Search from 'components/Search';
import SingleCharacter from 'components/SingleCharacter';
import LocationModal from 'components/LocationModal';
import Pagination from 'components/Pagination';
import { getCharactersByPage, getCharactersByQueries } from 'utils/characterCalls';
import './style.scss';

const Characters = () => {
    const filtersInfo = [
        {
            title: 'status',
            options: ['alive', 'dead', 'unknown']
        },
        {
            title: 'gender',
            options: ['male', 'female', 'genderless', 'unknown']
        }
    ];

    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [charactersData, setCharactersData] = useState(null);
    const [metaData, setMetaData] = useState({});
    const [modalData, setModalData] = useState({});
    const [queries, setQueries] = useState({
        name: '',
        status: '',
        gender: '',
    });
    const [pageNo, setPageNo] = useState(1);

    const createQuery = (queryObject, page = 1) => {
        let urlQuery = `page=${page}`;
        for (let temp in queryObject) {
            urlQuery += (queryObject[temp] ? `&${temp}=${queryObject[temp]}` : '');
        }
        return urlQuery;
    };

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const rawData = await getCharactersByQueries(createQuery(queries));
            setPageNo(1);
            setCharactersData(rawData.results);
            setMetaData(rawData.info);
            setIsLoading(false);
        })();
    }, [queries]);

    const handlePageChange = async (pageNo) => {
        setIsLoading(true);
        setPageNo(pageNo);
        const rawData = await getCharactersByQueries(createQuery(queries, pageNo));
        setCharactersData(rawData.results);
        setMetaData(rawData.info);
        setIsLoading(false);
    };

    const handleSearchByName = async (characterName) => {
        const newQueries = JSON.parse(JSON.stringify(queries));
        newQueries.name = characterName;
        setQueries(newQueries);
        console.log("handleFilterChange check the new value of queries: ", queries);
    };

    const handleFilterChange = (name, value) => {
        const newQueries = JSON.parse(JSON.stringify(queries));
        newQueries[name] = value;
        console.log("handleFilterChange check the new value of queries: ", newQueries);
        setQueries(newQueries);
    };

    const clearFilters = () => {
        const newQueries = JSON.parse(JSON.stringify(queries));
        filtersInfo.forEach(({ title }) => newQueries[title] = '');
        console.log("clearFilters check the new value of queries: ", newQueries);
        setQueries(newQueries);
    };

    return (
        <div className='characters-section'>
            <Filters filtersInfo={filtersInfo}
                handleFilterChange={(name, value) => { handleFilterChange(name, value) }}
                clearFilters={() => clearFilters()}
            />
            <div className='characters-container'>
                <Search handleSearch={(name) => { handleSearchByName(name) }} />
                <div className='characters-list'>
                    {
                        (isLoading) ?
                            (
                                <div className='character-spinner'>
                                    <Spinner animation='border' role='status'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </Spinner>
                                </div>
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
                </div>
                <Pagination activePage={pageNo} totalPages={metaData.pages}
                    handlePageChange={pageVal => { handlePageChange(pageVal) }}
                />
                <LocationModal modalData={modalData} show={showModal} closeModal={() => { setShowModal(false) }} />
            </div>
        </div>
    );
}

export default Characters;
