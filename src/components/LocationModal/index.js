import Modal from 'react-bootstrap/Modal';
import './style.scss';

const LocationModal = ({ show, closeModal, modalData }) => {
    const {
        name,
        origin,
        location,
    } = modalData;

    return (
        <Modal centered show={show} onHide={closeModal}>
            <Modal.Header className='modal-container' closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-container'>
                <div>
                    <label className='label'>Last Known Location:</label>
                    <p className='location-value'>{location}</p>
                </div>
                <hr />
                <div>
                    <label className='label'>Origin Point:</label>
                    <p className='location-value'>{origin}</p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default LocationModal;
