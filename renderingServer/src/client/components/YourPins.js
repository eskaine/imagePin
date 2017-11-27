import React from 'react';
import { Container, Menu, Header, Divider } from 'semantic-ui-react';
import NewPin from './NewPin';

const YourPins = () => {
  return (

<Container>

    <div className='page-content'>
      <Menu secondary borderless={true} size='large'>
        <Menu.Item><Header as='h1'>Your Pins</Header></Menu.Item>
        <Menu.Item><NewPin /></Menu.Item>
      </Menu>
      <Divider />
    </div>
    </Container>
  );

}

export default YourPins;
