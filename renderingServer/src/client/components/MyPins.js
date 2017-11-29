import React from 'react';
import { Container, Menu, Header, Divider } from 'semantic-ui-react';
import NewPinContainer from '../containers/NewPinContainer';
import { myPins } from '../attributes/attr';

const MyPins = () => {
  return (
    <Container>
      <div className='page-content'>
        <Menu secondary borderless={true} size='large'>
          <Menu.Item><Header as='h1'>{myPins.pageName}</Header></Menu.Item>
          <Menu.Item><NewPinContainer /></Menu.Item>
        </Menu>
        <Divider />
      </div>
    </Container>
  );
}

export default MyPins;
