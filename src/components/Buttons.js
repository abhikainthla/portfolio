import React from 'react';

const Buttons = ({ name, onClick }) => {
    return (
        <button className='filter-btn' onClick={() => onClick(name)}>{name}</button>
    );
};

export default Buttons;
