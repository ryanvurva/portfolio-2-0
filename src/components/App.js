import React, { Component } from 'react'
import Profile from './Profile'
import Repos from './Repos'
import Slide1 from './Slide1'

class App extends Component {
  state = {
    profile: '',
    name: '',
    location: '',
    bio: '',
    repos: [],
    repoName: '',
    company: '',
    email: ''
  }

  componentDidMount () {
    const url = 'https://api.github.com/users/ryanvurva'
    const starredUrl = 'https://api.github.com/users/ryanvurva/starred'
    window.fetch(url)
      .then(r => r.json())
      .then(data => {
        this.setState({
          name: data.name,
          profile: data.avatar_url,
          bio: data.bio,
          location: data.location,
          company: data.company,
          email: data.email
          // repos: data.public_repos
        })
      })
    window.fetch(starredUrl)
      .then(r => r.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          this.setState({
            repos: [...this.state.repos, data[i].html_url],
            repoName: [this.state.repoName, data[i].description]
          })
        }
      })
  }

  render () {
    return <div>
      <Profile name={this.state.name} bio={this.state.bio} location={this.state.location} />
      <Repos repos={this.state.repos} repoName={this.state.repoName} />
      <Slide1 />
      <div className='slide-2'>
        <div className='menu'>
          <input type='checkbox' id='menu-collapsed' name='menu-collapsed' />
          <div className='menu-content'>
            <h2>GitHub Repos</h2>
            <ul>
              <li>lorem ipsum</li>
              <li>dolor sit amet</li>
              <li>consetetur sadipscing</li>
              <li>elitr</li>
              <li>sed diam nonumy</li>
              <li>eirmod tempor</li>
              <li>invidunt ut</li>
              <li>labore et dolore</li>
            </ul>
          </div>
          <div className='menu-switch'>
            <label className='collapse' htmlFor='menu-collapsed'>«</label>
            <label className='rise' htmlFor='menu-collapsed'>»</label>
          </div>
        </div>
      </div>
    </div>
  }
}

export default App
