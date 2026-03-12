"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  Text
} = _antd.Typography;
const HeaderCompany = () => {
  return /*#__PURE__*/_react.default.createElement(_antd.Row, {
    justify: "start",
    align: "middle"
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 7,
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "/logo.png",
    alt: "Logo",
    style: {
      maxHeight: 40,
      width: 'auto'
    }
  })), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    span: 14,
    className: "company"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "C\xD4NG TY C\u1ED4 PH\u1EA6N FLAST SOLUTUON")), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/_react.default.createElement(Text, null, "H\xE0 N\u1ED9i: S\u1ED1 35 L\xEA V\u0103n L\u01B0\u01A1ng, Thanh Xu\xE2n, TP.H\xE0 N\u1ED9i"), /*#__PURE__*/_react.default.createElement(_antd.Row, {
    justify: "start",
    style: {
      marginTop: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement(Text, null, "(0987) 938-491"), /*#__PURE__*/_react.default.createElement(Text, {
    className: "left20"
  }, "flast.vn@printgo.vn"), /*#__PURE__*/_react.default.createElement(Text, {
    className: "left20"
  }, "www.flast.vn")))));
};
var _default = exports.default = HeaderCompany;