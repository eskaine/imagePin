import React from 'react';
import { Link } from 'react-router-dom';
import {  Container, Menu, Button, Icon } from 'semantic-ui-react';
import { navbar } from '../attributes/attr';

const Navbar = ({ authStatus, activeItem, onClick}) => {

  function renderNavLink() {
    return authStatus ? (
      <Menu.Item active={activeItem === '/yourPins'} onClick={onClick} as={Link} to='/yourPins'>{navbar.protectedLinkNames[0]}</Menu.Item>
    ) : null;
  }

  function renderAuthButton() {
    return authStatus ? (
      <a className="item" href='/api/logout'>{navbar.protectedLinkNames[1]}</a>
    ) : (
      <Menu.Item>
        <a className="ui twitter button" href='/api/auth/twitter'><Icon name='twitter' />{navbar.linkNames[1]}</a>
      </Menu.Item>
    );
  }

  return (
    <Menu borderless={true} fixed='top' size='large' color={navbar.color}>
      <Container>
        <Menu.Item active={activeItem === '/'} onClick={onClick} as={Link} to='/'>{navbar.appName}</Menu.Item>
        <Menu.Item active={activeItem === '/data'} onClick={onClick} as={Link} to='/data'>{navbar.linkNames[0]}</Menu.Item>
        {renderNavLink()}

        <Menu.Menu position='right'>
          {renderAuthButton()}
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navbar;
