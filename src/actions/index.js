import * as ActionConstants from '../constants/ActionConstants'

export const getTransitRoutes = () => ({
    type: ActionConstants.GET_TRANSIT_ROUTES,
})

export const setTransitRoute = (transitRoute) => ({
    type: ActionConstants.SET_TRANSIT_ROUTE,
    transitRoute
})

export const getDirections = (transitRoute) => ({
    type: ActionConstants.GET_DIRECTIONS,
    transitRoute
})

export const setDirection = (direction) => ({
    type: ActionConstants.SET_DIRECTION,
    direction
})

export const getStops = (transitRoute, direction) => ({
    type: ActionConstants.GET_STOPS,
    transitRoute,
    direction
})


