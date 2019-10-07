'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jsutils = require('jsutils');
var React = require('react');
var React__default = _interopDefault(React);

var defaultTheme = {};
var setDefaultTheme = function setDefaultTheme(theme) {
  var merge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!jsutils.isObj(theme)) return console.warn("setDefaultTheme method requires an theme object as the first argument. Receive: ", theme);
  defaultTheme = merge ? jsutils.deepMerge(defaultTheme, theme) : theme;
};
var getDefaultTheme = function getDefaultTheme() {
  return defaultTheme;
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var ThemeContext = React__default.createContext(getDefaultTheme());

var ReThemeData = {};
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
          theme = _this$props.theme,
          merge = _this$props.merge,
          dimensions = _this$props.dimensions;
      if (!ReThemeData.theme || ReThemeData.theme !== theme) {
        ReThemeData.theme = theme;
        ReThemeData.merge = Boolean(merge || !merge && merge !== false) || false, ReThemeData.dimensions = Boolean(dimensions !== false && dimensions !== null);
      }
      return React__default.createElement(ThemeContext.Provider, {
        value: ReThemeData
      }, children);
    }
  }]);
  return ReThemeProvider;
}(React.Component);

var sizeMap = {
  small: 340,
  medium: 760,
  large: 1080
};
var getDimensionsMap = function getDimensionsMap() {
  return sizeMap;
};
var sizeArrays = {
  large: ['small', 'medium', 'large'],
  medium: ['small', 'medium'],
  small: ['small']
};
var joinThemeDimensions = function joinThemeDimensions(size, theme) {
  if (!jsutils.isObj(theme) || sizeArrays.large.indexOf(size) == -1) return theme;
  var small = theme.small,
      medium = theme.medium,
      large = theme.large,
      useTheme = _objectWithoutProperties(theme, ["small", "medium", "large"]);
  return !sizeArrays[size]
  ? jsutils.isObj(theme.small)
  ? jsutils.deepMerge(useTheme, theme.small)
  : useTheme : sizeArrays[size].reduce(function (joined, size) {
    return jsutils.isObj(theme[size])
    ? jsutils.deepMerge(joined, theme[size])
    : joined;
  }, useTheme);
};

var getDimensions = function getDimensions(theme) {
  if (!window.innerWidth) return theme;
  var curWidth = window.innerWidth;
  var dimensionsMap = getDimensionsMap();
  var currentSize = Object.entries(dimensionsMap).reduce(function (updateSize, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
    if (curWidth <= value) return updateSize;else if (value <= curWidth) {
      if (updateSize) {
        if (value > dimensionsMap[updateSize]) {
          updateSize = key;
        }
      } else updateSize = key;
    }
    return updateSize;
  }, 'small');
  return joinThemeDimensions(currentSize, theme);
};

var getTheme = function getTheme(userTheme, merge, useDimensions) {
  var defTheme = getDefaultTheme();
  var mergedTheme = !jsutils.isObj(userTheme) ? defTheme : merge ? jsutils.deepMerge(getDefaultTheme(), userTheme) : userTheme;
  return useDimensions ? getDimensions(mergedTheme) : mergedTheme;
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
          return React__default.createElement(ThemeContext.Consumer, null, function (value) {
            var theme = value.theme,
                merge = value.merge,
                dimensions = value.dimensions;
            return React__default.createElement(Component, _extends({
              theme: getTheme(theme, merge, dimensions)
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
exports.getDefaultTheme = getDefaultTheme;
exports.setDefaultTheme = setDefaultTheme;
exports.withTheme = withTheme;
