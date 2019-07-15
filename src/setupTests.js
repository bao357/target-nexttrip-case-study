// import { configure } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
const originalFetch = global.fetch

// configure({ adapter: new Adapter() })

global.testUtil = {
    fireClick: el => {
        el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    },
    fireChange: el => {
        el.dispatchEvent(new Event('change', { bubbles: true }))
    },
    mockFetch: (ok, json) => {
        if (ok) {
            global.fetch = jest.fn(() => new Promise(resolve => resolve({
                json: () => json
            })))
        } else {
            global.fetch = jest.fn(() => new Promise((resolve, reject) => reject(Error('Oh no!'))))
        }
    },
    restoreFetch: () => {
        global.fetch = originalFetch
    }
}
