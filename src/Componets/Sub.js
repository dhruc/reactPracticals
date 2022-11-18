import React from 'react';
import "./Sub.css";
import bellA from "./images/bell1.jpg";
import bellB from "./images/bell2.jpg";
import Counter from "./Counter.js";

class Sub extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        message:"Subscribe to IT Acadamy",
        m1:"",
       sub: "Subscribe here",
       imageURL:bellA
    }
  }
  Buttonchange=()=>{
    this.setState({
        message: "welcome to IT Acadamy ",
        m1:"hit the button never miss the update ",
        sub: "Subscibed",
        imageURL:bellB
    })
}
    render() {
    return (
      <div className='f1'>
        <div className='m1'>
            <div className='mm1'>  
                <h3>{this.state.message}</h3>
                <h3>{this.state.m1}</h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <br/>
                <p/>
                    <img id='bell' src={this.state.imageURL} />
            </div>
        </div>
        <div className='m2'>
          <Counter/>
        </div>
      </div>
    )
  }
}

export default Sub;