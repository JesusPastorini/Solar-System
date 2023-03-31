import React, { Component } from 'react';
import Title from './Title';

class Missions extends Component {
  render() {
    const titulo = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ titulo } />
      </div>
    );
  }
}

export default Missions;
