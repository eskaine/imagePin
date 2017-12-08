import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyPins, deletePin } from '../actions';
import MyPins from '../components/MyPins';
import requireAuth from '../components/hocs/requireAuth';

class MyPinsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.target.parentNode.blur();
    this.props.deletePin(e.target.id);
  }

  componentDidMount() {
    this.props.fetchMyPins();
  }

  render() {
    return <MyPins listType='myPins' pinsList={this.props.myPins} handleDelete={this.handleDelete} />;
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
  component: connect(mapStateToProps, {fetchMyPins, deletePin})(requireAuth(MyPinsContainer))
};
