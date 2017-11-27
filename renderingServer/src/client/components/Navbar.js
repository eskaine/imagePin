import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter  } from 'react-router-dom';
import { Container, Menu, Button, Icon } from 'semantic-ui-react';

class Navbar extends Component {

  state = { activeItem: 'home' };

  handleItemClick = (e, { path }) => this.setState({ activeItem: path });

  setActive = (path) => this.setState({ activeItem: path });

  renderNavLink = (activeItem) => {
    return this.props.auth ? (
      <Menu.Item path='yourpins'  active={activeItem === 'yourpins'} onClick={this.handleItemClick} as={Link} to='/yourpins'>Your Pins</Menu.Item>
    ) : null;
  }

  renderAuthButton = () => {
    return this.props.auth ? (
      <a className="item" href='/api/logout'>Logout</a>
    ) : (
      <Menu.Item>
        <a className="ui twitter button" href='/api/auth/twitter'><Icon name='twitter' />Login</a>
      </Menu.Item>
    );
  }

  componentDidMount() {
    this.setActive(this.props.location.pathname.split('/')[1]);
  }

  //TODO: fix home

  render() {
    const { activeItem } = this.state;
    return (
      <Menu borderless={true} fixed='top' size='large' color='blue'>
        <Container>
          <Menu.Item path='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/'>imagePin</Menu.Item>
          <Menu.Item path='data'  active={activeItem === 'data'} onClick={this.handleItemClick} as={Link} to='/data'>Pins</Menu.Item>
          {this.renderNavLink(activeItem)}

          <Menu.Menu position='right'>
            {this.renderAuthButton()}
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }

}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(connect(mapStateToProps)(Navbar));
