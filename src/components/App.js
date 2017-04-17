import React, { Component } from 'react'
import Profile from './Profile'
import Sidebar from './Sidebar'
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
      <Sidebar repos={this.state.repos} repoName={this.state.repoName} />
      <Profile name={this.state.name} bio={this.state.bio} location={this.state.location} />
      <Slide1 />
    </div>
  }
}

export default App
