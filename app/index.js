import React from 'react';
import ReactDOM from 'react-dom';

import Popular from './components/Popular/Popular';
import Battle from './components/Battle/Battle';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);