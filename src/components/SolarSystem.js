import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const titulo = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ titulo } />
        {
          planets.map((pl) => (
            <PlanetCard key={ pl.name } planetName={ pl.name } planetImage={ pl.image } />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
