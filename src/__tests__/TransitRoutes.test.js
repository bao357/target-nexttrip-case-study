import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from '../store'
import TransitRoutes from '../containers/TransitRoutes'

describe('Transit routes', () => {
    let container
    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container = null
    })

    function render() {
        act(() => {
            ReactDOM.render(
                <Provider store={store}>
                    <Router>
                        <TransitRoutes />
                    </Router>
                </Provider>,
                container
            )
        })
    }

    it('should render the Transit Route page with loading initially', () => {
        render()
        expect(document.body).toMatchSnapshot()
        expect(document.getElementsByTagName('h1')[0].textContent).toBe('LOADING')
    })

    describe('happy path', () => {
        beforeEach(() => {
            const mockJson = [
                { Description: 'METRO Blue Line', ProviderID: '8', Route: '901' },
                { Description: 'METRO Green Line', ProviderID: '8', Route: '902' },
                { Description: 'METRO Red Line', ProviderID: '9', Route: '903' }
            ]
            global.testUtil.mockFetch(true, mockJson)
            render()
        })

        it('should render the transit routes after fetching the data', done => {
            setTimeout(() => {
                const dropdown = document.getElementById('transit-route-dropdown')
                expect(dropdown.options[dropdown.selectedIndex].text).toBe(
                    'METRO Blue Line'
                )
                expect(document.body).toMatchSnapshot()
                done()
            })
        })

        it('should change to right option', done => {
            setTimeout(() => {
                const dropdown = document.getElementById('transit-route-dropdown')
                act(() => {
                    dropdown.value = '903'
                    global.testUtil.fireChange(dropdown)
                })

                expect(dropdown.options[dropdown.selectedIndex].text).toBe(
                    'METRO Red Line'
                )
                done()
            })
        })
    })
})
