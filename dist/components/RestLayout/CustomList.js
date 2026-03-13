"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _antd = require("antd");
var _CustomButton = _interopRequireDefault(require("../CustomButton"));
var _useGetList = _interopRequireDefault(require("../../hooks/useGetList"));
var _dataUtils = require("../../utils/dataUtils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CustomList = _ref => {
  let {
    apiPath = '',
    filter = '',
    grid = {},
    hasCreate = false,
    onClickCreate = values => values,
    renderItem = record => '',
    onData = data => data
  } = _ref;
  const [form] = _antd.Form.useForm();
  const [filterFormValues, setFilterFormValues] = (0, _react.useState)({
    apiPath,
    page: 1
  });
  const {
    data: {
      embedded,
      page
    },
    loading
  } = (0, _useGetList.default)({
    queryParams: filterFormValues,
    onData: onData
  });
  const handleFilterChange = allValues => {
    const formattedValues = {
      ...allValues
    };
    (0, _dataUtils.dateFormatOnSubmit)(formattedValues, ['from', 'to']);
    setFilterFormValues(pre => ({
      ...pre,
      ...formattedValues
    }));
  };
  const handlePageChange = (page, pageSize) => {
    setFilterFormValues(pre => ({
      ...pre,
      page
    }));
  };
  const resetFilter = () => {
    form.resetFields();
    form.submit();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "content-list",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Form, {
      onFinish: handleFilterChange,
      form: form,
      children: [filter, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Space, {
        align: "end",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CustomButton.default, {
          title: "T\xECm ki\u1EBFm",
          htmlType: "submit"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CustomButton.default, {
          title: "X\xF3a l\u1ECDc",
          variant: "dashed",
          onClick: resetFilter
        }), hasCreate && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CustomButton.default, {
          title: "Th\xEAm m\u1EDBi",
          color: "primary",
          variant: "solid",
          onClick: onClickCreate
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.List, {
      style: {
        marginTop: 20
      },
      grid: {
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
        ...grid
      },
      dataSource: embedded,
      renderItem: renderItem,
      loading: loading,
      pagination: {
        current: filterFormValues?.page || 1,
        total: page?.totalElements || 0,
        pageSize: 10,
        onChange: handlePageChange,
        showSizeChanger: false
      }
    })]
  });
};
var _default = exports.default = CustomList;