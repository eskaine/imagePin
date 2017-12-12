import React from 'react';
import { Card, Button, Icon, Image } from 'semantic-ui-react';
import NewImage from './NewImage';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

const PinsList = (props) => {

  const { pinsList, renderExtra } = props;

  const renderMyPins = () => {
    return pinsList.map((pin, i) => {
      return (
          <Card key={i}>
            <NewImage src={pin.imageUrl} />
            <Card.Content textAlign='center'>
              <Card.Header>{pin.title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              {renderExtra(pin)}
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
