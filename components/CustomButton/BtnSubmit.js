"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _jsxRuntime = require("react/jsx-runtime");
/**************************************************************************/
/*  BtnSubmit.js                                                          */
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

const BtnSubmit = _ref => {
  let {
    marginTop = 20,
    text,
    ...props
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      marginTop: marginTop
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
      className: "btn-next",
      type: "primary",
      htmlType: "submit",
      ...props,
      children: text
    })
  });
};
var _default = exports.default = BtnSubmit;