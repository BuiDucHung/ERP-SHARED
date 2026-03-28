"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  ButtonIcon.js                                                         */
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

const ButtonIcon = _ref => {
  let {
    title = '',
    disabled,
    buttonProps,
    handleClick,
    icon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.SyncOutlined, {})
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
      title: _i18next.default.t(title),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
        ...buttonProps,
        disabled: buttonProps?.disabled || disabled,
        icon: icon,
        onClick: handleClick
      })
    })
  });
};
var _default = exports.default = ButtonIcon;