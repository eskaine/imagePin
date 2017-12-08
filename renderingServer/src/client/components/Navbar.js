import React from 'react';
import { Link } from 'react-router-dom';
import {  Container, Menu, Button, Icon } from 'semantic-ui-react';

const Navbar = ({ authStatus, activeItem, onClick}) => {

  const renderNavLink = () => authStatus ? (
      <Menu.Item active={activeItem === '/myPins'} onClick={onClick} as={Link} to='/myPins'>My Pins</Menu.Item>
    ) : null;

  const renderAuthButton = () => authStatus ? (
      <a className="item" href='/api/logout'>Logout</a>
    ) : (
      <Menu.Item>
        <a className="ui twitter inverted button" href='/api/auth/twitter'><Icon name='twitter' />Login</a>
      </Menu.Item>
    );

  return (
    <Menu borderless={true} fixed='top' size='large' color='teal' inverted>
      <Container>
        <Menu.Item onClick={onClick} as={Link} to='/'>imagePin</Menu.Item>
        {renderNavLink()}

        <Menu.Menu position='right'>
          {renderAuthButton()}
        </Menu.Menu>
      </Container>
    </Menu>
  );

}

export default Navbar;
