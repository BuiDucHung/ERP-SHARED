"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _antd = require("antd");
var _lodash = require("lodash");
var _reactWaypoint = require("react-waypoint");
var _reactI18next = require("react-i18next");
var _tools = require("@/dist/utils/tools");
var _jsxRuntime = require("react/jsx-runtime");
/**************************************************************************/
/*  FormSelect.js                                                         */
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
} = _antd.Select;
const FormSelect = _ref => {
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
    formatValue = value => value,
    searchKey = 'name',
    loading,
    onEnter,
    enableWaypoint,
    initialValue,
    formItemProps,
    isShowTooltip,
    onChangeGetSelectedItem,
    onChange,
    isLimitWidth = false,
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
  const optionWaypoint = /*#__PURE__*/(0, _jsxRuntime.jsx)(Option, {
    className: "loading-select-option",
    disabled: true,
    value: "waypointTracking",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        height: 1
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactWaypoint.Waypoint, {
        onEnter: onEnter
      })
    })
  }, "waypoint");
  const optionLoading = (0, _react.useMemo)(() => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Option, {
      className: "loading-select-option",
      disabled: true,
      value: "loadingTracking",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "loading-select",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Spin, {})
      })
    }, "loading");
  }, []);
  const handleChange = value => {
    if (!onChangeGetSelectedItem) return;
    const findItem = resourceData?.find(item => (0, _lodash.get)(item, valueProp) === value);
    onChangeGetSelectedItem(value, findItem);
  };
  const formItem = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
    label: t(label),
    name: name,
    rules: [{
      required,
      message: t(messageRequire)
    }, ...rules],
    initialValue: initialValue,
    ...formItemProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Select, {
      placeholder: t(placeholder),
      filterOption: isFilterOption ? onSelectOption : false,
      popupMatchSelectWidth: isLimitWidth,
      ...props,
      onChange: onChange || handleChange,
      children: [(0, _lodash.map)(resourceData, (data, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(Option, {
        value: formatValue(valueProp ? (0, _lodash.get)(data, valueProp) : data, data),
        children: formatText(titleProp ? (0, _lodash.get)(data, titleProp) : data, data)
      }, String(index))), enableWaypoint && optionWaypoint, loading && optionLoading]
    })
  });
  return isShowTooltip ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
    title: placeholder ? t(placeholder) : '',
    children: formItem
  }) : formItem;
};
var _default = exports.default = FormSelect;