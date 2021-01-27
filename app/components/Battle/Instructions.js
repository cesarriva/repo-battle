import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';

import './Instructions.css';

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">
        Instructions
      </h1>
      <ol className="container-sm grid  center-text battle-instructions">
        <li>
          <h3 className="header-sm">Enter two Github users</h3>
          <FaUserFriends size={140} className="bg-light" color="rgb(255, 191, 116)" />
        </li>
        <li>
          <h3 className="header-sm">Battle</h3>
          <FaFighterJet size={140} className="bg-light" color="#727272" />
        </li>
        <li>
          <h3 className="header-sm">See the winners</h3>
          <FaUserFriends size={140} className="bg-light" color="rgb(255, 215, 0)" />
        </li>
      </ol>
    </div>
  );
};

export default Instructions;