'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var defaultTheme = {
  primary: {
    main: '#1e88e5',
    dark: '#005cb2',
    light: '#6ab7ff'
  },
  secondary: {
    main: '#f50057',
    dark: '#c51162',
    light: '#ff4081'
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f'
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  background: {
    "default": '#fafafa'
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  },
  paper: {
    backgroundColor: 'white',
    borderRadius: 2
  },
  divider: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.12)'
  },
  button: {
    padding: 8,
    borderRadius: 4
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: '#2196f3'
  },
  outlinedButton: {
    borderColor: 'rgba(0,0,0,.29)',
    borderWidth: 1,
    paddingHorizontal: 16
  },
  containedButton: {
    paddingHorizontal: 16,
    backgroundColor: '#2196f3'
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.5
  },
  bodyTextTwo: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.25
  },
  caption: {
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.4
  },
  headingOne: {
    fontWeight: '300',
    fontSize: 96,
    lineHeight: 96,
    letterSpacing: -1.5
  },
  headingTwo: {
    fontWeight: '300',
    fontSize: 60,
    lineHeight: 60,
    letterSpacing: -0.5
  },
  headingThree: {
    fontSize: 48,
    lineHeight: 48
  },
  headingFour: {
    fontSize: 34,
    lineHeight: 34,
    letterSpacing: 0.25
  },
  headingFive: {
    fontSize: 24,
    lineHeight: 24
  },
  headingSix: {
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.15,
    fontWeight: '500'
  },
  overline: {
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase'
  },
  subtitleOne: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.15
  },
  subtitleTwo: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.1,
    fontWeight: '500'
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var ThemeContext = React__default.createContext(defaultTheme);

var ReThemeProvider =
function (_Component) {
  _inherits(ReThemeProvider, _Component);
  function ReThemeProvider() {
    _classCallCheck(this, ReThemeProvider);
    return _possibleConstructorReturn(this, _getPrototypeOf(ReThemeProvider).apply(this, arguments));
  }
  _createClass(ReThemeProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value,
          merge = _this$props.merge;
      var doMerge = Boolean(merge || !merge && merge !== false) || false;
      return React__default.createElement(ThemeContext.Provider, {
        value: value || {},
        merge: doMerge
      }, children);
    }
  }]);
  return ReThemeProvider;
}(React.Component);

var deepMerge = function deepMerge() {
  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }
  return sources.reduce(function (merged, source) {
    return source instanceof Array ?
    [].concat(_toConsumableArray(merged instanceof Array && merged || []), _toConsumableArray(source)) :
    source instanceof Object ? Object.entries(source)
    .reduce(function (joined, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
      return _objectSpread2({}, joined, _defineProperty({}, key,
      typeof value !== 'function' && value instanceof Object && key in joined &&
      deepMerge(joined[key], value) ||
      value));
    },
    merged) :
    merged;
  }, {});
};
var mergeTheme = function mergeTheme(userTheme, merge) {
  return merge && deepMerge(defaultTheme, userTheme) || userTheme;
};

var withTheme = function withTheme(Component) {
  return (
    function (_React$Component) {
      _inherits(_class, _React$Component);
      function _class() {
        _classCallCheck(this, _class);
        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }
      _createClass(_class, [{
        key: "render",
        value: function render() {
          var _this = this;
          return React__default.createElement(ThemeContext.Consumer, null, function (theme, merge) {
            return React__default.createElement(Component, _extends({
              theme: mergeTheme(theme, merge)
            }, _this.props));
          });
        }
      }]);
      return _class;
    }(React__default.Component)
  );
};

exports.ReThemeProvider = ReThemeProvider;
exports.ThemeContext = ThemeContext;
exports.defaultTheme = defaultTheme;
exports.withTheme = withTheme;
