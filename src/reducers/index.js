import { GET_CARS, API_CARS_REQUEST, API_CARS_SUCCESS, API_AVAILABILITY_SUCCESS, API_CALL_FAILURE } from './../actions';

const initialState = {
    cars: [],
    available: false
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case API_CARS_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_CARS_SUCCESS:
            return { ...state, fetching: false, cars: action.cars };
        case API_AVAILABILITY_SUCCESS:
            return { ...state, fetching: false, availability: action.availability };
        case API_CALL_FAILURE:
            return { ...state, fetching: false, error: action.error };
        case GET_CARS:
            return { ...state }
        default:
            return state;
    }
}