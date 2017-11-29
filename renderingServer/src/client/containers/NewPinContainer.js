import React, { Component } from 'react';
import NewPin from '../components/NewPin';

class NewPinContainer extends Component {

  state = {
    title: '',
    imageSrc: '/assets/placeholder.png'
  };

  handleTitle = (e) => this.setState({ title: e.target.value });

  handleImage = (e) => this.setState({ imageSrc: e.target.value });

  handleImageError = () => this.setState({ imageSrc: '/assets/placeholder.png' });

  render() {
    return (
      <NewPin
        imageSrc={this.state.imageSrc}
        handleTitle={this.handleTitle}
        handleImage={this.handleImage}
        handleImageError={this.handleImageError}
      />
    );
  }

}

export default NewPinContainer;
