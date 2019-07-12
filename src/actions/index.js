import * as ActionConstants from '../constants/ActionConstants'

export const getTransitRoutes = () => ({
    type: ActionConstants.GET_TRANSIT_ROUTES,
})

export const setTransitRoute = (bus) => ({
    type: ActionConstants.SET_BUS_ROUTE,
    bus
})

export const getDirections = (bus) => ({
    type: ActionConstants.GET_DIRECTIONS,
    bus
})

export const setDirection = (direction) => ({
    type: ActionConstants.SET_DIRECTION,
    direction
})

export const getStops = (bus, direction) => ({
    type: ActionConstants.GET_STOPS,
    bus,
    direction
})


