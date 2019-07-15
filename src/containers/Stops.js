import React from 'react'
import { connect } from 'react-redux'
import { getStops } from '../actions'
import Stop from '../components/Stop'
import Error from '../containers/Error'
import Loading from '../containers/Loading'
import WizardNavigation from './WizardNavigation'
import * as RouteConstants from '../constants/RouteConstants'

class Stops extends React.Component {

    componentDidMount() {

        if (this.props.transitRoute && this.props.transitRoute) {
            this.props.getStops(this.props.transitRoute, this.props.direction)
        } else {
            window.location.href = RouteConstants.TRANSIT_ROUTES_URL
        }
    }

    render() {

        let stops = []

        if (this.props && this.props.stops) {
            stops = this.props.stops.map((item) =>
                <li key={item.Value}><Stop station={item.Text} stationValue={item.Value}></Stop></li>
            )
        }

        if (stops.length < 1) {
            stops = [<li key="nostops">Nothing to see here folks</li>]
        }

        return (
            <div className="stops-route-page">
                <Error />
                <Loading />
                <h1 className="title">Here are the stops for: {this.props.transitRoute}</h1>
                <WizardNavigation />
                <ul>{stops}</ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    stops: state.stops,
    transitRoute: state.transitRoute,
    direction: state.direction
})

const mapDispatchToProps = (dispatch) => ({
    getStops: (transitRoute, direction) => { dispatch(getStops(transitRoute, direction)) }
})


Stops = connect(mapStateToProps, mapDispatchToProps)(Stops)
export default Stops