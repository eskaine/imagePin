import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyPins } from '../actions';
import MyPins from '../components/MyPins';
import requireAuth from '../components/hocs/requireAuth';

class MyPinsContainer extends Component {

  componentDidMount() {
    this.props.fetchMyPins();
  }

  render() {
    return <MyPins myPins={this.props.myPins} />;
  }

}

function mapStateToProps(state) {
  return { myPins: state.myPins };
}

function loadData(store) {
  return store.dispatch(fetchMyPins());
}

export default {
  loadData,
  component: connect(mapStateToProps, {fetchMyPins})(requireAuth(MyPinsContainer))
};
