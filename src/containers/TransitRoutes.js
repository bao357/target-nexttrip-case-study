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
        //TODO: move to saga to set state intially
        if (!this.props.direction) {
            this.props.setTransitRoute(this.getCurrentSelectedValue())
        }
    }

    getCurrentSelectedValue = () => {
        return document.getElementById("transit-route-dropdown").value
    }

    handleOnChange = (event) => {
        this.props.setTransitRoute(this.getCurrentSelectedValue())
    }

    render() {

        let transitRouteList = []

        if (this.props && this.props.transitRoutes) {

            transitRouteList = this.props.transitRoutes.map((item) => {
                return (<option key={item.Route} value={item.Route}>{item.Description}</option>)
            })
        }

        return (
            <div className="transit-routes-route-page">
                <Error />
                <Loading />
                <div className="field">
                    <label className="label">Select your transit route:</label>
                    <div className="control">
                        <div className="select">
                            <select id="transit-route-dropdown"
                                defaultValue={this.props.transitRoute}
                                onChange={this.handleOnChange}
                            >
                                {transitRouteList}
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
    transitRoutes: state.transitRoutes,
    transitRoute: state.transitRoute
})

const mapDispatchToProps = (dispatch) => ({
    getTransitRoutes: () => { dispatch(getTransitRoutes()) },
    setTransitRoute: (transitRoute) => { dispatch(setTransitRoute(transitRoute)) }
})

TransitRoutes = connect(mapStateToProps, mapDispatchToProps)(TransitRoutes)
export default TransitRoutes