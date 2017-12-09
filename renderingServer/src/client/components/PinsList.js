import React from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import NewImage from './NewImage';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

const PinsList = (props) => {

  const { listType, pinsList } = props;

  const renderButton = (data) => {
    
    if(listType === 'myPins')
      return (
        <React.Fragment>
          <Button icon='heart' label={{ as: 'a', basic: true, content:data.likes }} labelPosition='right' disabled basic />
          <Button id={data.id} icon='close' floated='right' onClick={props.handleDelete.bind(this)} />
        </React.Fragment>
      );
    else
      return (
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
  };

  const renderMyPins = (type) => {
    return pinsList.map((pin, i) => {
      return (
          <Card key={i}>
            <NewImage src={pin.imageUrl} />
            <Card.Content textAlign='center'>
              <Card.Header>{pin.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              {renderButton(pin)}
            </Card.Content>
          </Card>
      );
    });
  }

  return (
    <Masonry className={'ui five doubling stackable cards'} elementType={'div'} options={masonryOptions} disableImagesLoaded={false} updateOnEachImageLoad={false}>
      {renderMyPins()}
    </Masonry>
  );

}

export default PinsList;
