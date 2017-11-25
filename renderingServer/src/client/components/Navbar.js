import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Button, Icon } from 'semantic-ui-react';

class Navbar extends Component {

  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu borderless={true} fixed='top' size='large' color='blue'>
        <Container>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/'>imagePin</Menu.Item>
          <Menu.Item name='all'  active={activeItem === 'all'} onClick={this.handleItemClick} as={Link} to='/all'>All</Menu.Item>
          <Menu.Item name='data'  active={activeItem === 'data'} onClick={this.handleItemClick} as={Link} to='/data'>Data</Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/auth/twitter'>
              <Button color='twitter'>
                <Icon name='twitter' /> Twitter
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }

}

export default Navbar;
