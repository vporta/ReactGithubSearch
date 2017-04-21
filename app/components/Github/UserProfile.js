import React from 'react';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
    return ( 
      <div>
        {this.props.bio.avatar_url && <li> <img src={this.props.bio.avatar_url}/></li>}
        {this.props.bio.name && <li>Name: {this.props.bio.name}</li>}
        {this.props.bio.login && <li>Username: {this.props.bio.login}</li>}
        {this.props.bio.email && <li>Email: {this.props.bio.email}</li>}
      </div>
    )
  }
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}
export default UserProfile;