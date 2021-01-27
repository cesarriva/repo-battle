import React from 'react';
import PropTypes from 'prop-types';
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa';

const ProfileList = ({ profile }) => {
  return (
    <ul className='card-list'>
      <li>
        <FaUser color='rgb(239, 115, 115)' size={22} />
        {profile.name}
      </li>
      {
        profile.location &&
        <li>
          <FaCompass color='rgb(144, 115, 115)' size={22} />
          {profile.location}
        </li>
      }
      {
        profile.company &&
        <li>
          <FaBriefcase color='#795548' size={22} />
          {profile.location}
        </li>
      }
      <li>
        <FaUsers color='rgb(129, 195, 245)' size={22} />
        {profile.followers.toLocaleString()} followers
      </li>
      <li>
        <FaUserFriends color='rgb(64, 195, 183)' size={22} />
        {profile.following.toLocaleString()} followers
      </li>
    </ul>
  );
};

ProfileList.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileList;