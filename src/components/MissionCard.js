import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { miss } = this.props;
    const { name, year, country, destination } = miss;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}
MissionCard.defaultProps = {
  miss: [],
};
MissionCard.propTypes = {
  miss: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.string,
    country: PropTypes.string,
    destination: PropTypes.string,
  })),
};
export default MissionCard;
