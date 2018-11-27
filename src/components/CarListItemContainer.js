import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarListItem from './CarListItem';
import { API_AVAILABILITY_REQUEST } from '../actions';

class CarListItemContainer extends Component {

    componentDidMount() {
        this.props.onRequestCar(this.props.details.id);
    }

    render() {
        const { details, availability } = this.props;

        return (
            <div>
                <CarListItem details={details} availability={availability}/>
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { fetching, error, availability } = state;

    return {
        fetching,
        error,
        availability
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onRequestCar: id => dispatch({ type: API_AVAILABILITY_REQUEST, id })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarListItemContainer);