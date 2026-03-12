"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ButtonIcon = _interopRequireDefault(require("./ButtonIcon"));
var _styles = require("./styles");
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

const CustomButtonIcon = _ref => {
  let {
    handleClick,
    icon,
    title,
    buttonProps,
    className
  } = _ref;
  return /*#__PURE__*/React.createElement(_styles.CustomButtonIconWrapper, {
    className: `custom-button-icon-wrapper ${className || ''}`
  }, /*#__PURE__*/React.createElement(_ButtonIcon.default, {
    title: title,
    handleClick: handleClick,
    buttonProps: buttonProps,
    icon: icon
  }));
};
var _default = exports.default = CustomButtonIcon;