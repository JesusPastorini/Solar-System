import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const titulo = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ titulo } />
        <ul>
          {
            missions
              .map((mis) => <MissionCard key={ mis.name } miss={ mis } />)
          }
        </ul>
      </div>
    );
  }
}

export default Missions;
