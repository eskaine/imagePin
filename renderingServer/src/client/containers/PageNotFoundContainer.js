import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const PageNotFound = ({ staticContext = {} }) => {

  staticContext.notFound = true;

  return (
    <div className='notfound-content'>
      <Segment secondary textAlign='center'>
        <Header as='h1'>Page Not Found!</Header>
      </Segment>
    </div>
  );
};

export default {
  component: PageNotFound
}
