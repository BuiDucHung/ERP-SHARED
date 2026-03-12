"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _react = require("react");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CustomImage = _ref => {
  let {
    src,
    fallbackSrc = '/img/image_not_found.png',
    ...props
  } = _ref;
  const [imgSrc, setImgSrc] = (0, _react.useState)(src);
  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };
  return /*#__PURE__*/React.createElement(_antd.Image, _extends({
    src: imgSrc,
    onError: handleError
  }, props));
};
var _default = exports.default = CustomImage;