import React, { Component } from 'react'
import CodeLogo from '../images/code-logos.png'
import WordpressLogo from '../images/wordpress-logo-long.png'
import ReactLogo from '../images/react.png'
import SassLogo from '../images/sass.png'

class Slide1 extends Component {
  render () {
    return <div className='slide-1'>
      <div className='skills'>
        <h2>Skills I'm Passionate About':</h2>
      </div>
      <div className='code-logo'>
        <img src={CodeLogo} alt='html 5 css 3 javascript' width='100%' />
      </div>
      <div className='wordpress-logo'>
        <img src={WordpressLogo} alt='wordpress' width='100%' />
      </div>
      <div className='react-logo'>
        <img src={ReactLogo} alt='wordpress' width='100%' />
      </div>
      <div className='sass-logo'>
        <img src={SassLogo} alt='wordpress' width='100%' />
      </div>
    </div>
  }
}

export default Slide1
