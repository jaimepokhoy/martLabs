import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

export function* watcherSaga() {
    yield takeLatest('API_CARS_REQUEST', getCars);
    yield takeLatest('API_AVAILABILITY_REQUEST', getAvailability);
}

function fetchCars() {
    return axios({
        method: 'get',
        url: 'http://localhost:3000/cars'
    });
}

function fetchAvailability(id) {
    return axios({
        method: 'get',
        url: `http://localhost:3000/availability/${id}`
    });
}

function* getCars() {
    try {
        const response = yield call(fetchCars);
        const cars = response.data;

        yield put({ type: 'API_CARS_SUCCESS', cars });
    } catch (error) {
        yield put({ type: 'API_CALL_FAILURE', error })
    }
}

function* getAvailability(action) {
    try {
        const response = yield call(fetchAvailability, action.id);
        const availability = response.data;

        yield put({ type: 'API_AVAILABILITY_SUCCESS', availability });
    } catch (error) {
        yield put({ type: 'API_CALL_FAILURE', error })
    }
}