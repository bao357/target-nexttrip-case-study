import React from 'react'
import { connect } from 'react-redux'

class Loading extends React.Component {

    render() {
      let html = null
      if(this.props.loading) {
         html = (
            <div>
               <h1>LOADING</h1>
            </div>
         )
      }
      return html
    }
}
const mapStateToProps = (state) => ({
    loading: state.loading,
})

Loading = connect(mapStateToProps, null)(Loading)
export default Loading