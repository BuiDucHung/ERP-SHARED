"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _icons = require("@ant-design/icons");
var _reactI18next = require("react-i18next");
var _styles = require("./styles");
/**************************************************************************/
/*  Header.js                                                             */
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

const Header = _ref => {
  let {
    title,
    onClose
  } = _ref;
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  return /*#__PURE__*/React.createElement(_styles.HeaderStyles, null, /*#__PURE__*/React.createElement("div", {
    className: "drawer-header-title"
  }, t(title)), /*#__PURE__*/React.createElement(_icons.CloseSquareOutlined, {
    onClick: onClose,
    className: "drawer-header-icon",
    type: "close-square"
  }));
};
var _default = exports.default = Header;