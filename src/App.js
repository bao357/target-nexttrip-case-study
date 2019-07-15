import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import TransitRoutes from './containers/TransitRoutes'
import Directions from './containers/Directions'
import Stops from './containers/Stops'
import OneColumnLayout from './layouts/OneColumn'
import * as RouteConstants from './constants/RouteConstants'

class App extends React.Component {

    Index() {
        return (
            <OneColumnLayout main={<Welcome />} />
        )
    }

    TransitRoutes() {
        return (
            <OneColumnLayout main={
                <TransitRoutes />
            } />
        )
    }

    Directions() {
        return (
            <OneColumnLayout main={
                <Directions />
            } />
        )
    }

    Stops() {
        return (
            <OneColumnLayout main={
                <Stops />
            } />
        )
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <Route path={RouteConstants.HOME_URL} exact component={this.Index} />
                    <Route path={RouteConstants.TRANSIT_ROUTES_URL} component={this.TransitRoutes} />
                    <Route path={RouteConstants.DIRECTIONS_URL} component={this.Directions} />
                    <Route path={RouteConstants.STOPS_URL} component={this.Stops} />
                </div>
            </Router>
        )
    }
}

export default App