import { useState } from "react";
import Filters from "components/Filters";
import SingleCharacter from "../SingleCharacter";
import LocationModal from "components/LocationModal";
import './style.scss';

const Characters = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='characters-section'>
            <Filters />
            {/* <div className='characters-container'>
            <SingleCharacter openModal={() => { setShowModal(true) }} />
            <SingleCharacter openModal={() => { setShowModal(true) }} />
            <SingleCharacter openModal={() => { setShowModal(true) }} />
            <SingleCharacter openModal={() => { setShowModal(true) }} />
            <SingleCharacter openModal={() => { setShowModal(true) }} />
            <LocationModal show={showModal} closeModal={() => { setShowModal(false) }} />
        </div> */}
        </div>
    );
}

export default Characters;