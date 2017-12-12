import React, { Component } from 'react';
import { Container, Menu, Header, Divider, Button } from 'semantic-ui-react';
import NewPinContainer from '../containers/NewPinContainer';
import PinsList from './PinsList';

const MyPins = (props) => {

  const renderCardExtra = (data) => (
      <React.Fragment>
        <div className="ui right labeled button disabled ">
          <button id={data.id} className="ui icon basic button" disabled tabIndex="-1">
            <i aria-hidden="true" className="heart icon"></i>
          </button>
          <a className="ui left pointing basic label">{data.likes}</a>
        </div>
        <Button id={data.id} icon='close' floated='right' onClick={props.handleDelete.bind(this)} />
      </React.Fragment>
  );
  
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
        <PinsList {...props} renderExtra={renderCardExtra} />
      </div>
    </Container>
  );
}

export default MyPins;
