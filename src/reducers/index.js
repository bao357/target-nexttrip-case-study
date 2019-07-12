import * as ActionConstants from '../constants/ActionConstants'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionConstants.GET_TRANSIT_ROUTES:
        case ActionConstants.GET_DIRECTIONS:
        case ActionConstants.GET_STOPS:
            return { ...state, loading: true, nextStep:"/buses" }
        case ActionConstants.TRANSIT_ROUTES_RECEIVED:
            return { ...state, transitRoutes: action.json, loading: false, nextStep:"/directions", backStep:"/" }
        case ActionConstants.SET_BUS_ROUTE:
                return { ...state, bus: action.bus }
        case ActionConstants.DIRECTIONS_RECEIVED:
            return { ...state,  directions: action.json, loading: false, nextStep:"/stops", backStep:"/buses" }
        case ActionConstants.SET_DIRECTION:
            return { ...state, direction: action.direction }
        case ActionConstants.STOPS_RECEIVED:
            return { ...state,  stops: action.json, loading: false, nextStep:null }
        case ActionConstants.ERROR_SERVICE:
            return {...state, error: action.error}
        default:
            return state
    }
}
export default reducer