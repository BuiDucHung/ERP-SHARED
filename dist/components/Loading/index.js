"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  index.js                                                              */
/**************************************************************************/
/*                       Tệp này là một phần của:                         */
/*                             Open CDP                                   */
/*                        https://flast.vn                                */
/**************************************************************************/
/* Bản quyền (c) 2025 - này thuộc về các cộng tác viên Flast Solution     */
/* (xem AUTHORS.md).                                                      */
/* Bản quyền (c) 2024-2025 Long Huu, Quang Duc, Hung Bui                  */
/*                                                                        */
/* Bạn được quyền sử dụng phần mềm này miễn phí cho bất kỳ mục đích nào,  */
/* bao gồm sao chép, sửa đổi, phân phối, bán lại…                         */
/*                                                                        */
/* Chỉ cần giữ nguyên thông tin bản quyền và nội dung giấy phép này trong */
/* các bản sao.                                                           */
/*                                                                        */
/* Đội ngũ phát triển mong rằng phần mềm được sử dụng đúng mục đích và    */
/* có trách nghiệm                                                        */
/**************************************************************************/

const Loading = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: "middle"
  }, /*#__PURE__*/_react.default.createElement(_antd.Spin, {
    size: "small"
  }), /*#__PURE__*/_react.default.createElement(_antd.Spin, null), /*#__PURE__*/_react.default.createElement(_antd.Spin, {
    size: "large"
  })));
};
var _default = exports.default = Loading;