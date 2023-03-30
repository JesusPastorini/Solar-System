import React, { Component } from 'react';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    const titulo = 'Planetas'
    return (
      <div data-testid="solar-system">
        <Title headline={titulo}/>
      </div>
    );
  }
}

export default SolarSystem;
