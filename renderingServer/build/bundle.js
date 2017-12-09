/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USER = exports.FETCH_USER = 'fetch__user';
var fetchUser = exports.fetchUser = function fetchUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axiosInstance.get('/user');

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_USER,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_ALL_PINS = exports.FETCH_ALL_PINS = 'fetch_all_pins';
var fetchAllPins = exports.fetchAllPins = function fetchAllPins() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axiosInstance.get('/allPins');

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_ALL_PINS,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var LIKE_PIN = exports.LIKE_PIN = 'like_pin';
var likePin = exports.likePin = function likePin(pinId) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axiosInstance.post('/allPins/like', { id: pinId });

            case 2:
              res = _context3.sent;


              res.data = { id: pinId };

              dispatch({
                type: LIKE_PIN,
                payload: res
              });

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var FETCH_MY_PINS = exports.FETCH_MY_PINS = 'fetch_my_pins';
var fetchMyPins = exports.fetchMyPins = function fetchMyPins() {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axiosInstance.get('/myPins');

            case 2:
              res = _context4.sent;


              dispatch({
                type: FETCH_MY_PINS,
                payload: res
              });

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var ADD_NEW_PIN = exports.ADD_NEW_PIN = 'add_new_pin';
var addNewPin = exports.addNewPin = function addNewPin(newPin) {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axiosInstance.post('/myPins/add', newPin);

            case 2:
              res = _context5.sent;


              console.log(res.data);

              dispatch({
                type: ADD_NEW_PIN,
                payload: res
              });

            case 5:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var DELETE_PIN = exports.DELETE_PIN = 'delete_pin';
var deletePin = exports.deletePin = function deletePin(pinId) {
  return function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axiosInstance.post('/myPins/delete', { id: pinId });

            case 2:
              res = _context6.sent;


              res.data = { id: pinId };

              dispatch({
                type: DELETE_PIN,
                payload: res
              });

            case 5:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x16, _x17, _x18) {
      return _ref6.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Container/Container");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(20);

var _App2 = _interopRequireDefault(_App);

var _HomeContainer = __webpack_require__(24);

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

var _MyPinsContainer = __webpack_require__(29);

var _MyPinsContainer2 = _interopRequireDefault(_MyPinsContainer);

var _PageNotFoundContainer = __webpack_require__(36);

var _PageNotFoundContainer2 = _interopRequireDefault(_PageNotFoundContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomeContainer2.default, {
    path: '/',
    exact: true
  }), _extends({}, _MyPinsContainer2.default, {
    path: '/myPins'
  }), _extends({}, _PageNotFoundContainer2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Menu/Menu");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Image2 = __webpack_require__(9);

var _Image3 = _interopRequireDefault(_Image2);

var _Button2 = __webpack_require__(10);

var _Button3 = _interopRequireDefault(_Button2);

var _Card2 = __webpack_require__(26);

var _Card3 = _interopRequireDefault(_Card2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NewImage = __webpack_require__(11);

var _NewImage2 = _interopRequireDefault(_NewImage);

var _reactMasonryComponent = __webpack_require__(28);

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var masonryOptions = {
  transitionDuration: 0
};

var PinsList = function PinsList(props) {
  var listType = props.listType,
      pinsList = props.pinsList;


  var renderButton = function renderButton(data) {

    if (listType === 'myPins') return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(_Button3.default, { icon: 'heart', label: { as: 'a', basic: true, content: data.likes }, labelPosition: 'right', disabled: true, basic: true }),
      _react2.default.createElement(_Button3.default, { id: data.id, icon: 'close', floated: 'right', onClick: props.handleDelete.bind(undefined) })
    );else return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        'div',
        { className: 'ui right labeled button' },
        _react2.default.createElement(
          'button',
          { id: data.id, className: 'ui icon basic button', tabIndex: '0', onClick: props.handleLike.bind(undefined) },
          _react2.default.createElement('i', { 'aria-hidden': 'true', className: 'heart icon' })
        ),
        _react2.default.createElement(
          'a',
          { className: 'ui left pointing basic label' },
          data.likes
        )
      ),
      _react2.default.createElement(_Image3.default, { src: data.profileImage, size: 'mini', floated: 'right' })
    );
  };

  var renderMyPins = function renderMyPins(type) {
    return pinsList.map(function (pin, i) {
      return _react2.default.createElement(
        _Card3.default,
        { key: i },
        _react2.default.createElement(_NewImage2.default, { src: pin.imageUrl }),
        _react2.default.createElement(
          _Card3.default.Content,
          { textAlign: 'center' },
          _react2.default.createElement(
            _Card3.default.Header,
            null,
            pin.title
          )
        ),
        _react2.default.createElement(
          _Card3.default.Content,
          { extra: true },
          renderButton(pin)
        )
      );
    });
  };

  return _react2.default.createElement(
    _reactMasonryComponent2.default,
    { className: 'ui five doubling stackable cards', elementType: 'div', options: masonryOptions, disableImagesLoaded: false, updateOnEachImageLoad: false },
    renderMyPins()
  );
};

exports.default = PinsList;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Image/Image");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Button/Button");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Image2 = __webpack_require__(9);

var _Image3 = _interopRequireDefault(_Image2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactImage = __webpack_require__(27);

var _reactImage2 = _interopRequireDefault(_reactImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewImage = function NewImage(_ref) {
  var src = _ref.src,
      className = _ref.className;


  var handleError = function handleError(e) {
    return e.target.src = '/assets/placeholder.png';
  };

  var handleClass = function handleClass() {
    return 'ui centered image ' + className;
  };

  var srcOptions = [src, '/assets/placeholder.png'];

  if (className === undefined) {
    return _react2.default.createElement(_reactImage2.default, { className: handleClass(), src: srcOptions });
  } else {
    return _react2.default.createElement(_Image3.default, { src: src, onError: handleError.bind(undefined), centered: true });
  }
};

exports.default = NewImage;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Header/Header");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Segment/Segment");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

var _express = __webpack_require__(18);

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(19);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _reactRouterConfig = __webpack_require__(3);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

var _htmlTemplate = __webpack_require__(37);

var _htmlTemplate2 = _interopRequireDefault(_htmlTemplate);

var _createStore = __webpack_require__(39);

var _createStore2 = _interopRequireDefault(_createStore);

var _index = __webpack_require__(46);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
__webpack_require__(47).config({ path: '../.env' });

app.use('/api', (0, _expressHttpProxy2.default)(process.env.API_URL));
app.use(_express2.default.static(process.cwd() + '/public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};

    //fetch data and embed into app
    var newApp = (0, _index2.default)(req, store, context);

    //embed app into html page
    var page = (0, _htmlTemplate2.default)(newApp, store);

    //ssr auth redirect fallback
    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(page);
  });
});

var port = process.env.PORT;
app.listen(port, function () {
  console.log('Rendering server initializing on port ' + port);
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _NavbarContainer = __webpack_require__(21);

var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_NavbarContainer2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _actions.fetchUser)());
  },
  component: App
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

var _Navbar = __webpack_require__(22);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavbarContainer = function (_Component) {
  _inherits(NavbarContainer, _Component);

  function NavbarContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavbarContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavbarContainer.__proto__ || Object.getPrototypeOf(NavbarContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: '' }, _this.handleItemClick = function (e, _ref2) {
      var to = _ref2.to;
      return _this.setState({ activeItem: to });
    }, _this.setActive = function (path) {
      return _this.setState({ activeItem: path });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavbarContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setActive(this.props.location.pathname);
    }
  }, {
    key: 'render',
    value: function render() {
      var activeItem = this.state.activeItem;


      return _react2.default.createElement(_Navbar2.default, {
        authStatus: this.props.auth,
        activeItem: activeItem,
        onClick: this.handleItemClick });
    }
  }]);

  return NavbarContainer;
}(_react.Component);

function mapStateToProps(_ref3) {
  var auth = _ref3.auth;

  return { auth: auth };
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(NavbarContainer));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon2 = __webpack_require__(23);

var _Icon3 = _interopRequireDefault(_Icon2);

var _Menu2 = __webpack_require__(7);

var _Menu3 = _interopRequireDefault(_Menu2);

var _Container2 = __webpack_require__(5);

var _Container3 = _interopRequireDefault(_Container2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var authStatus = _ref.authStatus,
      activeItem = _ref.activeItem,
      onClick = _ref.onClick;


  var renderNavLink = function renderNavLink() {
    return authStatus ? _react2.default.createElement(
      _Menu3.default.Item,
      { active: activeItem === '/myPins', onClick: onClick, as: _reactRouterDom.Link, to: '/myPins' },
      'My Pins'
    ) : null;
  };

  var renderAuthButton = function renderAuthButton() {
    return authStatus ? _react2.default.createElement(
      'a',
      { className: 'item', href: '/api/logout' },
      'Logout'
    ) : _react2.default.createElement(
      _Menu3.default.Item,
      null,
      _react2.default.createElement(
        'a',
        { className: 'ui twitter inverted button', href: '/api/auth/twitter' },
        _react2.default.createElement(_Icon3.default, { name: 'twitter' }),
        'Login'
      )
    );
  };

  return _react2.default.createElement(
    _Menu3.default,
    { borderless: true, fixed: 'top', size: 'large', color: 'teal', inverted: true },
    _react2.default.createElement(
      _Container3.default,
      null,
      _react2.default.createElement(
        _Menu3.default.Item,
        { onClick: onClick, as: _reactRouterDom.Link, to: '/' },
        'imagePin'
      ),
      renderNavLink(),
      _react2.default.createElement(
        _Menu3.default.Menu,
        { position: 'right' },
        renderAuthButton()
      )
    )
  );
};

exports.default = Navbar;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _Home = __webpack_require__(25);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeContainer = function (_Component) {
  _inherits(HomeContainer, _Component);

  function HomeContainer(props) {
    _classCallCheck(this, HomeContainer);

    var _this = _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).call(this, props));

    _this.handleLike = _this.handleLike.bind(_this);
    return _this;
  }

  _createClass(HomeContainer, [{
    key: 'handleLike',
    value: function handleLike(e) {
      this.props.likePin(e.target.parentNode.id);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAllPins();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Home2.default, { listType: 'allPins', pinsList: this.props.allPins, handleLike: this.handleLike });
    }
  }]);

  return HomeContainer;
}(_react.Component);

;

function mapStateToProps(state) {
  return { allPins: state.allPins };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchAllPins)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAllPins: _actions.fetchAllPins, likePin: _actions.likePin })(HomeContainer)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Container2 = __webpack_require__(5);

var _Container3 = _interopRequireDefault(_Container2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PinsList = __webpack_require__(8);

var _PinsList2 = _interopRequireDefault(_PinsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
  return _react2.default.createElement(
    _Container3.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'page-content' },
      _react2.default.createElement(_PinsList2.default, props)
    )
  );
};

exports.default = Home;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/views/Card/Card");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _MyPins = __webpack_require__(30);

var _MyPins2 = _interopRequireDefault(_MyPins);

var _RequireAuth = __webpack_require__(48);

var _RequireAuth2 = _interopRequireDefault(_RequireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyPinsContainer = function (_Component) {
  _inherits(MyPinsContainer, _Component);

  function MyPinsContainer(props) {
    _classCallCheck(this, MyPinsContainer);

    var _this = _possibleConstructorReturn(this, (MyPinsContainer.__proto__ || Object.getPrototypeOf(MyPinsContainer)).call(this, props));

    _this.handleDelete = _this.handleDelete.bind(_this);
    return _this;
  }

  _createClass(MyPinsContainer, [{
    key: 'handleDelete',
    value: function handleDelete(e) {
      e.target.parentNode.blur();
      this.props.deletePin(e.target.parentNode.id);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchMyPins();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_MyPins2.default, { listType: 'myPins', pinsList: this.props.myPins, handleDelete: this.handleDelete });
    }
  }]);

  return MyPinsContainer;
}(_react.Component);

function mapStateToProps(state) {
  return { myPins: state.myPins };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchMyPins)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchMyPins: _actions.fetchMyPins, deletePin: _actions.deletePin })((0, _RequireAuth2.default)(MyPinsContainer))
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider2 = __webpack_require__(31);

var _Divider3 = _interopRequireDefault(_Divider2);

var _Header2 = __webpack_require__(12);

var _Header3 = _interopRequireDefault(_Header2);

var _Menu2 = __webpack_require__(7);

var _Menu3 = _interopRequireDefault(_Menu2);

var _Container2 = __webpack_require__(5);

var _Container3 = _interopRequireDefault(_Container2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NewPinContainer = __webpack_require__(32);

var _NewPinContainer2 = _interopRequireDefault(_NewPinContainer);

var _PinsList = __webpack_require__(8);

var _PinsList2 = _interopRequireDefault(_PinsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyPins = function MyPins(props) {
  return _react2.default.createElement(
    _Container3.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'page-content' },
      _react2.default.createElement(
        _Menu3.default,
        { secondary: true, borderless: true, size: 'large' },
        _react2.default.createElement(
          _Menu3.default.Item,
          null,
          _react2.default.createElement(
            _Header3.default,
            { as: 'h1' },
            'My Pins'
          )
        ),
        _react2.default.createElement(
          _Menu3.default.Item,
          null,
          _react2.default.createElement(_NewPinContainer2.default, null)
        )
      ),
      _react2.default.createElement(_Divider3.default, null),
      _react2.default.createElement(_PinsList2.default, props)
    )
  );
};

exports.default = MyPins;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Divider/Divider");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NewPin = __webpack_require__(33);

var _NewPin2 = _interopRequireDefault(_NewPin);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPinContainer = function (_Component) {
  _inherits(NewPinContainer, _Component);

  function NewPinContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewPinContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewPinContainer.__proto__ || Object.getPrototypeOf(NewPinContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modalOpen: false,
      title: '',
      imageUrl: '/assets/placeholder.png'
    }, _this.handleTitle = function (e) {
      return _this.setState({ title: e.target.value });
    }, _this.handleImage = function (e) {
      return _this.setState({ imageUrl: e.target.value });
    }, _this.clearImage = function (e) {
      return _this.setState({ imageUrl: '' });
    }, _this.handleModal = function () {
      return _this.setState({ modalOpen: true });
    }, _this.closeModal = function () {
      _this.setState({ modalOpen: false });
      _this.clearImage();
    }, _this.handleSubmit = function () {
      _this.props.addNewPin({ title: _this.state.title, imageUrl: _this.state.imageUrl });
      _this.closeModal();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewPinContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_NewPin2.default, {
        modalStatus: this.state.modalOpen,
        handleModal: this.handleModal,
        imageUrl: this.state.imageUrl,
        handleTitle: this.handleTitle,
        handleImage: this.handleImage,
        handleSubmit: this.handleSubmit,
        closeModal: this.closeModal
      });
    }
  }]);

  return NewPinContainer;
}(_react.Component);

function mapStateToProps(state) {
  return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { addNewPin: _actions.addNewPin })(NewPinContainer);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button2 = __webpack_require__(10);

var _Button3 = _interopRequireDefault(_Button2);

var _Form2 = __webpack_require__(34);

var _Form3 = _interopRequireDefault(_Form2);

var _Segment2 = __webpack_require__(13);

var _Segment3 = _interopRequireDefault(_Segment2);

var _Modal2 = __webpack_require__(35);

var _Modal3 = _interopRequireDefault(_Modal2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NewImage = __webpack_require__(11);

var _NewImage2 = _interopRequireDefault(_NewImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewPin = function NewPin(props) {
  var modalStatus = props.modalStatus,
      imageUrl = props.imageUrl,
      handleTitle = props.handleTitle,
      handleImage = props.handleImage,
      handleModal = props.handleModal,
      closeModal = props.closeModal,
      handleSubmit = props.handleSubmit;


  return _react2.default.createElement(
    _Modal3.default,
    { trigger: _react2.default.createElement(
        _Button3.default,
        { className: 'new-pin-btn', color: 'green', onClick: handleModal, inverted: true },
        'New Pin'
      ),
      open: modalStatus },
    _react2.default.createElement(
      _Modal3.default.Header,
      null,
      'New Pin'
    ),
    _react2.default.createElement(
      _Modal3.default.Content,
      null,
      _react2.default.createElement(
        _Segment3.default,
        null,
        _react2.default.createElement(_NewImage2.default, { className: 'image-preview', src: imageUrl })
      ),
      _react2.default.createElement(
        _Form3.default,
        null,
        _react2.default.createElement(_Form3.default.Input, { label: 'Title', onChange: handleTitle, type: 'text' }),
        _react2.default.createElement(_Form3.default.Input, { label: 'Link', onChange: handleImage, type: 'url' })
      )
    ),
    _react2.default.createElement(
      _Modal3.default.Actions,
      null,
      _react2.default.createElement(
        _Button3.default,
        { color: 'green', onClick: handleSubmit },
        'Add'
      ),
      _react2.default.createElement(
        _Button3.default,
        { color: 'red', onClick: closeModal },
        'Close'
      )
    )
  );
};

exports.default = NewPin;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Form/Form");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/modules/Modal/Modal");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Segment2 = __webpack_require__(13);

var _Segment3 = _interopRequireDefault(_Segment2);

var _Header2 = __webpack_require__(12);

var _Header3 = _interopRequireDefault(_Header2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageNotFound = function PageNotFound(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;

  return _react2.default.createElement(
    'div',
    { className: 'notfound-content' },
    _react2.default.createElement(
      _Segment3.default,
      { secondary: true, textAlign: 'center' },
      _react2.default.createElement(
        _Header3.default,
        { as: 'h1' },
        'Page Not Found!'
      )
    )
  );
};

exports.default = {
  component: PageNotFound
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _serializeJavascript = __webpack_require__(38);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (pageContent, store) {
  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n        <title></title>\n        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>\n      </head>\n      <body>\n        <div id="root">' + pageContent + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(15);

var _reduxThunk = __webpack_require__(40);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(41);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(42);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: process.env.API_URL,
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(15);

var _auth = __webpack_require__(43);

var _auth2 = _interopRequireDefault(_auth);

var _allPinsReducer = __webpack_require__(44);

var _allPinsReducer2 = _interopRequireDefault(_allPinsReducer);

var _myPinsReducer = __webpack_require__(45);

var _myPinsReducer2 = _interopRequireDefault(_myPinsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _auth2.default,
  allPins: _allPinsReducer2.default,
  myPins: _myPinsReducer2.default
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USER:
      return action.payload.data;
    default:
      return state;
  }
};

var _actions = __webpack_require__(1);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

var updateLike = function updateLike(state, action) {
  if (state.id === action.payload.data.id) {
    state.likes += 1;
  }
  return state;
};

var allPinsReducer = function allPinsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_ALL_PINS:
      return action.payload.data;
    case _actions.LIKE_PIN:
      return state.map(function (i) {
        return updateLike(i, action);
      });
    default:
      return state;
  }
};

exports.default = allPinsReducer;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var pin = function pin(state, action) {
  switch (action.type) {
    case _actions.ADD_NEW_PIN:
      return {
        id: action.payload.data.id,
        title: action.payload.data.title,
        imageUrl: action.payload.data.imageUrl
      };
    default:
      return state;
  }
};

var deletePin = function deletePin(state, action) {
  for (var i in state) {
    if (state[i].id === action.payload.data.id) {
      return [].concat(_toConsumableArray(state.slice(0, i)), _toConsumableArray(state.slice(Number(i) + 1)));
    }
  }
};

var myPinsReducer = function myPinsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_MY_PINS:
      return action.payload.data;
    case _actions.ADD_NEW_PIN:
      return [].concat(_toConsumableArray(state), [pin(undefined, action)]);
    case _actions.DELETE_PIN:
      return deletePin(state, action);
    default:
      return state;
  }
};

exports.default = myPinsReducer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  return (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        _react2.default.Fragment,
        null,
        (0, _reactRouterConfig.renderRoutes)(_routes2.default)
      )
    )
  ));
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: 'render',
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          default:
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ })
/******/ ]);