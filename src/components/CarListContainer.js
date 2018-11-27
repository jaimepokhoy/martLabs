import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarList from './CarList';
import { API_CARS_REQUEST } from '../actions';

class CarListContainer extends Component {

    componentDidMount() {
        if (this.props.cars.length === 0) {
            this.props.onRequestCars()
        }
    }

    render() {
        const { cars, fetching } = this.props;

        return (
            <div>
                <CarList cars={cars} loading={fetching}/>
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { fetching, error, cars } = state;

    return {
        fetching,
        error,
        cars
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onRequestCars: () => dispatch({ type: API_CARS_REQUEST })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarListContainer);