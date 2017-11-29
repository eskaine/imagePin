import React, { Component } from 'react';
import NewPin from '../components/NewPin';
import { connect } from 'react-redux';
import { addNewPin } from '../actions';

class NewPinContainer extends Component {

  state = {
    title: '',
    imageUrl: '/assets/placeholder.png'
  };

  handleTitle = (e) => this.setState({ title: e.target.value });

  handleImage = (e) => this.setState({ imageUrl: e.target.value });

  handleImageError = () => this.setState({ imageUrl: '/assets/placeholder.png' });

  handleSubmit = () => {
    this.props.addNewPin(this.state);
  };

  render() {
    return (
      <NewPin
        imageUrl={this.state.imageUrl}
        handleTitle={this.handleTitle}
        handleImage={this.handleImage}
        handleImageError={this.handleImageError}
        handleSubmit={this.handleSubmit}
      />
    );
  }

}

function mapStateToProps(state) {
  console.log(state);
  return {};
}

//export default NewPinContainer;
export default connect(mapStateToProps, {addNewPin})(NewPinContainer);
