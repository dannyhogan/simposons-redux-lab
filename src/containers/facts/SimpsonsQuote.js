import React, { Component } from 'react';
import PropTypes from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../../actions/simpsonsActions';
import { getCharacters } from '../../selectors/simpsonsSelectors';
import Quotes from '../../components/Quote/Quote';

class SimpsonsQuote extends Component {

  static propTypes = {
    characters: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { characters } = this.props;
    return (
      <>
        <Quotes characters={characters[0]} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
