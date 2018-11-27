import React from 'react';
import './CarListItem.css';

const CarListItem = ({ details, availability }) => {
    const { make, model, year, image } = details;

    return (
        <div className='card'>
            <img src={image} alt='car' />
            <div className='description'>
                <div>
                    <div>{make}</div>
                    <div>{model}</div>
                </div>
                <div>
                    <div>{year}</div>
                    <div>{availability}</div>
                </div>
            </div>
        </div>
    );
}

export default CarListItem;