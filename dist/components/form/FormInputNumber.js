"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _reactI18next = require("react-i18next");
var _tools = require("@/utils/tools");
var _jsxRuntime = require("react/jsx-runtime");
/**************************************************************************/
/*  FormInputNumber.js                                                    */
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

const FormInputNumber = _ref => {
  let {
    name,
    label,
    required,
    messageRequire = 'error.required',
    placeholder,
    rules = [],
    initialValue,
    formItemProps,
    isShowTooltip,
    form,
    ...props
  } = _ref;
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const formItem = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
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
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.InputNumber, {
      ...(placeholder && {
        placeholder: t(placeholder)
      }),
      formatter: _tools.formatterInputNumber,
      parser: _tools.parserInputNumber,
      ...props
    })
  });
  return isShowTooltip ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
    title: placeholder ? t(placeholder) : '',
    children: formItem
  }) : formItem;
};
var _default = exports.default = FormInputNumber;