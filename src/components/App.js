import React from 'react'
import Welcome from '../containers/Welcome'
import TransitRoutes from '../containers/TransitRoutes'
import Directions from '../containers/Directions'
import Stops from '../containers/Stops'
import OneColumnLayout from '../layouts/OneColumn'
import { BrowserRouter as Router, Route } from "react-router-dom"

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
                    <Route path="/" exact component={this.Index} />
                    <Route path="/buses/" component={this.TransitRoutes} />
                    <Route path="/directions/" component={this.Directions} />
                    <Route path="/stops/" component={this.Stops} />
                </div>
            </Router>
        )
    }
}

export default App