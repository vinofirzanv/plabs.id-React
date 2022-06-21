import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }

      this.clikHandler = this.clikHandler.bind(this)
    }
  
    clikHandler(){
        this.setState({
            message:'Goodbye'
        })
    }
 render() {
    return (
      <div>
        <div>{this.state.message}</div>
         
        {/* <button onClick={this.clikHandler.bind(this)}> Click Bind</button> */}
        <button onClick={()=>this.clikHandler()}> Click Bind</button>
        <button onClick={this.clikHandler}> Click Bind</button>
      </div>
    )
  }
}

export default EventBind