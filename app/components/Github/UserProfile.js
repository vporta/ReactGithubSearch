import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({bio}) => {
  return ( 
    <div>
      {bio.avatar_url && <li> <img src={bio.avatar_url}/></li>}
      {bio.name && <li>Name: {bio.name}</li>}
      {bio.login && <li>Username: {bio.login}</li>}
      {bio.email && <li>Email: {bio.email}</li>}
    </div>
  )
}


UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}
export default UserProfile;