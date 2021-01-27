import React from 'react';
import PropTypes from 'prop-types';
import { FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser } from 'react-icons/fa';
import Tooltip from '../Tooltip/Tooltip';

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px'
  }
}

// class ProfileList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hoveringLocation: false,
//       hoveringCompany: false
//     };

//     this.mouseOver = this.mouseOver.bind(this);
//     this.mouseOut = this.mouseOut.bind(this);
//   }

//   mouseOver(id) {
//     this.setState({
//       [id]: true
//     });
//   }

//   mouseOut(id) {
//     this.setState({
//       [id]: false
//     })
//   }

//   render() {
//     const { profile } = this.props;
//     const { hoveringLocation, hoveringCompany } = this.state;

//     return (
//       <ul className='card-list'>
//         <li>
//           <FaUser color='rgb(239, 115, 115)' size={22} />
//           {profile.name}
//         </li>
//         {
//           profile.location &&
//           <li
//             style={styles.container}
//             onMouseOver={() => this.mouseOver('hoveringLocation')}
//             onMouseOut={() => this.mouseOut('hoveringLocation')}
//           >
//             {hoveringLocation && <div style={styles.tooltip}>User's location</div>}
//             <FaCompass color='rgb(144, 115, 115)' size={22} />
//             {profile.location}
//           </li>
//         }
//         {
//           profile.company &&
//           <li
//             style={styles.container}
//             onMouseOver={() => this.mouseOver('hoveringCompany')}
//             onMouseOut={() => this.mouseOut('hoveringCompany')}
//           >
//             {hoveringCompany && <div style={styles.tooltip}>User's company</div>}
//             <FaBriefcase color='#795548' size={22} />
//             {profile.company}
//           </li>
//         }
//         <li>
//           <FaUsers color='rgb(129, 195, 245)' size={22} />
//           {profile.followers.toLocaleString()} followers
//         </li>
//         <li>
//           <FaUserFriends color='rgb(64, 195, 183)' size={22} />
//           {profile.following.toLocaleString()} followers
//         </li>
//       </ul>
//     );
//   }
// }

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
          <Tooltip text="User's location">
            <FaCompass color='rgb(144, 115, 115)' size={22} />
            {profile.location}
          </Tooltip>
        </li>
      }
      {
        profile.company &&
        <li>
          <Tooltip text="User's company">
            <FaBriefcase color='#795548' size={22} />
            {profile.location}
          </Tooltip>
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