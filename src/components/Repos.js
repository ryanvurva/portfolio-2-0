import React, { Component } from 'react'

class Repos extends Component {
  render () {
    return <div className='repos'>
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
    </div>
  }
}

export default Repos
