import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPins, likePin } from '../actions';
import Home from '../components/Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(e) {
    this.props.likePin(e.target.parentNode.id);
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    return <Home pinsList={this.props.allPins} handleLike={this.handleLike} />;
  }
};

function mapStateToProps(state) {
  return { allPins: state.allPins };
}

function loadData(store) {
  return store.dispatch(fetchAllPins());
}

export default {
  loadData,
  component: connect(mapStateToProps, {fetchAllPins, likePin})(HomeContainer)
};
