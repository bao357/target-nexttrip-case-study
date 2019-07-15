import * as ActionConstants from '../constants/ActionConstants'
import * as RouteConstants from '../constants/RouteConstants'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionConstants.GET_TRANSIT_ROUTES:
        case ActionConstants.GET_DIRECTIONS:
        case ActionConstants.GET_STOPS:
            return { ...state, loading: true, nextStep: RouteConstants.TRANSIT_ROUTES_URL }
        case ActionConstants.TRANSIT_ROUTES_RECEIVED:
            return { ...state, transitRoutes: action.json, loading: false, 
                nextStep: RouteConstants.DIRECTIONS_URL, backStep: RouteConstants.HOME_URL }
        case ActionConstants.SET_TRANSIT_ROUTE:
            return { ...state, transitRoute: action.transitRoute }
        case ActionConstants.DIRECTIONS_RECEIVED:
            return { ...state, directions: action.json, loading: false, 
                nextStep: RouteConstants.STOPS_URL, backStep: RouteConstants.TRANSIT_ROUTES_URL }
        case ActionConstants.SET_DIRECTION:
            return { ...state, direction: action.direction }
        case ActionConstants.STOPS_RECEIVED:
            return { ...state, stops: action.json, loading: false, backStep: RouteConstants.DIRECTIONS_URL, nextStep: null }
        case ActionConstants.ERROR_SERVICE:
            return { error: action.error }
        default:
            return state
    }
}
export default reducer