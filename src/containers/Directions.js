import React from 'react'
import { connect } from 'react-redux'
import { getDirections, setDirection } from '../actions'
import Error from '../containers/Error'
import Loading from '../containers/Loading'
import WizardNavigation from './WizardNavigation'
import * as RouteConstants from '../constants/RouteConstants'

class Directions extends React.Component {

    componentDidMount() {
        if (this.props.transitRoute) {
            this.props.getDirections(this.props.transitRoute)
        } else {
            window.location.href = RouteConstants.TRANSIT_ROUTES_URL
        }
    }

    componentDidUpdate() {

        //set state if they dont update dropdown
        //TODO: move to saga to set state intially
        if (!this.props.direction) {
            this.props.setDirection(this.getCurrentSelectedValue())
        }
    }

    getCurrentSelectedValue = () => {
        return document.getElementById("directions-dropdown").value
    }

    handleOnChange = (event) => {
        this.props.setDirection(this.getCurrentSelectedValue())
    }

    render() {

        let directions = []

        if (this.props && this.props.directions) {
            directions = this.props.directions.map((item) =>
                <option key={item.Value} value={item.Value}>{item.Text}</option>
            )
        }

        return (
            <div className="directions-route-page">
                <Error />
                <Loading />
                <div className="field">
                    <label className="label">Select your direction:</label>
                    <div className="control">
                        <div className="select">
                            <select id="directions-dropdown"
                                defaultValue={this.props.direction}
                                onChange={this.handleOnChange}
                            >
                                {directions}
                            </select>
                        </div>
                    </div>
                </div>
                <WizardNavigation />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    directions: state.directions,
    transitRoute: state.transitRoute,
    direction: state.direction,
})

const mapDispatchToProps = (dispatch) => ({
    getDirections: (transitRoute) => { dispatch(getDirections(transitRoute)) },
    setDirection: (direction) => { dispatch(setDirection(direction)) }
})


Directions = connect(mapStateToProps, mapDispatchToProps)(Directions)
export default Directions