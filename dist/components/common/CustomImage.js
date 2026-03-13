"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Image, {
    src: imgSrc,
    onError: handleError,
    ...props
  });
};
var _default = exports.default = CustomImage;