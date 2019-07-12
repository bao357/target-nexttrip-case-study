import reducer from '../reducers/index'
import * as action from '../actions/index'

describe('Reducer', () => {
    it('should return the initial state', () =>
        expect(reducer(undefined, {})).toEqual({})
    )

    it('should handle "GET_TRANSIT_ROUTES" action', () => {
        let mockData = {
            loading: true,
            nextStep: "/buses"
        }

        expect(reducer({}, action.getTransitRoutes())).
            toEqual(mockData)
    })


    it('should handle "TRANSIT_ROUTES_RECEIVED" action', () => {
        const mockJson = {
            transitRoutes: [],
        }

        const mockDataResponse = {
            transitRoutes: mockJson,
            loading: false,
            backStep: "/",
            nextStep: "/directions"
        }

        expect(reducer({}, { type: "TRANSIT_ROUTES_RECEIVED", json: mockJson }))
            .toEqual(mockDataResponse)
    })
})