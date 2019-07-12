import { put, takeLatest } from 'redux-saga/effects'
import { fetchTransitRoutes, actionWatcherGetTransitRoutes } from '../sagas/index'

//https://medium.com/@lavitr01051977/jest-test-example-8a434db44e33
describe('Sagas', () => {
    it('should dispatch action "GET_TRANSIT_ROUTES" ', () => {
        const generator = actionWatcherGetTransitRoutes()
        expect(generator.next().value)
            .toEqual(takeLatest('GET_TRANSIT_ROUTES', fetchTransitRoutes))
        expect(generator.next().done).toBeTruthy()
    })

    it('should dispatch action "TRANSIT_ROUTES_RECEIVED" with result from fetch transit routes API', () => {
        const mockResponse = { transitRoutes: [] }
        const generator = fetchTransitRoutes()
        generator.next()
        expect(generator.next(mockResponse).value)
            .toEqual(put({ type: "TRANSIT_ROUTES_RECEIVED", json: mockResponse }))
        expect(generator.next().done).toBeTruthy()
    })
})