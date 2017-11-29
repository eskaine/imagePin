import React, { Component } from 'react';
import { Modal, Segment, Form, Button, Image, Header, Icon } from 'semantic-ui-react';
import { newPin } from '../attributes/attr';

class NewPin extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;
    return (
      <Modal trigger={<Button className='new-pin-btn' color={newPin.triggerBtn.color} inverted>{newPin.triggerBtn.name}</Button>} closeIcon>
        <Modal.Header>{newPin.name}</Modal.Header>
        <Modal.Content>
          <Segment>
            <Image src='/assets/placeholder.png' size='medium' centered />
          </Segment>
          <Form>
            <Form.Input label={newPin.labelNames[0]} type='text' />
            <Form.Input label={newPin.labelNames[1]} type='url' />
            <Button color={newPin.addBtn.color} type='submit'>{newPin.addBtn.name}</Button>
          </Form>

        </Modal.Content>
      </Modal>
    );
  }
}

export default NewPin;
