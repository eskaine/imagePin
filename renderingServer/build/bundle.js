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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(13);

var _App2 = _interopRequireDefault(_App);

var _HomeContainer = __webpack_require__(19);

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

var _BookListContainer = __webpack_require__(20);

var _BookListContainer2 = _interopRequireDefault(_BookListContainer);

var _YourPinsContainer = __webpack_require__(22);

var _YourPinsContainer2 = _interopRequireDefault(_YourPinsContainer);

var _PageNotFoundContainer = __webpack_require__(27);

var _PageNotFoundContainer2 = _interopRequireDefault(_PageNotFoundContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomeContainer2.default, {
    path: '/',
    exact: true
  }), _extends({}, _BookListContainer2.default, {
    path: '/data'
  }), _extends({}, _YourPinsContainer2.default, {
    path: '/yourpins'
  }), _extends({}, _PageNotFoundContainer2.default)]
})];

/***/ }),
/* 5 */
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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Header/Header");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _expressHttpProxy = __webpack_require__(12);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _reactRouterConfig = __webpack_require__(1);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

var _htmlTemplate = __webpack_require__(29);

var _htmlTemplate2 = _interopRequireDefault(_htmlTemplate);

var _createStore = __webpack_require__(31);

var _createStore2 = _interopRequireDefault(_createStore);

var _index = __webpack_require__(38);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
__webpack_require__(39).config({ path: '../.env' });

app.use('/api', (0, _expressHttpProxy2.default)(process.env.API_URL));
app.use(_express2.default.static(process.cwd() + '/public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(function () {
    var context = {};

    //fetch data and embed into app
    var newApp = (0, _index2.default)(req, store, context);

    //embed app into html page
    var page = (0, _htmlTemplate2.default)(newApp, store);

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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(1);

var _NavbarContainer = __webpack_require__(14);

var _NavbarContainer2 = _interopRequireDefault(_NavbarContainer);

var _auth = __webpack_require__(5);

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
    return dispatch((0, _auth.fetchUser)());
  },
  component: App
};

/***/ }),
/* 14 */
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

var _Navbar = __webpack_require__(15);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavbarContainer.__proto__ || Object.getPrototypeOf(NavbarContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: 'home' }, _this.handleItemClick = function (e, _ref2) {
      var path = _ref2.path;
      return _this.setState({ activeItem: path });
    }, _this.setActive = function (path) {
      return _this.setState({ activeItem: path });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavbarContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setActive(this.props.location.pathname.split('/')[1]);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon2 = __webpack_require__(16);

var _Icon3 = _interopRequireDefault(_Icon2);

var _Menu2 = __webpack_require__(17);

var _Menu3 = _interopRequireDefault(_Menu2);

var _Container2 = __webpack_require__(18);

var _Container3 = _interopRequireDefault(_Container2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var authStatus = _ref.authStatus,
      activeItem = _ref.activeItem,
      onClick = _ref.onClick;


  function renderNavLink() {
    return authStatus ? _react2.default.createElement(
      _Menu3.default.Item,
      { path: 'yourpins', active: activeItem === 'yourpins', onClick: onClick, as: _reactRouterDom.Link, to: '/yourpins' },
      'Your Pins'
    ) : null;
  }

  function renderAuthButton() {
    return authStatus ? _react2.default.createElement(
      'a',
      { className: 'item', href: '/api/logout' },
      'Logout'
    ) : _react2.default.createElement(
      _Menu3.default.Item,
      null,
      _react2.default.createElement(
        'a',
        { className: 'ui twitter button', href: '/api/auth/twitter' },
        _react2.default.createElement(_Icon3.default, { name: 'twitter' }),
        'Login'
      )
    );
  }

  return _react2.default.createElement(
    _Menu3.default,
    { borderless: true, fixed: 'top', size: 'large', color: 'blue' },
    _react2.default.createElement(
      _Container3.default,
      null,
      _react2.default.createElement(
        _Menu3.default.Item,
        { path: 'home', active: activeItem === 'home', onClick: onClick, as: _reactRouterDom.Link, to: '/' },
        'imagePin'
      ),
      _react2.default.createElement(
        _Menu3.default.Item,
        { path: 'data', active: activeItem === 'data', onClick: onClick, as: _reactRouterDom.Link, to: '/data' },
        'Pins'
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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Menu/Menu");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Container/Container");

/***/ }),
/* 19 */
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

var _allImages = __webpack_require__(21);

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
  return store.dispatch((0, _allImages.fetchData)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchData: _allImages.fetchData })(BookListContainer)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_DATA = exports.FETCH_DATA = 'fetch_data';
var fetchData = exports.fetchData = function fetchData() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axiosInstance.get('/data');

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_DATA,
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _YourPins = __webpack_require__(23);

var _YourPins2 = _interopRequireDefault(_YourPins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YourPinsContainer = function (_Component) {
  _inherits(YourPinsContainer, _Component);

  function YourPinsContainer() {
    _classCallCheck(this, YourPinsContainer);

    return _possibleConstructorReturn(this, (YourPinsContainer.__proto__ || Object.getPrototypeOf(YourPinsContainer)).apply(this, arguments));
  }

  _createClass(YourPinsContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_YourPins2.default, null);
    }
  }]);

  return YourPinsContainer;
}(_react.Component);

exports.default = {
  component: YourPinsContainer
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider2 = __webpack_require__(25);

var _Divider3 = _interopRequireDefault(_Divider2);

var _Header2 = __webpack_require__(6);

var _Header3 = _interopRequireDefault(_Header2);

var _Menu2 = __webpack_require__(17);

var _Menu3 = _interopRequireDefault(_Menu2);

var _Container2 = __webpack_require__(18);

var _Container3 = _interopRequireDefault(_Container2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NewPin = __webpack_require__(42);

var _NewPin2 = _interopRequireDefault(_NewPin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YourPins = function YourPins() {
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
            'Your Pins'
          )
        ),
        _react2.default.createElement(
          _Menu3.default.Item,
          null,
          _react2.default.createElement(_NewPin2.default, null)
        )
      ),
      _react2.default.createElement(_Divider3.default, null)
    )
  );
};

exports.default = YourPins;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Button/Button");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Divider/Divider");

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Segment2 = __webpack_require__(28);

var _Segment3 = _interopRequireDefault(_Segment2);

var _Header2 = __webpack_require__(6);

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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Segment/Segment");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _serializeJavascript = __webpack_require__(30);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (pageContent, store) {
  return '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n        <title></title>\n        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>\n      </head>\n      <body>\n        <div id="root">' + pageContent + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(32);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(34);

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
/* 32 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _images = __webpack_require__(35);

var _images2 = _interopRequireDefault(_images);

var _auth = __webpack_require__(37);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _auth2.default,
  images: _images2.default
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(36);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_DATA = exports.FETCH_DATA = 'fetch_data';
var fetchData = exports.fetchData = function fetchData() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axiosInstance.get('/data');

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_DATA,
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

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _auth.FETCH_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

var _auth = __webpack_require__(5);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(7);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(1);

var _routes = __webpack_require__(4);

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
/* 39 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/modules/Modal/Modal");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Image/Image");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header2 = __webpack_require__(6);

var _Header3 = _interopRequireDefault(_Header2);

var _Image2 = __webpack_require__(41);

var _Image3 = _interopRequireDefault(_Image2);

var _Button2 = __webpack_require__(24);

var _Button3 = _interopRequireDefault(_Button2);

var _Modal2 = __webpack_require__(40);

var _Modal3 = _interopRequireDefault(_Modal2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewPin.__proto__ || Object.getPrototypeOf(NewPin)).call.apply(_ref, [this].concat(args))), _this), _this.state = { visible: true }, _this.toggleVisibility = function () {
      return _this.setState({ visible: !_this.state.visible });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewPin, [{
    key: 'render',
    value: function render() {
      var visible = this.state.visible;

      return _react2.default.createElement(
        _Modal3.default,
        { trigger: _react2.default.createElement(
            _Button3.default,
            { className: 'new-pin-btn', color: 'green', inverted: true },
            'New Pin'
          ) },
        _react2.default.createElement(
          _Modal3.default.Header,
          null,
          'Select a Photo'
        ),
        _react2.default.createElement(
          _Modal3.default.Content,
          { image: true },
          _react2.default.createElement(_Image3.default, { wrapped: true, size: 'medium', src: '/assets/images/avatar/large/rachel.png' }),
          _react2.default.createElement(
            _Modal3.default.Description,
            null,
            _react2.default.createElement(
              _Header3.default,
              null,
              'Default Profile Image'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We\'ve found the following gravatar image associated with your e-mail address.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Is it okay to use this photo?'
            )
          )
        )
      );
    }
  }]);

  return NewPin;
}(_react.Component);

exports.default = NewPin;

/***/ })
/******/ ]);