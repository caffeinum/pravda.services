webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollBarWidth = exports.getPageOffset = exports.ignoreProps = exports.localStorage = exports.constants = exports.request = exports.links = exports.web3 = exports.btc = undefined;

var _btc = __webpack_require__(407);

var _btc2 = _interopRequireDefault(_btc);

var _web = __webpack_require__(165);

var _web2 = _interopRequireDefault(_web);

var _links = __webpack_require__(606);

var _links2 = _interopRequireDefault(_links);

var _request = __webpack_require__(607);

var _request2 = _interopRequireDefault(_request);

var _constants = __webpack_require__(305);

var _constants2 = _interopRequireDefault(_constants);

var _localStorage = __webpack_require__(640);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _ignoreProps = __webpack_require__(642);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _getPageOffset = __webpack_require__(645);

var _getPageOffset2 = _interopRequireDefault(_getPageOffset);

var _getScrollBarWidth = __webpack_require__(646);

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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modals = __webpack_require__(799);

var _modals2 = _interopRequireDefault(_modals);

var _loader = __webpack_require__(845);

var _loader2 = _interopRequireDefault(_loader);

var _notifications = __webpack_require__(846);

var _notifications2 = _interopRequireDefault(_notifications);

var _filter = __webpack_require__(847);

var _filter2 = _interopRequireDefault(_filter);

var _user = __webpack_require__(848);

var _user2 = _interopRequireDefault(_user);

var _bitcoin = __webpack_require__(852);

var _bitcoin2 = _interopRequireDefault(_bitcoin);

var _ethereum = __webpack_require__(853);

var _ethereum2 = _interopRequireDefault(_ethereum);

var _token = __webpack_require__(857);

var _token2 = _interopRequireDefault(_token);

var _nimiq = __webpack_require__(859);

var _nimiq2 = _interopRequireDefault(_nimiq);

var _eos = __webpack_require__(861);

var _eos2 = _interopRequireDefault(_eos);

var _feed = __webpack_require__(882);

var _feed2 = _interopRequireDefault(_feed);

var _analytics = __webpack_require__(883);

var _analytics2 = _interopRequireDefault(_analytics);

var _referral = __webpack_require__(351);

var _referral2 = _interopRequireDefault(_referral);

var _pravda = __webpack_require__(888);

var _pravda2 = _interopRequireDefault(_pravda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  filter: _filter2.default,
  modals: _modals2.default,
  loader: _loader2.default,
  notifications: _notifications2.default,
  user: _user2.default,
  bitcoin: _bitcoin2.default,
  ethereum: _ethereum2.default,
  token: _token2.default,
  nimiq: _nimiq2.default,
  eos: _eos2.default,
  feed: _feed2.default,
  analytics: _analytics2.default,
  referral: _referral2.default,
  pravda: _pravda2.default
};

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redaction = __webpack_require__(34);

var _reduErs = __webpack_require__(343);

var _reduErs2 = _interopRequireDefault(_reduErs);

var _store = __webpack_require__(192);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redaction.wrapReducers)(_reduErs2.default, _store2.default.dispatch);

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// resolve object in webpack
exports.default = {"propENV":"testnet.prod","paths":{},"referral":{"url":"https://wiki.swap.online/affiliate.php"},"publicPath":"https://pravda.services/","http":{"host":"localhost","port":9001},"i18nDate":{"month":"long","day":"numeric","hour":"numeric","minute":"numeric"},"exchangeRates":{"swapeth":1,"ethswap":1,"swapnoxon":1,"noxonswap":1,"swapbtc":0.07,"btcswap":14,"etheth":1,"ethbtc":0.07,"btceth":14,"ethnoxon":1,"noxoneth":1,"btcnoxon":14,"noxonbtc":0.07},"env":"production","entry":"testnet","base":"https://pravda.services/","services":{"web3":{"provider":"https://rinkeby.infura.io/JCnK5ifEPH9qcQkX0Ahl","rate":0.1,"gas":2000000,"gasPrice":"20000000000"},"eos":{"chainId":"038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca","httpEndpoint":"https://jungle.eosio.cr"}},"token":{"contract":"0xc87C2668F05803F60EF75b176eea0CCE80D0009C"},"eth":{"contract":"0x830aef165b900fa7dc6b219f062c5784f6436d67"},"tokens":{"swap":{"address":"0xbaa3fa2ed111f3e8488c21861ea7b7dbb5a7b121","decimals":18},"noxon":{"address":"0x60c205722c6c797c725a996cf9cca11291f90749","decimals":0},"jot":{"address":"0x9070e2fDb61887c234D841c95D1709288EBbB9a0","decimals":18}},"link":{"bitpay":"https://test-insight.bitpay.com","etherscan":"https://rinkeby.etherscan.io","eos":"http://jungle.cryptolions.io/#accountInfo"},"api":{"blocktrail":"https://api.blocktrail.com/v1/tBTC","bitpay":"https://test-insight.bitpay.com/api","etherscan":"https://rinkeby.etherscan.io/api","pravda":"https://y000r.world"},"apiKeys":{"etherscan":"RHHFPNMAZMD6I4ZWBZBF6FA11CMW9AXZNM","blocktrail":"1835368c0fa8e71907ca26f3c978ab742a7db42e"}};

/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Button = __webpack_require__(895);

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
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = exports.reducers = undefined;

var _store = __webpack_require__(192);

var _store2 = _interopRequireDefault(_store);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getState = function getState() {
  return _store2.default.getState();
};

exports.reducers = _reducers2.default;
exports.getState = getState;

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithdrawButton = exports.TimerButton = exports.Swap = exports.RemoveButton = exports.ReloadButton = exports.Flip = exports.ButtonInRow = exports.Button = undefined;

var _Button = __webpack_require__(54);

var _Button2 = _interopRequireDefault(_Button);

var _ButtonsInRow = __webpack_require__(359);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

var _Flip = __webpack_require__(899);

var _Flip2 = _interopRequireDefault(_Flip);

var _ReloadButton = __webpack_require__(902);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _RemoveButton = __webpack_require__(906);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

var _Swap = __webpack_require__(908);

var _Swap2 = _interopRequireDefault(_Swap);

var _TimerButton = __webpack_require__(910);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _WithdrawButton = __webpack_require__(911);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.TextArea = exports.Radio = exports.Checkbox = exports.NumberInput = exports.Input = undefined;

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(135);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _tags = __webpack_require__(916);

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

var _valuelink = __webpack_require__(919);

var _valuelink2 = _interopRequireDefault(_valuelink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this.state = { foo: '', bar: '' }  =>   Link.all(this, 'foo', 'bar')
_valuelink2.default.allFields = function (component) {
  return _valuelink2.default.all.apply(_valuelink2.default, [component].concat((0, _toConsumableArray3.default)((0, _keys2.default)(component.state))));
};

exports.default = _valuelink2.default;

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = exports.TextArea = exports.Input = exports.FieldLabel = undefined;

var _FieldLabel = __webpack_require__(195);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(137);

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = __webpack_require__(360);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Login = __webpack_require__(924);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FieldLabel = _FieldLabel2.default;
exports.Input = _Input2.default;
exports.TextArea = _TextArea2.default;
exports.Login = _Login2.default;

/***/ }),
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SubTitle = __webpack_require__(797);

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
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(41);

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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(69);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Input = __webpack_require__(922);

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = __webpack_require__(360);

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
/* 138 */
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

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Modal = __webpack_require__(957);

var _Modal2 = _interopRequireDefault(_Modal);

var _WidthContainer = __webpack_require__(197);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _Overlay = __webpack_require__(363);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Logo = __webpack_require__(361);

var _Logo2 = _interopRequireDefault(_Logo);

var _Center = __webpack_require__(364);

var _Center2 = _interopRequireDefault(_Center);

var _CloseIcon = __webpack_require__(960);

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
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(461);

var _web2 = _interopRequireDefault(_web);

var _appConfig = __webpack_require__(40);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = new _web2.default(new _web2.default.providers.HttpProvider(_appConfig2.default.services.web3.provider));

exports.default = web3;

/***/ }),
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PageHeadline = __webpack_require__(794);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Title = __webpack_require__(795);

var _Title2 = _interopRequireDefault(_Title);

var _SubTitle = __webpack_require__(133);

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
/* 191 */,
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

var _reactRouterRedux = __webpack_require__(344);

var _history = __webpack_require__(44);

var _redaction = __webpack_require__(34);

var _reduxLogger = __webpack_require__(844);

var _reduErs = __webpack_require__(343);

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
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _FieldLabel = __webpack_require__(915);

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
/* 196 */,
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(41);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WidthContainer = __webpack_require__(946);

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
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Loader = __webpack_require__(952);

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
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _COINS = __webpack_require__(993);

var _COINS2 = _interopRequireDefault(_COINS);

var _ENV = __webpack_require__(994);

var _ENV2 = _interopRequireDefault(_ENV);

var _SERVICES = __webpack_require__(995);

var _SERVICES2 = _interopRequireDefault(_SERVICES);

var _NETWORKS = __webpack_require__(996);

var _NETWORKS2 = _interopRequireDefault(_NETWORKS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  COINS: _COINS2.default,
  ENV: _ENV2.default,
  SERVICES: _SERVICES2.default,
  NETWORKS: _NETWORKS2.default
};
module.exports = exports['default'];

/***/ }),
/* 205 */,
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1025);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'row' },
    _react2.default.createElement(
      'div',
      { styleName: 'title' },
      title
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'content' },
      children
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Row, _Row2.default);

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Value = __webpack_require__(1026);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = function Value(_ref) {
  var value = _ref.value,
      currency = _ref.currency;
  return _react2.default.createElement(
    'span',
    { styleName: 'value' },
    _react2.default.createElement(
      'span',
      null,
      value,
      ' '
    ),
    _react2.default.createElement(
      'span',
      { styleName: 'currency' },
      ' ',
      currency.toUpperCase()
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Value, _Value2.default);

/***/ }),
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localStorage = __webpack_require__(636);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _privateKeyNames = __webpack_require__(637);

var _privateKeyNames2 = _interopRequireDefault(_privateKeyNames);

var _notifications = __webpack_require__(638);

var _notifications2 = _interopRequireDefault(_notifications);

var _modals = __webpack_require__(639);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  localStorage: _localStorage2.default,
  privateKeyNames: _privateKeyNames2.default,
  notifications: _notifications2.default,
  modals: _modals2.default
};

/***/ }),
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(830);

var notifications = _interopRequireWildcard(_notifications);

var _modals = __webpack_require__(831);

var modals = _interopRequireWildcard(_modals);

var _history = __webpack_require__(832);

var history = _interopRequireWildcard(_history);

var _loader = __webpack_require__(837);

var loader = _interopRequireWildcard(_loader);

var _user = __webpack_require__(838);

var user = _interopRequireWildcard(_user);

var _feeds = __webpack_require__(839);

var feeds = _interopRequireWildcard(_feeds);

var _pravda = __webpack_require__(840);

var pravda = _interopRequireWildcard(_pravda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  notifications: notifications,
  modals: modals,
  history: history,
  loader: loader,
  user: user,
  feeds: feeds,
  pravda: pravda
};

/***/ }),
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = __webpack_require__(12);

var _appConfig = __webpack_require__(40);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = __webpack_require__(854);


var newReferral = function newReferral(eth_address) {
  var _ref = new URL(window.location.href, 1),
      query = _ref.query;

  if (query.ref) {
    _helpers.request.get(_appConfig2.default.referral.url + '?referral=' + query.ref + '&action=add_referrer&address=' + eth_address);
  }
};

exports.default = {
  newReferral: newReferral
};

/***/ }),
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(41);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ButtonsInRow = __webpack_require__(898);

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
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(41);

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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autosize = __webpack_require__(923);

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
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(108);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Logo = __webpack_require__(947);

var _Logo2 = _interopRequireDefault(_Logo);

var _logo = __webpack_require__(948);

var _logo2 = _interopRequireDefault(_logo);

var _logoColored = __webpack_require__(949);

var _logoColored2 = _interopRequireDefault(_logoColored);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(_ref) {
  var colored = _ref.colored,
      withLink = _ref.withLink;

  var imgNode = _react2.default.createElement('img', {
    styleName: !withLink && 'logo',
    src: colored ? _logoColored2.default : _logo2.default,
    alt: 'swap.online logo'
  });

  if (withLink) {
    return _react2.default.createElement(
      _reactRouterDom.NavLink,
      { styleName: 'logo', to: _helpers.links.home },
      imgNode
    );
  }

  return imgNode;
};

exports.default = (0, _reactCssModules2.default)(Logo, _Logo2.default);

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(53);

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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(34);

var _helpers = __webpack_require__(12);

var _modals = __webpack_require__(954);

var _modals2 = _interopRequireDefault(_modals);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ModalConductor = __webpack_require__(1055);

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
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(41);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Overlay = __webpack_require__(958);

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
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(41);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Center = __webpack_require__(959);

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
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__(366);

var _values2 = _interopRequireDefault(_values);

var _keys = __webpack_require__(140);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(80);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(81);

var _createClass3 = _interopRequireDefault(_createClass2);

var _constants = __webpack_require__(204);

var _constants2 = _interopRequireDefault(_constants);

var _StorageFactory = __webpack_require__(997);

var _StorageFactory2 = _interopRequireDefault(_StorageFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapApp = function () {
  function SwapApp() {
    (0, _classCallCheck3.default)(this, SwapApp);
  }

  (0, _createClass3.default)(SwapApp, [{
    key: 'setup',


    /**
     *
     * @param {object}  options
     * @param {string}  options.network
     * @param {object}  options.env
     * @param {array}   options.services
     * @param {array}   options.swaps
     * @param {array}   options.flows
     */
    value: function setup(options) {
      this.network = options.network || _constants2.default.NETWORKS.TESTNET;
      this.env = {};
      this.services = {};
      this.swaps = {};
      this.flows = {};

      this._addEnv(options.env || {});
      this._addServices(options.services || {});
      this._addSwaps(options.swaps || {});
      this._addFlows(options.flows || {});
    }

    // Configure -------------------------------------------------------- /

  }, {
    key: '_addEnv',
    value: function _addEnv(env) {
      (0, _keys2.default)(env).forEach(function (name) {
        if ((0, _values2.default)(_constants2.default.ENV).indexOf(name) < 0) {
          throw new Error('SwapApp.addEnv(): Only ' + (0, _values2.default)(_constants2.default.ENV) + ' available');
        }
      });

      this.env = env;
      this.env.storage = new _StorageFactory2.default(env.storage);
    }
  }, {
    key: '_addService',
    value: function _addService(service) {
      if (!service._serviceName) {
        throw new Error('SwapApp service should contain "_serviceName" property');
      }

      if (!(0, _values2.default)(_constants2.default.SERVICES).includes(service._serviceName)) {
        throw new Error('SwapApp service should contain "_serviceName" property should be one of ' + (0, _values2.default)(_constants2.default.SERVICES) + ', got "' + service._serviceName + '"');
      }

      this.services[service._serviceName] = service;
    }
  }, {
    key: '_addServices',
    value: function _addServices(services) {
      var _this = this;

      // add service to app by _serviceName
      services.forEach(function (service) {
        return _this._addService(service);
      });
      // spy expects
      (0, _keys2.default)(this.services).forEach(function (serviceName) {
        return _this.services[serviceName]._waitRelationsResolve();
      });
      // init services
      (0, _keys2.default)(this.services).forEach(function (serviceName) {
        return _this.services[serviceName]._tryInitService();
      });
    }
  }, {
    key: '_addSwap',
    value: function _addSwap(swap) {
      if (!swap._swapName) {
        throw new Error('SwapApp swap should contain "_swapName" property');
      }

      if (!(0, _values2.default)(_constants2.default.COINS).includes(swap._swapName.toUpperCase())) {
        throw new Error('SwapApp swap should contain "_swapName" property should be one of ' + (0, _values2.default)(_constants2.default.COINS) + ', got "' + swap._swapName.toUpperCase() + '"');
      }

      this.swaps[swap._swapName] = swap;

      if (typeof swap._initSwap === 'function') {
        swap._initSwap();
      }
    }
  }, {
    key: '_addSwaps',
    value: function _addSwaps(swaps) {
      var _this2 = this;

      swaps.forEach(function (swap) {
        _this2._addSwap(swap);
      });
    }
  }, {
    key: '_addFlow',
    value: function _addFlow(Flow) {
      var flowName = Flow.getName();

      if (!/^[A-Za-z]+2[A-Za-z]+$/.test(flowName)) {
        throw new Error('SwapApp flow "_flowName" property should be "^[A-Za-z]+2[A-Za-z]+$" format');
      }

      var flowNameLeftPart = flowName.match(/^[^\d]+/);
      var flowNameRightPart = flowName.match(/[^\d]+$/);

      if (!flowNameLeftPart || !flowNameRightPart || !(0, _values2.default)(_constants2.default.COINS).includes(flowNameLeftPart[0].toUpperCase()) || !(0, _values2.default)(_constants2.default.COINS).includes(flowNameRightPart[0].toUpperCase())) {
        throw new Error('SwapApp flow "_flowName" property should contain only: ' + (0, _values2.default)(_constants2.default.COINS) + '. Got: "' + flowName.toUpperCase() + '"');
      }

      this.flows[flowName] = Flow;
    }
  }, {
    key: '_addFlows',
    value: function _addFlows(flows) {
      var _this3 = this;

      flows.forEach(function (flow) {
        _this3._addFlow(flow);
      });
    }

    // Public methods --------------------------------------------------- /

  }, {
    key: 'isMainNet',
    value: function isMainNet() {
      return this.network.toLowerCase() === _constants2.default.NETWORKS.MAINNET;
    }
  }, {
    key: 'isTestNet',
    value: function isTestNet() {
      return this.network.toLowerCase() === _constants2.default.NETWORKS.TESTNET;
    }
  }]);
  return SwapApp;
}();

exports.default = new SwapApp();
module.exports = exports['default'];

/***/ }),
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconNames = undefined;

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CurrencyIcon = __webpack_require__(1016);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

var _btc = __webpack_require__(1017);

var _btc2 = _interopRequireDefault(_btc);

var _eth = __webpack_require__(1018);

var _eth2 = _interopRequireDefault(_eth);

var _icx = __webpack_require__(1019);

var _icx2 = _interopRequireDefault(_icx);

var _waves = __webpack_require__(1020);

var _waves2 = _interopRequireDefault(_waves);

var _xrp = __webpack_require__(1021);

var _xrp2 = _interopRequireDefault(_xrp);

var _nim = __webpack_require__(1022);

var _nim2 = _interopRequireDefault(_nim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  btc: _btc2.default,
  eth: _eth2.default,
  icx: _icx2.default,
  waves: _waves2.default,
  xrp: _xrp2.default,
  nim: _nim2.default
};

var iconNames = exports.iconNames = (0, _keys2.default)(icons);

var CurrencyIcon = function CurrencyIcon(_ref) {
  var className = _ref.className,
      style = _ref.style,
      name = _ref.name;

  var isIconExist = iconNames.includes(name.toLowerCase());

  if (isIconExist) {
    return _react2.default.createElement('img', {
      className: className,
      src: icons[name],
      alt: name + ' icon',
      role: 'image'
    });
  }

  return _react2.default.createElement(
    'span',
    {
      role: 'letter',
      styleName: 'text',
      className: className,
      style: style
    },
    name.charAt(0).toUpperCase()
  );
};

exports.default = (0, _reactCssModules2.default)(CurrencyIcon, _CurrencyIcon2.default);

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContainer = exports.ModalConductor = exports.Modal = undefined;

var _Modal = __webpack_require__(138);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalConductor = __webpack_require__(362);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

var _ModalContainer = __webpack_require__(1050);

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Modal = _Modal2.default;
exports.ModalConductor = _ModalConductor2.default;
exports.ModalContainer = _ModalContainer2.default;

/***/ }),
/* 376 */
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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Notification = __webpack_require__(1060);

var _Notification2 = _interopRequireDefault(_Notification);

var _Sound = __webpack_require__(1061);

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
/* 377 */,
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(215);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = __webpack_require__(387);

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(192);

var _store2 = _interopRequireDefault(_store);

var _Root = __webpack_require__(940);

var _Root2 = _interopRequireDefault(_Root);

var _Loader = __webpack_require__(198);

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
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(103);

var _reactRouterDom = __webpack_require__(108);

var _helpers = __webpack_require__(12);

var _Home = __webpack_require__(647);

var _Home2 = _interopRequireDefault(_Home);

var _History = __webpack_require__(896);

var _History2 = _interopRequireDefault(_History);

var _NotFound = __webpack_require__(939);

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
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bitcoinjsLib = __webpack_require__(228);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var network =  false ? _bitcoinjsLib2.default.networks.bitcoin : _bitcoinjsLib2.default.networks.testnet;

exports.default = {
  network: network
};

/***/ }),
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 431 */,
/* 432 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 531 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */
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
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

var _superagent = __webpack_require__(630);

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
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */
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
/* 637 */
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
/* 638 */
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
/* 639 */
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
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(306);

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
/* 641 */,
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(53);

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
/* 643 */,
/* 644 */,
/* 645 */
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
/* 646 */
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
/* 647 */
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

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Home = __webpack_require__(793);

var _Home2 = _interopRequireDefault(_Home);

var _PageHeadline = __webpack_require__(190);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(133);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Wallet = __webpack_require__(798);

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
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"col":"_3UW7Y5","width":"_3IKzyU","row":"_1RvMTJ","button":"_1L6DSS"};

/***/ }),
/* 794 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headline":"_3j0ceJ"};

/***/ }),
/* 795 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Title = __webpack_require__(796);

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
/* 796 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_1Sjfw-"};

/***/ }),
/* 797 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"subTitle":"_3J0EOu"};

/***/ }),
/* 798 */
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

var _helpers = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(108);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Wallet = __webpack_require__(889);

var _Wallet2 = _interopRequireDefault(_Wallet);

var _clicker = __webpack_require__(890);

var _clicker2 = _interopRequireDefault(_clicker);

var _blockchain = __webpack_require__(891);

var _blockchain2 = _interopRequireDefault(_blockchain);

var _creditCard = __webpack_require__(892);

var _creditCard2 = _interopRequireDefault(_creditCard);

var _security = __webpack_require__(893);

var _security2 = _interopRequireDefault(_security);

var _search = __webpack_require__(894);

var _search2 = _interopRequireDefault(_search);

var _PageHeadline = __webpack_require__(190);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(133);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Button = __webpack_require__(54);

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
/* 799 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(26);

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
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hide = exports.show = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(41);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(134);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(24);

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
/* 831 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(41);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(134);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(24);

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
/* 832 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTransactions = exports.setFilter = exports.initialState = undefined;

var _toConsumableArray2 = __webpack_require__(135);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  transactions: [],
  filter: 'ALL'
};

var setFilter = exports.setFilter = function setFilter(state, payload) {
  return (0, _assign2.default)({}, state, {
    filter: payload
  });
};

var setTransactions = exports.setTransactions = function setTransactions(state, payload) {
  return (0, _assign2.default)({}, state, {
    transactions: [].concat((0, _toConsumableArray3.default)(payload))
  });
};

/***/ }),
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVisibility = exports.initialState = undefined;

var _assign = __webpack_require__(24);

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
/* 838 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTokenApprove = exports.setTokenBalance = exports.setBalance = exports.setTokenAuthData = exports.setAuthData = exports.initialState = undefined;

var _defineProperty2 = __webpack_require__(134);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  ethData: {
    address: '0x0',
    publicKey: '0x0',
    balance: 0,
    currency: 'ETH'
  },
  btcData: {
    address: '0x0',
    publicKey: '0x0',
    balance: 0,
    currency: 'BTC'
  },
  nimData: {
    address: '',
    balance: 0,
    currency: 'NIM'
  },
  eosData: {
    address: '',
    balance: 0,
    currency: 'EOS'
  },
  tokensData: {}
};

var setAuthData = exports.setAuthData = function setAuthData(state, _ref) {
  var name = _ref.name,
      data = _ref.data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({
    tokensData: (0, _assign2.default)({}, state.tokensData)
  }, name, (0, _assign2.default)({}, state[name], data)));
};

var setTokenAuthData = exports.setTokenAuthData = function setTokenAuthData(state, _ref2) {
  var name = _ref2.name,
      data = _ref2.data;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state[name], data)))
  });
};

var setBalance = exports.setBalance = function setBalance(state, _ref3) {
  var name = _ref3.name,
      amount = _ref3.amount;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({
    tokensData: (0, _assign2.default)({}, state.tokensData)
  }, name, (0, _assign2.default)({}, state[name], {
    balance: Number(amount)
  })));
};

var setTokenBalance = exports.setTokenBalance = function setTokenBalance(state, _ref4) {
  var name = _ref4.name,
      amount = _ref4.amount;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state.tokensData[name], {
      balance: Number(amount)
    })))
  });
};

var setTokenApprove = exports.setTokenApprove = function setTokenApprove(state, _ref5) {
  var name = _ref5.name,
      approve = _ref5.approve;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state.tokensData[name], {
      approve: approve
    })))
  });
};

/***/ }),
/* 839 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteItems = exports.addItems = exports.initialState = undefined;

var _toConsumableArray2 = __webpack_require__(135);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  items: []
};

var addItems = exports.addItems = function addItems(state, payload) {
  return (0, _assign2.default)({}, state, {
    items: [].concat((0, _toConsumableArray3.default)(payload))
  });
};

var deleteItems = exports.deleteItems = function deleteItems(state, payload) {
  return (0, _assign2.default)({}, state, {
    items: payload
  });
};

/***/ }),
/* 840 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteItems = exports.setBalance = exports.setItemsId = exports.setLogin = exports.initialState = undefined;

var _assign = __webpack_require__(24);

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
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(26);

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
/* 846 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(26);

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
/* 847 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setFilter = function setFilter(filter) {
  _reducers2.default.history.setFilter(filter);
};

var ordersFilter = function ordersFilter(filter) {
  _reducers2.default.orders.ordersFilter(filter);
};

exports.default = {
  setFilter: setFilter,
  ordersFilter: ordersFilter
};

/***/ }),
/* 848 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(135);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _helpers = __webpack_require__(12);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _core = __webpack_require__(65);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(40);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _moment = __webpack_require__(66);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sign = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var btcPrivateKey, ethPrivateKey, _ethPrivateKey, eosMasterPrivateKey, eosAccount;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            btcPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.btc);
            ethPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.eth);
            _ethPrivateKey = _actions2.default.ethereum.login(ethPrivateKey);


            _actions2.default.bitcoin.login(btcPrivateKey);

            (0, _keys2.default)(_appConfig2.default.tokens).forEach(function (name) {
              _actions2.default.token.login(_ethPrivateKey, _appConfig2.default.tokens[name].address, name, _appConfig2.default.tokens[name].decimals);
            });
            // await actions.nimiq.login(_ethPrivateKey)

            eosMasterPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.eos);
            eosAccount = localStorage.getItem(_helpers.constants.privateKeyNames.eosAccount);

            if (!(eosMasterPrivateKey && eosAccount)) {
              _context.next = 14;
              break;
            }

            _context.next = 10;
            return _actions2.default.eos.init();

          case 10:
            _context.next = 12;
            return _actions2.default.eos.login(eosAccount, eosMasterPrivateKey);

          case 12:
            _context.next = 14;
            return _actions2.default.eos.getBalance();

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function sign() {
    return _ref.apply(this, arguments);
  };
}();

var getBalances = function getBalances() {
  _actions2.default.ethereum.getBalance();
  _actions2.default.bitcoin.getBalance();
  _actions2.default.eos.getBalance();

  (0, _keys2.default)(_appConfig2.default.tokens).forEach(function (name) {
    _actions2.default.token.getBalance(_appConfig2.default.tokens[name].address, name, _appConfig2.default.tokens[name].decimals);
  });
  // actions.nimiq.getBalance()
};

var getDemoMoney =  false ? function () {} : function () {
  _helpers.request.get('https://swap.wpmix.net/demokeys.php', {}).then(function (r) {
    window.localStorage.clear();
    localStorage.setItem(_helpers.constants.privateKeyNames.btc, r[0]);
    localStorage.setItem(_helpers.constants.privateKeyNames.eth, r[1]);
    localStorage.setItem(_helpers.constants.localStorage.demoMoneyReceived, true);
  });
};

var setExchangeRate = function setExchangeRate(buyCurrency, sellCurrency, setState) {
  var url = 'https://api.cryptonator.com/api/full/' + buyCurrency + '-' + sellCurrency;

  return _helpers.request.get(url).then(function (_ref2) {
    var exchangeRate = _ref2.ticker.price;

    setState(exchangeRate);
  }).catch(function () {
    return setState(_appConfig2.default.exchangeRates['' + buyCurrency.toLowerCase() + sellCurrency.toLowerCase()]);
  });
};

var setTransactions = function setTransactions() {
  return _promise2.default.all([_actions2.default.bitcoin.getTransaction(), _actions2.default.ethereum.getTransaction(), _actions2.default.token.getTransaction(_appConfig2.default.tokens.swap.address), _actions2.default.token.getTransaction(_appConfig2.default.tokens.noxon.address)]).then(function (transactions) {
    var _ref3;

    var data = (_ref3 = []).concat.apply(_ref3, [[]].concat((0, _toConsumableArray3.default)(transactions))).sort(function (a, b) {
      return b.date - a.date;
    });
    _reducers2.default.history.setTransactions(data);
  });
};

var getText = function getText() {
  var _getState = (0, _core.getState)(),
      _getState$user = _getState.user,
      ethData = _getState$user.ethData,
      btcData = _getState$user.btcData,
      eosData = _getState$user.eosData;

  var text = '\n' + window.location.hostname + ' emergency instruction\n\r\n\n\r\n\n#ETHEREUM\n\r\n\n\r\n\nEthereum address: ' + ethData.address + '  \r\n\nPrivate key: ' + ethData.privateKey + '\r\n\n\r\n\n\r\n\nHow to access tokens and ethers: \r\n\n1. Go here https://www.myetherwallet.com/#send-transaction \r\n\n2. Select \'Private key\'\r\n\n3. paste private key to input and click "unlock"\r\n\n\r\n\n\r\n\n\r\n\n# BITCOIN\r\n\n\r\n\n\r\n\nBitcoin address: ' + btcData.address + '\r\n\nPrivate key: ' + btcData.privateKey + '\r\n\n\r\n\n\r\n\n1. Go to blockchain.info\r\n\n2. login\r\n\n3. Go to settings > addresses > import\r\n\n4. paste private key and click "Ok"\r\n\n\r\n\n\r\n\n* We don`t store your private keys and will not be able to restore them!  \n\r\n\n\r\n\n\r\n\n# EOS\r\n\n\r\n\nEOS Master Private Key: ' + eosData.masterPrivateKey + '\r\n\nAccount name: ' + eosData.address + '\r\n\n';

  return text;
};

var downloadPrivateKeys = function downloadPrivateKeys() {
  var element = document.createElement('a');
  var text = getText();
  var message = 'Check your browser downloads';

  element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', window.location.hostname + '_keys_' + (0, _moment2.default)().format('DD.MM.YYYY') + '.txt');

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  _actions2.default.notifications.show(_helpers.constants.notifications.Message, {
    message: message
  });
};

exports.default = {
  sign: sign,
  getBalances: getBalances,
  getDemoMoney: getDemoMoney,
  setExchangeRate: setExchangeRate,
  setTransactions: setTransactions,
  downloadPrivateKeys: downloadPrivateKeys
};

/***/ }),
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(306);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

var _bigi = __webpack_require__(28);

var _bigi2 = _interopRequireDefault(_bigi);

var _helpers = __webpack_require__(12);

var _core = __webpack_require__(65);

var _bitcoinjsLib = __webpack_require__(228);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(40);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(privateKey) {
  var keyPair = void 0;

  if (privateKey) {
    var hash = _bitcoinjsLib2.default.crypto.sha256(privateKey);
    var d = _bigi2.default.fromBuffer(hash);

    keyPair = new _bitcoinjsLib2.default.ECPair(d, null, { network: _helpers.btc.network });
  } else {
    console.info('Created account Bitcoin ...');
    keyPair = _bitcoinjsLib2.default.ECPair.makeRandom({ network: _helpers.btc.network });
    privateKey = keyPair.toWIF();
    localStorage.setItem(_helpers.constants.privateKeyNames.btc, privateKey);
  }

  var account = new _bitcoinjsLib2.default.ECPair.fromWIF(privateKey, _helpers.btc.network); // eslint-disable-line
  var address = account.getAddress();
  var publicKey = account.getPublicKeyBuffer().toString('hex');

  var data = {
    account: account,
    keyPair: keyPair,
    address: address,
    privateKey: privateKey,
    publicKey: publicKey
  };

  window.getBtcAddress = function () {
    return data.address;
  };

  console.info('Logged in with Bitcoin', data);
  _reducers2.default.user.setAuthData({ name: 'btcData', data: data });
};

var getBalance = function getBalance() {
  var _getState = (0, _core.getState)(),
      address = _getState.user.btcData.address;

  return _helpers.request.get(_appConfig2.default.api.bitpay + '/addr/' + address).then(function (_ref) {
    var balance = _ref.balance;

    console.log('BTC Balance:', balance);
    _reducers2.default.user.setBalance({ name: 'btcData', amount: balance });
    return balance;
  }, function () {
    return _promise2.default.reject();
  });
};

var fetchBalance = function fetchBalance(address) {
  return _helpers.request.get(_appConfig2.default.api.bitpay + '/addr/' + address).then(function (_ref2) {
    var balance = _ref2.balance;
    return balance;
  });
};

var getTransaction = function getTransaction() {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.btcData.address;

    var url = _appConfig2.default.api.bitpay + '/txs/?address=' + address;
    var transactions = void 0;

    _helpers.request.get(url).then(function (res) {
      if (res) {
        transactions = res.txs.map(function (item) {
          return {
            type: 'btc',
            hash: item.txid,
            confirmations: item.confirmations > 0 ? 'Confirmed' : 'Unconfirmed',
            value: item.vout[0].value,
            date: item.time * 1000,
            direction: address.toLocaleLowerCase() === item.vout[0].scriptPubKey.addresses[0].toLocaleLowerCase() ? 'in' : 'out'
          };
        });
        resolve(transactions);
      } else {
        resolve([]);
        console.error('res:status BTC false', res);
      }
    });
  });
};

var send = function send(from, to, amount) {
  return new _promise2.default(function (resolve, reject) {
    var _getState3 = (0, _core.getState)(),
        privateKey = _getState3.user.btcData.privateKey;

    var newtx = {
      inputs: [{
        addresses: [from]
      }],
      outputs: [{
        addresses: [to],
        value: amount * 100000000
      }]
    };
    _helpers.request.post('https://api.blockcypher.com/v1/btc/test3/txs/new', {
      body: (0, _stringify2.default)(newtx)
    }).then(function (d) {
      var tmptx = (0, _assign2.default)({}, d, {
        pubkeys: []
      });

      var keys = new _bitcoinjsLib2.default.ECPair.fromWIF(privateKey, _helpers.btc.network); // eslint-disable-line

      tmptx.signatures = tmptx.tosign.map(function (toSign) {
        tmptx.pubkeys.push(keys.getPublicKeyBuffer().toString('hex'));

        return keys.sign(_bigi2.default.fromHex(toSign.toString('hex')).toBuffer()).toDER().toString('hex');
      });

      return _helpers.request.post('https://api.blockcypher.com/v1/btc/test3/txs/send', {
        body: (0, _stringify2.default)(tmptx)
      });
    }).then(function (res) {
      return resolve(res);
    }).catch(function (e) {
      return console.log(e);
    });
  });
};

var fetchUnspents = function fetchUnspents(address) {
  return _helpers.request.get(_appConfig2.default.api.bitpay + '/addr/' + address + '/utxo');
};

var broadcastTx = function broadcastTx(txRaw) {
  return _helpers.request.post(_appConfig2.default.api.bitpay + '/tx/send', {
    body: {
      rawtx: txRaw
    }
  });
};

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send,
  fetchUnspents: fetchUnspents,
  broadcastTx: broadcastTx,
  fetchBalance: fetchBalance
};

/***/ }),
/* 853 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

var _helpers = __webpack_require__(12);

var _core = __webpack_require__(65);

var _web = __webpack_require__(165);

var _web2 = _interopRequireDefault(_web);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(40);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _referral = __webpack_require__(351);

var _referral2 = _interopRequireDefault(_referral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(privateKey) {
  var data = void 0;

  if (privateKey) {
    data = _web2.default.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    console.info('Created account Ethereum ...');
    data = _web2.default.eth.accounts.create();
    localStorage.setItem(_helpers.constants.privateKeyNames.eth, data.privateKey);
  }

  _web2.default.eth.accounts.wallet.add(data.privateKey);

  _reducers2.default.user.setAuthData({ name: 'ethData', data: data });

  window.getEthAddress = function () {
    return data.address;
  };

  _referral2.default.newReferral(data.address);

  console.info('Logged in with Ethereum', data);

  return data.privateKey;
};

var getBalance = function getBalance() {
  var _getState = (0, _core.getState)(),
      address = _getState.user.ethData.address;

  var url = _appConfig2.default.api.etherscan + '?module=account&action=balance&address=' + address + '&tag=latest&apikey=' + _appConfig2.default.apiKeys.etherscan;

  return _helpers.request.get(url).then(function (_ref) {
    var result = _ref.result;

    var amount = Number(_web2.default.utils.fromWei(result));
    _reducers2.default.user.setBalance({ name: 'ethData', amount: amount });
    return result;
  }).catch(function () {
    console.log('app:showError', 'Ethereum service isn\'t available, try later');
  });
};

var fetchBalance = function fetchBalance(address) {
  var url = _appConfig2.default.api.etherscan + '?module=account&action=balance&address=' + address + '&tag=latest&apikey=' + _appConfig2.default.apiKeys.etherscan;
  return _helpers.request.get(url).then(function (_ref2) {
    var result = _ref2.result;
    return Number(_web2.default.utils.fromWei(result));
  });
};

// const fetchBalance = (address) =>
//   web3.eth.getBalance(address)
//     .then((wei) => Number(web3.utils.fromWei(wei)))

// export const getGas = () => {
//   web3.eth.getGasPrice().then((res) => {
//     gas = web3.utils.fromWei(res)
//   })
// }

var getTransaction = function getTransaction() {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.ethData.address;

    var url = _appConfig2.default.api.etherscan + '?module=account&action=txlist&address=' + address + '&startblock=0&endblock=99999999&sort=asc&apikey=' + _appConfig2.default.apiKeys.etherscan;
    var transactions = void 0;

    _helpers.request.get(url).then(function (res) {
      console.log(res);
      if (res.status) {
        transactions = res.result.filter(function (item) {
          return item.value > 0;
        }).map(function (item) {
          return {
            type: 'eth',
            confirmations: item.confirmations > 0 ? 'Confirmed' : 'Unconfirmed',
            hash: item.hash,
            status: item.blockHash != null ? 1 : 0,
            value: _web2.default.utils.fromWei(item.value),
            address: item.to,
            date: item.timeStamp * 1000,
            direction: address.toLowerCase() === item.to.toLowerCase() ? 'in' : 'out'
          };
        });
        resolve(transactions);
      } else {
        console.error('res:status ETH false', res);
      }
    });
  });
};

var send = function send(from, to, amount) {
  return new _promise2.default(function (resolve, reject) {
    var _getState3 = (0, _core.getState)(),
        privateKey = _getState3.user.ethData.privateKey;

    var params = {
      to: String(to).trim(),
      gasPrice: '20000000000',
      gas: '21000',
      value: _web2.default.utils.toWei(String(amount))
    };

    _web2.default.eth.accounts.signTransaction(params, privateKey).then(function (result) {
      return _web2.default.eth.sendSignedTransaction(result.rawTransaction);
    }).then(function (receipt) {
      resolve(receipt);
    });
  });
};

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send,
  fetchBalance: fetchBalance
};

/***/ }),
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

var _humanStandardTokenAbi = __webpack_require__(858);

var _humanStandardTokenAbi2 = _interopRequireDefault(_humanStandardTokenAbi);

var _helpers = __webpack_require__(12);

var _core = __webpack_require__(65);

var _web = __webpack_require__(165);

var _web2 = _interopRequireDefault(_web);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(40);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(352);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bignumber.BigNumber.config({ DECIMAL_PLACES: 21 });

var login = function login(privateKey, contractAddress, nameContract, decimals) {
  var data = void 0;
  if (privateKey) {
    data = _web2.default.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    console.info('Created account ETH Token ...');
    data = _web2.default.eth.accounts.create();
    _web2.default.eth.accounts.wallet.add(data);
  }

  _web2.default.eth.accounts.wallet.add(data.privateKey);
  console.info('Logged in with ETH Token', data);

  setupContract(data.address, contractAddress, nameContract, decimals);
};

var setupContract = function setupContract(ethAddress, contractAddress, nameContract, decimals) {
  if (!_web2.default.eth.accounts.wallet[ethAddress]) {
    throw new Error('web3 does not have given address');
  }

  var data = {
    address: ethAddress,
    balance: 0,
    name: nameContract,
    currency: nameContract.toUpperCase(),
    contractAddress: contractAddress,
    decimals: decimals
  };

  _reducers2.default.user.setTokenAuthData({ name: data.name, data: data });
};

var getBalance = function getBalance(contractAddress, name, decimals) {
  var _getState = (0, _core.getState)(),
      address = _getState.user.ethData.address;

  var url = _appConfig2.default.api.etherscan + '?module=account&action=tokenbalance&contractaddress=' + contractAddress + '&address=' + address;

  if (name === undefined) {
    return null;
  }

  return _helpers.request.get(url).then(function (_ref) {
    var result = _ref.result;

    var amount = new _bignumber.BigNumber(String(result)).dividedBy(new _bignumber.BigNumber(String(10)).pow(decimals)).toNumber();

    _reducers2.default.user.setTokenBalance({ name: name, amount: amount });
    return result;
  }).catch(function (r) {
    return console.error('Token service isn\'t available, try later');
  });
};

var fetchBalance = function fetchBalance(address) {
  return _helpers.request.get('https://rinkeby.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x60c205722c6c797c725a996cf9cca11291f90749&address=' + address).then(function (_ref2) {
    var result = _ref2.result;
    return result;
  });
};

var getTransaction = function getTransaction(contractAddress) {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.ethData.address;

    var url = ['https://api-rinkeby.etherscan.io/api?module=account&action=tokentx', '&contractaddress=' + contractAddress, '&address=' + address, '&startblock=0&endblock=99999999', '&sort=asc&apikey=' + _appConfig2.default.apiKeys.blocktrail].join('');

    var transactions = void 0;

    _helpers.request.get(url).then(function (res) {
      if (res.status) {
        transactions = res.result.filter(function (item) {
          return item.value > 0;
        }).map(function (item) {
          return {
            confirmations: item.confirmations > 0 ? 'Confirmed' : 'Unconfirmed',
            type: item.tokenSymbol,
            hash: item.hash,
            contractAddress: item.contractAddress,
            status: item.blockHash != null ? 1 : 0,
            value: new _bignumber.BigNumber(String(item.value)).dividedBy(new _bignumber.BigNumber(10).pow(Number(item.tokenDecimal))).toNumber(),
            address: item.to,
            date: item.timeStamp * 1000,
            direction: address.toLowerCase() === item.to.toLowerCase() ? 'in' : 'out'
          };
        });
        resolve(transactions);
        console.log('TOKEN', transactions);
      } else {
        console.error('res:status ETH false', res);
      }
    });
  });
};

var send = function send(contractAddress, to, amount, decimals) {
  var _getState3 = (0, _core.getState)(),
      address = _getState3.user.ethData.address;

  var tokenContract = void 0;

  var options = {
    from: address,
    gas: '' + _appConfig2.default.services.web3.gas,
    gasPrice: '' + _appConfig2.default.services.web3.gasPrice
  };

  tokenContract = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress, options);

  var newAmount = new _bignumber.BigNumber(String(amount)).times(new _bignumber.BigNumber(10).pow(decimals)).decimalPlaces(decimals).toNumber();

  return new _promise2.default(function (resolve, reject) {
    return tokenContract.methods.transfer(to, newAmount).send().then(function (receipt) {
      resolve(receipt);
    });
  });
};

var approve = function approve(contractAddress, amount, decimals, name) {
  var _getState4 = (0, _core.getState)(),
      address = _getState4.user.ethData.address;

  var newAmount = new _bignumber.BigNumber(String(amount)).times(new _bignumber.BigNumber(10).pow(decimals)).decimalPlaces(decimals).toNumber();
  var ERC20 = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress);

  return new _promise2.default(function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
      var result;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return ERC20.methods.approve(_appConfig2.default.token.contract, newAmount).send({
                from: address,
                gas: '' + _appConfig2.default.services.web3.gas,
                gasPrice: '' + _appConfig2.default.services.web3.gasPrice
              }).on('error', function (err) {
                reject(err);
              });

            case 3:
              result = _context.sent;


              resolve(result);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              reject(_context.t0);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }()).then(function () {
    _reducers2.default.user.setTokenApprove({ name: name, approve: true });
  });
};

var allowance = function allowance(contractAddress, name) {
  var _getState5 = (0, _core.getState)(),
      address = _getState5.user.ethData.address;

  var ERC20 = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, contractAddress);

  return new _promise2.default(function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
      var allowance;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ERC20.methods.allowance(address, _appConfig2.default.token.contract).call();

            case 2:
              allowance = _context2.sent;


              console.log('💸 allowance:', allowance);

              _reducers2.default.user.setTokenApprove({ name: name, approve: allowance > 0 });

              resolve(allowance);

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }());
};

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send,
  fetchBalance: fetchBalance,
  approve: approve,
  allowance: allowance
};

/***/ }),
/* 858 */,
/* 859 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var initWallet = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(privateKey) {
    var keyPair;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            keyPair = (0, _nimiq.ethKeyToKeyPair)(privateKey);
            return _context2.abrupt('return', new window.Nimiq.Wallet(keyPair));

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function initWallet(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var init = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var _this = this;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return initNimiq();

          case 2:
            if (!initPromise) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', initPromise);

          case 6:
            if (!isInitialized) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt('return', _promise2.default.resolve());

          case 8:

            initPromise = new _promise2.default(function () {
              var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        window.nim = $;

                        _context3.next = 3;
                        return window.Nimiq.Consensus.nano();

                      case 3:
                        $.consensus = _context3.sent;

                        $.blockchain = $.consensus.blockchain;
                        $.accounts = $.blockchain.accounts;
                        $.mempool = $.consensus.mempool;
                        $.network = $.consensus.network;

                        $.consensus.on('established', function () {
                          window.Nimiq.Log.i('Consensus', 'Current state: height=' + $.blockchain.height + ', headHash=' + $.blockchain.headHash);
                          resolve();
                        });
                        $.network.connect();

                      case 10:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this);
              }));

              return function (_x2) {
                return _ref4.apply(this, arguments);
              };
            }());

            return _context4.abrupt('return', initPromise);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function init() {
    return _ref3.apply(this, arguments);
  };
}();

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(40);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _nimiq = __webpack_require__(860);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = {};
var initNimiqPromise = void 0;
var isNimiqInitialized = false;
var initPromise = void 0;
var isInitialized = false;

var NETWORK = _appConfig2.default.entry === 'mainnet' ? 'main' : 'test';

var initNimiq = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!initNimiqPromise) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', initNimiqPromise);

          case 4:
            if (!isNimiqInitialized) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', _promise2.default.resolve());

          case 6:

            initNimiqPromise = new _promise2.default(function (resolve, reject) {
              if (!window.Nimiq) {
                console.error('Nimiq not present, add from CDN: https://cdn.nimiq.com/nimiq.js');
                reject();
              } else {
                window.Nimiq.init(function () {
                  isNimiqInitialized = true;
                  window.Nimiq.GenesisConfig.init(window.Nimiq.GenesisConfig.CONFIGS[NETWORK]);
                  resolve();
                });
              }
            });

            return _context.abrupt('return', initNimiqPromise);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function initNimiq() {
    return _ref.apply(this, arguments);
  };
}();

var login = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ethPrivateKey) {
    var data;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return init();

          case 2:
            _context5.next = 4;
            return initWallet(ethPrivateKey);

          case 4:
            $.wallet = _context5.sent;
            data = {
              balance: 0,
              address: $.wallet.address.toUserFriendlyAddress()
            };


            window.getNimAddress = function () {
              return data.address;
            };

            console.info('Logged in with Nimiq', data);
            _reducers2.default.user.setAuthData({ name: 'nimData', data: data });

            return _context5.abrupt('return', data);

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function login(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var getBalance = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
    var account, amount;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return init();

          case 2:
            _context6.next = 4;
            return $.consensus.getAccount($.wallet.address);

          case 4:
            account = _context6.sent;
            amount = window.Nimiq.Policy.satoshisToCoins(account.balance).toFixed(0);


            _reducers2.default.user.setBalance({ name: 'nimData', amount: amount });

            return _context6.abrupt('return', amount);

          case 8:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function getBalance() {
    return _ref6.apply(this, arguments);
  };
}();

var getTransaction = function getTransaction() {};

var send = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(from, address, amount) {
    var _prepareTransaction, addr, value, fee, height, tx;

    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return init();

          case 2:
            _prepareTransaction = (0, _nimiq.prepareTransaction)($, address, amount), addr = _prepareTransaction.addr, value = _prepareTransaction.value, fee = _prepareTransaction.fee, height = _prepareTransaction.height;
            tx = $.wallet.createTransaction(addr, value, fee, height);


            $.consensus.relayTransaction(tx);
            $.consensus.subscribeAccounts([tx.recipient]);

            window.Nimiq.Log.i('TX', 'Waiting for Nimiq transaction [' + tx.hash().toHex() + '] to confirm, please wait...');

            (0, _nimiq.followTransaction)($, tx).then(function () {
              return window.Nimiq.Log.i('TX', 'Nimiq transaction [' + tx.hash().toHex() + '] confirmed!');
            }).then(function () {
              return getBalance();
            });

            return _context7.abrupt('return', tx);

          case 9:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  }));

  return function send(_x4, _x5, _x6) {
    return _ref7.apply(this, arguments);
  };
}();

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send
};

/***/ }),
/* 860 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareTransaction = exports.followTransaction = exports.ethKeyToKeyPair = undefined;

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ethKeyToKeyPair = function ethKeyToKeyPair(ethKey) {
  if (!window.Nimiq) throw new Error('include Nimiq from CDN');

  var raw = ethKey.slice(0, 2) === '0x' ? ethKey.substring(2) : ethKey;
  var buf = Buffer.from(raw, 'hex');
  var privKey = new window.Nimiq.PrivateKey(buf);
  var publicKey = window.Nimiq.PublicKey.derive(privKey);

  return new window.Nimiq.KeyPair(privKey, publicKey);
};

var followTransaction = function followTransaction($, tx) {
  return new _promise2.default(function (resolve) {
    var id = $.mempool.on('transaction-mined', function (tx2) {
      if (tx.equals(tx2)) {
        $.mempool.off('transaction-mined', id);
        resolve();
      }
    });
  });
};

var prepareTransaction = function prepareTransaction($, address, amount) {
  var height = $.blockchain.height + 1;
  var addr = window.Nimiq.Address.fromUserFriendlyAddress(address);
  var value = window.Nimiq.Policy.coinsToSatoshis(amount);
  var fee = window.Nimiq.Policy.coinsToSatoshis(0);

  return { addr: addr, value: value, fee: fee, height: height };
};

exports.ethKeyToKeyPair = ethKeyToKeyPair;
exports.followTransaction = followTransaction;
exports.prepareTransaction = prepareTransaction;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 861 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseFloat = __webpack_require__(862);

var _parseFloat2 = _interopRequireDefault(_parseFloat);

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _core = __webpack_require__(65);

var _appConfig = __webpack_require__(40);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _constants = __webpack_require__(305);

var _constants2 = _interopRequireDefault(_constants);

var _eosjsKeygen = __webpack_require__(867);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eos = null;
var ecc = null;

var keyProvider = function keyProvider(_ref) {
  var transaction = _ref.transaction,
      pubkeys = _ref.pubkeys;

  var _getState = (0, _core.getState)(),
      _getState$user$eosDat = _getState.user.eosData,
      privateKeys = _getState$user$eosDat.privateKeys,
      publicKeys = _getState$user$eosDat.publicKeys;

  if (!pubkeys) {
    return [publicKeys.active];
  }

  return [privateKeys.active];
};

var init = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var EOSLibrary, _config$services$eos, chainId, httpEndpoint;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(eos === null)) {
              _context.next = 9;
              break;
            }

            _context.next = 3;
            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 1065));

          case 3:
            EOSLibrary = _context.sent;
            _config$services$eos = _appConfig2.default.services.eos, chainId = _config$services$eos.chainId, httpEndpoint = _config$services$eos.httpEndpoint;

            if (!(!chainId || !httpEndpoint)) {
              _context.next = 7;
              break;
            }

            throw new Error('Invalid config');

          case 7:

            eos = EOSLibrary({
              chainId: chainId,
              httpEndpoint: httpEndpoint,
              keyProvider: keyProvider
            });

            ecc = EOSLibrary.modules.ecc;

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function init() {
    return _ref2.apply(this, arguments);
  };
}();

var register = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(accountName, privateKey) {
    var keys, _ref4, permissions, providedKey, requiredKey;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _eosjsKeygen.Keygen.generateMasterKeys(privateKey);

          case 2:
            keys = _context2.sent;

            if (!(keys.masterPrivateKey !== privateKey)) {
              _context2.next = 5;
              break;
            }

            throw new Error('Invalid private key');

          case 5:
            _context2.next = 7;
            return eos.getAccount(accountName);

          case 7:
            _ref4 = _context2.sent;
            permissions = _ref4.permissions;
            providedKey = ecc.privateToPublic(keys.privateKeys.active);
            requiredKey = permissions.find(function (item) {
              return item.perm_name === 'active';
            }).required_auth.keys[0].key;

            if (!(providedKey !== requiredKey)) {
              _context2.next = 13;
              break;
            }

            throw new Error('Invalid accounts permissions');

          case 13:

            localStorage.setItem(_constants2.default.privateKeyNames.eos, privateKey);
            localStorage.setItem(_constants2.default.privateKeyNames.eosAccount, accountName);

            _reducers2.default.user.setAuthData({ name: 'eosData', data: (0, _assign2.default)({}, keys, { address: accountName }) });

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function register(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

var login = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(accountName, masterPrivateKey) {
    var keys;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _eosjsKeygen.Keygen.generateMasterKeys(masterPrivateKey);

          case 2:
            keys = _context3.sent;

            _reducers2.default.user.setAuthData({ name: 'eosData', data: (0, _assign2.default)({}, keys, { address: accountName }) });

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function login(_x3, _x4) {
    return _ref5.apply(this, arguments);
  };
}();

var getBalance = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var _getState2, address, balance, amount;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _getState2 = (0, _core.getState)(), address = _getState2.user.eosData.address;

            if (!(eos === null || typeof address === 'string')) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt('return');

          case 3:
            _context4.next = 5;
            return eos.getCurrencyBalance({
              code: 'eosio.token',
              symbol: 'EOS',
              account: address
            });

          case 5:
            balance = _context4.sent;
            amount = (0, _parseFloat2.default)(balance[0]) || 0;


            _reducers2.default.user.setBalance({ name: 'eosData', amount: amount });

          case 8:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function getBalance() {
    return _ref6.apply(this, arguments);
  };
}();

var send = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(from, to, amount) {
    var _getState3, address, transfer;

    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _getState3 = (0, _core.getState)(), address = _getState3.user.eosData.address;

            if (!(eos === null || typeof address === 'string')) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt('return');

          case 3:
            _context5.next = 5;
            return eos.transaction({
              actions: [{
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: from,
                  permission: 'active'
                }],
                data: {
                  from: from,
                  to: to.trim(),
                  quantity: amount + '.0000 EOS',
                  memo: ''
                }
              }]
            });

          case 5:
            transfer = _context5.sent;

          case 6:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function send(_x5, _x6, _x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.default = {
  init: init,
  login: login,
  register: register,
  getBalance: getBalance,
  send: send
};

/***/ }),
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _core = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addItemToFeed = function addItemToFeed(feeds) {
  var filteredFeeds = feeds.filter(function (f) {
    return f.request.length !== 0;
  });
  _reducers2.default.feeds.addItems(filteredFeeds);
};

var deleteItemToFeed = function deleteItemToFeed(orderId) {
  var _getState = (0, _core.getState)(),
      feeds = _getState.feeds;

  var filteredFeeds = (0, _keys2.default)(feeds).map(function (k) {
    return feeds[k];
  }).filter(function (f) {
    return f.id === orderId;
  });

  console.log(filteredFeeds);

  _reducers2.default.feeds.deleteItems(filteredFeeds);
};

var getFeedDataFromOrder = function getFeedDataFromOrder(orders) {
  var feeds = orders.map(function (order) {
    return {
      peer: order.owner.peer,
      id: order.id,
      content: {
        sellCurrency: order.sellCurrency,
        buyCurrency: order.buyCurrency,
        sellAmount: order.sellAmount,
        buyAmount: order.buyAmount
      },
      request: order.requests
    };
  });

  addItemToFeed(feeds);
};

exports.default = {
  getFeedDataFromOrder: getFeedDataFromOrder,
  deleteItemToFeed: deleteItemToFeed
};

/***/ }),
/* 883 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _reactGtmModule = __webpack_require__(884);

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
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(40);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _core = __webpack_require__(65);

var _helpers = __webpack_require__(12);

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
/* 889 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"width":"_2Qfh0c","row":"_2BeaEf","button":"_3BpVhZ","text":"_2okdIb","col":"_3PsMg0","title":"rhcv5n","block":"_2LtRpE"};

/***/ }),
/* 890 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/clicker_3343b9.svg";

/***/ }),
/* 891 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/blockchain_5277b1.svg";

/***/ }),
/* 892 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/credit-card_49e57f.svg";

/***/ }),
/* 893 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/security_8204e7.svg";

/***/ }),
/* 894 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/search_1ea52d.svg";

/***/ }),
/* 895 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"qJheS4","fullWidth":"_2Gzkvz","brand":"_3zY6WO","green":"_s-GvI","white":"ewAS27","gray":"_9dfBig","disabled":"_1WzQpi"};

/***/ }),
/* 896 */
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

var _redaction = __webpack_require__(34);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _History = __webpack_require__(897);

var _History2 = _interopRequireDefault(_History);

var _PageHeadline = __webpack_require__(190);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(133);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _controls = __webpack_require__(68);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _Steps = __webpack_require__(913);

var _Steps2 = _interopRequireDefault(_Steps);

var _forms = __webpack_require__(101);

var _SelectGame = __webpack_require__(926);

var _SelectGame2 = _interopRequireDefault(_SelectGame);

var _SelectThink = __webpack_require__(931);

var _SelectThink2 = _interopRequireDefault(_SelectThink);

var _Calculated = __webpack_require__(937);

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

      console.log(step);
      step += 1;
      console.log(step);
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
            step > 1 && _react2.default.createElement(
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
              step === 3 && _react2.default.createElement(
                'p',
                { styleName: 'text' },
                'Balance: ',
                balance
              )
            )
          )
        ),
        step === 1 && _react2.default.createElement(_forms.Login, { reg: true, next: this.handleNextStep }),
        step === 2 && _react2.default.createElement(_SelectGame2.default, { handleNextStep: this.handleNextStep }),
        step === 3 && _react2.default.createElement(_SelectThink2.default, { next: this.handleNextStep }),
        step === 4 && _react2.default.createElement(_Calculated2.default, { next: this.handleNextStep }),
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
/* 897 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"step":"IcXJ3B","text":"M2kEUN","row":"_1J4HTF"};

/***/ }),
/* 898 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"twoButtonsInRow":"_2KYO-l"};

/***/ }),
/* 899 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Flip = __webpack_require__(900);

var _Flip2 = _interopRequireDefault(_Flip);

var _flip = __webpack_require__(901);

var _flip2 = _interopRequireDefault(_flip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Flip(_ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement('img', { src: _flip2.default, alt: '', onClick: onClick, styleName: 'trade-panel__change' });
}

exports.default = (0, _reactCssModules2.default)(Flip, _Flip2.default);

/***/ }),
/* 900 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"trade-panel__change":"_2LOdkU"};

/***/ }),
/* 901 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/flip_d738de.svg";

/***/ }),
/* 902 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ReloadButton = __webpack_require__(903);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _ReloadIcon = __webpack_require__(904);

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
/* 903 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reloadButton":"_2NgnzZ","icon":"tps3tZ"};

/***/ }),
/* 904 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reload = __webpack_require__(905);

var _reload2 = _interopRequireDefault(_reload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReloadIcon = function ReloadIcon(_ref) {
  var className = _ref.className;
  return _react2.default.createElement('img', { className: className, src: _reload2.default, alt: 'reload icon' });
};

exports.default = ReloadIcon;

/***/ }),
/* 905 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/reload_d8d88b.svg";

/***/ }),
/* 906 */
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

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RemoveButton = __webpack_require__(907);

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
/* 907 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2dmdAo"};

/***/ }),
/* 908 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Swap = __webpack_require__(909);

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
/* 909 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"table__link":"_3EGhOv","table__link-arrow":"_3XFEl9"};

/***/ }),
/* 910 */
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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(54);

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
/* 911 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawButton = __webpack_require__(912);

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
/* 912 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"withdrawButton":"_2yf2Si"};

/***/ }),
/* 913 */
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

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Steps = __webpack_require__(914);

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
      step: 1
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
/* 914 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"step":"_1uYyjR","road":"GznopH","st":"_rhCOB","row":"_1zWX5r","complete":"_3EXBMG","solid":"sd3WS7","uncompleted":"_1u97Ro"};

/***/ }),
/* 915 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"label":"_1AbkiC","inRow":"_2Hoger"};

/***/ }),
/* 916 */
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

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(41);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(134);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInputMask = __webpack_require__(917);

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(12);

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
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"_1aWblp","inputContainer":"_2di3Mb","disabled":"_3u8Uu2","withError":"_3RwSrH","input":"_3T0zd_","label":"_3xlNvF","error":"_3LmV0i"};

/***/ }),
/* 923 */,
/* 924 */
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

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Login = __webpack_require__(925);

var _Login2 = _interopRequireDefault(_Login);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(34);

var _controls = __webpack_require__(68);

var _forms = __webpack_require__(101);

var _swValuelink = __webpack_require__(69);

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
/* 925 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"col":"Uer11s","note":"zem6bX","button":"yS8Fnp"};

/***/ }),
/* 926 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

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

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SelectGame = __webpack_require__(927);

var _SelectGame2 = _interopRequireDefault(_SelectGame);

var _horse = __webpack_require__(928);

var _horse2 = _interopRequireDefault(_horse);

var _Artboard = __webpack_require__(929);

var _Artboard2 = _interopRequireDefault(_Artboard);

var _Ligmar = __webpack_require__(930);

var _Ligmar2 = _interopRequireDefault(_Ligmar);

var _controls = __webpack_require__(68);

var _actions = __webpack_require__(17);

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
/* 927 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"game":"t9amh5","button":"_1WQqtE","row":"_3B6H60"};

/***/ }),
/* 928 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/horse_0f5815.png";

/***/ }),
/* 929 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/Artboard_d85040.png";

/***/ }),
/* 930 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/Ligmar_ee294a.png";

/***/ }),
/* 931 */
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

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(12);

var _redaction = __webpack_require__(34);

var _controls = __webpack_require__(68);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SelectThink = __webpack_require__(932);

var _SelectThink2 = _interopRequireDefault(_SelectThink);

var _sword = __webpack_require__(933);

var _sword2 = _interopRequireDefault(_sword);

var _sword3 = __webpack_require__(934);

var _sword4 = _interopRequireDefault(_sword3);

var _sword5 = __webpack_require__(935);

var _sword6 = _interopRequireDefault(_sword5);

var _sword7 = __webpack_require__(936);

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
      var id = this.props.id;

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
            id === undefined ? 'Empty' : 'X-' + id
          ),
          id !== undefined && _react2.default.createElement(
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
/* 932 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"game":"_3PWGoe","row":"_3c48JF"};

/***/ }),
/* 933 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/sword1_510832.jpeg";

/***/ }),
/* 934 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/sword2_571202.jpg";

/***/ }),
/* 935 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/sword4_49d439.jpg";

/***/ }),
/* 936 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/sword5_288217.jpeg";

/***/ }),
/* 937 */
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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Calculated = __webpack_require__(938);

var _Calculated2 = _interopRequireDefault(_Calculated);

var _controls = __webpack_require__(68);

var _forms = __webpack_require__(101);

var _actions = __webpack_require__(17);

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
      var amountProps = this.props.amountProps;

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
/* 938 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"row":"_2io4Jr","checkbox":"_1rkbO1","checked":"_1kDIe6","button":"_3lubUE"};

/***/ }),
/* 939 */
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
/* 940 */
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

var _reactRouterRedux = __webpack_require__(344);

var _reactRedux = __webpack_require__(336);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _App = __webpack_require__(941);

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
/* 941 */
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

var _reactRouter = __webpack_require__(103);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(34);

var _moment = __webpack_require__(66);

var _moment2 = _interopRequireDefault(_moment);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _App = __webpack_require__(942);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(943);

var _Header = __webpack_require__(944);

var _Header2 = _interopRequireDefault(_Header);

var _Loader = __webpack_require__(198);

var _Loader2 = _interopRequireDefault(_Loader);

var _RequestLoader = __webpack_require__(953);

var _RequestLoader2 = _interopRequireDefault(_RequestLoader);

var _ModalConductor = __webpack_require__(362);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

var _WidthContainer = __webpack_require__(197);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _NotificationConductor = __webpack_require__(1056);

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
/* 942 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"_3gjuKq"};

/***/ }),
/* 943 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"UVZ-gM","btn":"_2xXs60"};

/***/ }),
/* 944 */
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

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Header = __webpack_require__(945);

var _Header2 = _interopRequireDefault(_Header);

var _WidthContainer = __webpack_require__(197);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _Logo = __webpack_require__(361);

var _Logo2 = _interopRequireDefault(_Logo);

var _Nav = __webpack_require__(950);

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
/* 945 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"qZaPkJ","container":"_1AYBnf"};

/***/ }),
/* 946 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"widthContainer":"_3BXipS","widthContainerIn":"_3Igl7j","relative":"_3gxpYb","fullHeight":"_1GF4SW","centeringContent":"_3RUiHP","main":"_3aO2EZ"};

/***/ }),
/* 947 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"logo":"kQLHsU"};

/***/ }),
/* 948 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/logo_3436dc.svg";

/***/ }),
/* 949 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/logo-colored_eb1f60.svg";

/***/ }),
/* 950 */
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

var _reactRouterDom = __webpack_require__(108);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Nav = __webpack_require__(951);

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
/* 951 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"nav":"_34R6Y0","link":"_16Gtic","active":"_2Mv-fo"};

/***/ }),
/* 952 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"_3V4vPK","loader":"_37qfX_","small":"_1Cc0hi","center":"_3wUrWW","loader1":"B8rIc7","loader2":"_2dF68e","loader3":"_1fAQsv","text":"_2mdCx-"};

/***/ }),
/* 953 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(34);

var _Loader = __webpack_require__(198);

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
/* 954 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OfferModal = __webpack_require__(955);

var _OfferModal2 = _interopRequireDefault(_OfferModal);

var _WithdrawModal = __webpack_require__(1043);

var _WithdrawModal2 = _interopRequireDefault(_WithdrawModal);

var _PrivateKeysModal = __webpack_require__(1045);

var _PrivateKeysModal2 = _interopRequireDefault(_PrivateKeysModal);

var _EosModal = __webpack_require__(1049);

var _EosModal2 = _interopRequireDefault(_EosModal);

var _Approve = __webpack_require__(1053);

var _Approve2 = _interopRequireDefault(_Approve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  OfferModal: _OfferModal2.default,
  WithdrawModal: _WithdrawModal2.default,
  PrivateKeysModal: _PrivateKeysModal2.default,
  EosModal: _EosModal2.default,
  Approve: _Approve2.default
};

/***/ }),
/* 955 */
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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _OfferModal = __webpack_require__(956);

var _OfferModal2 = _interopRequireDefault(_OfferModal);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _Modal = __webpack_require__(138);

var _Modal2 = _interopRequireDefault(_Modal);

var _ConfirmOffer = __webpack_require__(962);

var _ConfirmOffer2 = _interopRequireDefault(_ConfirmOffer);

var _AddOffer = __webpack_require__(1030);

var _AddOffer2 = _interopRequireDefault(_AddOffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offer = (_dec = (0, _reactCssModules2.default)(_OfferModal2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Offer, _React$Component);

  function Offer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Offer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Offer.__proto__ || (0, _getPrototypeOf2.default)(Offer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: 'editOffer', // editOffer / confirmOffer
      offer: {}
    }, _this.handleMoveToConfirmation = function (offer) {
      _this.setState({
        view: 'confirmOffer',
        offer: offer
      });
    }, _this.handleMoveToOfferEditing = function () {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-confirm-button');
      _this.setState({
        view: 'editOffer'
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Offer, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          view = _state.view,
          offer = _state.offer;
      var name = this.props.name;


      var title = view === 'editOffer' ? 'Add offer' : 'Confirm offer';

      return _react2.default.createElement(
        _Modal2.default,
        { name: name, title: title },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          view === 'editOffer' ? _react2.default.createElement(_AddOffer2.default, { initialData: offer, onNext: this.handleMoveToConfirmation }) : _react2.default.createElement(_ConfirmOffer2.default, { offer: offer, onBack: this.handleMoveToOfferEditing })
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
/* 956 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"_2EHTMr"};

/***/ }),
/* 957 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_3d-lMl","header":"utYl-8","headerContent":"_2FzjWy","title":"_1H7w4U","uppercase":"_1XykmZ","closeButton":"_3UgYwG","contentContainer":"_2OSr4P","content":"_2SEeRQ"};

/***/ }),
/* 958 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"a_1CO5"};

/***/ }),
/* 959 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"centringContainer":"_1uK09U","scrollable":"_1K6mUM","centringContent":"_1xMZgg"};

/***/ }),
/* 960 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(41);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CloseIcon = __webpack_require__(961);

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
/* 961 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3KAFwf","whiteColor":"_1qVzDl","icon":"_2g6BBl","brandColor":"_1ZJhlM"};

/***/ }),
/* 962 */
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

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _swap = __webpack_require__(963);

var _swap2 = _interopRequireDefault(_swap);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ConfirmOffer = __webpack_require__(1011);

var _ConfirmOffer2 = _interopRequireDefault(_ConfirmOffer);

var _ButtonsInRow = __webpack_require__(359);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

var _Button = __webpack_require__(54);

var _Button2 = _interopRequireDefault(_Button);

var _Coins = __webpack_require__(1012);

var _Coins2 = _interopRequireDefault(_Coins);

var _Amounts = __webpack_require__(1023);

var _Amounts2 = _interopRequireDefault(_Amounts);

var _ExchangeRate = __webpack_require__(1027);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _Fee = __webpack_require__(1029);

var _Fee2 = _interopRequireDefault(_Fee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmOffer = (_dec = (0, _reactCssModules2.default)(_ConfirmOffer2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ConfirmOffer, _Component);

  function ConfirmOffer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConfirmOffer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ConfirmOffer.__proto__ || (0, _getPrototypeOf2.default)(ConfirmOffer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      buyAmount: null,
      sellAmount: null,
      sellCurrency: null,
      buyCurrency: null,
      exchangeRate: null
    }, _this.handleConfirm = function () {
      _this.createOrder();
      _actions2.default.modals.close('OfferModal');
    }, _this.createOrder = function () {
      var _this$state = _this.state,
          buyAmount = _this$state.buyAmount,
          sellAmount = _this$state.sellAmount,
          buyCurrency = _this$state.buyCurrency,
          sellCurrency = _this$state.sellCurrency,
          exchangeRate = _this$state.exchangeRate;


      var data = {
        buyCurrency: '' + buyCurrency,
        sellCurrency: '' + sellCurrency,
        buyAmount: Number(buyAmount),
        sellAmount: Number(sellAmount),
        exchangeRate: Number(exchangeRate)
      };
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-confirm-button');
      _swap2.default.services.orders.create(data);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ConfirmOffer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$offer = this.props.offer,
          sellAmount = _props$offer.sellAmount,
          buyAmount = _props$offer.buyAmount,
          sellCurrency = _props$offer.sellCurrency,
          buyCurrency = _props$offer.buyCurrency,
          exchangeRate = _props$offer.exchangeRate;

      this.setState({ sellAmount: sellAmount, buyAmount: buyAmount, buyCurrency: buyCurrency, sellCurrency: sellCurrency, exchangeRate: exchangeRate });

      if (false) {
        if (sellCurrency === 'eth' && sellAmount > 0.1) {
          this.setState({
            sellAmount: 0.1,
            buyAmount: 0.007
          });
        } else if (sellCurrency === 'btc' && sellAmount > 0.007) {
          this.setState({
            sellAmount: 0.007,
            buyAmount: 0.1
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var onBack = this.props.onBack;
      var _state = this.state,
          buyAmount = _state.buyAmount,
          sellAmount = _state.sellAmount,
          buyCurrency = _state.buyCurrency,
          sellCurrency = _state.sellCurrency,
          exchangeRate = _state.exchangeRate;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Coins2.default, { styleName: 'coins', names: [buyCurrency, sellCurrency], size: 100 }),
        _react2.default.createElement(_Amounts2.default, { buyAmount: buyAmount, sellAmount: sellAmount, buyCurrency: buyCurrency, sellCurrency: sellCurrency }),
        _react2.default.createElement(_ExchangeRate2.default, { value: exchangeRate, buyCurrency: buyCurrency, sellCurrency: sellCurrency }),
        _react2.default.createElement(_Fee2.default, { amount: 0.0001, currency: sellCurrency }),
        _react2.default.createElement(
          _ButtonsInRow2.default,
          { styleName: 'buttonsInRow' },
          _react2.default.createElement(
            _Button2.default,
            { styleName: 'button', gray: true, onClick: onBack },
            'Back'
          ),
          _react2.default.createElement(
            _Button2.default,
            { styleName: 'button', id: 'confirm', brand: true, onClick: this.handleConfirm },
            'Add'
          )
        )
      );
    }
  }]);
  return ConfirmOffer;
}(_react.Component)) || _class);
exports.default = ConfirmOffer;

/***/ }),
/* 963 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.constants = exports.Events = exports.Collection = exports.SwapInterface = exports.ServiceInterface = undefined;

var _SwapApp = __webpack_require__(365);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

var _ServiceInterface = __webpack_require__(1000);

var _ServiceInterface2 = _interopRequireDefault(_ServiceInterface);

var _SwapInterface = __webpack_require__(1001);

var _SwapInterface2 = _interopRequireDefault(_SwapInterface);

var _Collection = __webpack_require__(1002);

var _Collection2 = _interopRequireDefault(_Collection);

var _Events = __webpack_require__(1003);

var _Events2 = _interopRequireDefault(_Events);

var _constants = __webpack_require__(204);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(1004);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapApp2.default;
exports.ServiceInterface = _ServiceInterface2.default;
exports.SwapInterface = _SwapInterface2.default;
exports.Collection = _Collection2.default;
exports.Events = _Events2.default;
exports.constants = _constants2.default;
exports.util = _util2.default;

/***/ }),
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */,
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eth: 'ETH',
  btc: 'BTC',
  nim: 'NIM',

  // ETH Tokens
  noxon: 'NOXON',
  swap: 'SWAP'
};
module.exports = exports['default'];

/***/ }),
/* 994 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  web3: 'web3',
  bitcoin: 'bitcoin',
  Ipfs: 'Ipfs',
  IpfsRoom: 'IpfsRoom',
  storage: 'storage'
};
module.exports = exports['default'];

/***/ }),
/* 995 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  auth: 'auth',
  room: 'room',
  orders: 'orders',
  swaps: 'swaps'
};
module.exports = exports['default'];

/***/ }),
/* 996 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  MAINNET: 'mainnet',
  TESTNET: 'testnet'
};
module.exports = exports['default'];

/***/ }),
/* 997 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(998);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(80);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(81);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StorageFactory = function () {
  function StorageFactory(storage) {
    (0, _classCallCheck3.default)(this, StorageFactory);

    this.prefix = 'swap:';
    this.storage = storage || global.localStorage;

    try {
      this.storage.setItem('test', 'test');
      this.storage.getItem('test');
      this.storage.removeItem('test');
    } catch (err) {
      throw new Error('SwapApp.env.StorageFactory: ' + err);
    }
  }

  (0, _createClass3.default)(StorageFactory, [{
    key: 'setItem',
    value: function setItem(key, value) {
      this.storage.setItem('' + this.prefix + key, (0, _stringify2.default)(value));
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      var value = this.storage.getItem('' + this.prefix + key);

      try {
        return JSON.parse(value);
      } catch (err) {
        console.error('SwapApp.env.storage.getItem(' + key + ') parse error. Looks like the value was created w/o setItem method');
        console.error(err);
        return undefined;
      }
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      return this.storage.removeItem('' + this.prefix + key);
    }
  }]);
  return StorageFactory;
}();

exports.default = StorageFactory;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 998 */,
/* 999 */,
/* 1000 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(140);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(80);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(81);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SwapApp = __webpack_require__(365);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceInterface = function () {
  (0, _createClass3.default)(ServiceInterface, [{
    key: '_constructor',


    // _constructor for aggregation
    value: function _constructor() {
      // service name, within it will be stored in SwapApp.services
      this._serviceName = null;
      this._dependsOn = null;
      this._spyHandlers = [];
    }
  }]);

  function ServiceInterface() {
    (0, _classCallCheck3.default)(this, ServiceInterface);

    this._constructor();
  }

  (0, _createClass3.default)(ServiceInterface, [{
    key: '_waitRelationsResolve',
    value: function _waitRelationsResolve() {
      var _this = this;

      if (this._dependsOn && this._dependsOn.length) {
        var dependsOnMap = {};

        this._dependsOn.forEach(function (Service) {
          dependsOnMap[Service.name] = {
            initialized: false
          };

          _SwapApp2.default.services[Service.name]._addWaitRelationHandler(function () {
            dependsOnMap[Service.name].initialized = true;

            var areAllExpectsInitialized = (0, _keys2.default)(dependsOnMap).every(function (serviceName) {
              return dependsOnMap[serviceName].initialized;
            });

            if (areAllExpectsInitialized) {
              _this.initService();
            }
          });
        });
      }
    }
  }, {
    key: '_addWaitRelationHandler',
    value: function _addWaitRelationHandler(handler) {
      this._spyHandlers.push(handler);
    }
  }, {
    key: '_tryInitService',
    value: function _tryInitService() {
      if (!this._dependsOn || !this._dependsOn.length) {
        this.initService();
        this._spyHandlers.forEach(function (handler) {
          return handler();
        });
        this._spyHandlers = [];
      }
    }
  }, {
    key: 'initService',
    value: function initService() {
      // init service on SwapApp mounting
    }
  }]);
  return ServiceInterface;
}();

exports.default = ServiceInterface;
module.exports = exports['default'];

/***/ }),
/* 1001 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(80);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(81);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapInterface = function () {
  function SwapInterface() {
    (0, _classCallCheck3.default)(this, SwapInterface);

    // service name, within it will be stored in SwapApp.swaps
    this._swapName = null;
  }

  (0, _createClass3.default)(SwapInterface, [{
    key: "_initSwap",
    value: function _initSwap() {
      // init service on SwapApp mounting
    }
  }]);
  return SwapInterface;
}();

exports.default = SwapInterface;
module.exports = exports["default"];

/***/ }),
/* 1002 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(140);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(80);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(81);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = function () {
  (0, _createClass3.default)(Collection, [{
    key: "_constructor",


    // _constructor for aggregation
    value: function _constructor() {
      this.items = [];
      this.itemIds = {};
    }
  }]);

  function Collection() {
    (0, _classCallCheck3.default)(this, Collection);

    this._constructor();
  }

  /**
   * Add item at the start of current collection
   * @param item
   * @param key {string|number}
   * @returns {*}
   */


  (0, _createClass3.default)(Collection, [{
    key: "prepend",
    value: function prepend(item, key) {
      this.items.unshift(item);
      if (key) {
        for (var _key in this.itemIds) {
          if (this.itemIds.hasOwnProperty(_key)) {
            this.itemIds[_key] += 1;
          }
        }
        this.itemIds[key] = 0;
      }
      return item;
    }

    /**
     * Add item at the end of current collection
     * @param item
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "append",
    value: function append(item, key) {
      this.items.push(item);
      if (key) {
        this.itemIds[key] = this.items.length - 1;
      }
      return item;
    }

    /**
     * Remove item by index from current collection
     * @param index
     * @returns {*}
     */

  }, {
    key: "removeByIndex",
    value: function removeByIndex(index) {
      this.items = this.items.splice(index, 1);
    }

    /**
     * Remove item by key [id] from current collection
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "removeByKey",
    value: function removeByKey(key) {
      var _this = this;

      var index = this.itemIds[key];

      if (index !== undefined) {
        this.items.splice(index, 1);
        delete this.itemIds[key];

        (0, _keys2.default)(this.itemIds).forEach(function (key) {
          if (_this.itemIds[key] > index) {
            _this.itemIds[key]--;
          }
        });
      }
    }

    /**
     * Get index of item in current collection
     * @param item
     * @returns {number}
     */

  }, {
    key: "indexOf",
    value: function indexOf(item) {
      return this.items.indexOf(item);
    }

    /**
     * Get item by index from current collection
     * @param index
     * @returns {*}
     */

  }, {
    key: "getByIndex",
    value: function getByIndex(index) {
      return this.items[index];
    }

    /**
     * Get item by key [id] from current collection
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "getByKey",
    value: function getByKey(key) {
      return this.items[this.itemIds[key]];
    }
  }, {
    key: "isExist",
    value: function isExist(item) {
      return this.items.includes(item);
    }

    /**
     * Check if item with such name exists in current collection
     * @param key {string|number}
     * @returns {boolean}
     */

  }, {
    key: "isExistByKey",
    value: function isExistByKey(key) {
      return Boolean(this.getByKey(key));
    }
  }]);
  return Collection;
}();

exports.default = Collection;
module.exports = exports["default"];

/***/ }),
/* 1003 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = undefined;

var _classCallCheck2 = __webpack_require__(80);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(81);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Event = function () {

  /**
   *
   * @param name {string}
   */
  function Event(name) {
    (0, _classCallCheck3.default)(this, Event);

    this.name = name;
    this.handlers = [];
  }

  /**
   * Add handler to current Event
   *
   * @param handler {function}
   */


  (0, _createClass3.default)(Event, [{
    key: "addHandler",
    value: function addHandler(handler) {
      var _this = this;

      this.handlers.push(handler.bind({
        unsubscribe: function unsubscribe() {
          _this.removeHandler(handler);
        }
      }));
    }

    /**
     * Remove handler from current Event
     *
     * @param handler {function}
     * @returns {Array.<T>|*}
     */

  }, {
    key: "removeHandler",
    value: function removeHandler(handler) {
      var handlerIndex = this.handlers.indexOf(handler);

      this.handlers.splice(handlerIndex, 1);
    }

    /**
     * Call all handlers in all priorities of current Event
     *
     * @param eventArgs {...array}
     */

  }, {
    key: "call",
    value: function call() {
      for (var _len = arguments.length, eventArgs = Array(_len), _key = 0; _key < _len; _key++) {
        eventArgs[_key] = arguments[_key];
      }

      this.handlers.forEach(function (handler) {
        try {
          handler.apply(undefined, eventArgs);
        } catch (err) {
          console.error(err);
        }
      });
    }
  }]);
  return Event;
}();

var EventAggregator = function () {
  function EventAggregator() {
    (0, _classCallCheck3.default)(this, EventAggregator);

    this.events = {};
  }

  /**
   * Get Event by name
   *
   * @param name
   * @returns {*}
   */


  (0, _createClass3.default)(EventAggregator, [{
    key: "getEvent",
    value: function getEvent(name) {
      var event = this.events[name];

      if (!event) {
        event = new Event(name);
        this.events[name] = event;
      }

      return event;
    }

    /**
     *
     * @param name {string}
     * @param handler {function}
     * @returns {{ event: *, handler: * }}
     */

  }, {
    key: "subscribe",
    value: function subscribe(name, handler) {
      var event = this.getEvent(name);

      event.addHandler(handler);

      return { event: event, handler: handler };
    }

    /**
     *
     * @param eventName {string}
     * @param handler {function}
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventName, handler) {
      var event = this.getEvent(eventName);

      event.removeHandler(handler);
    }

    /**
     *
     * @param name {string}
     * @param eventArgs {...array}
     */

  }, {
    key: "dispatch",
    value: function dispatch(name) {
      var event = this.getEvent(name);

      if (event) {
        for (var _len2 = arguments.length, eventArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          eventArgs[_key2 - 1] = arguments[_key2];
        }

        event.call.apply(event, eventArgs);
      }
    }

    /**
     * Subscribe to Event and unsubscribe after call
     *
     * @param eventName {string}
     * @param handler {function}
     * @returns {{ event: *, handlerWrapper: (function(...[*])) }}
     */

  }, {
    key: "once",
    value: function once(eventName, handler) {
      var event = this.getEvent(eventName);

      var handlerWrapper = function handlerWrapper() {
        var result = handler.apply(undefined, arguments);
        if (result) {
          event.removeHandler(handlerWrapper);
        }
      };

      event.addHandler(handlerWrapper);

      return { event: event, handlerWrapper: handlerWrapper };
    }
  }]);
  return EventAggregator;
}();

var events = new EventAggregator();

exports.default = EventAggregator;
exports.events = events;

/***/ }),
/* 1004 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pullProps = __webpack_require__(1005);

var _pullProps2 = _interopRequireDefault(_pullProps);

var _ignoreProps = __webpack_require__(1006);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _typeforce = __webpack_require__(1007);

var _typeforce2 = _interopRequireDefault(_typeforce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  pullProps: _pullProps2.default,
  ignoreProps: _ignoreProps2.default,
  typeforce: _typeforce2.default
};
module.exports = exports['default'];

/***/ }),
/* 1005 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pullProps = function pullProps(obj) {
  for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  var result = {};

  props.forEach(function (propName) {
    result[propName] = obj[propName];
  });

  return result;
};

exports.default = pullProps;
module.exports = exports["default"];

/***/ }),
/* 1006 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(140);

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
module.exports = exports["default"];

/***/ }),
/* 1007 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(1008);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _values = __webpack_require__(366);

var _values2 = _interopRequireDefault(_values);

var _isCoinAddress, _isPublicKey;

var _typeforce = __webpack_require__(1009);

var _typeforce2 = _interopRequireDefault(_typeforce);

var _constants = __webpack_require__(204);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var check = function check() {
  try {
    return _typeforce2.default.apply(undefined, arguments);
  } catch (err) {
    console.error(err);
    return false;
  }
};

var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

var isCoinName = function isCoinName(value) {
  return (0, _values2.default)(_constants2.default.COINS).map(function (v) {
    return v.toLowerCase();
  }).includes(value.toLowerCase());
};

var isCoinAddress = (_isCoinAddress = {}, (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.eth, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.btc, function (value) {
  return typeof value === 'string' && /^[A-Za-z0-9]{34}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.nim, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.noxon, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.swap, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), _isCoinAddress);

var isPublicKey = (_isPublicKey = {}, (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.eth, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.btc, function (value) {
  return typeof value === 'string' && /^[A-Za-z0-9]{66}$/.test(value);
}), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.nim, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.noxon, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.swap, '?String'), _isPublicKey);

exports.default = {
  t: _typeforce2.default,
  check: check,
  isNumeric: isNumeric,
  isCoinName: isCoinName,
  isCoinAddress: isCoinAddress,
  isPublicKey: isPublicKey
};
module.exports = exports['default'];

/***/ }),
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"_2SFTdv","buttonsInRow":"_3Z13ki","button":"_1IOrqN"};

/***/ }),
/* 1012 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Coins = __webpack_require__(1013);

var _Coins2 = _interopRequireDefault(_Coins);

var _Coin = __webpack_require__(1014);

var _Coin2 = _interopRequireDefault(_Coin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Coins = function Coins(_ref) {
  var className = _ref.className,
      names = _ref.names,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 40 : _ref$size;
  return _react2.default.createElement(
    'div',
    { styleName: 'coins', className: className },
    _react2.default.createElement(_Coin2.default, { name: names[0], size: size }),
    _react2.default.createElement(_Coin2.default, { name: names[1], size: size })
  );
};

exports.default = (0, _reactCssModules2.default)(Coins, _Coins2.default);

/***/ }),
/* 1013 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"_1TWvrk"};

/***/ }),
/* 1014 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(24);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Coin = __webpack_require__(1015);

var _Coin2 = _interopRequireDefault(_Coin);

var _CurrencyIcon = __webpack_require__(374);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Coin = function Coin(_ref) {
  var className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 40 : _ref$size,
      name = _ref.name;

  var style = {
    width: size ? size + 'px' : null
  };

  var iconProps = {
    name: name.toLowerCase()
  };

  var isIconExist = _CurrencyIcon.iconNames.includes(name.toLowerCase());

  if (isIconExist) {
    iconProps = (0, _assign2.default)({}, iconProps, {
      styleName: 'icon'
    });
  } else {
    iconProps = (0, _assign2.default)({}, iconProps, {
      styleName: 'letter',
      style: {
        lineHeight: size + 'px',
        fontSize: size / 2 + 'px'
      }
    });
  }

  return _react2.default.createElement(
    'div',
    { styleName: 'coin', className: className, style: style },
    _react2.default.createElement(_CurrencyIcon2.default, iconProps)
  );
};

exports.default = (0, _reactCssModules2.default)(Coin, _Coin2.default);

/***/ }),
/* 1015 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coin":"_1wYXYN","icon":"mK0HOH","letter":"_1Nd751"};

/***/ }),
/* 1016 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"text":"_3WoNsh"};

/***/ }),
/* 1017 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/btc_8edde4.svg";

/***/ }),
/* 1018 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/eth_aa4ec5.svg";

/***/ }),
/* 1019 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/icx_d6bb3b.svg";

/***/ }),
/* 1020 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/waves_de7e9b.svg";

/***/ }),
/* 1021 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/xrp_3be55b.svg";

/***/ }),
/* 1022 */
/***/ (function(module, exports) {

module.exports = "https://pravda.services/images/nim_e23886.svg";

/***/ }),
/* 1023 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Amounts = __webpack_require__(1024);

var _Amounts2 = _interopRequireDefault(_Amounts);

var _Row = __webpack_require__(206);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(207);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Amounts = function Amounts(_ref) {
  var buyAmount = _ref.buyAmount,
      sellAmount = _ref.sellAmount,
      buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Exchange' },
    _react2.default.createElement(_Value2.default, { value: sellAmount, currency: sellCurrency }),
    _react2.default.createElement('div', { styleName: 'arrow' }),
    _react2.default.createElement(_Value2.default, { value: buyAmount, currency: buyCurrency })
  );
};

exports.default = (0, _reactCssModules2.default)(Amounts, _Amounts2.default);

/***/ }),
/* 1024 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"arrow":"_1JeVyh"};

/***/ }),
/* 1025 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"row":"_3kZbpm","title":"_2-aWLd","content":"_2ALy7S"};

/***/ }),
/* 1026 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_1MvMZq","currency":"ka6sxH"};

/***/ }),
/* 1027 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ExchangeRate = __webpack_require__(1028);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _Row = __webpack_require__(206);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(207);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExchangeRate = function ExchangeRate(_ref) {
  var value = _ref.value,
      buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Exchange rate' },
    _react2.default.createElement(_Value2.default, { value: 1, currency: buyCurrency }),
    _react2.default.createElement(
      'div',
      { styleName: 'equal' },
      '='
    ),
    _react2.default.createElement(_Value2.default, { value: value, currency: sellCurrency })
  );
};

exports.default = (0, _reactCssModules2.default)(ExchangeRate, _ExchangeRate2.default);

/***/ }),
/* 1028 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"equal":"_62CYy3"};

/***/ }),
/* 1029 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Row = __webpack_require__(206);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(207);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fee = function Fee(_ref) {
  var amount = _ref.amount,
      currency = _ref.currency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Miner fee' },
    _react2.default.createElement(_Value2.default, { value: amount, currency: currency })
  );
};

exports.default = Fee;

/***/ }),
/* 1030 */
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

var _keys = __webpack_require__(53);

var _keys2 = _interopRequireDefault(_keys);

var _dec, _dec2, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(34);

var _appConfig = __webpack_require__(40);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _helpers = __webpack_require__(12);

var _swValuelink = __webpack_require__(69);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _bignumber = __webpack_require__(352);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _AddOffer = __webpack_require__(1031);

var _AddOffer2 = _interopRequireDefault(_AddOffer);

var _Button = __webpack_require__(54);

var _Button2 = _interopRequireDefault(_Button);

var _Group = __webpack_require__(1032);

var _Group2 = _interopRequireDefault(_Group);

var _Select = __webpack_require__(1041);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bignumber.BigNumber.config({ DECIMAL_PLACES: 4, ROUNDING_MODE: 4, EXPONENTIAL_AT: [-7, 14], RANGE: 1e+7, CRYPTO: true });

var AddOffer = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData,
      tokensData = _ref$user.tokensData;
  return {
    items: [ethData, btcData],
    tokens: (0, _keys2.default)(tokensData).map(function (k) {
      return tokensData[k];
    })
  };
}), _dec2 = (0, _reactCssModules2.default)(_AddOffer2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(AddOffer, _Component);

  function AddOffer(_ref2) {
    var initialData = _ref2.initialData;
    (0, _classCallCheck3.default)(this, AddOffer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddOffer.__proto__ || (0, _getPrototypeOf2.default)(AddOffer)).call(this));

    _initialiseProps.call(_this);

    var _ref3 = initialData || {},
        exchangeRate = _ref3.exchangeRate,
        buyAmount = _ref3.buyAmount,
        sellAmount = _ref3.sellAmount,
        buyCurrency = _ref3.buyCurrency,
        sellCurrency = _ref3.sellCurrency;

    _this.state = {
      exchangeRate: exchangeRate || _appConfig2.default.exchangeRates.ethbtc,
      buyAmount: buyAmount || '',
      sellAmount: sellAmount || '',
      buyCurrency: buyCurrency || 'eth',
      sellCurrency: sellCurrency || 'btc',
      EventWasSend: false
    };
    return _this;
  }

  (0, _createClass3.default)(AddOffer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _actions2.default.user.getBalances();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _state = this.state,
          buyCurrency = _state.buyCurrency,
          sellCurrency = _state.sellCurrency;

      this.getExchangeRate(buyCurrency, sellCurrency);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          tokens = _props.tokens;
      var _state2 = this.state,
          exchangeRate = _state2.exchangeRate,
          buyAmount = _state2.buyAmount,
          sellAmount = _state2.sellAmount,
          buyCurrency = _state2.buyCurrency,
          sellCurrency = _state2.sellCurrency;


      var linked = _swValuelink2.default.all(this, 'exchangeRate', 'buyAmount', 'sellAmount');
      var isDisabled = !exchangeRate || !buyAmount && !sellAmount;

      var data = [].concat(tokens, items).filter(function (item) {
        return item.currency.toLowerCase() === '' + sellCurrency;
      });

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Group2.default, {
          label: 'Exchange rate',
          inputValueLink: linked.exchangeRate.onChange(this.handleExchangeRateChange),
          currency: false,
          id: 'exchangeRate'
        }),
        _react2.default.createElement(_Select2.default, {
          changeBalance: this.changeBalance,
          balance: data[0].balance,
          currency: data[0].currency
        }),
        _react2.default.createElement(_Group2.default, {
          styleName: 'sellGroup',
          label: 'Sell',
          inputValueLink: linked.sellAmount.onChange(this.handleSellAmountChange),
          selectedCurrencyValue: sellCurrency,
          onCurrencySelect: this.handleSellCurrencySelect,
          id: 'sellAmount'
        }),
        _react2.default.createElement(_Group2.default, {
          label: 'Buy',
          inputValueLink: linked.buyAmount.onChange(this.handleBuyAmountChange),
          selectedCurrencyValue: buyCurrency,
          onCurrencySelect: this.handleBuyCurrencySelect,
          id: 'buyAmount'
        }),
        _react2.default.createElement(
          _Button2.default,
          {
            styleName: 'button',
            fullWidth: true,
            brand: true,
            disabled: isDisabled,
            onClick: this.handleNext
          },
          'Next'
        )
      );
    }
  }]);
  return AddOffer;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.changeExchangeRate = function (value) {
    _this2.setState({
      exchangeRate: value
    });
  };

  this.getExchangeRate = function (buyCurrency, sellCurrency) {
    _actions2.default.user.setExchangeRate(buyCurrency, sellCurrency, _this2.changeExchangeRate);
  };

  this.handleExchangeRateChange = function (value) {
    var _state3 = _this2.state,
        buyAmount = _state3.buyAmount,
        sellAmount = _state3.sellAmount;


    buyAmount = new _bignumber.BigNumber(String(buyAmount) || 0);
    sellAmount = buyAmount.multipliedBy(new _bignumber.BigNumber(String(value) || 0));

    _this2.setState({
      buyAmount: buyAmount.toNumber(),
      sellAmount: sellAmount.toNumber()
    });
  };

  this.handleBuyCurrencySelect = function (_ref4) {
    var value = _ref4.value;
    var _state4 = _this2.state,
        buyCurrency = _state4.buyCurrency,
        sellCurrency = _state4.sellCurrency,
        buyAmount = _state4.buyAmount,
        sellAmount = _state4.sellAmount;


    if (value === sellCurrency) {
      sellCurrency = buyCurrency;
    }

    buyCurrency = value;

    _this2.getExchangeRate(buyCurrency, sellCurrency);

    var exchangeRate = _this2.state.exchangeRate;


    sellAmount = new _bignumber.BigNumber(String(buyAmount) || 0).dividedBy(exchangeRate);

    _this2.setState({
      buyCurrency: buyCurrency,
      sellCurrency: sellCurrency,
      sellAmount: sellAmount
    });
  };

  this.handleSellCurrencySelect = function (_ref5) {
    var value = _ref5.value;
    var _state5 = _this2.state,
        buyCurrency = _state5.buyCurrency,
        sellCurrency = _state5.sellCurrency,
        sellAmount = _state5.sellAmount,
        buyAmount = _state5.buyAmount;


    if (value === buyCurrency) {
      buyCurrency = sellCurrency;
    }

    sellCurrency = value;
    _this2.getExchangeRate(buyCurrency, sellCurrency);

    var exchangeRate = _this2.state.exchangeRate;


    buyAmount = new _bignumber.BigNumber(String(sellAmount) || 0).multipliedBy(exchangeRate);

    _this2.setState({
      buyCurrency: buyCurrency,
      sellCurrency: sellCurrency,
      buyAmount: buyAmount
    });
  };

  this.handleBuyAmountChange = function (value) {
    var exchangeRate = _this2.state.exchangeRate;


    if (!_this2.EventWasSend) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-enter-ordervalue');
      _this2.EventWasSend = true;
    }

    _this2.setState({
      sellAmount: new _bignumber.BigNumber(String(value) || 0).multipliedBy(exchangeRate).toNumber()
    });
  };

  this.handleSellAmountChange = function (value) {
    var exchangeRate = _this2.state.exchangeRate;


    if (!_this2.EventWasSend) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-enter-ordervalue');
      _this2.EventWasSend = true;
    }

    _this2.setState({
      buyAmount: new _bignumber.BigNumber(String(value) || 0).dividedBy(exchangeRate).toNumber()
    });
  };

  this.handleNext = function () {
    var _state6 = _this2.state,
        exchangeRate = _state6.exchangeRate,
        buyAmount = _state6.buyAmount,
        sellAmount = _state6.sellAmount;
    var onNext = _this2.props.onNext;


    _actions2.default.analytics.dataEvent('orderbook-addoffer-click-next-button');

    var isDisabled = !exchangeRate || !buyAmount || !sellAmount;

    if (!isDisabled) {
      onNext(_this2.state);
    }
  };

  this.changeBalance = function (value) {
    _this2.setState({
      sellAmount: value
    });
    _this2.handleSellAmountChange(value);
  };
}, _temp)) || _class) || _class);
exports.default = AddOffer;

/***/ }),
/* 1031 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sellGroup":"EElyaT","button":"_3riRsA"};

/***/ }),
/* 1032 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Group = __webpack_require__(1033);

var _Group2 = _interopRequireDefault(_Group);

var _FieldLabel = __webpack_require__(195);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(137);

var _Input2 = _interopRequireDefault(_Input);

var _CurrencySelect = __webpack_require__(1034);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
  var className = _ref.className,
      label = _ref.label,
      id = _ref.id,
      inputValueLink = _ref.inputValueLink,
      _ref$currency = _ref.currency,
      currency = _ref$currency === undefined ? true : _ref$currency,
      selectedCurrencyValue = _ref.selectedCurrencyValue,
      onCurrencySelect = _ref.onCurrencySelect;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _FieldLabel2.default,
      { inRow: true },
      label
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'groupField', className: className },
      _react2.default.createElement(_Input2.default, {
        styleName: 'inputRoot',
        inputContainerClassName: _Group2.default.inputContainer,
        valueLink: inputValueLink,
        pattern: '0-9\\.',
        id: id
      }),
      currency && _react2.default.createElement(_CurrencySelect2.default, {
        styleName: 'currencySelect',
        selectedValue: selectedCurrencyValue,
        onSelect: onCurrencySelect
      })
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Group, _Group2.default);

/***/ }),
/* 1033 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"groupField":"_2QVvGM","inputRoot":"_2gYR9R","inputContainer":"zgZs0H","currencySelect":"_3zcmBj"};

/***/ }),
/* 1034 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CurrencySelect = __webpack_require__(1035);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

var _DropDown = __webpack_require__(1036);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _Option = __webpack_require__(1039);

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrencySelect = function CurrencySelect(_ref) {
  var className = _ref.className,
      selectedValue = _ref.selectedValue,
      onSelect = _ref.onSelect;
  return _react2.default.createElement(_DropDown2.default, {
    className: className,
    items: [{ title: 'ETH', icon: 'eth', value: 'eth' }, { title: 'BTC', icon: 'btc', value: 'btc' }, { title: 'NOXON', icon: 'noxon', value: 'noxon' }, { title: 'SWAP', icon: 'swap', value: 'swap' }],
    selectedValue: selectedValue,
    selectedItemRender: function selectedItemRender(item) {
      return _react2.default.createElement(_Option2.default, item);
    },
    itemRender: function itemRender(item) {
      return _react2.default.createElement(_Option2.default, item);
    },
    onSelect: onSelect
  });
};

exports.default = (0, _reactCssModules2.default)(CurrencySelect, _CurrencySelect2.default);

/***/ }),
/* 1035 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1036 */
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

var _dec, _dec2, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _DropDown = __webpack_require__(1037);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _toggle = __webpack_require__(1038);

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropDown = (_dec = (0, _toggle2.default)(), _dec2 = (0, _reactCssModules2.default)(_DropDown2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(DropDown, _Component);

  function DropDown(_ref) {
    var initialValue = _ref.initialValue,
        selectedValue = _ref.selectedValue;
    (0, _classCallCheck3.default)(this, DropDown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DropDown.__proto__ || (0, _getPrototypeOf2.default)(DropDown)).call(this));

    _initialiseProps.call(_this);

    _this.state = {
      selectedValue: initialValue || selectedValue || 0
    };
    return _this;
  }

  (0, _createClass3.default)(DropDown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          items = _props.items,
          isToggleActive = _props.isToggleActive;


      var dropDownStyleName = (0, _classnames2.default)('dropDown', {
        'active': isToggleActive
      });

      return _react2.default.createElement(
        'div',
        { styleName: dropDownStyleName, className: className },
        _react2.default.createElement(
          'div',
          { styleName: 'selectedItem', onClick: this.toggle },
          _react2.default.createElement('div', { styleName: 'arrow' }),
          this.renderSelectedItem()
        ),
        isToggleActive && _react2.default.createElement(
          'div',
          { styleName: 'select' },
          items.map(function (item) {
            return _react2.default.createElement(
              'div',
              {
                key: item.value,
                styleName: 'option',
                onClick: function onClick() {
                  return _this2.handleOptionClick(item);
                }
              },
              _this2.renderItem(item)
            );
          })
        )
      );
    }
  }]);
  return DropDown;
}(_react.Component), _class2.propTypes = {
  initialValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
  })),
  selectedItemRender: _propTypes2.default.func,
  itemRender: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  isToggleActive: _propTypes2.default.bool.isRequired, // @toggle
  toggleOpen: _propTypes2.default.func.isRequired, // @toggle
  toggleClose: _propTypes2.default.func.isRequired // @toggle
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.toggle = function () {
    var _props2 = _this3.props,
        isToggleActive = _props2.isToggleActive,
        toggleOpen = _props2.toggleOpen,
        toggleClose = _props2.toggleClose;


    if (isToggleActive) {
      toggleClose();
    } else {
      toggleOpen();
    }
  };

  this.handleOptionClick = function (item) {
    var _props3 = _this3.props,
        toggleClose = _props3.toggleClose,
        selectedValue = _props3.selectedValue,
        onSelect = _props3.onSelect;

    // if there is no passed `selectedValue` then change it

    if (typeof selectedValue === 'undefined') {
      _this3.setState({
        selectedValue: item.value
      });
    }

    // for example we'd like to change `selectedValue` manually
    if (typeof onSelect === 'function') {
      onSelect(item);
    }

    toggleClose();
  };

  this.renderSelectedItem = function () {
    var _props4 = _this3.props,
        items = _props4.items,
        selectedItemRender = _props4.selectedItemRender;


    var selectedValue = typeof _this3.props.selectedValue !== 'undefined' ? _this3.props.selectedValue : _this3.state.selectedValue;
    var selectedItem = items.find(function (_ref2) {
      var value = _ref2.value;
      return value === selectedValue;
    });

    if (typeof selectedItemRender === 'function') {
      return selectedItemRender(selectedItem);
    }

    return selectedItem.title;
  };

  this.renderItem = function (item) {
    var itemRender = _this3.props.itemRender;


    if (typeof itemRender === 'function') {
      return itemRender(item);
    }

    return item.title;
  };
}, _temp)) || _class) || _class);
exports.default = DropDown;

/***/ }),
/* 1037 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropDown":"_3TGsDm","active":"_241k3D","arrow":"_4VDBhE","selectedItem":"_30-6Oj","select":"_2ukQw7","option":"_1fOZbQ"};

/***/ }),
/* 1038 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(70);

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { processClick: false };
  return function (Component) {
    return function (_PureComponent) {
      (0, _inherits3.default)(WrappedComponent, _PureComponent);

      function WrappedComponent() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WrappedComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WrappedComponent.__proto__ || (0, _getPrototypeOf2.default)(WrappedComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          isToggleActive: false
        }, _this.toggleClose = function (event) {
          if (options.processClick) {
            event.stopPropagation();

            document.removeEventListener('click', _this.toggleClose);
          }

          _this.setState({
            isToggleActive: false
          });
        }, _this.toggleOpen = function (event) {
          var isToggleActive = _this.state.isToggleActive;


          if (isToggleActive) {
            return;
          }

          if (options.processClick) {
            event.stopPropagation();

            document.addEventListener('click', _this.toggleClose);
          }

          _this.setState({
            isToggleActive: true
          });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(WrappedComponent, [{
        key: 'render',
        value: function render() {

          return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, this.state, {
            toggleOpen: this.toggleOpen,
            toggleClose: this.toggleClose
          }));
        }
      }]);
      return WrappedComponent;
    }(_react.PureComponent);
  };
};

/***/ }),
/* 1039 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Option = __webpack_require__(1040);

var _Option2 = _interopRequireDefault(_Option);

var _CurrencyIcon = __webpack_require__(374);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = function Option(_ref) {
  var icon = _ref.icon,
      title = _ref.title;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_CurrencyIcon2.default, { styleName: 'icon', name: icon }),
    title
  );
};

exports.default = (0, _reactCssModules2.default)(Option, _Option2.default);

/***/ }),
/* 1040 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"icon":"wo-HER"};

/***/ }),
/* 1041 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Select = __webpack_require__(1042);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
  var balance = _ref.balance,
      currency = _ref.currency,
      changeBalance = _ref.changeBalance;
  return _react2.default.createElement(
    'div',
    { styleName: 'groupField' },
    _react2.default.createElement(
      'p',
      null,
      currency + ' ' + balance.toFixed(3)
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'cell', onClick: function onClick() {
          return changeBalance(balance / 10);
        } },
      '1/10'
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'cell', onClick: function onClick() {
          return changeBalance(balance / 4);
        } },
      '1/4'
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'cell', onClick: function onClick() {
          return changeBalance(balance / 2);
        } },
      '1/2'
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'cell', onClick: function onClick() {
          return changeBalance(balance);
        } },
      'ALL'
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Select, _Select2.default);

/***/ }),
/* 1042 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"groupField":"_1TBx4e","cell":"_1fGtMw"};

/***/ }),
/* 1043 */
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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(12);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(69);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawModal = __webpack_require__(1044);

var _WithdrawModal2 = _interopRequireDefault(_WithdrawModal);

var _Modal = __webpack_require__(138);

var _Modal2 = _interopRequireDefault(_Modal);

var _FieldLabel = __webpack_require__(195);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(137);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(54);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithdrawModal = (_dec = (0, _reactCssModules2.default)(_WithdrawModal2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(WithdrawModal, _React$Component);

  function WithdrawModal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WithdrawModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithdrawModal.__proto__ || (0, _getPrototypeOf2.default)(WithdrawModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isSubmitted: false,
      address: '',
      amount: ''
    }, _this.handleSubmit = function () {
      var _this$state = _this.state,
          to = _this$state.address,
          amount = _this$state.amount;
      var _this$props$data = _this.props.data,
          currency = _this$props$data.currency,
          contractAddress = _this$props$data.contractAddress,
          address = _this$props$data.address,
          decimals = _this$props$data.decimals,
          balance = _this$props$data.balance;


      if (!to || !amount || amount < 0.01 || amount > balance) {
        _this.setState({
          isSubmitted: true
        });
        return;
      }

      var action = void 0;

      if (currency === 'ETH') {
        action = _actions2.default.ethereum;
      } else if (currency === 'BTC') {
        action = _actions2.default.bitcoin;
      } else if (currency === 'NIM') {
        action = _actions2.default.nimiq;
      } else if (currency === 'EOS') {
        action = _actions2.default.eos;
      } else {
        action = _actions2.default.token;
      }

      _actions2.default.loader.show(true, true);

      action.send(contractAddress || address, to, Number(amount), decimals).then(function () {
        _actions2.default.loader.hide();
        action.getBalance();

        _actions2.default.notifications.show(_helpers.constants.notifications.SuccessWithdraw, {
          amount: amount,
          currency: currency,
          address: to
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WithdrawModal, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          isSubmitted = _state.isSubmitted,
          address = _state.address,
          amount = _state.amount;
      var _props = this.props,
          name = _props.name,
          data = _props.data;
      var balance = data.balance;


      var linked = _swValuelink2.default.all(this, 'address', 'amount');
      var isDisabled = !address || !amount;

      if (isSubmitted) {
        linked.amount.check(function (value) {
          return value >= 0.01;
        }, 'Amount must be greater than 0.01 ');
        linked.amount.check(function (value) {
          return value < balance;
        }, 'Amount must be smaller your balance');
      }

      return _react2.default.createElement(
        _Modal2.default,
        { name: name, title: 'Withdraw ' + data.currency.toUpperCase() },
        _react2.default.createElement(
          'p',
          { style: { fontSize: '16px' } },
          'Please notice, that you need to have minimum 0.01 amount ',
          _react2.default.createElement('br', null),
          ' of the ETH on your wallet, to use it for Ethereum miners fee'
        ),
        _react2.default.createElement(
          _FieldLabel2.default,
          { inRow: true },
          'Address'
        ),
        _react2.default.createElement(_Input2.default, { valueLink: linked.address, pattern: '0-9a-zA-Z' }),
        _react2.default.createElement(
          _FieldLabel2.default,
          { inRow: true },
          'Amount'
        ),
        _react2.default.createElement(_Input2.default, { valueLink: linked.amount, pattern: '0-9\\.' }),
        !linked.amount.error && _react2.default.createElement(
          'div',
          { styleName: 'note' },
          'No less than 0.01'
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            styleName: 'button',
            brand: true,
            fullWidth: true,
            disabled: isDisabled,
            onClick: this.handleSubmit
          },
          'Transfer'
        )
      );
    }
  }]);
  return WithdrawModal;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.object
}, _temp2)) || _class);
exports.default = WithdrawModal;

/***/ }),
/* 1044 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"note":"_rh3p5","button":"_36O4pp"};

/***/ }),
/* 1045 */
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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(34);

var _moment = __webpack_require__(66);

var _moment2 = _interopRequireDefault(_moment);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(69);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PrivateKeysModal = __webpack_require__(1046);

var _PrivateKeysModal2 = _interopRequireDefault(_PrivateKeysModal);

var _Field = __webpack_require__(1047);

var _Field2 = _interopRequireDefault(_Field);

var _Modal = __webpack_require__(138);

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = __webpack_require__(54);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateKeysModal = (_dec = (0, _redaction.connect)({
  ethData: 'user.ethData',
  btcData: 'user.btcData'
}), _dec2 = (0, _reactCssModules2.default)(_PrivateKeysModal2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_React$PureComponent) {
  (0, _inherits3.default)(PrivateKeysModal, _React$PureComponent);

  function PrivateKeysModal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PrivateKeysModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PrivateKeysModal.__proto__ || (0, _getPrototypeOf2.default)(PrivateKeysModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: 'saveKeys', // saveKeys, checkKeys
      ethValidated: false,
      btcValidated: false
    }, _this.changeView = function (view) {
      _this.setState({
        view: view
      });
    }, _this.close = function () {
      var name = _this.props.name;


      _helpers.localStorage.setItem(_helpers.constants.localStorage.privateKeysSaved, true);
      _actions2.default.modals.close(name);
    }, _this.getText = function () {
      var _this$props = _this.props,
          ethData = _this$props.ethData,
          btcData = _this$props.btcData;


      var text = '\n' + window.location.hostname + ' emergency instruction\n\r\n\n\r\n\n#ETHEREUM\n\r\n\n\r\n\nEthereum address: ' + ethData.address + '  \r\n\nPrivate key: ' + ethData.privateKey + '\r\n\n\r\n\n\r\n\nHow to access tokens and ethers: \r\n\n1. Go here https://www.myetherwallet.com/#send-transaction \r\n\n2. Select \'Private key\'\r\n\n3. paste private key to input and click "unlock"\r\n\n\r\n\n\r\n\n\r\n\n# BITCOIN\r\n\n\r\n\n\r\n\nBitcoin address: ' + btcData.address + '\r\n\nPrivate key: ' + btcData.privateKey + '\r\n\n\r\n\n\r\n\n1. Go to blockchain.info\r\n\n2. login\r\n\n3. Go to settings > addresses > import\r\n\n4. paste private key and click "Ok"\r\n\n\r\n\n\r\n\n* We don`t store your private keys and will not be able to restore them!  \n    ';

      return text;
    }, _this.handleDownload = function () {
      var element = document.createElement('a');
      var text = _this.getText();
      var message = 'Check your browser downloads';

      element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', window.location.hostname + '_keys_' + (0, _moment2.default)().format('DD.MM.YYYY') + '.txt');

      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      _this.changeView('checkKeys');

      _actions2.default.notifications.show(_helpers.constants.notifications.Message, {
        message: message
      });
    }, _this.handleSendByEmail = function () {
      var text = _this.getText();

      window.open('mailto:?subject=Your_Subject&body=' + text);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PrivateKeysModal, [{
    key: 'render',
    value: function render() {
      var view = this.state.view;
      var _props = this.props,
          name = _props.name,
          ethData = _props.ethData,
          btcData = _props.btcData;


      var ethValidated = _swValuelink2.default.state(this, 'ethValidated');
      var btcValidated = _swValuelink2.default.state(this, 'btcValidated');
      var isValidated = ethValidated.value && btcValidated.value;

      return _react2.default.createElement(
        _Modal2.default,
        {
          styleName: 'modal',
          name: name,
          showCloseButton: false,
          whiteLogo: true,
          title: 'CAUTION!'
        },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          view === 'saveKeys' ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              'Before you continue be sure to save your private keys!',
              _react2.default.createElement('br', null),
              'It`s very important because If you don`t',
              _react2.default.createElement('br', null),
              'there is a big chance you`ll loose your money.'
            ),
            _react2.default.createElement(
              'div',
              { styleName: 'subTitle' },
              'We don`t store your private keys and will not be able to restore them!'
            ),
            _react2.default.createElement(
              _Button2.default,
              { brand: true, styleName: 'button', onClick: this.handleDownload },
              'Download instruction'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              'Please fill information below from instruction.txt file. We`d like to be sure that you saved the private keys before you can continue to the site.'
            ),
            _react2.default.createElement(_Field2.default, {
              label: ethData.currency,
              privateKey: ethData.privateKey,
              valueLink: ethValidated
            }),
            _react2.default.createElement(_Field2.default, {
              label: btcData.currency,
              privateKey: btcData.privateKey,
              valueLink: btcValidated
            }),
            isValidated && _react2.default.createElement(
              _Button2.default,
              { white: true, styleName: 'button', onClick: this.close },
              'GO TO THE SITE!'
            )
          )
        )
      );
    }
  }]);
  return PrivateKeysModal;
}(_react2.default.PureComponent), _class2.propTypes = {
  name: _propTypes2.default.string,
  ethData: _propTypes2.default.object.isRequired,
  btcData: _propTypes2.default.object.isRequired
}, _temp2)) || _class) || _class);
exports.default = PrivateKeysModal;

/***/ }),
/* 1046 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_3ixJuZ","content":"_3o3Tl_","title":"_1HvQwA","subTitle":"_2vKFTm","button":"_19cTFn"};

/***/ }),
/* 1047 */
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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(69);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Field = __webpack_require__(1048);

var _Field2 = _interopRequireDefault(_Field);

var _Input = __webpack_require__(137);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(54);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field2 = (_dec = (0, _reactCssModules2.default)(_Field2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Field2, _React$Component);

  function Field2() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Field2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Field2.__proto__ || (0, _getPrototypeOf2.default)(Field2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      error: false,
      success: false
    }, _this.handleCheck = function () {
      var _this$state = _this.state,
          value = _this$state.value,
          error = _this$state.error,
          success = _this$state.success;
      var _this$props = _this.props,
          valueLink = _this$props.valueLink,
          privateKey = _this$props.privateKey;


      if (error || success) {
        return;
      }

      if (value !== privateKey) {
        _this.setState({
          error: true
        });
      } else {
        valueLink.set(true);
        _this.setState({
          success: true
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Field2, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          error = _state.error,
          success = _state.success;
      var label = this.props.label;


      var linkedValue = _swValuelink2.default.state(this, 'value');

      return _react2.default.createElement(
        'div',
        { styleName: 'container' },
        _react2.default.createElement(
          'div',
          { styleName: 'section' },
          _react2.default.createElement(
            'div',
            { styleName: 'label' },
            label.toUpperCase()
          ),
          _react2.default.createElement(_Input2.default, {
            styleName: 'input',
            placeholder: 'Write private key here...',
            valueLink: linkedValue
          }),
          _react2.default.createElement(
            _Button2.default,
            {
              styleName: 'button',
              white: !success,
              green: success,
              onClick: this.handleCheck
            },
            success ? 'OK' : 'Check'
          )
        ),
        error && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          'You should pass correct value! Reload page and enter key again'
        )
      );
    }
  }]);
  return Field2;
}(_react2.default.Component), _class2.propTypes = {
  label: _propTypes2.default.string.isRequired,
  privateKey: _propTypes2.default.string.isRequired,
  valueLink: _propTypes2.default.object.isRequired
}, _temp2)) || _class);
exports.default = Field2;

/***/ }),
/* 1048 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_2VJQBX","section":"_3kogcs","label":"_2soNit","input":"BtOAgk","button":"guRICj","error":"vB1kUx"};

/***/ }),
/* 1049 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

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

var _modal = __webpack_require__(375);

var _controls = __webpack_require__(68);

var _forms = __webpack_require__(101);

var _swValuelink = __webpack_require__(69);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _actions = __webpack_require__(17);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _EosModal = __webpack_require__(1052);

var _EosModal2 = _interopRequireDefault(_EosModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EosModal = (_dec = (0, _reactCssModules2.default)(_EosModal2.default), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(EosModal, _React$Component);

  function EosModal() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EosModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EosModal.__proto__ || (0, _getPrototypeOf2.default)(EosModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      accountName: '',
      privateKey: '',
      error: ''
    }, _this.handleSubmit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$state, accountName, privateKey;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, accountName = _this$state.accountName, privateKey = _this$state.privateKey;


              _actions2.default.loader.show(true);

              _context.prev = 2;
              _context.next = 5;
              return _actions2.default.eos.init();

            case 5:
              _context.next = 7;
              return _actions2.default.eos.register(accountName, privateKey);

            case 7:
              _context.next = 9;
              return _actions2.default.eos.getBalance();

            case 9:

              _actions2.default.modals.close(_helpers.constants.modals.Eos);
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](2);

              console.error(_context.t0);
              _this.setState({ error: _context.t0.toString() });

            case 16:

              _actions2.default.loader.hide();

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[2, 12]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EosModal, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          accountName = _state.accountName,
          privateKey = _state.privateKey,
          error = _state.error;
      var name = this.props.name;


      var linked = _swValuelink2.default.all(this, 'accountName', 'privateKey');
      var isDisabled = !accountName || !privateKey;

      return _react2.default.createElement(
        _modal.Modal,
        { name: name, title: 'EOS Login' },
        _react2.default.createElement(
          _forms.FieldLabel,
          { inRow: true },
          'Account name'
        ),
        _react2.default.createElement(_forms.Input, { valueLink: linked.accountName }),
        _react2.default.createElement(
          _forms.FieldLabel,
          { inRow: true },
          'Private key'
        ),
        _react2.default.createElement(_forms.Input, { valueLink: linked.privateKey }),
        error && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          'Sorry, error occured during activation'
        ),
        _react2.default.createElement(
          _controls.Button,
          {
            styleName: 'button',
            brand: true,
            fullWidth: true,
            disabled: isDisabled,
            onClick: this.handleSubmit
          },
          'Login'
        )
      );
    }
  }]);
  return EosModal;
}(_react2.default.Component)) || _class);
exports.default = EosModal;

/***/ }),
/* 1050 */
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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(12);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ModalContainer = __webpack_require__(1051);

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

var _Overlay = __webpack_require__(363);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Center = __webpack_require__(364);

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
/* 1051 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalContainer":"_5wv85l","fullWidth":"_3v15t0","mounted":"_2elaml"};

/***/ }),
/* 1052 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3EXSN4","error":"vZrYLm"};

/***/ }),
/* 1053 */
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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Approve = __webpack_require__(1054);

var _Approve2 = _interopRequireDefault(_Approve);

var _modal = __webpack_require__(375);

var _controls = __webpack_require__(68);

var _forms = __webpack_require__(101);

var _helpers = __webpack_require__(12);

var _actions = __webpack_require__(17);

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
/* 1054 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"services":"mnkuaz","disabled":"_3R69kO","content":"_153K8d"};

/***/ }),
/* 1055 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalConductor":"qe8yZ6"};

/***/ }),
/* 1056 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(53);

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

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(34);

var _notifications = __webpack_require__(1057);

var _notifications2 = _interopRequireDefault(_notifications);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _NotificationConductor = __webpack_require__(1064);

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
/* 1057 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SuccessWithdraw = __webpack_require__(1058);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Message = __webpack_require__(1062);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  SuccessWithdraw: _SuccessWithdraw2.default,
  Message: _Message2.default
};

/***/ }),
/* 1058 */
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

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SuccessWithdraw = __webpack_require__(1059);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Notification = __webpack_require__(376);

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
/* 1059 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_3M190E"};

/***/ }),
/* 1060 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_1rGs3i","mounted":"_3e2bwy","removed":"_359s7d","notification":"_2HVVjT","content":"_2sHyls"};

/***/ }),
/* 1061 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "71af1b68ea0f662eb88996ea7a25bf8a.mp4";

/***/ }),
/* 1062 */
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

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Message = __webpack_require__(1063);

var _Message2 = _interopRequireDefault(_Message);

var _Notification = __webpack_require__(376);

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
/* 1063 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"xt8YYA"};

/***/ }),
/* 1064 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"notificationConductor":"_8T39zz"};

/***/ })
],[378]);