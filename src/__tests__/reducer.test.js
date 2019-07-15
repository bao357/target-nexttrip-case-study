import reducer from '../reducers/index'
import * as action from '../actions/index'
import * as RouteConstants from '../constants/RouteConstants'
import * as ActionConstants from '../constants/ActionConstants'

describe('Reducer', () => {
    it('should return the initial state', () =>
        expect(reducer(undefined, {})).toEqual({})
    )

    it('should handle "GET_TRANSIT_ROUTES" action', () => {
        let mockData = {
            loading: true,
            nextStep: RouteConstants.TRANSIT_ROUTES_URL
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
            backStep: RouteConstants.HOME_URL,
            nextStep: RouteConstants.DIRECTIONS_URL
        }

        expect(reducer({}, { type: ActionConstants.TRANSIT_ROUTES_RECEIVED, json: mockJson }))
            .toEqual(mockDataResponse)
    })
})