import { put, takeLatest } from 'redux-saga/effects'
import { fetchTransitRoutes, actionWatcherGetTransitRoutes } from '../sagas/index'
import * as ActionConstants from '../constants/ActionConstants'

describe('Sagas', () => {
    it('should dispatch action "GET_TRANSIT_ROUTES" ', () => {
        const generator = actionWatcherGetTransitRoutes()
        expect(generator.next().value)
            .toEqual(takeLatest(ActionConstants.GET_TRANSIT_ROUTES, fetchTransitRoutes))
        expect(generator.next().done).toBeTruthy()
    })

    it('should dispatch action "TRANSIT_ROUTES_RECEIVED" with result from fetch transit routes API', () => {
        const mockResponse = [
            { Description: "METRO Blue Line", ProviderID: '8', Route: '901' },
            { Description: 'METRO Green Line', ProviderID: '8', Route: '902' },
            { Description: 'METRO Red Line', ProviderID: '9', Route: '903' }
          ]
        const generator = fetchTransitRoutes()
        generator.next()
        expect(generator.next(mockResponse).value)
            .toEqual(put({ type: ActionConstants.TRANSIT_ROUTES_RECEIVED, json: mockResponse }))
        expect(generator.next().done).toBeTruthy()
    })
})