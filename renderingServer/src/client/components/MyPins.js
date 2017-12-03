import React, {Component} from 'react';
import { Container, Menu, Header, Divider } from 'semantic-ui-react';
import NewPinContainer from '../containers/NewPinContainer';
import {myPinsAttr} from '../attributes/attr';
import PinsList from './PinsList';

const MyPins = ({ myPins }) => {

  return (
    <Container>
      <div className='page-content'>
        <Menu secondary borderless={true} size='large'>
          <Menu.Item>
            <Header as='h1'>{myPinsAttr.pageName}</Header>
          </Menu.Item>
          <Menu.Item><NewPinContainer/></Menu.Item>
        </Menu>
        <Divider/>
        <PinsList pins={myPins} />
      </div>
    </Container>
  );

}

export default MyPins;
