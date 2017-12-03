import React, { Component } from 'react';
import { Modal, Segment, Form, Button, Image, Header } from 'semantic-ui-react';
import { newPin } from '../attributes/attr';
import NewImage from './NewImage';

class NewPin extends Component {

  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleAdd = () => {
    this.props.handleSubmit();
    this.handleClose();
  }

  render() {
    const { imageUrl, handleTitle, handleImage } = this.props;

    return (
      <Modal trigger={<Button className='new-pin-btn' color={newPin.triggerBtn.color} onClick={this.handleOpen} inverted>{newPin.triggerBtn.name}</Button>}
        open={this.state.modalOpen}>
        <Modal.Header>{newPin.name}</Modal.Header>
        <Modal.Content>
          <Segment>
            <NewImage className='image-preview' src={imageUrl} />
          </Segment>
          <Form>
            <Form.Input label={newPin.labelNames[0]} onChange={handleTitle} type='text' />
            <Form.Input label={newPin.labelNames[1]} onChange={handleImage} type='url' />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color={newPin.addBtn.color} onClick={this.handleAdd}>{newPin.addBtn.name}</Button>
          <Button color={newPin.closeBtn.color} onClick={this.handleClose}>{newPin.closeBtn.name}</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default NewPin;
