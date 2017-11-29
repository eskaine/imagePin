import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import Navbar from '../components/Navbar';

class NavbarContainer extends Component {

  state = { activeItem: '/home' };

  handleItemClick = (e, { to }) => this.setState({ activeItem: to });

  setActive = (path) => this.setState({ activeItem: path });

  componentWillMount() {
    this.setActive(this.props.location.pathname);
  }

  //TODO: fix home

  render() {
    const { activeItem } = this.state;

    return <Navbar
      authStatus={this.props.auth}
      activeItem={activeItem}
      onClick={this.handleItemClick} />;
  }

}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps)(NavbarContainer));
