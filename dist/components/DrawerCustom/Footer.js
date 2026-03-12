"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _reactI18next = require("react-i18next");
var _styles = require("./styles");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /**************************************************************************/ /*  Footer.js                                                             */ /**************************************************************************/ /*                       Tệp này là một phần của:                         */ /*                             Open CDP                                   */ /*                        https://flast.vn                                */ /**************************************************************************/ /* Bản quyền (c) 2025 - này thuộc về các cộng tác viên Flast Solution     */ /* (xem AUTHORS.md).                                                      */ /* Bản quyền (c) 2024-2025 Long Huu, Quang Duc, Hung Bui                  */ /*                                                                        */ /* Bạn được quyền sử dụng phần mềm này miễn phí cho bất kỳ mục đích nào,  */ /* bao gồm sao chép, sửa đổi, phân phối, bán lại…                         */ /*                                                                        */ /* Chỉ cần giữ nguyên thông tin bản quyền và nội dung giấy phép này trong */ /* các bản sao.                                                           */ /*                                                                        */ /* Đội ngũ phát triển mong rằng phần mềm được sử dụng đúng mục đích và    */ /* có trách nghiệm                                                        */ /**************************************************************************/
const Footer = _ref => {
  let {
    onClose,
    onOk,
    okButtonProps,
    cancelButtonProps,
    okText = 'button.save'
  } = _ref;
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  return /*#__PURE__*/React.createElement(_styles.FooterStyles, {
    className: "footer-drawer"
  }, /*#__PURE__*/React.createElement(_antd.Button, _extends({
    onClick: onClose,
    className: "footer-drawer-btn w-50 cancel-button"
  }, cancelButtonProps), t('button.cancel')), /*#__PURE__*/React.createElement(_antd.Button, _extends({
    onClick: onOk,
    className: "footer-drawer-btn w-50",
    type: "primary"
  }, okButtonProps), t(okText)));
};
var _default = exports.default = Footer;