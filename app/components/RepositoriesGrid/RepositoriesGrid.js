import React from 'react';
import PropTypes from 'prop-types';
import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa';
import Card from '../Card/Card';

import './RepositoriesGrid.css';
import Tooltip from '../Tooltip/Tooltip';

const RepositoriesGrid = ({ repositories }) => {
  return (
    <ul className="grid space-around">
      {repositories.map((repo, index) => {
        const { owner, html_url, stargazers_count, forks, open_issues } = repo;
        const { login, avatar_url } = owner;

        return (
          <li key={html_url}>
            <Card
              header={`#${index + 1}`}
              avatar={avatar_url}
              href={html_url}
              name={login}
            >
              <ul className="card-list">
                <li>
                  <Tooltip text="Github user name">
                    <FaUser color="rgb(255, 191, 116)" size={22} />
                    <a href={`https://github.com/${login}`}>
                      {login}
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <FaStar color="rgb(255, 215, 0)" size={22} />
                  {stargazers_count.toLocaleString()} stars
              </li>
                <li>
                  <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
                  {forks.toLocaleString()} forks
              </li>
                <li>
                  <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
                  {open_issues.toLocaleString()} open issues
              </li>
              </ul>
            </Card>
          </li>
        );
      })}
    </ul>
  );
};

RepositoriesGrid.propTypes = {
  repositories: PropTypes.array.isRequired
}

export default RepositoriesGrid;