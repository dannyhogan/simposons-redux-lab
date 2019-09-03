import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ character }) {
  return (
    <li>
      <img>{character.image}</img>
      <p>{character.name}</p>
    </li>
  );
}

Quote.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};
