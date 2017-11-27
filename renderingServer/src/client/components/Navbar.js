import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Button, Icon } from 'semantic-ui-react';

const Navbar = ({ authStatus, activeItem, onClick}) => {

  function renderNavLink() {
    return authStatus ? (
      <Menu.Item path='yourpins'  active={activeItem === 'yourpins'} onClick={onClick} as={Link} to='/yourpins'>Your Pins</Menu.Item>
    ) : null;
  }

  function renderAuthButton() {
    return authStatus ? (
      <a className="item" href='/api/logout'>Logout</a>
    ) : (
      <Menu.Item>
        <a className="ui twitter button" href='/api/auth/twitter'><Icon name='twitter' />Login</a>
      </Menu.Item>
    );
  }

  return (
    <Menu borderless={true} fixed='top' size='large' color='blue'>
      <Container>
        <Menu.Item path='home' active={activeItem === 'home'} onClick={onClick} as={Link} to='/'>imagePin</Menu.Item>
        <Menu.Item path='data'  active={activeItem === 'data'} onClick={onClick} as={Link} to='/data'>Pins</Menu.Item>
        {renderNavLink()}

        <Menu.Menu position='right'>
          {renderAuthButton()}
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navbar;
