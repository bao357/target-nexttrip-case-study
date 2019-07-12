import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class WizardNavigation extends React.Component {
    render() {
        let {nextStep, backStep} = this.props

        let backLink =  backStep ? <Link to={backStep} className="button">Back</Link> : null
        let nextLink = nextStep ? <Link to={nextStep} className="button">Next</Link> : null

        return (
            <div>
                <p>
                    {backLink}
                    {nextLink}
                </p>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    nextStep: state.nextStep,
    backStep: state.backStep
})

WizardNavigation = connect(mapStateToProps, null)(WizardNavigation)
export default WizardNavigation