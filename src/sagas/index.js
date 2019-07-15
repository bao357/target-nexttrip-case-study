import { put, takeLatest, all, select } from 'redux-saga/effects'
import * as ActionConstants from '../constants/ActionConstants'

export function* fetchTransitRoutes() {

    const getTransitRoute = (state) => state.transitRoute

    try {
        const json = yield fetch('http://svc.metrotransit.org/NexTrip/Routes?format=json')
            .then(response => response.json())
        yield put({ type: ActionConstants.TRANSIT_ROUTES_RECEIVED, json: json, })

        //if we have a transitRoute selected, use it, otherwise use the first one
        //on the list as the default selected
        let transitRoute = yield select(getTransitRoute); 
        transitRoute = transitRoute || json[0].Route
        yield put({ type: ActionConstants.SET_TRANSIT_ROUTE, transitRoute: transitRoute})

    } catch (error) {
        yield put({ type: ActionConstants.ERROR_SERVICE, error })
    }
}
export function* actionWatcherGetTransitRoutes() {
    yield takeLatest(ActionConstants.GET_TRANSIT_ROUTES, fetchTransitRoutes)
}

export function* fetchDirections(params) {
    try {
        const json = yield fetch(`http://svc.metrotransit.org/NexTrip/Directions/${params.transitRoute}?format=json`)
            .then(response => response.json())
        yield put({ type: ActionConstants.DIRECTIONS_RECEIVED, json: json, })
    } catch (error) {
        yield put({ type: ActionConstants.ERROR_SERVICE, error })
    }
}
export function* actionWatcherGetDirections() {
    yield takeLatest(ActionConstants.GET_DIRECTIONS, fetchDirections)
}

export function* fetchStops(params) {
    try {
        const json = yield fetch(`http://svc.metrotransit.org/NexTrip/Stops/${params.transitRoute}/${params.direction}?format=json`)
            .then(response => response.json())
        yield put({ type: ActionConstants.STOPS_RECEIVED, json: json, })
    } catch (error) {
        yield put({ type: ActionConstants.ERROR_SERVICE, error })
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