import React from 'react'
import { connect } from 'react-redux'
import { getStops } from '../actions'
import Stop from './Stop'
import Error from '../containers/Error'
import Loading from '../containers/Loading'
import WizardNavigation from './WizardNavigation'

class Stops extends React.Component {

    componentDidMount() {

        if (this.props.bus && this.props.bus) {
            this.props.getStops(this.props.bus, this.props.direction)
        } else {
            window.location.href = "/buses"
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
            <div>
                <Error />
                <Loading />
                <h1>You have selected route: {this.props.bus}</h1>
                <WizardNavigation />
                <ul>{stops}</ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    stops: state.stops,
    bus: state.bus,
    direction: state.direction
})

const mapDispatchToProps = (dispatch) => ({
    getStops: (bus, direction) => { dispatch(getStops(bus, direction)) }
})


Stops = connect(mapStateToProps, mapDispatchToProps)(Stops)
export default Stops