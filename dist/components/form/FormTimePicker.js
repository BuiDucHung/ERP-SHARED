"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _constant = require("@/configs/constant");
var _reactI18next = require("react-i18next");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /**************************************************************************/ /*  FormTimePicker.js                                                     */ /**************************************************************************/ /*                       Tệp này là một phần của:                         */ /*                             Open CDP                                   */ /*                        https://flast.vn                                */ /**************************************************************************/ /* Bản quyền (c) 2025 - này thuộc về các cộng tác viên Flast Solution     */ /* (xem AUTHORS.md).                                                      */ /* Bản quyền (c) 2024-2025 Long Huu, Quang Duc, Hung Bui                  */ /*                                                                        */ /* Bạn được quyền sử dụng phần mềm này miễn phí cho bất kỳ mục đích nào,  */ /* bao gồm sao chép, sửa đổi, phân phối, bán lại…                         */ /*                                                                        */ /* Chỉ cần giữ nguyên thông tin bản quyền và nội dung giấy phép này trong */ /* các bản sao.                                                           */ /*                                                                        */ /* Đội ngũ phát triển mong rằng phần mềm được sử dụng đúng mục đích và    */ /* có trách nghiệm                                                        */ /**************************************************************************/
const FormTimePicker = _ref => {
  let {
    name,
    label,
    required,
    messageRequire = 'error.required',
    onChange,
    initialValue,
    rules = [],
    placeholder,
    format = _constant.FORMAT_TIME_INPUT,
    formItemProps,
    ...props
  } = _ref;
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  return /*#__PURE__*/React.createElement(_antd.Form.Item, _extends({}, label && {
    label: t(label)
  }, {
    name: name,
    rules: [{
      required,
      message: t(messageRequire)
    }, ...rules],
    initialValue: initialValue
  }, formItemProps), /*#__PURE__*/React.createElement(_antd.TimePicker, _extends({
    onChange: onChange,
    format: format
  }, placeholder && {
    placeholder: t(placeholder)
  }, props)));
};
var _default = exports.default = FormTimePicker;