import React, { Component } from 'react';

import LanguagesNav from '../LanguagesNav/LanguagesNav';
import RepositoriesGrid from '../RepositoriesGrid/RepositoriesGrid';
import { fetchPopularRepositories } from '../../utils/api';
import Loading from '../Loading/Loading';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repositories: {},
      error: null
    }

    this.updateSelectedLanguage = this.updateSelectedLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updateSelectedLanguage(this.state.selectedLanguage);
  }

  updateSelectedLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null
    });

    if (!this.state.repositories[selectedLanguage]) {
      fetchPopularRepositories(selectedLanguage)
        .then(data => this.setState(({ repositories }) => ({
          repositories: {
            ...repositories,
            [selectedLanguage]: data
          }
        })))
        .catch(error => {
          console.warn('Error fetching repositories: ', error);
          this.setState({
            error: 'Error while fetching the repositories'
          })
        });
    }
  }

  isLoading() {
    const { selectedLanguage, repositories, error } = this.state;
    return !repositories[selectedLanguage] && !error;
  }

  render() {
    const { selectedLanguage, repositories, error } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav
          selectedLanguage={selectedLanguage}
          onUpdateSelectedLanguage={this.updateSelectedLanguage}
        />

        {this.isLoading() && <Loading text="Fetching repos" />}
        {error && <p className='center-text error'>{error}</p>}

        {repositories[selectedLanguage] && <RepositoriesGrid repositories={repositories[selectedLanguage]} />}
      </React.Fragment>
    );
  }
}

export default Popular;