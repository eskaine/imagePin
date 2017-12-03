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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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

var ADD_NEW_PIN = exports.ADD_NEW_PIN = 'add_new_pin';
var addNewPin = exports.addNewPin = function addNewPin(newPin) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axiosInstance.post('/myPins/add', newPin);

            case 2:
              res = _context.sent;


              dispatch({
                type: ADD_NEW_PIN,
                payload: newPin
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

var FETCH_MY_PINS = exports.FETCH_MY_PINS = 'fetch_my_pins';
var fetchMyPins = exports.fetchMyPins = function fetchMyPins() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axiosInstance.get('/myPins');

            case 2:
              res = _context2.sent;


              dispatch({
                type: FETCH_MY_PINS,
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

var FETCH_USER = exports.FETCH_USER = 'fetch__user';
var fetchUser = exports.fetchUser = function fetchUser() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axiosInstance.get('/user');

            case 2:
              res = _context3.sent;


              dispatch({
                type: FETCH_USER,
                payload: res
              });

            case 4:
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

var FETCH_DATA = exports.FETCH_DATA = 'fetch_data';
var fetchData = exports.fetchData = function fetchData() {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axiosInstance.get('/data');

            case 2:
              res = _context4.sent;


              dispatch({
                type: FETCH_DATA,
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var navbar = exports.navbar = {
  appName: 'imagePin',
  color: 'blue',
  linkNames: ['Data', 'Login'],
  protectedLinkNames: ['My Pins', 'Logout']
};

var myPinsAttr = exports.myPinsAttr = {
  pageName: 'My Pins'

  //New Pin Modal
};var newPin = exports.newPin = {
  name: 'New Pin',
  triggerBtn: {
    name: 'New Pin',
    color: 'green'
  },
  labelNames: ['Title', 'Link'],
  addBtn: {
    name: 'Add',
    color: 'green'
  },
  closeBtn: {
    name: 'Close',
    color: 'red'
  }
};

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

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

var _HomeContainer = __webpack_require__(22);

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

var _BookListContainer = __webpack_require__(23);

var _BookListContainer2 = _interopRequireDefault(_BookListContainer);

var _MyPinsContainer = __webpack_require__(24);

var _MyPinsContainer2 = _interopRequireDefault(_MyPinsContainer);

var _PageNotFoundContainer = __webpack_require__(36);

var _PageNotFoundContainer2 = _interopRequireDefault(_PageNotFoundContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomeContainer2.default, {
    path: '/',
    exact: true
  }), _extends({}, _BookListContainer2.default, {
    path: '/data'
  }), _extends({}, _MyPinsContainer2.default, {
    path: '/myPins'
  }), _extends({}, _PageNotFoundContainer2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Menu/Menu");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Container/Container");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Header/Header");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Segment/Segment");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Image2 = __webpack_require__(48);

var _Image3 = _interopRequireDefault(_Image2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactImage = __webpack_require__(49);

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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

var _express = __webpack_require__(17);

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(18);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _reactRouterConfig = __webpack_require__(4);

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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _NavbarContainer = __webpack_require__(20);

var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _Navbar = __webpack_require__(21);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavbarContainer.__proto__ || Object.getPrototypeOf(NavbarContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: '/home' }, _this.handleItemClick = function (e, _ref2) {
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

    //TODO: fix home

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon2 = __webpack_require__(7);

var _Icon3 = _interopRequireDefault(_Icon2);

var _Menu2 = __webpack_require__(8);

var _Menu3 = _interopRequireDefault(_Menu2);

var _Container2 = __webpack_require__(9);

var _Container3 = _interopRequireDefault(_Container2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _attr = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var authStatus = _ref.authStatus,
      activeItem = _ref.activeItem,
      onClick = _ref.onClick;


  function renderNavLink() {
    return authStatus ? _react2.default.createElement(
      _Menu3.default.Item,
      { active: activeItem === '/myPins', onClick: onClick, as: _reactRouterDom.Link, to: '/myPins' },
      _attr.navbar.protectedLinkNames[0]
    ) : null;
  }

  function renderAuthButton() {
    return authStatus ? _react2.default.createElement(
      'a',
      { className: 'item', href: '/api/logout' },
      _attr.navbar.protectedLinkNames[1]
    ) : _react2.default.createElement(
      _Menu3.default.Item,
      null,
      _react2.default.createElement(
        'a',
        { className: 'ui twitter button', href: '/api/auth/twitter' },
        _react2.default.createElement(_Icon3.default, { name: 'twitter' }),
        _attr.navbar.linkNames[1]
      )
    );
  }

  return _react2.default.createElement(
    _Menu3.default,
    { borderless: true, fixed: 'top', size: 'large', color: _attr.navbar.color },
    _react2.default.createElement(
      _Container3.default,
      null,
      _react2.default.createElement(
        _Menu3.default.Item,
        { active: activeItem === '/', onClick: onClick, as: _reactRouterDom.Link, to: '/' },
        _attr.navbar.appName
      ),
      _react2.default.createElement(
        _Menu3.default.Item,
        { active: activeItem === '/data', onClick: onClick, as: _reactRouterDom.Link, to: '/data' },
        _attr.navbar.linkNames[0]
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeContainer = function HomeContainer() {

  return _react2.default.createElement(
    'div',
    null,
    'Home Component'
  );
};

exports.default = {
  component: HomeContainer
};

/***/ }),
/* 23 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookListContainer = function (_Component) {
  _inherits(BookListContainer, _Component);

  function BookListContainer() {
    _classCallCheck(this, BookListContainer);

    return _possibleConstructorReturn(this, (BookListContainer.__proto__ || Object.getPrototypeOf(BookListContainer)).apply(this, arguments));
  }

  _createClass(BookListContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchData();
    }
  }, {
    key: 'renderBooks',
    value: function renderBooks() {
      if (this.props.images.length > 0) {
        return this.props.images.map(function (image) {
          return _react2.default.createElement(
            'li',
            { key: image.book_id },
            image.book_name
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'List of books',
        _react2.default.createElement(
          'ul',
          null,
          this.renderBooks()
        )
      );
    }
  }]);

  return BookListContainer;
}(_react.Component);

function mapStateToProps(state) {
  return { images: state.images };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchData)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchData: _actions.fetchData })(BookListContainer)
};

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

var _MyPins = __webpack_require__(25);

var _MyPins2 = _interopRequireDefault(_MyPins);

var _requireAuth = __webpack_require__(35);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyPinsContainer = function (_Component) {
  _inherits(MyPinsContainer, _Component);

  function MyPinsContainer() {
    _classCallCheck(this, MyPinsContainer);

    return _possibleConstructorReturn(this, (MyPinsContainer.__proto__ || Object.getPrototypeOf(MyPinsContainer)).apply(this, arguments));
  }

  _createClass(MyPinsContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchMyPins();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_MyPins2.default, { myPins: this.props.myPins });
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
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchMyPins: _actions.fetchMyPins })((0, _requireAuth2.default)(MyPinsContainer))
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider2 = __webpack_require__(26);

var _Divider3 = _interopRequireDefault(_Divider2);

var _Header2 = __webpack_require__(10);

var _Header3 = _interopRequireDefault(_Header2);

var _Menu2 = __webpack_require__(8);

var _Menu3 = _interopRequireDefault(_Menu2);

var _Container2 = __webpack_require__(9);

var _Container3 = _interopRequireDefault(_Container2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NewPinContainer = __webpack_require__(27);

var _NewPinContainer2 = _interopRequireDefault(_NewPinContainer);

var _attr = __webpack_require__(5);

var _PinsList = __webpack_require__(32);

var _PinsList2 = _interopRequireDefault(_PinsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyPins = function MyPins(_ref) {
  var myPins = _ref.myPins;


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
            _attr.myPinsAttr.pageName
          )
        ),
        _react2.default.createElement(
          _Menu3.default.Item,
          null,
          _react2.default.createElement(_NewPinContainer2.default, null)
        )
      ),
      _react2.default.createElement(_Divider3.default, null),
      _react2.default.createElement(_PinsList2.default, { pins: myPins })
    )
  );
};

exports.default = MyPins;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Divider/Divider");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NewPin = __webpack_require__(28);

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
      title: '',
      imageUrl: '/assets/placeholder.png'
    }, _this.handleTitle = function (e) {
      return _this.setState({ title: e.target.value });
    }, _this.handleImage = function (e) {
      return _this.setState({ imageUrl: e.target.value });
    }, _this.handleSubmit = function () {
      return _this.props.addNewPin(_this.state);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewPinContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_NewPin2.default, {
        imageUrl: this.state.imageUrl,
        handleTitle: this.handleTitle,
        handleImage: this.handleImage,
        handleSubmit: this.handleSubmit
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button2 = __webpack_require__(29);

var _Button3 = _interopRequireDefault(_Button2);

var _Form2 = __webpack_require__(30);

var _Form3 = _interopRequireDefault(_Form2);

var _Segment2 = __webpack_require__(11);

var _Segment3 = _interopRequireDefault(_Segment2);

var _Modal2 = __webpack_require__(31);

var _Modal3 = _interopRequireDefault(_Modal2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _attr = __webpack_require__(5);

var _NewImage = __webpack_require__(12);

var _NewImage2 = _interopRequireDefault(_NewImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPin = function (_Component) {
  _inherits(NewPin, _Component);

  function NewPin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewPin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewPin.__proto__ || Object.getPrototypeOf(NewPin)).call.apply(_ref, [this].concat(args))), _this), _this.state = { modalOpen: false }, _this.handleOpen = function () {
      return _this.setState({ modalOpen: true });
    }, _this.handleClose = function () {
      return _this.setState({ modalOpen: false });
    }, _this.handleAdd = function () {
      _this.props.handleSubmit();
      _this.handleClose();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewPin, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          imageUrl = _props.imageUrl,
          handleTitle = _props.handleTitle,
          handleImage = _props.handleImage;


      return _react2.default.createElement(
        _Modal3.default,
        { trigger: _react2.default.createElement(
            _Button3.default,
            { className: 'new-pin-btn', color: _attr.newPin.triggerBtn.color, onClick: this.handleOpen, inverted: true },
            _attr.newPin.triggerBtn.name
          ),
          open: this.state.modalOpen },
        _react2.default.createElement(
          _Modal3.default.Header,
          null,
          _attr.newPin.name
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
            _react2.default.createElement(_Form3.default.Input, { label: _attr.newPin.labelNames[0], onChange: handleTitle, type: 'text' }),
            _react2.default.createElement(_Form3.default.Input, { label: _attr.newPin.labelNames[1], onChange: handleImage, type: 'url' })
          )
        ),
        _react2.default.createElement(
          _Modal3.default.Actions,
          null,
          _react2.default.createElement(
            _Button3.default,
            { color: _attr.newPin.addBtn.color, onClick: this.handleAdd },
            _attr.newPin.addBtn.name
          ),
          _react2.default.createElement(
            _Button3.default,
            { color: _attr.newPin.closeBtn.color, onClick: this.handleClose },
            _attr.newPin.closeBtn.name
          )
        )
      );
    }
  }]);

  return NewPin;
}(_react.Component);

exports.default = NewPin;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Button/Button");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Form/Form");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/modules/Modal/Modal");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon2 = __webpack_require__(7);

var _Icon3 = _interopRequireDefault(_Icon2);

var _Card2 = __webpack_require__(33);

var _Card3 = _interopRequireDefault(_Card2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NewImage = __webpack_require__(12);

var _NewImage2 = _interopRequireDefault(_NewImage);

var _reactMasonryComponent = __webpack_require__(34);

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var masonryOptions = {
  transitionDuration: 0
};

var PinsList = function PinsList(_ref) {
  var pins = _ref.pins;


  var renderMyPins = function renderMyPins() {
    return pins.map(function (pin, i) {
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
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement(_Icon3.default, { name: 'user' }),
            '10 Friends'
          )
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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/views/Card/Card");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Segment2 = __webpack_require__(11);

var _Segment3 = _interopRequireDefault(_Segment2);

var _Header2 = __webpack_require__(10);

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

var _server = __webpack_require__(13);

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

var _redux = __webpack_require__(14);

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

var _redux = __webpack_require__(14);

var _images = __webpack_require__(43);

var _images2 = _interopRequireDefault(_images);

var _auth = __webpack_require__(44);

var _auth2 = _interopRequireDefault(_auth);

var _myPinsReducer = __webpack_require__(45);

var _myPinsReducer2 = _interopRequireDefault(_myPinsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _auth2.default,
  myPins: _myPinsReducer2.default,
  images: _images2.default
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_DATA:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 44 */
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
        title: action.payload.title,
        imageUrl: action.payload.imageUrl
      };
    default:
      return state;
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

var _server = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(4);

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
        'div',
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
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Image/Image");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(50);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(51);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(52);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(53);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(54);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(56);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cache = {};

var Img = function (_Component) {
  (0, _inherits3.default)(Img, _Component);

  function Img(props) {
    (0, _classCallCheck3.default)(this, Img);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Img.__proto__ || (0, _getPrototypeOf2.default)(Img)).call(this, props));

    _this.srcToArray = function (src) {
      return (Array.isArray(src) ? src : [src]).filter(function (x) {
        return x;
      });
    };

    _this.onLoad = function () {
      cache[_this.sourceList[_this.state.currentIndex]] = true;
      /* istanbul ignore else */
      if (_this.i) _this.setState({ isLoaded: true });
    };

    _this.onError = function () {
      cache[_this.sourceList[_this.state.currentIndex]] = false;
      // if the current image has already been destroyed, we are probably no longer mounted
      // no need to do anything then
      /* istanbul ignore else */
      if (!_this.i) return false;

      // before loading the next image, check to see if it was ever loaded in the past
      for (var nextIndex = _this.state.currentIndex + 1; nextIndex < _this.sourceList.length; nextIndex++) {
        // get next img
        var src = _this.sourceList[nextIndex];

        // if we have never seen it, its the one we want to try next
        if (!(src in cache)) {
          _this.setState({ currentIndex: nextIndex });
          break;
        }

        // if we know it exists, use it!
        if (cache[src] === true) {
          _this.setState({ currentIndex: nextIndex, isLoading: false, isLoaded: true });
          return true;
        }

        // if we know it doesn't exist, skip it!
        /* istanbul ignore else */
        if (cache[src] === false) continue;
      }

      // currentIndex is zero bases, length is 1 based.
      // if we have no more sources to try, return - we are done
      if (nextIndex === _this.sourceList.length) return _this.setState({ isLoading: false });

      // otherwise, try the next img
      _this.loadImg();
    };

    _this.loadImg = function () {
      _this.i = new Image();
      _this.i.src = _this.sourceList[_this.state.currentIndex];

      if (_this.props.decode && _this.i.decode) {
        _this.i.decode().then(_this.onLoad).catch(_this.onError);
      } else {
        _this.i.onload = _this.onLoad;
      }

      _this.i.onerror = _this.onError;
    };

    _this.unloadImg = function () {
      delete _this.i.onerror;
      delete _this.i.onload;
      delete _this.i.src;
      delete _this.i;
    };

    _this.sourceList = _this.srcToArray(_this.props.src);

    // check cache to decide at which index to start
    for (var i = 0; i < _this.sourceList.length; i++) {
      // if we've never seen this image before, the cache wont help.
      // no need to look further, just start loading
      /* istanbul ignore else */
      if (!(_this.sourceList[i] in cache)) break;

      // if we have loaded this image before, just load it again
      /* istanbul ignore else */
      if (cache[_this.sourceList[i]] === true) {
        var _ret;

        _this.state = { currentIndex: i, isLoading: false, isLoaded: true };
        return _ret = true, (0, _possibleConstructorReturn3.default)(_this, _ret);
      }
    }

    _this.state = _this.sourceList.length
    // 'normal' opperation: start at 0 and try to load
    ? { currentIndex: 0, isLoading: true, isLoaded: false
      // if we dont have any sources, jump directly to unloaded
    } : { isLoading: false, isLoaded: false };
    return _this;
  }

  (0, _createClass3.default)(Img, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // kick off process
      /* istanbul ignore else */
      if (this.state.isLoading) this.loadImg();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // ensure that we dont leave any lingering listeners
      /* istanbul ignore else */
      if (this.i) this.unloadImg();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var src = this.srcToArray(nextProps.src);

      var srcAdded = src.filter(function (s) {
        return _this2.sourceList.indexOf(s) === -1;
      });
      var srcRemoved = this.sourceList.filter(function (s) {
        return src.indexOf(s) === -1;
      });

      // if src prop changed, restart the loading process
      if (srcAdded.length || srcRemoved.length) {
        this.sourceList = src;

        // if we dont have any sources, jump directly to unloader
        if (!src.length) return this.setState({ isLoading: false, isLoaded: false });
        this.setState({ currentIndex: 0, isLoading: true, isLoaded: false }, this.loadImg);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // if we have loaded, show img
      if (this.state.isLoaded) {
        // clear non img props
        var _props = this.props,
            src = _props.src,
            loader = _props.loader,
            unloader = _props.unloader,
            decode = _props.decode,
            rest = (0, _objectWithoutProperties3.default)(_props, ['src', 'loader', 'unloader', 'decode']); //eslint-disable-line

        return _react2.default.createElement('img', (0, _extends3.default)({ src: this.sourceList[this.state.currentIndex] }, rest));
      }

      // if we are still trying to load, show img and a loader if requested
      if (!this.state.isLoaded && this.state.isLoading) return this.props.loader ? this.props.loader : null;

      // if we have given up on loading, show a place holder if requested, or nothing
      /* istanbul ignore else */
      if (!this.state.isLoaded && !this.state.isLoading) return this.props.unloader ? this.props.unloader : null;
    }
  }]);
  return Img;
}(_react.Component);

Img.defaultProps = {
  loader: false,
  unloader: false,
  decode: true,
  src: []
};
Img.propTypes = process.env.NODE_ENV !== "production" ? {
  loader: _propTypes.node,
  unloader: _propTypes.node,
  decode: _propTypes.bool,
  src: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.array])
} : {};
exports.default = Img;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ })
/******/ ]);