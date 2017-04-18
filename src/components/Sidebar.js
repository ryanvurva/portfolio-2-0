import React, { Component } from 'react'
import GitHubLogo from '../images/github.png'
import FacebookLogo from '../images/facebook.png'
import TwitterLogo from '../images/twitter.png'
import LinkedInLogo from '../images/linkedin.png'

class Repos extends Component {
  render () {
    return <div className='side-bar'>
      <div className='menu'>
        <input type='checkbox' id='menu-collapsed' name='menu-collapsed' defaultChecked />
        <div className='menu-content'>
          <h2 className='gitHubTitle'>GitHub Repos</h2>
          <ul className='gitHub'>
            <li><a href={this.props.repos[0]}>Memory Game (React)</a></li>
            <li><a href={this.props.repos[1]}>Tic-Tac-Toe Game</a></li>
            <li><a href={this.props.repos[2]}>My Original Portfolio Project</a></li>
            <li><a href={this.props.repos[3]}>An HSL Color Picker (React)</a></li>
          </ul>
          <h2 className='socialMediaTitle'>Connect To Me</h2>
          <ul className='socialMedia'>
            <li><a href='https://github.com/ryanvurva'><i className='fa fa-github-square jiggle' /></a></li>
            <li><a href='https://www.facebook.com/ryan.vurva'><i className='fa fa-facebook-square jiggle' /></a></li>
            <li><a href='https://twitter.com/theeffinvurv'><i className='fa fa-twitter-square jiggle' /></a></li>
            <li><a href='https://www.linkedin.com/in/ryan-vurva-0993bb13b/'><i className='fa fa-linkedin-square jiggle' /></a></li>
          </ul>
        </div>
        <div className='menu-switch'>
          <label className='collapse' htmlFor='menu-collapsed'>«</label>
          <label className='rise' htmlFor='menu-collapsed'>»</label>
        </div>
      </div>
    </div>

    /* <div className='repos'>
      <h2>Check out some of my Repositories on <a href='https://github.com/ryanvurva'>GitHub</a></h2>
      <div className='repo-menu'>
        <ul>
          <input type='checkbox' id='collapse' />
          <label htmlFor='collapse' />
          <li><a href={this.props.repos[0]}>Memory Game (React)</a></li>
          <li><a href={this.props.repos[1]}>Tic-Tac-Toe Game</a></li>
          <li><a href={this.props.repos[2]}>My Original Portfolio Project</a></li>
          <li><a href={this.props.repos[3]}>An HSL Color Picker (React)</a></li>
        </ul>
      </div>
    </div> */
  }
}

export default Repos
