import React, { Component } from 'react';
import NewPin from '../components/NewPin';
import { connect } from 'react-redux';
import { addNewPin } from '../actions';

class NewPinContainer extends Component {

  state = {
    modalOpen: false,
    title: '',
    imageUrl: '/assets/placeholder.png'
  };

  handleTitle = (e) => this.setState({ title: e.target.value });

  handleImage = (e) => this.setState({ imageUrl: e.target.value });

  clearImage = (e) => this.setState({ imageUrl: '' });

  handleModal = () => this.setState({ modalOpen: true });

  closeModal = () => {
    this.setState({ modalOpen: false });
    this.clearImage();
  }

  handleSubmit = () => {
    this.props.addNewPin({ title: this.state.title, imageUrl: this.state.imageUrl});
    this.closeModal();
  }

  render() {
    return (
      <NewPin
        modalStatus={this.state.modalOpen}
        handleModal={this.handleModal}
        imageUrl={this.state.imageUrl}
        handleTitle={this.handleTitle}
        handleImage={this.handleImage}
        handleSubmit={this.handleSubmit}
        closeModal={this.closeModal}
      />
    );
  }

}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {addNewPin})(NewPinContainer);
