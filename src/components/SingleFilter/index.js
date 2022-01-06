import { useState } from 'react';
import doubleArrowUp from 'static/icons/double_arrow_up.svg';
import doubleArrowDown from 'static/icons/double_arrow_down.svg';
import './style.scss';

const SingleFilter = ({title, options}) => {
    const [show, setShow] = useState(false);

    return (
        <div className='filter-container'>
            <div className='filter-header' onClick={() => { setShow(!show) }}>
                <span>{title}</span>
                {
                    show ?
                        <img src={doubleArrowUp} alt='double arrow up' />
                        :
                        <img src={doubleArrowDown} alt='double arrow down' />
                }
            </div>
            <div className={show ? 'filter-content' : 'hide-filter-content'}>
                {
                    options.map((option, index) => (<label key={index}><input type='checkbox' /> {option}</label>))
                }
            </div>
        </div>
    );
};

export default SingleFilter;