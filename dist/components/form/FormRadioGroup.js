"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _reactI18next = require("react-i18next");
var _lodash = require("lodash");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /**************************************************************************/ /*  FormRadioGroup.js                                                     */ /**************************************************************************/ /*                       Tệp này là một phần của:                         */ /*                             Open CDP                                   */ /*                        https://flast.vn                                */ /**************************************************************************/ /* Bản quyền (c) 2025 - này thuộc về các cộng tác viên Flast Solution     */ /* (xem AUTHORS.md).                                                      */ /* Bản quyền (c) 2024-2025 Long Huu, Quang Duc, Hung Bui                  */ /*                                                                        */ /* Bạn được quyền sử dụng phần mềm này miễn phí cho bất kỳ mục đích nào,  */ /* bao gồm sao chép, sửa đổi, phân phối, bán lại…                         */ /*                                                                        */ /* Chỉ cần giữ nguyên thông tin bản quyền và nội dung giấy phép này trong */ /* các bản sao.                                                           */ /*                                                                        */ /* Đội ngũ phát triển mong rằng phần mềm được sử dụng đúng mục đích và    */ /* có trách nghiệm                                                        */ /**************************************************************************/
const FormRadioGroup = _ref => {
  let {
    name,
    label,
    required,
    messageRequire = 'error.required',
    placeholder,
    valueProp = 'id',
    titleProp = 'name',
    formatText = value => value,
    formatValue = value => value,
    rules = [],
    resourceData = [],
    initialValue,
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
    initialValue: initialValue,
    rules: [{
      required,
      message: t(messageRequire)
    }, ...rules]
  }, formItemProps), /*#__PURE__*/React.createElement(_antd.Radio.Group, _extends({}, placeholder && {
    placeholder: t(placeholder)
  }, props), (0, _lodash.map)(resourceData, (data, index) => /*#__PURE__*/React.createElement(_antd.Radio, {
    key: String(index),
    value: formatValue(valueProp ? (0, _lodash.get)(data, valueProp) : data, data)
  }, formatText(titleProp ? (0, _lodash.get)(data, titleProp) : data, data)))));
};
var _default = exports.default = FormRadioGroup;