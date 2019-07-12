import React from 'react'
import { shallow, render } from 'enzyme'
import App from '../components/App'
import Welcome from '../containers/Welcome'
import { BrowserRouter as Router, Route } from "react-router-dom"

describe('App', () => {
  it('should match snapshot on render', () => {
    const component = render(<App />)

    expect(component).toMatchSnapshot()
  })
})

describe('Welcome', () => {
  it('should match snapshot on render', () => {
    const component = render(
      <Router>
        <Welcome />
      </Router>
    )

    expect(component).toMatchSnapshot()
  })
})

