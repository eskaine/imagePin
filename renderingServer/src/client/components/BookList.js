import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  renderBooks() {
    if(this.props.images.length > 0) {
      return this.props.images.map(image => {
        return <li key={image.book_id}>{image.book_name}</li>;
      });
    }
  }

  render() {
    return (
      <div>
        List of books
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {images: state.images};
}

function loadData(store) {
  return store.dispatch(fetchData());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchData })(BookList)
}
