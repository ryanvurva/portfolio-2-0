import React, { Component } from 'react'
// import Hello from './Hello'

class Profile extends Component {
  render () {
    return <header>
      <div className='profile wow slideOutRight'>
        <div>
          <div className='hello'>
            <h1>Hi, I'm {this.props.name}</h1>
            <p>{this.props.bio} in the {this.props.location}.</p>
          </div>
          {/* <Hello /> */}
        </div>
      </div>
    </header>
  }
}

export default Profile
