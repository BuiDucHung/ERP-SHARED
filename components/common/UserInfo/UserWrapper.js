"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactI18next = require("react-i18next");
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _reactRouterDom = require("react-router-dom");
var _styles = _interopRequireDefault(require("./styles"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  UserWrapper.js                                                        */
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

const UserWrapper = _ref => {
  let {
    item,
    avatarProp = 'avatar',
    nameProp = 'name',
    noteProp,
    customNote,
    disabled,
    path,
    size
  } = _ref;
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const element = /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "user-info-wrapper",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Avatar, {
      size: size,
      src: item?.[avatarProp],
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.UserOutlined, {})
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "user-content",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "user-name ellipsis-2-t",
        children: item?.[nameProp] || t('error.waitingUpdate')
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "user-note",
        children: noteProp ? item?.[noteProp] : customNote
      })]
    })]
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.default, {
    children: !path || disabled ? element : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
      className: "link-default",
      to: path,
      children: element
    })
  });
};
var _default = exports.default = UserWrapper;