import React from 'react'
import { connect } from 'react-redux'

class Error extends React.Component {

    render() {
      let html = null
      if(this.props.error) {
         html = (
            <div>
               <h1>ERRORRRRRRR</h1>
            </div>
         )
      }
      return html
    }
}
const mapStateToProps = (state) => ({
    error: state.error,
})

Error = connect(mapStateToProps, null)(Error)
export default Error