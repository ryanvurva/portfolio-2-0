import React, { Component } from 'react'

class Slide1 extends Component {
  render () {
    return <div className='slide-1'>
      <div className='skills'>
        <h2>Skills I am proficient in:</h2>
      </div>
      <div className='skills-pics'>
        <img src='http://www.seanhelvey.com/assets/images/seanhelvey/2014/08/html5-css-javascript-logos.png' alt='html 5 css 3 javascript' width='100%' />
      </div>
      <div className='wordpress-logo'>
        <img src='https://s.w.org/about/images/logos/wordpress-logo-stacked-rgb.png' alt='wordpress' width='100%' />
      </div>
      <div className='react-logo'>
        <img src='http://react-etc.net/files/2016-07/logo-578x270.png' alt='wordpress' width='100%' />
      </div>
      <div className='sass-logo'>
        <img src='http://sass-lang.com/assets/img/styleguide/black-7fd39aa3.png' alt='wordpress' width='100%' />
      </div>
    </div>
  }
}

export default Slide1
