import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './routes';
import reducers from './reducers';

import './styles/styles.scss';


//import $ from 'jquery';
//import jQueryBridget from 'jquery-bridget';
import Masonry from 'masonry-layout';
//import imagesLoaded from 'imagesloaded';
//import Minigrid from 'minigrid';

//var grid = new Minigrid({
  //container: '.grid',
  ///item: '.column'
//});
//grid.mount();
//const grid = document.querySelector('.mypins-list');
//jQueryBridget('masonry', Masonry, $);

const masonry = new Masonry('.grid', {
  itemSelector: '.column'
});
/*
imagesLoaded(grid).on('progress', function() {
  masonry.layout();
});*/

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>,
  document.querySelector('#root')
);
