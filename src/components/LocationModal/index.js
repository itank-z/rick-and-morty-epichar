import Modal from 'react-bootstrap/Modal';
import './style.scss';

const LocationModal = ({show, closeModal}) => {
    return (
        <Modal centered show={show} onHide={closeModal}>
            <Modal.Header className='modal-container' closeButton>
                <Modal.Title>Doofus Rick</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-container'>
                <div>
                    <label className='label'>Last Known Location:</label>
                    <p className='location-value'>Earth (Replacement Dimension)</p>
                </div>
                <hr />
                <div>
                    <label className='label'>Origin Point:</label>
                    <p className='location-value'>Earth (J19ζ7)</p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default LocationModal;
