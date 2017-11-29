import React from 'react';
import { Modal, Segment, Form, Button, Image, Header } from 'semantic-ui-react';
import { newPin } from '../attributes/attr';

const NewPin = ({ imageSrc, handleTitle, handleImage, handleImageError }) => {
  return (
    <Modal trigger={<Button className='new-pin-btn' color={newPin.triggerBtn.color} inverted>{newPin.triggerBtn.name}</Button>} closeIcon>
      <Modal.Header>{newPin.name}</Modal.Header>
      <Modal.Content>
        <Segment>
          <Image src={imageSrc} onError={handleImageError} size='medium' centered />
        </Segment>
        <Form>
          <Form.Input label={newPin.labelNames[0]} onChange={handleTitle} type='text' />
          <Form.Input label={newPin.labelNames[1]} onChange={handleImage} type='url' />
          <Button color={newPin.addBtn.color} type='submit'>{newPin.addBtn.name}</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default NewPin;
