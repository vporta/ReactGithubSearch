import React from 'react';
import Rebase from 're-base';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import getGitHubInfo from '../utils/helpers.js';

const base = Rebase.createClass('https://github-profile-viewer-c65a9.firebaseio.com/')

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }
  componentDidMount() {
    this.init(this.props.params.username);
  }
  componentWillReceiveProps(nextProps) {
    this.init(nextProps.params.username);
  }
  componentWillUnMount() {
  }
  init(username) {
    const childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    getGitHubInfo(username)
        .then(data => {
          this.setState({
            bio: data.bio,
            repos: data.repos
          })
        }.bind(this))
  }
  handleAddNotes(newNote) {

  }
  render() {
    return(
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        User Profile Component
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes 
            username={this.props.params.username} 
            notes={this.state.notes}
            addNote={this.handleAddNotes}/>
        </div>
      </div>
    )
  }
}


export default Profile;