import { useEffect, useState } from 'react';
import doubleArrowUp from 'static/icons/double_arrow_up.svg';
import doubleArrowDown from 'static/icons/double_arrow_down.svg';
import './style.scss';

const SingleFilter = ({ title, options, handleFilterChange, clearFilter }) => {
    const [show, setShow] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        setSelectedValue('');
        setShow(false);
    }, [clearFilter]);

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
                    options.map((option, index) => (
                        <label key={index} className='filter-label'>
                            <input className='filter-checkbox' type='checkbox'
                                checked={option === selectedValue}
                                onChange={() => {
                                    const tempValue = option === selectedValue ? '' : option;
                                    setSelectedValue(tempValue);
                                    handleFilterChange(title, tempValue);
                                }}
                            />
                            {option}
                        </label>
                    ))
                }
            </div>
        </div>
    );
};

export default SingleFilter;
