import React from 'react';
import { Modal, Segment, Form, Button, Image, Header } from 'semantic-ui-react';
import NewImage from './NewImage';

const NewPin = (props) => {

    const { modalStatus, imageUrl, handleTitle, handleImage, handleModal, closeModal, handleSubmit } = props;

    return (
      <Modal trigger={<Button className='new-pin-btn' color='green' onClick={handleModal} inverted>New Pin</Button>}
        open={modalStatus}>
        <Modal.Header>New Pin</Modal.Header>
        <Modal.Content>
          <Segment>
            <NewImage className='image-preview' src={imageUrl} />
          </Segment>
          <Form>
            <Form.Input label='Title' onChange={handleTitle} type='text' />
            <Form.Input label='Link' onChange={handleImage} type='url' />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={handleSubmit}>Add</Button>
          <Button color='red' onClick={closeModal}>Close</Button>
        </Modal.Actions>
      </Modal>
    );
  
}

export default NewPin;
