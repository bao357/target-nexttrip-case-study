import React from 'react'
import { connect } from 'react-redux'
import { getDirections, setDirection } from '../actions'
import Error from '../containers/Error'
import Loading from '../containers/Loading'
import WizardNavigation from './WizardNavigation'

class Directions extends React.Component {

    componentDidMount() {
        if (this.props.bus) {
            this.props.getDirections(this.props.bus)
        } else {
            window.location.href = "/buses"
        }
    }

    componentDidUpdate() {

        //set state if they dont update dropdown
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
                <option key={item.Value} value={item.Value} data-direction={JSON.stringify(item)}>{item.Text}</option>
            )
        }

        return (
            <div>
                <Error />
                <Loading />
                <div className="field">
                    <label className="label">Select your direction:</label>
                    <div className="control">
                        <div className="select">
                            <select id="directions-dropdown" defaultValue={this.props.direction} onChange={this.handleOnChange}>{directions}</select>
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
    bus: state.bus,
    direction: state.direction,
    nextStep: state.nextStep,
    backStep: state.backStep
})

const mapDispatchToProps = (dispatch) => ({
    getDirections: (bus) => { dispatch(getDirections(bus)) },
    setDirection: (direction) => { dispatch(setDirection(direction)) }
})


Directions = connect(mapStateToProps, mapDispatchToProps)(Directions)
export default Directions