webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SubTitle = __webpack_require__(747);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubTitle = function SubTitle(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'subTitle' },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(SubTitle, _SubTitle2.default);

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = exports.TextArea = exports.Input = exports.FieldLabel = undefined;

var _FieldLabel = __webpack_require__(824);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(826);

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = __webpack_require__(314);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Login = __webpack_require__(840);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FieldLabel = _FieldLabel2.default;
exports.Input = _Input2.default;
exports.TextArea = _TextArea2.default;
exports.Login = _Login2.default;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PageHeadline = __webpack_require__(744);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Title = __webpack_require__(745);

var _Title2 = _interopRequireDefault(_Title);

var _SubTitle = __webpack_require__(113);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeadline = function PageHeadline(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle;
  return _react2.default.createElement(
    'div',
    { styleName: 'headline' },
    children || _react2.default.createElement(
      _react.Fragment,
      null,
      title && _react2.default.createElement(
        _Title2.default,
        null,
        title
      ),
      subTitle && _react2.default.createElement(
        _SubTitle2.default,
        null,
        subTitle
      )
    )
  );
};

PageHeadline.propTypes = {
  title: _propTypes2.default.string,
  subTitle: _propTypes2.default.string
};

exports.default = (0, _reactCssModules2.default)(PageHeadline, _PageHeadline2.default);

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

var _reactRouterRedux = __webpack_require__(310);

var _history = __webpack_require__(45);

var _redaction = __webpack_require__(41);

var _reduxLogger = __webpack_require__(787);

var _reduErs = __webpack_require__(309);

var _reduErs2 = _interopRequireDefault(_reduErs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = exports.history = (0, _history.createBrowserHistory)();
var middleware = (0, _reactRouterRedux.routerMiddleware)(history);
var initialState = {}; // (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {}


var store = (0, _redaction.createStore)({
  reducers: (0, _assign2.default)({}, (0, _redaction.combineReducers)(_reduErs2.default)),
  middleware: [middleware].concat( true ? [] : [(0, _reduxLogger.createLogger)()]),
  initialState: initialState
});

exports.default = store;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Button = __webpack_require__(803);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var children = props.children,
      className = props.className,
      fullWidth = props.fullWidth,
      brand = props.brand,
      green = props.green,
      white = props.white,
      gray = props.gray,
      disabled = props.disabled,
      onClick = props.onClick,
      _props$id = props.id,
      id = _props$id === undefined ? '' : _props$id;


  var styleName = (0, _classnames2.default)('button', {
    'fullWidth': fullWidth,
    'brand': brand,
    'green': green,
    'white': white,
    'gray': gray,
    'disabled': disabled
  });

  return _react2.default.createElement(
    'div',
    {
      styleName: styleName,
      className: className,
      role: 'button',
      onClick: onClick,
      id: id
    },
    children
  );
};

Button.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  brand: _propTypes2.default.bool,
  green: _propTypes2.default.bool,
  white: _propTypes2.default.bool,
  gray: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

exports.default = (0, _reactCssModules2.default)(Button, _Button2.default, { allowMultiple: true });

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(66);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(33);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WidthContainer = __webpack_require__(867);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WidthContainer = function WidthContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      main = _ref.main,
      fullHeight = _ref.fullHeight,
      relative = _ref.relative,
      contentCentering = _ref.contentCentering,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'main', 'fullHeight', 'relative', 'contentCentering']);

  var containerStyleName = (0, _classnames2.default)('widthContainer', {
    'main': main,
    'fullHeight': fullHeight,
    'centeringContent': contentCentering
  });

  if (fullHeight || relative) {
    var containerInStyleName = (0, _classnames2.default)('widthContainerIn', {
      'fullHeight': fullHeight,
      'relative': relative
    });

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ styleName: containerStyleName, className: className }, rest),
      _react2.default.createElement(
        'div',
        { styleName: containerInStyleName },
        children
      )
    );
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: containerStyleName, className: className }, rest),
    children
  );
};

WidthContainer.propTypes = {
  children: _propTypes2.default.node,
  main: _propTypes2.default.bool, // uses for main container between header and footer with vertical paddings
  fullHeight: _propTypes2.default.bool,
  relative: _propTypes2.default.bool,
  contentCentering: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

exports.default = (0, _reactCssModules2.default)(WidthContainer, _WidthContainer2.default, { allowMultiple: true });

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Loader = __webpack_require__(870);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var overlayClassName = _ref.overlayClassName,
      className = _ref.className,
      _ref$text = _ref.text,
      text = _ref$text === undefined ? false : _ref$text;
  return _react2.default.createElement(
    'div',
    { styleName: 'overlay', className: overlayClassName },
    _react2.default.createElement(
      'div',
      { styleName: 'loader center', className: className },
      _react2.default.createElement('div', { styleName: 'loader1' }),
      _react2.default.createElement('div', { styleName: 'loader2' }),
      _react2.default.createElement('div', { styleName: 'loader3' })
    ),
    text && _react2.default.createElement(
      'p',
      { styleName: 'text' },
      'Please wait, it takes from 3 to 5 minutes to complete the transaction.'
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Loader, _Loader2.default, { allowMultiple: true });

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollBarWidth = exports.getPageOffset = exports.ignoreProps = exports.localStorage = exports.constants = exports.request = exports.links = exports.web3 = exports.btc = undefined;

var _btc = __webpack_require__(352);

var _btc2 = _interopRequireDefault(_btc);

var _web = __webpack_require__(408);

var _web2 = _interopRequireDefault(_web);

var _links = __webpack_require__(554);

var _links2 = _interopRequireDefault(_links);

var _request = __webpack_require__(555);

var _request2 = _interopRequireDefault(_request);

var _constants = __webpack_require__(584);

var _constants2 = _interopRequireDefault(_constants);

var _localStorage = __webpack_require__(589);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _ignoreProps = __webpack_require__(592);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _getPageOffset = __webpack_require__(595);

var _getPageOffset2 = _interopRequireDefault(_getPageOffset);

var _getScrollBarWidth = __webpack_require__(596);

var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Getters
exports.btc = _btc2.default;
exports.web3 = _web2.default;
exports.links = _links2.default;
exports.request = _request2.default;
exports.constants = _constants2.default;
exports.localStorage = _localStorage2.default;
exports.ignoreProps = _ignoreProps2.default;
exports.getPageOffset = _getPageOffset2.default;
exports.getScrollBarWidth = _getScrollBarWidth2.default;

// Methods

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// resolve object in webpack
exports.default = {"propENV":"testnet.prod","paths":{},"referral":{"url":"https://wiki.swap.online/affiliate.php"},"publicPath":"https://pravda.services/","http":{"host":"localhost","port":9001},"i18nDate":{"month":"long","day":"numeric","hour":"numeric","minute":"numeric"},"exchangeRates":{"swapeth":1,"ethswap":1,"swapnoxon":1,"noxonswap":1,"swapbtc":0.07,"btcswap":14,"etheth":1,"ethbtc":0.07,"btceth":14,"ethnoxon":1,"noxoneth":1,"btcnoxon":14,"noxonbtc":0.07},"env":"production","entry":"testnet","base":"https://pravda.services/","services":{"web3":{"provider":"https://rinkeby.infura.io/JCnK5ifEPH9qcQkX0Ahl","rate":0.1,"gas":2000000,"gasPrice":"20000000000"},"eos":{"chainId":"038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca","httpEndpoint":"https://jungle.eosio.cr"}},"token":{"contract":"0xc87C2668F05803F60EF75b176eea0CCE80D0009C"},"eth":{"contract":"0x830aef165b900fa7dc6b219f062c5784f6436d67"},"tokens":{"swap":{"address":"0xbaa3fa2ed111f3e8488c21861ea7b7dbb5a7b121","decimals":18},"noxon":{"address":"0x60c205722c6c797c725a996cf9cca11291f90749","decimals":0},"jot":{"address":"0x9070e2fDb61887c234D841c95D1709288EBbB9a0","decimals":18}},"link":{"bitpay":"https://test-insight.bitpay.com","etherscan":"https://rinkeby.etherscan.io","eos":"http://jungle.cryptolions.io/#accountInfo"},"api":{"blocktrail":"https://api.blocktrail.com/v1/tBTC","bitpay":"https://test-insight.bitpay.com/api","etherscan":"https://rinkeby.etherscan.io/api","pravda":"https://y000r.world"},"apiKeys":{"etherscan":"RHHFPNMAZMD6I4ZWBZBF6FA11CMW9AXZNM","blocktrail":"1835368c0fa8e71907ca26f3c978ab742a7db42e"}};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modals = __webpack_require__(749);

var _modals2 = _interopRequireDefault(_modals);

var _loader = __webpack_require__(788);

var _loader2 = _interopRequireDefault(_loader);

var _notifications = __webpack_require__(789);

var _notifications2 = _interopRequireDefault(_notifications);

var _analytics = __webpack_require__(790);

var _analytics2 = _interopRequireDefault(_analytics);

var _pravda = __webpack_require__(795);

var _pravda2 = _interopRequireDefault(_pravda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  modals: _modals2.default,
  loader: _loader2.default,
  notifications: _notifications2.default,
  analytics: _analytics2.default,
  pravda: _pravda2.default
};

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(780);

var notifications = _interopRequireWildcard(_notifications);

var _modals = __webpack_require__(781);

var modals = _interopRequireWildcard(_modals);

var _loader = __webpack_require__(782);

var loader = _interopRequireWildcard(_loader);

var _pravda = __webpack_require__(783);

var pravda = _interopRequireWildcard(_pravda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  notifications: notifications,
  modals: modals,
  loader: loader,
  pravda: pravda
};

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.TextArea = exports.Radio = exports.Checkbox = exports.NumberInput = exports.Input = undefined;

var _keys = __webpack_require__(102);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(827);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _tags = __webpack_require__(832);

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _tags.Input;
  }
});
Object.defineProperty(exports, 'NumberInput', {
  enumerable: true,
  get: function get() {
    return _tags.NumberInput;
  }
});
Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _tags.Checkbox;
  }
});
Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _tags.Radio;
  }
});
Object.defineProperty(exports, 'TextArea', {
  enumerable: true,
  get: function get() {
    return _tags.TextArea;
  }
});
Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _tags.Select;
  }
});

var _valuelink = __webpack_require__(835);

var _valuelink2 = _interopRequireDefault(_valuelink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this.state = { foo: '', bar: '' }  =>   Link.all(this, 'foo', 'bar')
_valuelink2.default.allFields = function (component) {
  return _valuelink2.default.all.apply(_valuelink2.default, [component].concat((0, _toConsumableArray3.default)((0, _keys2.default)(component.state))));
};

exports.default = _valuelink2.default;

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(66);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(33);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autosize = __webpack_require__(839);

var _autosize2 = _interopRequireDefault(_autosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE = 'autosize:update';
var DESTROY = 'autosize:destroy';
var RESIZED = 'autosize:resized';

var TextareaAutosize = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TextareaAutosize, _Component);

  function TextareaAutosize() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextareaAutosize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextareaAutosize.__proto__ || (0, _getPrototypeOf2.default)(TextareaAutosize)).call.apply(_ref, [this].concat(args))), _this), _this.dispatchEvent = function (EVENT_TYPE, defer) {
      var event = document.createEvent('Event');

      event.initEvent(EVENT_TYPE, true, false);

      var dispatch = function dispatch() {
        return _this.textareaEl.dispatchEvent(event);
      };

      if (defer) {
        setTimeout(dispatch);
      } else {
        dispatch();
      }
    }, _this.getValue = function (_ref2) {
      var valueLink = _ref2.valueLink,
          value = _ref2.value;
      return valueLink ? valueLink.value : value;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextareaAutosize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _autosize2.default)(this.textareaEl);

      if (this.props.onResize) {
        this.textareaEl.addEventListener(RESIZED, this.props.onResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onResize) {
        this.textareaEl.removeEventListener(RESIZED, this.props.onResize);
      }

      this.dispatchEvent(DESTROY);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.getValue(nextProps) !== this.getValue(this.props)) {
        this.dispatchEvent(UPDATE, true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          valueLink = _props.valueLink,
          props = (0, _objectWithoutProperties3.default)(_props, ['valueLink']);


      return _react2.default.createElement('textarea', (0, _extends3.default)({
        ref: function ref(el) {
          return _this2.textareaEl = el;
        }
      }, props, {
        value: valueLink.value,
        onChange: valueLink.action(function (x, e) {
          return e.target.value;
        })
      }));
    }
  }]);
  return TextareaAutosize;
}(_react.Component), _class.propTypes = {
  valueLink: _propTypes2.default.object.isRequired,
  onResize: _propTypes2.default.func
}, _class.defaultProps = {
  rows: 1
}, _temp2);
exports.default = TextareaAutosize;

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(102);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(41);

var _helpers = __webpack_require__(22);

var _modals = __webpack_require__(872);

var _modals2 = _interopRequireDefault(_modals);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ModalConductor = __webpack_require__(884);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalConductor = (_dec = (0, _redaction.connect)({
  modals: 'modals'
}), _dec2 = (0, _reactCssModules2.default)(_ModalConductor2.default), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(ModalConductor, _Component);

  function ModalConductor() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalConductor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalConductor.__proto__ || (0, _getPrototypeOf2.default)(ModalConductor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offsetTop: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ModalConductor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var modals = _ref2.modals;
      var offsetTop = this.state.offsetTop;


      var myOffsetTop = (0, _helpers.getPageOffset)().y;

      // When modal is showing add overflow: hidden to body and padding-right: ${scrollWidth}
      // to prevent screen from blinking
      if ((0, _keys2.default)(modals).length) {
        document.body.classList.add('withOpenedModal');
        document.body.style.paddingRight = (0, _helpers.getScrollBarWidth)() + 'px';

        if (myOffsetTop > 0) {
          this.setState({
            offsetTop: myOffsetTop
          });
        }
      } else {
        document.body.classList.remove('withOpenedModal');
        document.body.style.paddingRight = '0px';

        if (offsetTop > 0) {
          window.scrollTo(0, offsetTop);

          this.setState({
            offsetTop: 0
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var modals = this.props.modals;


      var modalNames = (0, _keys2.default)(modals);
      var areModalsExist = Boolean(modalNames.length);

      return areModalsExist && _react2.default.createElement(
        'div',
        { styleName: 'modalConductor' },
        modalNames.map(function (key) {
          var _modals$key = modals[key],
              name = _modals$key.name,
              _modals$key$data = _modals$key.data,
              data = _modals$key$data === undefined ? {} : _modals$key$data,
              zIndex = _modals$key.zIndex;


          return _react2.default.createElement(_modals2.default[name], {
            key: name,
            name: name,
            data: data,
            style: { zIndex: zIndex }
          });
        })
      );
    }
  }]);
  return ModalConductor;
}(_react.Component), _class2.propTypes = {
  modals: _propTypes2.default.object
}, _temp2)) || _class) || _class);
exports.default = ModalConductor;

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(66);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(33);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(22);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Overlay = __webpack_require__(878);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function Overlay(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children']);

  var props = (0, _helpers.ignoreProps)(rest, 'closePortal');

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: 'overlay' }, props),
    children
  );
};

Overlay.propTypes = {
  children: _propTypes2.default.node
};

exports.default = (0, _reactCssModules2.default)(Overlay, _Overlay2.default);

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(66);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(33);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Center = __webpack_require__(879);

var _Center2 = _interopRequireDefault(_Center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Center = function Center(_ref) {
  var children = _ref.children,
      scrollable = _ref.scrollable,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'scrollable']);

  // TODO move overflow to Modal and any other cases where it belongs
  var styleName = (0, _classnames2.default)('centringContainer', {
    'scrollable': scrollable
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest),
    _react2.default.createElement(
      'div',
      { styleName: 'centringContent' },
      children
    )
  );
};

Center.propTypes = {
  children: _propTypes2.default.node,
  scrollable: _propTypes2.default.bool
};

Center.defaultProps = {
  scrollable: false
};

exports.default = (0, _reactCssModules2.default)(Center, _Center2.default, { allowMultiple: true });

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Notification = __webpack_require__(889);

var _Notification2 = _interopRequireDefault(_Notification);

var _Sound = __webpack_require__(890);

var _Sound2 = _interopRequireDefault(_Sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = (_dec = (0, _reactCssModules2.default)(_Notification2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mounted: false,
      removed: false
    }, _this.close = function () {
      var name = _this.props.name;


      _this.setState({
        removed: true
      }, function () {
        setTimeout(function () {
          _actions2.default.notifications.hide(name);
        }, 300);
      });
    }, _this.soundClick = function () {
      var audio = new Audio();
      audio.src = _Sound2.default;
      audio.autoplay = true;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.soundClick();
      setTimeout(function () {
        _this2.setState({
          mounted: true
        }, function () {
          setTimeout(_this2.close, 4000);
        });
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          mounted = _state.mounted,
          removed = _state.removed;
      var _props = this.props,
          children = _props.children,
          type = _props.type;


      var containerStyleName = (0, _classnames2.default)('container', {
        'mounted': mounted,
        'removed': removed
      });

      var notificationStyleName = (0, _classnames2.default)('notification', {
        'mounted': mounted,
        'removed': removed,
        'info': type === 'info',
        'success': type === 'success',
        'warning': type === 'warning',
        'error': type === 'error'
      });

      return _react2.default.createElement(
        'div',
        { styleName: containerStyleName },
        _react2.default.createElement(
          'div',
          { styleName: notificationStyleName, onClick: this.close },
          _react2.default.createElement(
            'div',
            { styleName: 'content' },
            children
          )
        )
      );
    }
  }]);
  return Notification;
}(_react.Component), _class2.childContextTypes = {
  close: _propTypes2.default.func
}, _temp2)) || _class);
exports.default = Notification;

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(180);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = __webpack_require__(332);

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(172);

var _store2 = _interopRequireDefault(_store);

var _Root = __webpack_require__(860);

var _Root2 = _interopRequireDefault(_Root);

var _Loader = __webpack_require__(176);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ReactDOM.render(
//   <Loader />,
//   document.getElementById('root')
// )
//
// const ipfsRoom = window.document.getElementById('ipfsRoom')
//
// setInterval(ipfsRoom.onload = () => {
//
// }, 500)

_reactDom2.default.render(_react2.default.createElement(_Root2.default, { history: _store.history, store: _store2.default, routes: _routes2.default }), document.getElementById('root'));

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(84);

var _reactRouterDom = __webpack_require__(118);

var _helpers = __webpack_require__(22);

var _Home = __webpack_require__(597);

var _Home2 = _interopRequireDefault(_Home);

var _History = __webpack_require__(804);

var _History2 = _interopRequireDefault(_History);

var _NotFound = __webpack_require__(859);

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouterDom.Switch,
  null,
  _react2.default.createElement(_reactRouter.Route, { exact: true, path: _helpers.links.home, component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.history, component: _History2.default }),
  _react2.default.createElement(_reactRouter.Route, { component: _NotFound2.default })
);

exports.default = routes;

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bitcoinjsLib = __webpack_require__(353);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var network =  false ? _bitcoinjsLib2.default.networks.bitcoin : _bitcoinjsLib2.default.networks.testnet;

exports.default = {
  network: network
};

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(409);

var _web2 = _interopRequireDefault(_web);

var _appConfig = __webpack_require__(252);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = new _web2.default(new _web2.default.providers.HttpProvider(_appConfig2.default.services.web3.provider));

exports.default = web3;

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  home: '/',
  wallet: '/wallet',
  swap: '/swap',
  feed: '/feed',
  affiliate: '/affiliate',
  listing: '/listing',
  testnet: 'https:/testnet.swap.online'
  // whitepaper: 'https://docs.google.com/presentation/d/1sEI6Tmj4-uEN0x5FriXi4qmT67ibX0IedLuZ2iuegCE/edit#slide=id.g3da90ea1ed_0_45',
};

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(157);

var _promise2 = _interopRequireDefault(_promise);

var _superagent = __webpack_require__(578);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createResponseHandler = function createResponseHandler(req, opts) {
  var debug = opts.method.toUpperCase() + ' ' + opts.endpoint;

  return new _promise2.default(function (fulfill, reject) {
    return req.end(function (err, res) {
      var serverError = void 0;
      var body = res.body;

      // Errors

      if (!res && !err) {
        serverError = 'Connection failed: ' + debug;
      } else if (!res || res.statusCode >= 500) {
        serverError = 'We`re having technical issues at that moment. Please try again later';
      }

      if (serverError) {
        throw new Error(serverError);
      }

      if (err) {
        // TODO write Error notifier
        opts.onComplete();
        return reject({ resData: body, err: err, res: res });
      }

      if (!body) {
        try {
          body = JSON.parse(res.text);
        } catch (err) {
          return reject(err);
        }
      }

      var resData = opts.modifyResult(body);

      // Resolve

      fulfill(resData, res);
      opts.onComplete();
    });
  });
};

var defaultOptions = {
  sameOrigin: false,
  modifyResult: function modifyResult(resData) {
    return resData;
  },
  onComplete: function onComplete() {}

  /**
   *
   * @param {Object} options
   * @param {String} options.endpoint
   * @param {String} options.method
   * @param {Object} options.headers
   * @param {Object} options.query
   * @param {Object} options.body
   * @param {number} options.delay
   */
};var sendRequest = function sendRequest(options) {
  var opts = (0, _assign2.default)({}, defaultOptions, options);
  var req = _superagent2.default[opts.method](opts.endpoint);

  // req.set({
  //   'Content-Type': opts.formData ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json',
  //   ...(opts.headers || {}),
  // })

  if (opts.timeout) {
    req.timeout((0, _assign2.default)({
      response: 5000, // Wait 5 seconds for the server to start sending,
      deadline: 60000 }, opts.timeout));
  }

  if (opts.query) {
    req.query(opts.query);
  }

  if (opts.body) {
    req.send(opts.body);
  }

  if (opts.sameOrigin) {
    req.withCredentials();
  }

  var responseHandler = createResponseHandler(req, opts);

  responseHandler.abort = req.abort.bind(req);

  return responseHandler;
};

var requestByMethod = function requestByMethod(method) {
  return function (endpoint, opts) {
    return sendRequest((0, _assign2.default)({}, opts, { endpoint: endpoint, method: method }));
  };
};

exports.default = {
  get: requestByMethod('get'),
  post: requestByMethod('post'),
  patch: requestByMethod('patch'),
  put: requestByMethod('put'),
  delete: requestByMethod('delete')
};

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localStorage = __webpack_require__(585);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _privateKeyNames = __webpack_require__(586);

var _privateKeyNames2 = _interopRequireDefault(_privateKeyNames);

var _notifications = __webpack_require__(587);

var _notifications2 = _interopRequireDefault(_notifications);

var _modals = __webpack_require__(588);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  localStorage: _localStorage2.default,
  privateKeyNames: _privateKeyNames2.default,
  notifications: _notifications2.default,
  modals: _modals2.default
};

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  privateKeysSaved: 'privateKeysSaved',
  demoMoneyReceived: 'demoMoneyReceived'
};

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eth: "testnet" + ":eth:privateKey",
  pravdaKey: "testnet" + ":pravda:privateKey",
  pravdaAddress: "testnet" + ":pravda:address",
  btc: "testnet" + ":btc:privateKey",
  eos: "testnet" + ":eos:privateKey",
  eosAccount: "testnet" + ":eos:account"
};

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SuccessWithdraw: 'SuccessWithdraw',
  Message: 'Message'
};

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Withdraw: 'WithdrawModal',
  Offer: 'OfferModal',
  PrivateKeys: 'PrivateKeysModal',
  Eos: 'EosModal',
  Approve: 'Approve'
};

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(590);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLocalStorageEnabled = void 0;

try {
  window.localStorage.setItem('test', 'test');
  window.localStorage.removeItem('test');
  isLocalStorageEnabled = true;
} catch (e) {
  isLocalStorageEnabled = false;
}

var setItem = function setItem(key, value) {
  if (isLocalStorageEnabled) {
    window.localStorage.setItem(key, (0, _stringify2.default)(value));
  }
};

var getItem = function getItem(key) {
  if (isLocalStorageEnabled) {
    var value = window.localStorage.getItem(key);

    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  }
  return undefined;
};

var removeItem = function removeItem(key) {
  if (isLocalStorageEnabled) {
    return window.localStorage.removeItem(key);
  }
};

var clear = function clear() {
  if (isLocalStorageEnabled) {
    window.localStorage.clear();
  }
};

exports.default = {
  setItem: setItem,
  getItem: getItem,
  removeItem: removeItem,
  clear: clear
};

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(102);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ignoreProps = function ignoreProps() {
  for (var _len = arguments.length, ignored = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    ignored[_key - 1] = arguments[_key];
  }

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var list = {};

  (0, _keys2.default)(props).forEach(function (key) {
    if (!ignored.includes(key)) {
      list[key] = props[key];
    }
  });

  return list;
};

exports.default = ignoreProps;

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getPageOffset = function getPageOffset() {
  // isCSS1Compat for old browsers support like IE < 9,
  // which do not have window.pageYOffset and window.scrollY
  // For more info check https://developer.mozilla.org/ru/docs/Web/API/Window/scrollY
  var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
  var isSupportPageOffset = window.pageXOffset !== undefined;

  if (isSupportPageOffset) {

    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }

  return {
    x: isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
    y: isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
  };
};

exports.default = getPageOffset;

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollBarWidth = function getScrollBarWidth() {
  var outer = document.createElement('div');

  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;

  // force scrollbars
  outer.style.overflow = 'scroll';

  // add innerdiv
  var inner = document.createElement('div');

  inner.style.width = '100%';
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
};

exports.default = getScrollBarWidth;

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Home = __webpack_require__(743);

var _Home2 = _interopRequireDefault(_Home);

var _PageHeadline = __webpack_require__(169);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(113);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Wallet = __webpack_require__(748);

var _Wallet2 = _interopRequireDefault(_Wallet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (_dec = (0, _reactCssModules2.default)(_Home2.default), _dec(_class = function (_PureComponent) {
  (0, _inherits3.default)(Home, _PureComponent);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            _PageHeadline2.default,
            null,
            _react2.default.createElement(
              _SubTitle2.default,
              null,
              'Secured loans on game assets ',
              _react2.default.createElement('br', null),
              'On Blockchain'
            )
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Fast, reliable, trustless, smart-contract based pawnshop for rare in-game items. Things remain with you.'
          )
        ),
        _react2.default.createElement(_Wallet2.default, null)
      );
    }
  }]);
  return Home;
}(_react.PureComponent)) || _class);
exports.default = Home;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redaction = __webpack_require__(41);

var _reduErs = __webpack_require__(309);

var _reduErs2 = _interopRequireDefault(_reduErs);

var _store = __webpack_require__(172);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redaction.wrapReducers)(_reduErs2.default, _store2.default.dispatch);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithdrawButton = exports.TimerButton = exports.Swap = exports.RemoveButton = exports.ReloadButton = exports.Flip = exports.ButtonInRow = exports.Button = undefined;

var _Button = __webpack_require__(173);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonsInRow = __webpack_require__(806);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

var _Flip = __webpack_require__(808);

var _Flip2 = _interopRequireDefault(_Flip);

var _ReloadButton = __webpack_require__(811);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _RemoveButton = __webpack_require__(815);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

var _Swap = __webpack_require__(817);

var _Swap2 = _interopRequireDefault(_Swap);

var _TimerButton = __webpack_require__(819);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _WithdrawButton = __webpack_require__(820);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _Button2.default;
exports.ButtonInRow = _ButtonsInRow2.default;
exports.Flip = _Flip2.default;
exports.ReloadButton = _ReloadButton2.default;
exports.RemoveButton = _RemoveButton2.default;
exports.Swap = _Swap2.default;
exports.TimerButton = _TimerButton2.default;
exports.WithdrawButton = _WithdrawButton2.default;

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"col":"_3UW7Y5","width":"_3IKzyU","row":"_1RvMTJ","button":"_1L6DSS"};

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headline":"_3j0ceJ"};

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Title = __webpack_require__(746);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'title' },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(Title, _Title2.default);

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_1Sjfw-"};

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"subTitle":"_3J0EOu"};

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _helpers = __webpack_require__(22);

var _reactRouterDom = __webpack_require__(118);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Wallet = __webpack_require__(797);

var _Wallet2 = _interopRequireDefault(_Wallet);

var _clicker = __webpack_require__(798);

var _clicker2 = _interopRequireDefault(_clicker);

var _blockchain = __webpack_require__(799);

var _blockchain2 = _interopRequireDefault(_blockchain);

var _creditCard = __webpack_require__(800);

var _creditCard2 = _interopRequireDefault(_creditCard);

var _security = __webpack_require__(801);

var _security2 = _interopRequireDefault(_security);

var _search = __webpack_require__(802);

var _search2 = _interopRequireDefault(_search);

var _PageHeadline = __webpack_require__(169);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(113);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Button = __webpack_require__(173);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wallet = (_dec = (0, _reactCssModules2.default)(_Wallet2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Wallet, _Component);

  function Wallet() {
    (0, _classCallCheck3.default)(this, Wallet);
    return (0, _possibleConstructorReturn3.default)(this, (Wallet.__proto__ || (0, _getPrototypeOf2.default)(Wallet)).apply(this, arguments));
  }

  (0, _createClass3.default)(Wallet, [{
    key: 'render',
    value: function render() {
      var titles = [{
        title: 'Save & Secured',
        icon: _security2.default
      }, {
        title: 'Accept Crypto',
        icon: _creditCard2.default
      }, {
        title: 'Blockchain Powered',
        icon: _blockchain2.default
      }, {
        title: 'High Transparency',
        icon: _search2.default
      }, {
        title: 'Intuitive UI',
        icon: _clicker2.default
      }];

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          _PageHeadline2.default,
          null,
          _react2.default.createElement(
            _SubTitle2.default,
            null,
            'Deep integration with Expload technologies.'
          )
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'row' },
          _react2.default.createElement(
            'div',
            { styleName: 'col' },
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              '3 steps to work with us:'
            ),
            _react2.default.createElement(
              'p',
              { styleName: 'text' },
              'Deploy our contracts'
            ),
            _react2.default.createElement(
              'p',
              { styleName: 'text' },
              'Tokenize your assets'
            ),
            _react2.default.createElement(
              'p',
              { styleName: 'text' },
              'Get commission on each transaction'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/history' },
              _react2.default.createElement(
                _Button2.default,
                { styleName: 'button', green: true },
                'Go to the Wallet'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            titles.map(function (title, index) {
              return _react2.default.createElement(
                'div',
                { styleName: 'block', key: index },
                _react2.default.createElement('img', { src: title.icon, alt: '' }),
                title.title
              );
            })
          )
        )
      );
    }
  }]);
  return Wallet;
}(_react.Component)) || _class);
exports.default = Wallet;

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(64);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var open = function open(name, data) {
  return _reducers2.default.modals.open({ name: name, data: data });
};

var close = function close(name) {
  return _reducers2.default.modals.close(name);
};

exports.default = {
  open: open,
  close: close
};

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hide = exports.show = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(33);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(171);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {};

var show = exports.show = function show(state, _ref) {
  var name = _ref.name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, name, {
    name: name,
    data: data
  }));
};

var hide = function hide(state, name) {
  var closingNotification = state[name],
      otherNotifications = (0, _objectWithoutProperties3.default)(state, [name]);

  return otherNotifications;
};
exports.hide = hide;

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(33);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(171);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is necessary to arrange the modals in the opening order, not alphabetical
var zIndex = 305;

var initialState = exports.initialState = {};

var open = exports.open = function open(state, _ref) {
  var name = _ref.name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, name, {
    name: name,
    data: data,
    zIndex: ++zIndex
  }));
};

var close = function close(state, name) {
  var closingModal = state[name],
      otherModals = (0, _objectWithoutProperties3.default)(state, [name]);


  zIndex -= 1;

  return otherModals;
};
exports.close = close;

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVisibility = exports.initialState = undefined;

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  isVisible: false,
  text: false
};

var setVisibility = exports.setVisibility = function setVisibility(state, payload) {
  return (0, _assign2.default)({}, state, {
    isVisible: payload.isVisible,
    text: payload.text
  });
};

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteItems = exports.setBalance = exports.setItemsId = exports.setLogin = exports.initialState = undefined;

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  address: '',
  privateKey: '',
  id: '',
  balance: 0
};

var setLogin = exports.setLogin = function setLogin(state, _ref) {
  var address = _ref.address,
      privateKey = _ref.privateKey;
  return {
    address: address,
    privateKey: privateKey
  };
};

var setItemsId = exports.setItemsId = function setItemsId(state, _ref2) {
  var id = _ref2.id;
  return (0, _assign2.default)({}, state, {
    id: id
  });
};

var setBalance = exports.setBalance = function setBalance(state, _ref3) {
  var balance = _ref3.balance;
  return (0, _assign2.default)({}, state, {
    balance: balance
  });
};

var deleteItems = exports.deleteItems = function deleteItems(state) {
  return {};
};

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(64);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var show = function show(isVisible, text) {
  return _reducers2.default.loader.setVisibility({ isVisible: isVisible, text: text });
};
var hide = function hide() {
  return _reducers2.default.loader.setVisibility({ isVisible: false });
};

exports.default = {
  show: show,
  hide: hide
};

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(64);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var show = function show(name, data) {
  return _reducers2.default.notifications.show({ name: name, data: data });
};

var hide = function hide(name) {
  return _reducers2.default.notifications.hide(name);
};

exports.default = {
  show: show,
  hide: hide
};

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(64);

var _reducers2 = _interopRequireDefault(_reducers);

var _reactGtmModule = __webpack_require__(791);

var _reactGtmModule2 = _interopRequireDefault(_reactGtmModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addEvent = function addEvent(name) {
  return _reducers2.default.addEvent(name);
}; //@ToDo ???
var dataEvent = function dataEvent(eventName) {

  window.dataLayer = window.dataLayer ? window.dataLayer : [];
  window.dataLayer.push({ 'event': eventName });

  console.log(window.dataLayer); //@ToDo delete
};

var tagManagerArgs = {
  gtmId: 'GTM-WK72GSV',
  dataLayerName: 'dataLayer'
};

_reactGtmModule2.default.initialize(tagManagerArgs);

exports.default = {
  addEvent: addEvent,
  dataEvent: dataEvent
};

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(157);

var _promise2 = _interopRequireDefault(_promise);

var _reducers = __webpack_require__(64);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(252);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _core = __webpack_require__(796);

var _helpers = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateAccount = function generateAccount() {
  return new _promise2.default(function (resolve) {
    return _helpers.request.get(_appConfig2.default.api.pravda + '/generate').then(function (_ref) {
      var address = _ref.address,
          privateKey = _ref.privateKey;

      localStorage.setItem(_helpers.constants.privateKeyNames.pravdaKey, privateKey);
      localStorage.setItem(_helpers.constants.privateKeyNames.pravdaAddress, address);

      _reducers2.default.pravda.setLogin({ address: address, privateKey: privateKey });
      return resolve;
    });
  });
};

var LoginAccount = function LoginAccount(address, privateKey) {
  if (!address || !privateKey) {
    var _address = localStorage.getItem(_helpers.constants.privateKeyNames.pravdaAddress);
    var _privateKey = localStorage.getItem(_helpers.constants.privateKeyNames.pravdaKey);

    localStorage.setItem(_helpers.constants.privateKeyNames.pravdaKey, _privateKey);
    localStorage.setItem(_helpers.constants.privateKeyNames.pravdaAddress, _address);
  }

  _reducers2.default.pravda.setLogin({ address: address, privateKey: privateKey });
};

var getTokens = function getTokens() {
  var _getState = (0, _core.getState)(),
      _getState$pravda = _getState.pravda,
      address = _getState$pravda.address,
      privateKey = _getState$pravda.privateKey;

  var url = _appConfig2.default.api.pravda + '/token/faucet?address=' + address + '&privateKey=' + privateKey + '&holderAddress=' + address;

  return _helpers.request.get(url).then(function (result) {
    console.log(result);
  });
};

var getCoins = function getCoins() {
  var _getState2 = (0, _core.getState)(),
      _getState2$pravda = _getState2.pravda,
      address = _getState2$pravda.address,
      privateKey = _getState2$pravda.privateKey;

  var url = _appConfig2.default.api.pravda + '/faucet?address=' + address + '&privateKey=' + privateKey + '&holderAddress=' + address;

  return _helpers.request.get(url).then(function (result) {
    console.log(result);
  });
};

var getGameItems = function getGameItems() {
  var _getState3 = (0, _core.getState)(),
      _getState3$pravda = _getState3.pravda,
      address = _getState3$pravda.address,
      privateKey = _getState3$pravda.privateKey;

  var url = _appConfig2.default.api.pravda + '/token/mintGameItem?address=' + address + '&privateKey=' + privateKey + '&holderAddress=' + address;

  return _helpers.request.get(url).then(function (result) {
    console.log(result);

    // reducers.pravda.getItems({ items: result.items })
  });
};

var getBalance = function getBalance() {
  var _getState4 = (0, _core.getState)(),
      _getState4$pravda = _getState4.pravda,
      address = _getState4$pravda.address,
      privateKey = _getState4$pravda.privateKey;

  var url = _appConfig2.default.api.pravda + '/balanceOf?address=' + address + '&privateKey=' + privateKey + '&holderAddress=' + address;

  return _helpers.request.get(url).then(function (result) {
    console.log(result);

    _reducers2.default.pravda.setBalance({ balance: result.balance });
  });
};

var getTokenBalance = function getTokenBalance() {
  var _getState5 = (0, _core.getState)(),
      _getState5$pravda = _getState5.pravda,
      address = _getState5$pravda.address,
      privateKey = _getState5$pravda.privateKey;

  var url = _appConfig2.default.api.pravda + '/token/balanceOf?address=' + address + '&privateKey=' + privateKey + '&holderAddress=' + address;

  return _helpers.request.get(url).then(function (result) {
    console.log(result);
  });
};

var getItemsBalance = function getItemsBalance() {
  var _getState6 = (0, _core.getState)(),
      _getState6$pravda = _getState6.pravda,
      address = _getState6$pravda.address,
      privateKey = _getState6$pravda.privateKey;

  var url = _appConfig2.default.api.pravda + '/token/gameItemOf?address=' + address + '&privateKey=' + privateKey + '&holderAddress=' + address;

  return _helpers.request.get(url).then(function (result) {
    console.log(result);
    if (result.stack !== null) {
      var res = /u?int.*\((\d+)\)/g.exec(result.stack[0]);
      var id = res[1];
      console.log('BEDA', id);

      _reducers2.default.pravda.setItemsId({ id: id });
    }
  });
};

var initiatePawnTransaction = function initiatePawnTransaction() {
  var _getState7 = (0, _core.getState)(),
      _getState7$pravda = _getState7.pravda,
      address = _getState7$pravda.address,
      privateKey = _getState7$pravda.privateKey,
      id = _getState7$pravda.id;

  var url = _appConfig2.default.api.pravda + '/token/initiatePawnTransaction?address=' + address + '&privateKey=' + privateKey + '&&tokenId=' + id;

  return _helpers.request.get(url).then(function (result) {
    console.log(result);
  });
};

var deleteItem = function deleteItem() {
  _reducers2.default.pravda.delete();
};

exports.default = {
  generateAccount: generateAccount,
  deleteItem: deleteItem,
  LoginAccount: LoginAccount,
  getTokens: getTokens,
  getCoins: getCoins,
  getGameItems: getGameItems,
  getTokenBalance: getTokenBalance,
  getBalance: getBalance,
  getItemsBalance: getItemsBalance,
  initiatePawnTransaction: initiatePawnTransaction
};

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = exports.reducers = undefined;

var _store = __webpack_require__(172);

var _store2 = _interopRequireDefault(_store);

var _reducers = __webpack_require__(64);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getState = function getState() {
  return _store2.default.getState();
};

exports.reducers = _reducers2.default;
exports.getState = getState;

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"width":"_2Qfh0c","row":"_2BeaEf","button":"_3BpVhZ","text":"_2okdIb","col":"_3PsMg0","title":"rhcv5n","block":"_2LtRpE"};

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/clicker_3343b9.svg";

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/blockchain_5277b1.svg";

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/credit-card_49e57f.svg";

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/security_8204e7.svg";

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/search_1ea52d.svg";

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"qJheS4","fullWidth":"_2Gzkvz","brand":"_3zY6WO","green":"_s-GvI","white":"ewAS27","gray":"_9dfBig","disabled":"_1WzQpi"};

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(41);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _History = __webpack_require__(805);

var _History2 = _interopRequireDefault(_History);

var _PageHeadline = __webpack_require__(169);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(113);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _controls = __webpack_require__(65);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

var _Steps = __webpack_require__(822);

var _Steps2 = _interopRequireDefault(_Steps);

var _forms = __webpack_require__(114);

var _SelectGame = __webpack_require__(842);

var _SelectGame2 = _interopRequireDefault(_SelectGame);

var _SelectThink = __webpack_require__(851);

var _SelectThink2 = _interopRequireDefault(_SelectThink);

var _Calculated = __webpack_require__(857);

var _Calculated2 = _interopRequireDefault(_Calculated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var History = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$pravda = _ref.pravda,
      address = _ref$pravda.address,
      privateKey = _ref$pravda.privateKey,
      balance = _ref$pravda.balance;
  return {
    address: address,
    privateKey: privateKey,
    balance: balance
  };
}), _dec2 = (0, _reactCssModules2.default)(_History2.default), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(History, _Component);

  function History() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, History);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = History.__proto__ || (0, _getPrototypeOf2.default)(History)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      step: 1
    }, _this.handleNextStep = function () {
      var step = _this.state.step;

      step += 1;
      _this.setState({
        step: step
      });
    }, _this.handleBackStep = function () {
      var step = _this.state.step;


      if (step > 1) {
        step -= 1;
      }

      _this.setState({
        step: step
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(History, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          address = _props.address,
          privateKey = _props.privateKey,
          balance = _props.balance;
      var step = this.state.step;


      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          _PageHeadline2.default,
          null,
          _react2.default.createElement(
            _SubTitle2.default,
            null,
            'Steps'
          ),
          _react2.default.createElement(_Steps2.default, { steps: step }),
          _react2.default.createElement(
            'div',
            { styleName: 'row' },
            _react2.default.createElement(
              _controls.Button,
              { green: true, onClick: this.handleBackStep },
              'Back'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { styleName: 'text' },
                'Address: ',
                !address ? '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' : address
              ),
              _react2.default.createElement(
                'p',
                { styleName: 'text' },
                'PrivateKey: ',
                !privateKey ? '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' : privateKey
              ),
              _react2.default.createElement(
                'p',
                { styleName: 'text' },
                'Balance: ',
                balance
              )
            )
          )
        ),
        step === 1 && _react2.default.createElement(_forms.Login, { reg: true, next: this.handleNextStep, steps: step }),
        step === 2 && _react2.default.createElement(_SelectGame2.default, { handleNextStep: this.handleNextStep, steps: step }),
        step === 3 && _react2.default.createElement(_SelectThink2.default, { next: this.handleNextStep, steps: step }),
        step === 4 && _react2.default.createElement(_Calculated2.default, { next: this.handleNextStep, steps: step }),
        step === 5 && _react2.default.createElement(
          'h1',
          null,
          'Thank you. Your coins have been sent.'
        )
      );
    }
  }]);
  return History;
}(_react.Component)) || _class) || _class);
exports.default = History;

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"step":"IcXJ3B","text":"M2kEUN","row":"_1J4HTF"};

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(33);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ButtonsInRow = __webpack_require__(807);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonsInRow = function ButtonsInRow(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children']);
  return _react2.default.createElement(
    'div',
    rest,
    _react2.default.createElement(
      'div',
      { styleName: 'twoButtonsInRow' },
      children
    )
  );
};

ButtonsInRow.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = (0, _reactCssModules2.default)(ButtonsInRow, _ButtonsInRow2.default);

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"twoButtonsInRow":"_2KYO-l"};

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Flip = __webpack_require__(809);

var _Flip2 = _interopRequireDefault(_Flip);

var _flip = __webpack_require__(810);

var _flip2 = _interopRequireDefault(_flip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Flip(_ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement('img', { src: _flip2.default, alt: '', onClick: onClick, styleName: 'trade-panel__change' });
}

exports.default = (0, _reactCssModules2.default)(Flip, _Flip2.default);

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"trade-panel__change":"_2LOdkU"};

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/flip_d738de.svg";

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ReloadButton = __webpack_require__(812);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _ReloadIcon = __webpack_require__(813);

var _ReloadIcon2 = _interopRequireDefault(_ReloadIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReloadButton = function ReloadButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { styleName: 'reloadButton', className: className, onClick: onClick },
    _react2.default.createElement(_ReloadIcon2.default, { styleName: 'icon' })
  );
};

exports.default = (0, _reactCssModules2.default)(ReloadButton, _ReloadButton2.default);

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reloadButton":"_2NgnzZ","icon":"tps3tZ"};

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reload = __webpack_require__(814);

var _reload2 = _interopRequireDefault(_reload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReloadIcon = function ReloadIcon(_ref) {
  var className = _ref.className;
  return _react2.default.createElement('img', { className: className, src: _reload2.default, alt: 'reload icon' });
};

exports.default = ReloadIcon;

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/reload_d8d88b.svg";

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RemoveButton = __webpack_require__(816);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemoveButton = (_dec = (0, _reactCssModules2.default)(_RemoveButton2.default, { allowMultiple: true }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(RemoveButton, _Component);

  function RemoveButton() {
    (0, _classCallCheck3.default)(this, RemoveButton);
    return (0, _possibleConstructorReturn3.default)(this, (RemoveButton.__proto__ || (0, _getPrototypeOf2.default)(RemoveButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(RemoveButton, [{
    key: 'render',
    value: function render() {
      var removeOrder = this.props.removeOrder;


      return _react2.default.createElement('div', { styleName: 'button', onClick: removeOrder });
    }
  }]);
  return RemoveButton;
}(_react.Component)) || _class);
exports.default = RemoveButton;

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2dmdAo"};

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Swap = __webpack_require__(818);

var _Swap2 = _interopRequireDefault(_Swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Swap() {
  return _react2.default.createElement(
    'a',
    { href: '#', styleName: 'table__link' },
    _react2.default.createElement(
      'svg',
      { xmlns: 'http://www.w3.org/2000/svg', width: '7', height: '10', viewBox: '0 0 7 10' },
      _react2.default.createElement('path', {
        styleName: 'table__link-arrow',
        fill: 'none',
        fillRule: 'evenodd',
        stroke: '#7c1de9',
        strokeLinecap: 'round',
        strokeWidth: '2',
        d: 'M1 9l4-4-4-4' })
    )
  );
}

exports.default = (0, _reactCssModules2.default)(Swap, _Swap2.default);

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"table__link":"_3EGhOv","table__link-arrow":"_3XFEl9"};

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(173);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimerButton = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TimerButton, _Component);

  function TimerButton(_ref) {
    var timeLeft = _ref.timeLeft;
    (0, _classCallCheck3.default)(this, TimerButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TimerButton.__proto__ || (0, _getPrototypeOf2.default)(TimerButton)).call(this));

    _initialiseProps.call(_this);

    _this.state = {
      timeLeft: timeLeft
    };
    return _this;
  }

  (0, _createClass3.default)(TimerButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var timeLeft = this.state.timeLeft;
      var children = this.props.children;


      return _react2.default.createElement(
        _Button2.default,
        { brand: true, onClick: this.handleClick },
        children,
        ' ',
        timeLeft,
        's'
      );
    }
  }]);
  return TimerButton;
}(_react.Component), _class.propTypes = {
  timeLeft: _propTypes2.default.number, // seconds
  onClick: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  timeLeft: 10
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.timer = null;

  this.tick = function () {
    var timeLeft = _this2.state.timeLeft;

    var newTimeLeft = timeLeft - 1;

    if (newTimeLeft <= 0) {
      _this2.handleClick();
    } else {
      _this2.timer = setTimeout(_this2.tick, 1000);
      _this2.setState({
        timeLeft: newTimeLeft
      });
    }
  };

  this.handleClick = function () {
    var onClick = _this2.props.onClick;


    clearTimeout(_this2.timer);
    onClick();
  };
}, _temp);
exports.default = TimerButton;

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(22);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawButton = __webpack_require__(821);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithdrawButton = function WithdrawButton(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    'div',
    {
      styleName: 'withdrawButton',
      onClick: function onClick() {
        _actions2.default.analytics.dataEvent('balances-withdraw-' + data.currency.toLowerCase());
        _actions2.default.modals.open(_helpers.constants.modals.Withdraw, data);
      }
    },
    'Withdraw'
  );
};

exports.default = (0, _reactCssModules2.default)(WithdrawButton, _WithdrawButton2.default);

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"withdrawButton":"_2yf2Si"};

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Steps = __webpack_require__(823);

var _Steps2 = _interopRequireDefault(_Steps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Steps = (_dec = (0, _reactCssModules2.default)(_Steps2.default, { allowMultiple: true }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Steps, _Component);

  function Steps() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Steps);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Steps.__proto__ || (0, _getPrototypeOf2.default)(Steps)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      step: _this.props.steps
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Steps, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.steps > this.state.step) {
        this.setState({
          step: nextProps.steps
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var step = this.state.step;

      var titles = ['1', '2', '3', '4'];

      return _react2.default.createElement(
        'div',
        { styleName: 'row' },
        titles.map(function (st, index) {
          return _react2.default.createElement(
            _react.Fragment,
            { key: st },
            _react2.default.createElement(
              'span',
              { styleName: step > st ? 'step complete' : 'step' },
              step > st ? null : st
            ),
            index > 2 ? null : _react2.default.createElement('span', { styleName: step > st ? 'road solid' : 'road' })
          );
        })
      );
    }
  }]);
  return Steps;
}(_react.Component)) || _class);
exports.default = Steps;

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"step":"_1uYyjR","road":"GznopH","st":"_rhCOB","row":"_1zWX5r","complete":"_3EXBMG","solid":"sd3WS7","uncompleted":"_1u97Ro"};

/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _FieldLabel = __webpack_require__(825);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldLabel = function FieldLabel(_ref) {
  var children = _ref.children,
      inRow = _ref.inRow;
  return _react2.default.createElement(
    'div',
    { styleName: (0, _classnames2.default)('label', { 'inRow': inRow }) },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(FieldLabel, _FieldLabel2.default, { allowMultiple: true });

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"label":"_1AbkiC","inRow":"_2Hoger"};

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(33);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(313);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(22);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Input = __webpack_require__(838);

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = __webpack_require__(314);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (_dec = (0, _reactCssModules2.default)(_Input2.default, { allowMultiple: true }), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          inputContainerClassName = _props.inputContainerClassName,
          inputClassName = _props.inputClassName,
          error = _props.valueLink.error,
          valueLink = _props.valueLink,
          multiline = _props.multiline,
          focusOnInit = _props.focusOnInit,
          disabled = _props.disabled,
          readOnly = _props.readOnly,
          defaultValue = _props.defaultValue,
          rest = (0, _objectWithoutProperties3.default)(_props, ['className', 'inputContainerClassName', 'inputClassName', 'valueLink', 'valueLink', 'multiline', 'focusOnInit', 'disabled', 'readOnly', 'defaultValue']);


      var inputContainerStyleName = (0, _classnames2.default)('inputContainer', {
        'withError': error
      });

      return _react2.default.createElement(
        'div',
        { styleName: 'root', className: className },
        _react2.default.createElement(
          'div',
          { styleName: inputContainerStyleName, className: inputContainerClassName },
          _react2.default.createElement(multiline ? _TextArea2.default : _swValuelink.Input, (0, _assign2.default)({}, (0, _helpers.ignoreProps)(rest, 'styles'), {
            styleName: 'input',
            className: inputClassName,
            valueLink: valueLink,
            defaultValue: defaultValue,
            disabled: disabled || readOnly,
            autoFocus: !!focusOnInit,
            dir: 'auto',
            autoComplete: 'off'
          }))
        ),
        Boolean(error) && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          error
        )
      );
    }
  }]);
  return Input;
}(_react.Component), _class2.propTypes = {
  className: _propTypes2.default.string,
  rootClassName: _propTypes2.default.string,
  inputClassName: _propTypes2.default.string,
  placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  type: _propTypes2.default.string,
  valueLink: _propTypes2.default.object.isRequired,
  focusOnInit: _propTypes2.default.bool,
  multiline: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  icon: _propTypes2.default.bool,
  intl: _propTypes2.default.object
}, _class2.defaultProps = {
  focusOnInit: false,
  multiline: false,
  disabled: false,
  readOnly: false,
  required: false,
  type: 'text'
}, _temp)) || _class);
exports.default = Input;

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInput = exports.Checkbox = exports.Radio = exports.Select = exports.TextArea = exports.Input = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(36);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(66);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(33);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(171);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInputMask = __webpack_require__(833);

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setValue = function setValue(x, e) {
  return e.target.value;
};
var setBoolValue = function setBoolValue(x, e) {
  return Boolean(e.target.checked);
};

var validationClasses = function validationClasses(_ref, value, error) {
  var className = _ref.className,
      invalidClass = _ref.invalidClass,
      requiredClass = _ref.requiredClass;

  var _cx;

  return (0, _classnames2.default)(className, (_cx = {}, (0, _defineProperty3.default)(_cx, invalidClass || 'invalid', Boolean(error)), (0, _defineProperty3.default)(_cx, requiredClass || 'required', Boolean(error && value === '')), _cx));
};

var Input = function Input(props) {
  var valueLink = props.valueLink,
      checkedLink = props.checkedLink,
      pattern = props.pattern,
      mask = props.mask,
      maskChar = props.maskChar,
      maskReplace = props.maskReplace,
      rest = (0, _objectWithoutProperties3.default)(props, ['valueLink', 'checkedLink', 'pattern', 'mask', 'maskChar', 'maskReplace']);

  var link = valueLink || checkedLink;

  switch (props.type) {
    case 'checkbox':
      return _react2.default.createElement('input', (0, _extends3.default)({}, rest, {
        checked: Boolean(link.value),
        onChange: link.action(setBoolValue)
      }));
    case 'radio':
      return _react2.default.createElement('input', (0, _extends3.default)({}, rest, {
        checked: link.value === props.value,
        onChange: function onChange(e) {
          if (e.target.checked) {
            link.set(props.value);
          }
        }
      }));
    default:
      var className = validationClasses(rest, valueLink.value, valueLink.error);
      var node = Boolean(mask) ? _reactInputMask2.default : 'input';

      var nodeProps = (0, _assign2.default)({}, rest, {
        className: className,
        value: typeof valueLink.value !== 'undefined' ? String(valueLink.value) : '',
        onChange: valueLink.action(function (x, e) {
          var val = e.target.value;

          if (pattern && val) {
            val = val.replace(new RegExp('[^' + pattern + ']+', 'g'), '');
          }

          if (mask && val) {
            if (maskReplace) {
              return val.replace(maskReplace, '');
            } else if (maskReplace !== null && maskReplace !== false) {
              return val.replace(/[^0-9]+/g, '');
            }
          }
          return val;
        })
      });

      if (mask) {
        nodeProps.mask = mask;
        nodeProps.maskChar = maskChar;
      }

      return _react2.default.createElement(node, nodeProps);
  }
};

var NumberInput = function (_Component) {
  (0, _inherits3.default)(NumberInput, _Component);

  function NumberInput() {
    (0, _classCallCheck3.default)(this, NumberInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NumberInput.__proto__ || (0, _getPrototypeOf2.default)(NumberInput)).apply(this, arguments));

    _this.onChange = function (e) {
      var value = e.target.value;

      var asNumber = Number(value);

      _this.setValue(value);

      if (value && !isNaN(asNumber)) {
        _this.props.valueLink.update(function (x) {
          // Update link if value is changed
          if (asNumber !== Number(x)) {
            return asNumber;
          }
        });
      }
    };

    _this.onKeyPress = function (event) {
      var _this$props = _this.props,
          integer = _this$props.integer,
          positive = _this$props.positive;
      var charCode = event.charCode,
          ctrlKey = event.ctrlKey;


      var allowedCharCodes = (positive ? [] : [45]).concat(integer ? [] : [46]);

      if (ctrlKey) {
        return;
      }

      if (charCode && (charCode < 48 || charCode > 57) && allowedCharCodes.indexOf(charCode) < 0) {
        event.preventDefault();
      }
    };
    return _this;
  }

  (0, _createClass3.default)(NumberInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setAndConvert(this.props.valueLink.value);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var next = nextProps.valueLink;


      if (Number(next.value) !== Number(this.value)) {
        this.setAndConvert(next.value); // keep state being synced
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(x) {
      // We're not using native state in order to avoid race condition.
      this.value = String(x);
      this.error = this.value === '' || isNaN(Number(x));

      this.forceUpdate();
    }
  }, {
    key: 'setAndConvert',
    value: function setAndConvert(x) {
      var value = Number(x);

      if (this.props.positive) {
        value = Math.abs(x);
      }
      if (this.props.integer) {
        value = Math.round(value);
      }

      this.setValue(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          valueLink = _props.valueLink,
          props = (0, _objectWithoutProperties3.default)(_props, ['valueLink']);

      var error = valueLink.error || this.error;

      return _react2.default.createElement('input', (0, _extends3.default)({}, (0, _helpers.ignoreProps)(props, 'positive', 'integer'), {
        type: 'text',
        className: validationClasses(props, this.value, error),
        value: this.value,
        onKeyPress: this.onKeyPress,
        onChange: this.onChange
      }));
    }
  }]);
  return NumberInput;
}(_react.Component);

/**
 * Wrapper for standard <textarea/> to be compliant with React 0.14 valueLink semantic.
 * Simple supports for link validation - adds 'invalid' class if link has an error.
 *
 *     <TextArea valueLink={ linkToText } />
 */


var TextArea = function TextArea(_ref2) {
  var valueLink = _ref2.valueLink,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['valueLink']);
  return _react2.default.createElement('textarea', (0, _extends3.default)({}, props, {
    className: validationClasses(props, valueLink.value, valueLink.error),
    value: valueLink.value,
    onChange: valueLink.action(setValue)
  }));
};

/**
 * Wrapper for standard <select/> to be compliant with React 0.14 valueLink semantic.
 * Regular <option/> tags must be used:
 *
 *     <Select valueLink={ linkToSelectedValue }>
 *         <option value="a">A</option>
 *         <option value="b">B</option>
 *     </Select>
 */
var Select = function Select(_ref3) {
  var valueLink = _ref3.valueLink,
      children = _ref3.children,
      props = (0, _objectWithoutProperties3.default)(_ref3, ['valueLink', 'children']);
  return _react2.default.createElement(
    'select',
    (0, _extends3.default)({}, props, {
      value: valueLink.value,
      onChange: valueLink.action(setValue)
    }),
    children
  );
};

/**
 * Simple custom <Radio/> tag implementation. Can be easily styled.
 * Intended to be used with offhand bool link:
 *
 *    <Radio checkedLink={ linkToValue.equals( optionValue ) />
 */
var Radio = function Radio(_ref4) {
  var _ref4$className = _ref4.className,
      className = _ref4$className === undefined ? 'radio' : _ref4$className,
      checkedLink = _ref4.checkedLink,
      children = _ref4.children;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(className, { 'selected': checkedLink.value }),
      onClick: checkedLink.action(function () {
        return true;
      })
    },
    children
  );
};

/**
 * Simple custom <Checkbox /> tag implementation.
 * Takes any type of boolean link. Can be easily styled.
 *
 *     <Checkbox checkedLink={ boolLink } />
 */
var Checkbox = function Checkbox(_ref5) {
  var _ref5$className = _ref5.className,
      className = _ref5$className === undefined ? 'checkbox' : _ref5$className,
      checkedLink = _ref5.checkedLink,
      children = _ref5.children;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(className, { 'selected': checkedLink.value }),
      onClick: checkedLink.action(function (x) {
        return !x;
      })
    },
    children
  );
};

exports.Input = Input;
exports.TextArea = TextArea;
exports.Select = Select;
exports.Radio = Radio;
exports.Checkbox = Checkbox;
exports.NumberInput = NumberInput;

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"_1aWblp","inputContainer":"_2di3Mb","disabled":"_3u8Uu2","withError":"_3RwSrH","input":"_3T0zd_","label":"_3xlNvF","error":"_3LmV0i"};

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Login = __webpack_require__(841);

var _Login2 = _interopRequireDefault(_Login);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(41);

var _controls = __webpack_require__(65);

var _forms = __webpack_require__(114);

var _swValuelink = __webpack_require__(313);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$pravda = _ref.pravda,
      address = _ref$pravda.address,
      privateKey = _ref$pravda.privateKey;
  return {
    address: address,
    privateKey: privateKey
  };
}), _dec2 = (0, _reactCssModules2.default)(_Login2.default), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(Login, _Component);

  function Login() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      name: '',
      password: '',
      isSubmitted: false,
      view: true
    }, _this.handleLogin = function () {
      var view = _this.state.view;
      var next = _this.props.next;


      if (!view) {
        next();
      }
    }, _this.handleGenerateAccount = function () {
      _actions2.default.pravda.generateAccount();

      _this.setState({
        view: false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Login, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          address = _props.address,
          privateKey = _props.privateKey;


      if (address && privateKey) {
        this.setState({
          view: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          name = _state.name,
          password = _state.password,
          isSubmitted = _state.isSubmitted,
          view = _state.view;
      var steps = this.props.steps;

      var linked = _swValuelink2.default.all(this, 'name', 'password');

      if (isSubmitted) {
        linked.password.check(function (value) {
          return value !== '';
        }, 'Your password null');
        linked.name.check(function (value) {
          return value !== '';
        }, 'Your name null');
      }

      return _react2.default.createElement(
        'div',
        { styleName: 'col' },
        _react2.default.createElement(
          _controls.Button,
          { styleName: 'button', white: true, disabled: !view, onClick: this.handleGenerateAccount },
          'Generate account'
        ),
        _react2.default.createElement(
          _controls.Button,
          { styleName: 'button', green: true, disabled: view, onClick: this.handleLogin },
          'Next'
        )
      );
    }
  }]);
  return Login;
}(_react.Component)) || _class) || _class);
exports.default = Login;

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"col":"Uer11s","note":"zem6bX","button":"yS8Fnp"};

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(843);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(846);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SelectGame = __webpack_require__(847);

var _SelectGame2 = _interopRequireDefault(_SelectGame);

var _horse = __webpack_require__(848);

var _horse2 = _interopRequireDefault(_horse);

var _Artboard = __webpack_require__(849);

var _Artboard2 = _interopRequireDefault(_Artboard);

var _Ligmar = __webpack_require__(850);

var _Ligmar2 = _interopRequireDefault(_Ligmar);

var _controls = __webpack_require__(65);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectGame = (_dec = (0, _reactCssModules2.default)(_SelectGame2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(SelectGame, _Component);

  function SelectGame() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SelectGame);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SelectGame.__proto__ || (0, _getPrototypeOf2.default)(SelectGame)).call.apply(_ref, [this].concat(args))), _this), _this.handleNext = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _actions2.default.loader.show(true);
              _context.next = 3;
              return _actions2.default.pravda.getCoins();

            case 3:
              _context.next = 5;
              return _actions2.default.pravda.getGameItems();

            case 5:
              _context.next = 7;
              return _actions2.default.pravda.getBalance();

            case 7:
              _context.next = 9;
              return _actions2.default.pravda.getTokenBalance();

            case 9:
              _context.next = 11;
              return _actions2.default.pravda.getItemsBalance();

            case 11:
              _actions2.default.loader.hide();
              _this.props.handleNextStep();

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SelectGame, [{
    key: 'render',
    value: function render() {
      var steps = this.props.steps;


      return _react2.default.createElement(
        'div',
        { styleName: 'row' },
        _react2.default.createElement(
          'div',
          { styleName: 'game' },
          _react2.default.createElement('img', { src: _horse2.default, alt: '' }),
          _react2.default.createElement(
            _controls.Button,
            { styleName: 'button', white: true, onClick: this.handleNext },
            'X-Game'
          )
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'game' },
          _react2.default.createElement('img', { src: _Artboard2.default, alt: '' }),
          _react2.default.createElement(
            _controls.Button,
            { styleName: 'button', white: true, onClick: this.handleNext },
            'Magic Fight'
          )
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'game' },
          _react2.default.createElement('img', { src: _Ligmar2.default, alt: '' }),
          _react2.default.createElement(
            _controls.Button,
            { styleName: 'button', white: true, onClick: this.handleNext },
            'Ligmar'
          )
        )
      );
    }
  }]);
  return SelectGame;
}(_react.Component)) || _class);
exports.default = SelectGame;

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"game":"t9amh5","button":"_1WQqtE","row":"_3B6H60"};

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/horse_0f5815.png";

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/Artboard_d85040.png";

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/Ligmar_ee294a.png";

/***/ }),

/***/ 851:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(22);

var _redaction = __webpack_require__(41);

var _controls = __webpack_require__(65);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SelectThink = __webpack_require__(852);

var _SelectThink2 = _interopRequireDefault(_SelectThink);

var _sword = __webpack_require__(853);

var _sword2 = _interopRequireDefault(_sword);

var _sword3 = __webpack_require__(854);

var _sword4 = _interopRequireDefault(_sword3);

var _sword5 = __webpack_require__(855);

var _sword6 = _interopRequireDefault(_sword5);

var _sword7 = __webpack_require__(856);

var _sword8 = _interopRequireDefault(_sword7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectThink = (_dec = (0, _redaction.connect)(function (_ref) {
  var id = _ref.pravda.id;
  return {
    id: id
  };
}), _dec2 = (0, _reactCssModules2.default)(_SelectThink2.default), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(SelectThink, _Component);

  function SelectThink() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SelectThink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = SelectThink.__proto__ || (0, _getPrototypeOf2.default)(SelectThink)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      games: null
    }, _this.handleError = function () {
      var message = 'This items doest work please select other';

      _actions2.default.notifications.show(_helpers.constants.notifications.Message, {
        message: message
      });
    }, _this.handleNextStep = function () {
      var next = _this.props.next;

      next();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SelectThink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          steps = _props.steps;

      var images = [_sword2.default, _sword4.default, _sword6.default, _sword8.default];
      var img = void 0;

      if (id !== undefined) {
        img = images[id % 4];
      }

      return _react2.default.createElement(
        'div',
        { styleName: 'row' },
        _react2.default.createElement(
          'div',
          { styleName: 'game' },
          _react2.default.createElement(
            'h1',
            null,
            'X-',
            id
          ),
          _react2.default.createElement(
            _controls.Button,
            { white: true, onClick: this.handleNextStep },
            ' Sell Item'
          ),
          _react2.default.createElement('img', { src: img, alt: '' })
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'game', onClick: this.handleError },
          _react2.default.createElement(
            'h1',
            null,
            'Empty'
          )
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'game', onClick: this.handleError },
          _react2.default.createElement(
            'h1',
            null,
            'Empty'
          )
        )
      );
    }
  }]);
  return SelectThink;
}(_react.Component)) || _class) || _class);
exports.default = SelectThink;

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"game":"_3PWGoe","row":"_3c48JF"};

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/sword1_510832.jpeg";

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/sword2_571202.jpg";

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/sword4_49d439.jpg";

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/sword5_288217.jpeg";

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Calculated = __webpack_require__(858);

var _Calculated2 = _interopRequireDefault(_Calculated);

var _controls = __webpack_require__(65);

var _forms = __webpack_require__(114);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calculated = (_dec = (0, _reactCssModules2.default)(_Calculated2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Calculated, _Component);

  function Calculated() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Calculated);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Calculated.__proto__ || (0, _getPrototypeOf2.default)(Calculated)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      week: 7,
      amount: _this.props.amount
    }, _this.changeState = function (value) {
      _this.setState({
        week: value
      });
    }, _this.valueCreator = function () {
      var _this$state = _this.state,
          amount = _this$state.amount,
          week = _this$state.week;


      amount = _this.rangeInput.value;

      _this.setState({
        amount: amount
      });
    }, _this.handleSellItem = function () {
      var next = _this.props.next;

      _actions2.default.pravda.initiatePawnTransaction();
      next();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Calculated, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var amountProps = this.props.amountProps;


      this.setState({
        amount: amountProps
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          week = _state.week,
          amount = _state.amount;
      var _props = this.props,
          amountProps = _props.amountProps,
          steps = _props.steps;

      var value = amount * week;

      return _react2.default.createElement(
        'div',
        { styleName: 'row' },
        _react2.default.createElement(
          _forms.FieldLabel,
          { inRow: true },
          'Amount: ',
          amount
        ),
        _react2.default.createElement('input', { type: 'range', onChange: this.valueCreator, ref: function ref(input) {
            return _this2.rangeInput = input;
          }, value: amount, step: 100, min: amountProps / 100, max: amountProps }),
        _react2.default.createElement(
          'p',
          null,
          'Number of days: ',
          week
        ),
        _react2.default.createElement(
          'div',
          { styleName: week === 7 ? 'checkbox checked' : 'checkbox', onClick: function onClick() {
              return _this2.changeState(7);
            } },
          ' 7 Days'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { styleName: week === 21 ? 'checkbox checked' : 'checkbox', onClick: function onClick() {
              return _this2.changeState(21);
            } },
          ' 21 Days'
        ),
        _react2.default.createElement('br', null),
        'Total amount: ',
        value,
        _react2.default.createElement(
          _controls.Button,
          { styleName: 'button', white: true, onClick: this.handleSellItem },
          'Send on contract'
        )
      );
    }
  }]);
  return Calculated;
}(_react.Component), _class2.propTypes = {
  amount: _propTypes2.default.number
}, _class2.defaultProps = {
  amountProps: 1000
}, _temp2)) || _class);
exports.default = Calculated;

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"row":"_2io4Jr","checkbox":"_1rkbO1","checked":"_1kDIe6","button":"_3lubUE"};

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotFound;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotFound() {
  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "h2",
      { className: "description__sub-title" },
      "Page not found!"
    )
  );
}

/***/ }),

/***/ 860:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterRedux = __webpack_require__(310);

var _reactRedux = __webpack_require__(302);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _App = __webpack_require__(861);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(Root, _React$PureComponent);

  function Root() {
    (0, _classCallCheck3.default)(this, Root);
    return (0, _possibleConstructorReturn3.default)(this, (Root.__proto__ || (0, _getPrototypeOf2.default)(Root)).apply(this, arguments));
  }

  (0, _createClass3.default)(Root, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          history = _props.history,
          store = _props.store,
          routes = _props.routes;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouterRedux.ConnectedRouter,
          { history: history },
          _react2.default.createElement(
            _App2.default,
            null,
            routes
          )
        )
      );
    }
  }]);
  return Root;
}(_react2.default.PureComponent), _class.propTypes = {
  store: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,
  routes: _propTypes2.default.element.isRequired
}, _temp);
exports.default = Root;

/***/ }),

/***/ 861:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(84);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(41);

var _moment = __webpack_require__(82);

var _moment2 = _interopRequireDefault(_moment);

var _helpers = __webpack_require__(22);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _App = __webpack_require__(863);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(864);

var _Header = __webpack_require__(865);

var _Header2 = _interopRequireDefault(_Header);

var _Loader = __webpack_require__(176);

var _Loader2 = _interopRequireDefault(_Loader);

var _RequestLoader = __webpack_require__(871);

var _RequestLoader2 = _interopRequireDefault(_RequestLoader);

var _ModalConductor = __webpack_require__(319);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

var _WidthContainer = __webpack_require__(175);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _NotificationConductor = __webpack_require__(885);

var _NotificationConductor2 = _interopRequireDefault(_NotificationConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('en-gb');

var App = (_dec = (0, _redaction.connect)({
  isVisible: 'loader.isVisible'
}), _dec2 = (0, _reactCssModules2.default)(_App2.default), (0, _reactRouter.withRouter)(_class = _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fetching: true
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!localStorage.getItem(_helpers.constants.localStorage.demoMoneyReceived)) {
        _actions2.default.modals.open(_helpers.constants.modals.Approve, {});
      }
      _actions2.default.pravda.LoginAccount();

      this.setState({
        fetching: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var fetching = this.state.fetching;
      var children = this.props.children;


      if (fetching) {
        return _react2.default.createElement(_Loader2.default, null);
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          _WidthContainer2.default,
          { styleName: 'main' },
          children
        ),
        _react2.default.createElement(_RequestLoader2.default, null),
        _react2.default.createElement(_ModalConductor2.default, null),
        _react2.default.createElement(_NotificationConductor2.default, null)
      );
    }
  }]);
  return App;
}(_react2.default.Component), _class2.propTypes = {
  children: _propTypes2.default.element.isRequired
}, _temp2)) || _class) || _class) || _class);
exports.default = App;

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"_3gjuKq"};

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"UVZ-gM","btn":"_2xXs60"};

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Header = __webpack_require__(866);

var _Header2 = _interopRequireDefault(_Header);

var _WidthContainer = __webpack_require__(175);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _Nav = __webpack_require__(868);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (_dec = (0, _reactCssModules2.default)(_Header2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { styleName: 'header' },
        _react2.default.createElement(
          _WidthContainer2.default,
          { styleName: 'container' },
          _react2.default.createElement(
            'div',
            { style: { display: 'flex', alignItems: 'center', width: '1100px' } },
            _react2.default.createElement(
              'span',
              { style: { color: '#fff', fontWeight: 'bold' } },
              'PRAVDA'
            ),
            _react2.default.createElement(_Nav2.default, null)
          )
        )
      );
    }
  }]);
  return Header;
}(_react.Component)) || _class);
exports.default = Header;

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"qZaPkJ","container":"_1AYBnf"};

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"widthContainer":"_3BXipS","widthContainerIn":"_3Igl7j","relative":"_3gxpYb","fullHeight":"_1GF4SW","centeringContent":"_3RUiHP","main":"_3aO2EZ"};

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(118);

var _helpers = __webpack_require__(22);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Nav = __webpack_require__(869);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = [{ title: 'Home', link: _helpers.links.home }, { title: 'Wallet', link: _helpers.links.wallet }];

var Nav = (_dec = (0, _reactCssModules2.default)(_Nav2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.handleScrollTo = function (scrollDuration) {
      var scrollStep = -window.scrollY / (scrollDuration / 15);
      var scrollInterval = setInterval(function () {
        window.scrollY !== 0 ? window.scrollBy(0, scrollStep) : clearInterval(scrollInterval);
      }, 15);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { styleName: 'nav' },
        _react2.default.createElement(
          _react.Fragment,
          null,
          nav.map(function (_ref2) {
            var title = _ref2.title,
                link = _ref2.link;
            return _react2.default.createElement(
              _reactRouterDom.NavLink,
              {
                onClick: function onClick() {
                  return _this2.handleScrollTo(500);
                },
                exact: true,
                key: title,
                styleName: 'link',
                to: link,
                activeClassName: _Nav2.default.active
              },
              title
            );
          }),
          _react2.default.createElement(
            'a',
            { styleName: 'link', target: '_blank', rel: 'noreferrer noopener', href: 'https://docs.google.com/presentation/d/1sEI6Tmj4-uEN0x5FriXi4qmT67ibX0IedLuZ2iuegCE/edit#slide=id.p' },
            ' Whitepaper'
          ),
          _react2.default.createElement(
            'a',
            { styleName: 'link', target: '_blank', rel: 'noreferrer noopener', href: 'https://github.com/caffeinum/pravda.contracts/blob/master/pawnshop.cs' },
            ' Contracts'
          )
        )
      );
    }
  }]);
  return Nav;
}(_react.Component)) || _class);
exports.default = Nav;

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"nav":"_34R6Y0","link":"_16Gtic","active":"_2Mv-fo"};

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"_3V4vPK","loader":"_37qfX_","small":"_1Cc0hi","center":"_3wUrWW","loader1":"B8rIc7","loader2":"_2dF68e","loader3":"_1fAQsv","text":"_2mdCx-"};

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(41);

var _Loader = __webpack_require__(176);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestLoader = function RequestLoader(_ref) {
  var isVisible = _ref.isVisible,
      text = _ref.text;

  if (!isVisible) {
    return null;
  }

  return _react2.default.createElement(_Loader2.default, { text: text });
};

exports.default = (0, _redaction.connect)({
  isVisible: 'loader.isVisible',
  text: 'loader.text'
})(RequestLoader);

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Approve = __webpack_require__(873);

var _Approve2 = _interopRequireDefault(_Approve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Approve: _Approve2.default
};

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Approve = __webpack_require__(874);

var _Approve2 = _interopRequireDefault(_Approve);

var _modal = __webpack_require__(875);

var _controls = __webpack_require__(65);

var _forms = __webpack_require__(114);

var _helpers = __webpack_require__(22);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offer = (_dec = (0, _reactCssModules2.default)(_Approve2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Offer, _React$Component);

  function Offer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Offer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Offer.__proto__ || (0, _getPrototypeOf2.default)(Offer)).call.apply(_ref, [this].concat(args))), _this), _this.handleOpen = function () {
      _actions2.default.loader.show(true);

      setTimeout(function () {
        _actions2.default.loader.hide();
        localStorage.setItem(_helpers.constants.localStorage.demoMoneyReceived, true);
        _actions2.default.modals.close(_helpers.constants.modals.Approve, {});
      }, 1500);
    }, _this.handleClose = function () {
      var message = 'This services doest work please select other';

      _actions2.default.notifications.show(_helpers.constants.notifications.Message, {
        message: message
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Offer, [{
    key: 'render',
    value: function render() {
      var name = this.props.name;


      return _react2.default.createElement(
        _modal.Modal,
        { name: name, title: 'pravda.services', disableClose: true },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          _react2.default.createElement(
            'div',
            { styleName: 'services', onClick: this.handleOpen },
            'PAWNSHOP'
          ),
          _react2.default.createElement(
            'div',
            { styleName: 'services disabled', onClick: this.handleClose },
            'GUILD MANAGEMENT (coming soon) '
          )
        )
      );
    }
  }]);
  return Offer;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string
}, _temp2)) || _class);
exports.default = Offer;

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"services":"mnkuaz","disabled":"_3R69kO","content":"_153K8d"};

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContainer = exports.ModalConductor = exports.Modal = undefined;

var _Modal = __webpack_require__(876);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalConductor = __webpack_require__(319);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

var _ModalContainer = __webpack_require__(882);

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Modal = _Modal2.default;
exports.ModalConductor = _ModalConductor2.default;
exports.ModalContainer = _ModalContainer2.default;

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(29);

var _actions2 = _interopRequireDefault(_actions);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Modal = __webpack_require__(877);

var _Modal2 = _interopRequireDefault(_Modal);

var _WidthContainer = __webpack_require__(175);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _Overlay = __webpack_require__(320);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Center = __webpack_require__(321);

var _Center2 = _interopRequireDefault(_Center);

var _CloseIcon = __webpack_require__(880);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = (_dec = (0, _reactCssModules2.default)(_Modal2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      var _this$props = _this.props,
          name = _this$props.name,
          data = _this$props.data,
          onClose = _this$props.onClose,
          disableClose = _this$props.disableClose;


      if (name === 'OfferModal') {
        _actions2.default.analytics.dataEvent('orderbook-addoffer-click-exit-button');
      }

      if (!disableClose) {
        _actions2.default.modals.close(name);

        if (typeof onClose === 'function') {
          onClose();
        }

        if (typeof data.onClose === 'function') {
          data.onClose();
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          whiteLogo = _props.whiteLogo,
          title = _props.title,
          showCloseButton = _props.showCloseButton,
          disableClose = _props.disableClose,
          children = _props.children,
          titleUppercase = _props.titleUppercase;


      var titleStyleName = (0, _classnames2.default)('title', {
        'uppercase': titleUppercase
      });

      return _react2.default.createElement(
        _Overlay2.default,
        null,
        _react2.default.createElement(
          'div',
          { styleName: 'modal', className: className },
          Boolean(title || showCloseButton) && _react2.default.createElement(
            'div',
            { styleName: 'header' },
            _react2.default.createElement(
              _WidthContainer2.default,
              { styleName: 'headerContent' },
              _react2.default.createElement(
                'div',
                { styleName: titleStyleName, role: 'title' },
                title
              ),
              showCloseButton && !disableClose && _react2.default.createElement(_CloseIcon2.default, { styleName: 'closeButton', onClick: this.close, 'data-testid': 'modalCloseIcon' })
            )
          ),
          _react2.default.createElement(
            'div',
            { styleName: 'contentContainer' },
            _react2.default.createElement(
              _Center2.default,
              { scrollable: true },
              _react2.default.createElement(
                'div',
                { styleName: 'content' },
                children
              )
            )
          )
        )
      );
    }
  }]);
  return Modal;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node,
  name: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.any,
  showCloseButton: _propTypes2.default.bool,
  data: _propTypes2.default.object,
  disableClose: _propTypes2.default.bool,
  titleUppercase: _propTypes2.default.bool,
  onClose: _propTypes2.default.func
}, _class2.defaultProps = {
  data: {},
  whiteLogo: false,
  showCloseButton: true,
  fullWidth: false,
  disableClose: false,
  disableCloseOverlay: false,
  uppercase: false
}, _temp2)) || _class);
exports.default = Modal;

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_3d-lMl","header":"utYl-8","headerContent":"_2FzjWy","title":"_1H7w4U","uppercase":"_1XykmZ","closeButton":"_3UgYwG","contentContainer":"_2OSr4P","content":"_2SEeRQ"};

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"a_1CO5"};

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"centringContainer":"_1uK09U","scrollable":"_1K6mUM","centringContent":"_1xMZgg"};

/***/ }),

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(66);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(33);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CloseIcon = __webpack_require__(881);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIcon = function CloseIcon(_ref) {
  var whiteColor = _ref.whiteColor,
      brandColor = _ref.brandColor,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['whiteColor', 'brandColor']);

  var styleName = (0, _classnames2.default)('button', {
    'whiteColor': whiteColor,
    'brandColor': brandColor
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest, { role: 'closeButton' }),
    _react2.default.createElement('div', { styleName: 'icon', role: 'closeIcon' })
  );
};

CloseIcon.propTypes = {
  whiteColor: _propTypes2.default.bool,
  brandColor: _propTypes2.default.bool
};

exports.default = (0, _reactCssModules2.default)(CloseIcon, _CloseIcon2.default, { allowMultiple: true });

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3KAFwf","whiteColor":"_1qVzDl","icon":"_2g6BBl","brandColor":"_1ZJhlM"};

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(22);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ModalContainer = __webpack_require__(883);

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

var _Overlay = __webpack_require__(320);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Center = __webpack_require__(321);

var _Center2 = _interopRequireDefault(_Center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContainer = (_dec = (0, _reactCssModules2.default)(_ModalContainer2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(ModalContainer, _Component);

  function ModalContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalContainer.__proto__ || (0, _getPrototypeOf2.default)(ModalContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleMount = function (el) {
      if (el) {
        setTimeout(function () {
          el.classList.add(_ModalContainer2.default.mounted);
        }, 0);
      }
    }, _this.close = function () {
      var _this$props = _this.props,
          disableClose = _this$props.disableClose,
          onClose = _this$props.onClose;


      if (!disableClose) {
        onClose();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ModalContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          fullWidth = _props.fullWidth;

      // TODO move overflow to Modal from Center

      var modalContainerStyleName = (0, _classnames2.default)('modalContainer', {
        'fullWidth': fullWidth
      });

      return _react2.default.createElement(
        _Overlay2.default,
        { onClick: this.close },
        _react2.default.createElement(
          _Center2.default,
          { scrollable: true },
          _react2.default.createElement(
            'div',
            {
              styleName: modalContainerStyleName,
              ref: this.handleMount,
              onClick: function onClick(event) {
                return event.stopPropagation();
              }
            },
            children
          )
        )
      );
    }
  }]);
  return ModalContainer;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.any.isRequired,
  fullWidth: _propTypes2.default.bool,
  disableClose: _propTypes2.default.bool,
  onClose: _propTypes2.default.func.isRequired
}, _temp2)) || _class);
exports.default = ModalContainer;

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalContainer":"_5wv85l","fullWidth":"_3v15t0","mounted":"_2elaml"};

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalConductor":"qe8yZ6"};

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(102);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(41);

var _notifications = __webpack_require__(886);

var _notifications2 = _interopRequireDefault(_notifications);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _NotificationConductor = __webpack_require__(893);

var _NotificationConductor2 = _interopRequireDefault(_NotificationConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationConductor = (_dec = (0, _redaction.connect)({
  notifications: 'notifications'
}), _dec2 = (0, _reactCssModules2.default)(_NotificationConductor2.default), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(NotificationConductor, _Component);

  function NotificationConductor() {
    (0, _classCallCheck3.default)(this, NotificationConductor);
    return (0, _possibleConstructorReturn3.default)(this, (NotificationConductor.__proto__ || (0, _getPrototypeOf2.default)(NotificationConductor)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotificationConductor, [{
    key: 'render',
    value: function render() {
      var notifications = this.props.notifications;


      var notificationNames = (0, _keys2.default)(notifications);
      var areNotificationsExist = Boolean(notificationNames.length);

      return areNotificationsExist && _react2.default.createElement(
        'div',
        { styleName: 'notificationConductor' },
        notificationNames.map(function (key) {
          var _notifications$key = notifications[key],
              name = _notifications$key.name,
              _notifications$key$da = _notifications$key.data,
              data = _notifications$key$da === undefined ? {} : _notifications$key$da;


          return _react2.default.createElement(_notifications2.default[name], {
            key: name,
            name: name,
            data: data
          });
        })
      );
    }
  }]);
  return NotificationConductor;
}(_react.Component), _class2.propTypes = {
  notifications: _propTypes2.default.object
}, _temp)) || _class) || _class);
exports.default = NotificationConductor;

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SuccessWithdraw = __webpack_require__(887);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Message = __webpack_require__(891);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  SuccessWithdraw: _SuccessWithdraw2.default,
  Message: _Message2.default
};

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SuccessWithdraw = __webpack_require__(888);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Notification = __webpack_require__(322);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuccessWithdraw = (_dec = (0, _reactCssModules2.default)(_SuccessWithdraw2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(SuccessWithdraw, _Component);

  function SuccessWithdraw() {
    (0, _classCallCheck3.default)(this, SuccessWithdraw);
    return (0, _possibleConstructorReturn3.default)(this, (SuccessWithdraw.__proto__ || (0, _getPrototypeOf2.default)(SuccessWithdraw)).apply(this, arguments));
  }

  (0, _createClass3.default)(SuccessWithdraw, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          _props$data = _props.data,
          amount = _props$data.amount,
          currency = _props$data.currency,
          address = _props$data.address;


      return _react2.default.createElement(
        _Notification2.default,
        { name: name },
        _react2.default.createElement(
          'span',
          { styleName: 'value' },
          amount,
          ' ',
          currency
        ),
        ' were successfully transferred to ',
        address,
        '!'
      );
    }
  }]);
  return SuccessWithdraw;
}(_react.Component)) || _class);
exports.default = SuccessWithdraw;

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_3M190E"};

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_1rGs3i","mounted":"_3e2bwy","removed":"_359s7d","notification":"_2HVVjT","content":"_2sHyls"};

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "71af1b68ea0f662eb88996ea7a25bf8a.mp4";

/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(4);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Message = __webpack_require__(892);

var _Message2 = _interopRequireDefault(_Message);

var _Notification = __webpack_require__(322);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = (_dec = (0, _reactCssModules2.default)(_Message2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Message, _Component);

  function Message() {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).apply(this, arguments));
  }

  (0, _createClass3.default)(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          message = _props.data.message;


      return _react2.default.createElement(
        _Notification2.default,
        { name: name },
        _react2.default.createElement(
          'span',
          { styleName: 'value' },
          message
        )
      );
    }
  }]);
  return Message;
}(_react.Component)) || _class);
exports.default = Message;

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"xt8YYA"};

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"notificationConductor":"_8T39zz"};

/***/ })

},[323]);