"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _antd = require("antd");
var _lodash = require("lodash");
var _reactI18next = require("react-i18next");
var _tools = require("@/dist/utils/tools");
var _jsxRuntime = require("react/jsx-runtime");
/**************************************************************************/
/*  FormAutoComplete.js                                                   */
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

const {
  Option
} = _antd.AutoComplete;
const FormAutoComplete = _ref => {
  let {
    name,
    label = '',
    required,
    messageRequire = 'error.required',
    placeholder = 'placeholder.select',
    rules = [],
    resourceData,
    valueProp = 'id',
    titleProp = 'name',
    isFilterOption = true,
    formatText = value => value,
    formatValue = value => value.toString(),
    searchKey = 'name',
    loading,
    initialValue,
    formItemProps,
    customGetValueFromEvent,
    ...props
  } = _ref;
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const onSelectOption = (0, _react.useCallback)((inputValue, option) => {
    const data = (0, _lodash.isObject)(option.children) ? (0, _lodash.get)(option.children.props?.record, searchKey) : option.children;
    if ((0, _tools.onSearch)(data, inputValue)) {
      return option.value;
    }
    return null;
  }, [searchKey]);
  const optionLoading = (0, _react.useMemo)(() => /*#__PURE__*/(0, _jsxRuntime.jsx)(Option, {
    className: "loading-select-option",
    disabled: true,
    value: "loadingTracking",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "loading-select",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Spin, {})
    })
  }, "loading"), []);
  const getValueFromEvent = value => {
    if (!customGetValueFromEvent) {
      return value;
    }
    const findItem = resourceData?.find(item => (0, _lodash.get)(item, valueProp).toString() === value);
    return customGetValueFromEvent(value, findItem);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
    label: t(label),
    name: name,
    rules: [{
      required,
      message: t(messageRequire)
    }, ...rules],
    initialValue: initialValue,
    ...(customGetValueFromEvent && {
      getValueFromEvent
    }),
    ...formItemProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.AutoComplete, {
      placeholder: t(placeholder),
      filterOption: isFilterOption ? onSelectOption : false,
      ...props,
      children: [(0, _lodash.map)(resourceData, (data, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(Option, {
        value: formatValue(valueProp ? (0, _lodash.get)(data, valueProp) : data),
        children: formatText(titleProp ? (0, _lodash.get)(data, titleProp) : data)
      }, String(index))), loading && optionLoading]
    })
  });
};
var _default = exports.default = FormAutoComplete;