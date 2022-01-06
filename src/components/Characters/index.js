import { useEffect, useState } from "react";
import Filters from "components/Filters";
import Search from "components/Search";
import SingleCharacter from "../SingleCharacter";
import LocationModal from "components/LocationModal";
import { getCall } from 'utils/api.js';
import './style.scss';
import data from 'stubData/characters.json';

const Characters = () => {
    const [showModal, setShowModal] = useState(false);
    const [charactersData, setCharactersData] = useState([]);
    const [modalData, setModalData] = useState({});
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

    useEffect(() => {
        (async () => {
            const rawData = await getCall('https://jsonplaceholder.typicode.com/posts');
            console.log("received data: ", rawData);
            console.log(data);
            setCharactersData(JSON.parse(JSON.stringify(data)));
        })();
    }, []);

    return (
        <div className='characters-section'>
            <Filters filtersInfo={filtersInfo} />
            <div className='characters-container'>
                <Search />
                {
                    charactersData.map(character => (
                        <SingleCharacter key={character.id} data={character} openModal={() => {
                            setModalData({ name: character.name, origin: character.origin.name, location: character.location.name })
                            setShowModal(true);
                        }}
                        />
                    ))
                }
                <LocationModal modalData={modalData} show={showModal} closeModal={() => { setShowModal(false) }} />
            </div>
        </div>
    );
}

export default Characters;