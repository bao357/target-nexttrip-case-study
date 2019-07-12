import { put, takeLatest, all } from 'redux-saga/effects'
import * as ActionConstants from '../constants/ActionConstants'

export function* fetchTransitRoutes() {
    try {
        const json = yield fetch('http://svc.metrotransit.org/NexTrip/Routes?format=json')
            .then(response => response.json())
        yield put({ type: ActionConstants.TRANSIT_ROUTES_RECEIVED, json: json, })
    } catch (error) {
        yield put({ type: ActionConstants.ERROR_SERVICE, error });
    }
}
export function* actionWatcherGetTransitRoutes() {
    yield takeLatest(ActionConstants.GET_TRANSIT_ROUTES, fetchTransitRoutes)
}

export function* fetchDirections(params) {
    try {
        const json = yield fetch(`http://svc.metrotransit.org/NexTrip/Directions/${params.bus}?format=json`)
            .then(response => response.json())
        yield put({ type: ActionConstants.DIRECTIONS_RECEIVED, json: json, })
    } catch (error) {
        yield put({ type: ActionConstants.ERROR_SERVICE, error });
    }
}
export function* actionWatcherGetDirections() {
    yield takeLatest(ActionConstants.GET_DIRECTIONS, fetchDirections)
}

export function* fetchStops(params) {
    try {
        const json = yield fetch(`http://svc.metrotransit.org/NexTrip/Stops/${params.bus}/${params.direction}?format=json`)
            .then(response => response.json())
        yield put({ type: ActionConstants.STOPS_RECEIVED, json: json, })
    } catch (error) {
        yield put({ type: ActionConstants.ERROR_SERVICE, error });
    }
}

export function* actionWatcherGetStops() {
    yield takeLatest(ActionConstants.GET_STOPS, fetchStops)
}

export default function* rootSaga() {
    yield all([
        actionWatcherGetTransitRoutes(),
        actionWatcherGetDirections(),
        actionWatcherGetStops()
    ])
}