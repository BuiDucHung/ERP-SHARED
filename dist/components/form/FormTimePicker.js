"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _constant = require("@/configs/constant");
var _reactI18next = require("react-i18next");
var _jsxRuntime = require("react/jsx-runtime");
/**************************************************************************/
/*  FormTimePicker.js                                                     */
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
    ...(label && {
      label: t(label)
    }),
    name: name,
    rules: [{
      required,
      message: t(messageRequire)
    }, ...rules],
    initialValue: initialValue,
    ...formItemProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.TimePicker, {
      onChange: onChange,
      format: format,
      ...(placeholder && {
        placeholder: t(placeholder)
      }),
      ...props
    })
  });
};
var _default = exports.default = FormTimePicker;