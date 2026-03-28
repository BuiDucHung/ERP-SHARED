"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _antd = require("antd");
var _reactI18next = require("react-i18next");
var _FormContextCustom = require("@flast-erp/core/components/context/FormContextCustom");
var _styles = _interopRequireDefault(require("./styles"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  index.js                                                              */
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

const RestFilter = _ref => {
  let {
    children,
    greyInput,
    onSubmitFilter = () => null,
    onClearFilter = () => null,
    responsiveFilter = {
      xxl: 20,
      xl: 20,
      lg: 18,
      md: 24,
      xs: 24
    },
    responsiveAction = {
      xxl: 4,
      xl: 4,
      lg: 6,
      md: 24,
      xs: 24
    },
    defaultQueryParams
  } = _ref;
  const [form] = _antd.Form.useForm();
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const onFilter = () => {
    form.validateFields().then(onSubmitFilter);
  };
  const onClear = () => {
    form.resetFields();
    onClearFilter();
  };
  (0, _react.useEffect)(() => {
    form.setFieldsValue(defaultQueryParams);
  }, [form, defaultQueryParams]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.default, {
    className: greyInput ? 'grey-input-filter' : 'default-input-filter',
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form, {
      form: form,
      autoComplete: "off",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormContextCustom.FormContextCustom.Provider, {
        value: {
          form,
          allowPressEnter: true,
          handleSubmit: onFilter
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Row, {
          gutter: 16,
          className: "row-filter",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
            ...responsiveFilter,
            children: children
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Col, {
            ...responsiveAction,
            className: "row-action-bottom",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
              type: "primary",
              className: "filterButton",
              onClick: onFilter,
              children: t('button.filter')
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
              className: "clearButton",
              onClick: onClear,
              children: t('button.clearFilter')
            })]
          })]
        })
      })
    })
  });
};
var _default = exports.default = RestFilter;