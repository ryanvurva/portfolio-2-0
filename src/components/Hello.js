import React, { Component } from 'react'

class Hello extends Component {
  // _click = () => {
  //   this.props.choose(this.props.position)
  // }

  render () {
    return <div className='hello-button'>
      <div className='would' onClick={this._click}>
        <div className='you'>Would you like to know more?</div>
        <div className='like' />
        <div className='to' />
        <div className='know' />
        <div className='more' />
      </div>
    </div>
  }
}

export default Hello
