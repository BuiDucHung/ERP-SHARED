"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  Text
} = _antd.Typography;
const HeaderCompany = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Row, {
    justify: "start",
    align: "middle",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
      span: 7,
      className: "logo",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: "/logo.png",
        alt: "Logo",
        style: {
          maxHeight: 40,
          width: 'auto'
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Col, {
      span: 14,
      className: "company",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
          children: "C\xD4NG TY C\u1ED4 PH\u1EA6N FLAST SOLUTUON"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "contact",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
          children: "H\xE0 N\u1ED9i: S\u1ED1 35 L\xEA V\u0103n L\u01B0\u01A1ng, Thanh Xu\xE2n, TP.H\xE0 N\u1ED9i"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Row, {
          justify: "start",
          style: {
            marginTop: '5px'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
            children: "(0987) 938-491"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
            className: "left20",
            children: "flast.vn@printgo.vn"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
            className: "left20",
            children: "www.flast.vn"
          })]
        })]
      })]
    })]
  });
};
var _default = exports.default = HeaderCompany;