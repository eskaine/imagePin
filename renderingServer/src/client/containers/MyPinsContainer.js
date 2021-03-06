import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyPins, deletePin } from '../actions';
import MyPins from '../components/MyPins';
import RequireAuth from '../components/hocs/RequireAuth';

class MyPinsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    let element = e.target;

    if(!e.target.id) {
      element = e.target.parentNode;
    }

    element.blur();
    this.props.deletePin(element.id);
  }

  componentDidMount() {
    this.props.fetchMyPins();
  }

  render() {
    return <MyPins pinsList={this.props.myPins} handleDelete={this.handleDelete} />;
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
  component: connect(mapStateToProps, {fetchMyPins, deletePin})(RequireAuth(MyPinsContainer))
};
