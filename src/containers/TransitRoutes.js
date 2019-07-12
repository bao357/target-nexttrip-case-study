import React from 'react'
import { connect } from 'react-redux'
import { setTransitRoute, getTransitRoutes } from '../actions'
import Error from './Error'
import Loading from './Loading'
import WizardNavigation from './WizardNavigation'

class TransitRoutes extends React.Component {

    componentDidMount() {
        this.props.getTransitRoutes()
    }

    componentDidUpdate() {

        //set state if they dont update dropdown
        if (!this.props.direction) {
            this.props.setTransitRoute(this.getCurrentSelectedValue())
        }
    }

    getCurrentSelectedValue = () => {
        return document.getElementById("bus-dropdown").value
    }

    handleOnChange = (event) => {
        this.props.setTransitRoute(this.getCurrentSelectedValue())
    }

    render() {

        let buses = []

        if (this.props && this.props.transitRoutes) {

            buses = this.props.transitRoutes.map((item) => {
                return (<option key={item.Route} value={item.Route}>{item.Description}</option>)
            })
        }

        return (
            <div>
                <Error />
                <Loading />
                <div className="field">
                    <label className="label">Select your transit route:</label>
                    <div className="control">
                        <div className="select">
                            <select id="bus-dropdown" defaultValue={this.props.bus} onChange={this.handleOnChange}>{buses}</select>
                        </div>
                    </div>
                </div>
                <WizardNavigation />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    transitRoutes: state.transitRoutes,
    bus: state.bus
})

const mapDispatchToProps = (dispatch) => ({
    getTransitRoutes: () => { dispatch(getTransitRoutes()) },
    setTransitRoute: (bus) => { dispatch(setTransitRoute(bus)) }
})

TransitRoutes = connect(mapStateToProps, mapDispatchToProps)(TransitRoutes)
export default TransitRoutes