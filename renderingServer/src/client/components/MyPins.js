import React, { Component } from 'react';
import { Container, Menu, Header, Divider } from 'semantic-ui-react';
import NewPinContainer from '../containers/NewPinContainer';
import PinsList from './PinsList';

const MyPins = (props) => {
  return (
    <Container>
      <div className='page-content'>
        <Menu secondary borderless={true} size='large'>
          <Menu.Item>
            <Header as='h1'>My Pins</Header>
          </Menu.Item>
          <Menu.Item><NewPinContainer/></Menu.Item>
        </Menu>
        <Divider/>
        <PinsList {...props} />
      </div>
    </Container>
  );

}

export default MyPins;
