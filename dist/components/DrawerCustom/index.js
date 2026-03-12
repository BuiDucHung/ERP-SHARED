"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DrawerContent = _interopRequireDefault(require("./DrawerContent"));
var _DrawerRoute = _interopRequireDefault(require("./DrawerRoute"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /**************************************************************************/ /*  index.js                                                              */ /**************************************************************************/ /*                       Tệp này là một phần của:                         */ /*                             Open CDP                                   */ /*                        https://flast.vn                                */ /**************************************************************************/ /* Bản quyền (c) 2025 - này thuộc về các cộng tác viên Flast Solution     */ /* (xem AUTHORS.md).                                                      */ /* Bản quyền (c) 2024-2025 Long Huu, Quang Duc, Hung Bui                  */ /*                                                                        */ /* Bạn được quyền sử dụng phần mềm này miễn phí cho bất kỳ mục đích nào,  */ /* bao gồm sao chép, sửa đổi, phân phối, bán lại…                         */ /*                                                                        */ /* Chỉ cần giữ nguyên thông tin bản quyền và nội dung giấy phép này trong */ /* các bản sao.                                                           */ /*                                                                        */ /* Đội ngũ phát triển mong rằng phần mềm được sử dụng đúng mục đích và    */ /* có trách nghiệm                                                        */ /**************************************************************************/
const DrawerCustom = _ref => {
  let {
    children,
    onClose,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_DrawerRoute.default, _extends({
    onClose: onClose,
    title: title
  }, props), /*#__PURE__*/_react.default.createElement(_DrawerContent.default, _extends({
    title: title,
    onClose: onClose
  }, props), children));
};
var _default = exports.default = DrawerCustom;