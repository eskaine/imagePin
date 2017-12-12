import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';
import PinsList from './PinsList';

const Home = (props) => {

  const renderCardExtra = (data) => (
      <React.Fragment>
        <div className="ui right labeled button">
          <button id={data.id} className="ui icon basic button" tabIndex="0" onClick={props.handleLike.bind(this)}>
            <i aria-hidden="true" className="heart icon"></i>
          </button>
          <a className="ui left pointing basic label">{data.likes}</a>
        </div>
        <Image src={data.profileImage} size='mini' floated='right' />
      </React.Fragment>
  );

  return (
    <Container>
      <div className='page-content'>
        <PinsList {...props} renderExtra={renderCardExtra} />
      </div>
    </Container>
  );
}

export default Home;
