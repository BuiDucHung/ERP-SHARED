"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _reactI18next = require("react-i18next");
var _lodash = require("lodash");
var _jsxRuntime = require("react/jsx-runtime");
/**************************************************************************/
/*  FormRadioGroup.js                                                     */
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
    ...(label && {
      label: t(label)
    }),
    name: name,
    initialValue: initialValue,
    rules: [{
      required,
      message: t(messageRequire)
    }, ...rules],
    ...formItemProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Radio.Group, {
      ...(placeholder && {
        placeholder: t(placeholder)
      }),
      ...props,
      children: (0, _lodash.map)(resourceData, (data, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Radio, {
        value: formatValue(valueProp ? (0, _lodash.get)(data, valueProp) : data, data),
        children: formatText(titleProp ? (0, _lodash.get)(data, titleProp) : data, data)
      }, String(index)))
    })
  });
};
var _default = exports.default = FormRadioGroup;