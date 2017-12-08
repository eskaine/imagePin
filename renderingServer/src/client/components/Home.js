import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import PinsList from './PinsList';

const Home = (props) => {
  return (
    <Container>
      <div className='page-content'>
        <PinsList {...props} />
      </div>
    </Container>
  );
}

export default Home;
