import React from 'react';
import { Container, Menu, Header, Divider } from 'semantic-ui-react';
import NewPinContainer from '../containers/NewPinContainer';
import { yourPins } from '../attributes/attr';

const YourPins = () => {
  return (
    <Container>
      <div className='page-content'>
        <Menu secondary borderless={true} size='large'>
          <Menu.Item><Header as='h1'>{yourPins.pageName}</Header></Menu.Item>
          <Menu.Item><NewPinContainer /></Menu.Item>
        </Menu>
        <Divider />
      </div>
    </Container>
  );
}

export default YourPins;
