import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import store from '../store'
import App from '../App'


describe('App', () => {
    let container
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        act(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>,
                container
            )
        })
    })

    afterEach(() => {
        document.body.removeChild(container)
        container = null
    })

    it('should render the inital page without crash', () => {
        expect(document.getElementsByTagName('h1')[0].textContent).toBe(
            'NextTrip Case Study'
        )
        expect(document.getElementsByTagName('h2')[0].textContent).toBe(
            'Target Interview'
        )
        expect(document.getElementById('interviewee').textContent).toBe('Bao Le')
        expect(document.getElementById('description').textContent).toBe(
            'View transit routes and see what stops are available.'
        )
        expect(document.getElementsByTagName('a')[0].textContent).toBe(
            'Click here to continue'
        )
    })

    it('should redirect to transit routes page after clicking the link', () => {
        const continueLink = document.getElementsByTagName('a')[0]

        act(() => {
            global.testUtil.fireClick(continueLink)
        })

        expect(document.getElementsByClassName('transit-routes-route-page').length).toBe(1)
    })
})
