import React from 'react';
import CarListItemContainer from './CarListItemContainer';
import './CarList.css';

const CarList = ({ cars, loading }) => {

    const listItems = cars.map(car => (
        <CarListItemContainer key={car.id} details={car}/>
    ));
    
    return (
        <div className='horizontalList'>
            {loading ? ('Loading...') : (listItems)}
        </div>
    );
}

export default CarList;