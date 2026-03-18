"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _RequestUtils = _interopRequireDefault(require("@erp/shared/dist/utils/RequestUtils"));
var _antd = require("antd");
var _lodash = require("lodash");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _reactI18next = require("react-i18next");
var _DataContext = _interopRequireDefault(require("@/DataContext"));
var _MyHooks = require("@erp/shared/dist/hooks/MyHooks");
var _icons = require("@ant-design/icons");
var _configs = require("@/configs");
var _dataUtils = require("@erp/shared/dist/utils/dataUtils");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  FormSelectAPI.js                                                      */
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
const FormSelectAPI = _ref => {
  let {
    apiPath = '',
    apiAddNewItem = '',
    name,
    label = '',
    required,
    messageRequire = 'error.required',
    placeholder = 'placeholder.select',
    rules = [],
    valueProp = 'id',
    titleProp = 'name',
    isFetchOnMount = true,
    formatText = value => value,
    formatValue = value => value,
    searchKey = 'name',
    initialValue,
    formItemProps,
    isShowModalCreateNewItem,
    onChangeGetSelectedItem,
    onCreateNewItem = () => false,
    isLimitWidth = false,
    filter,
    createDefaultValues,
    onData = values => values,
    fnLoadData,
    title = '',
    ...props
  } = _ref;
  const {
    f5List
  } = (0, _react.useContext)(_DataContext.default);
  const [localFilter, setLocalFilter] = (0, _react.useState)(filter || {});
  const [loading, setLoading] = (0, _react.useState)(false);
  const [resourceData, setData] = (0, _react.useState)([]);
  const [value, setValue] = (0, _react.useState)('');
  (0, _react.useEffect)(() => {
    setLocalFilter(filter);
  }, [filter]);
  (0, _MyHooks.useMount)(() => {
    if (isFetchOnMount && (0, _dataUtils.arrayEmpty)(resourceData)) {
      fetchResource(localFilter);
    }
  });
  const fetchResource = (0, _react.useCallback)(values => {
    if (!apiPath) {
      return;
    }
    if (fnLoadData) {
      Promise.resolve(fnLoadData(values)).then(onData).then(data => {
        setData(data);
      });
      return;
    }
    setLoading(true);
    _RequestUtils.default.Get('/' + apiPath, values).then(async _ref2 => {
      let {
        data,
        errorCode
      } = _ref2;
      if (errorCode !== 200) {
        return Promise.reject("Get not success from server .!");
      }
      Promise.resolve(onData(data)).then(data => {
        setData(data);
      });
      setLoading(false);
    }).catch(e => {
      console.log('[form.FormSelectAPI] Error ', e);
      setLoading(false);
    });
    /* eslint-disable-next-line */
  }, [onData, apiPath]);
  (0, _MyHooks.useUpdateEffect)(() => {
    if (f5List?.apiPath === apiPath || (localFilter?.forceUpdate ?? false) !== false) {
      fetchResource(localFilter);
    }
    /* eslint-disable-next-line */
  }, [f5List, localFilter, apiPath]);
  const {
    t
  } = (0, _reactI18next.useTranslation)();
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
  const addItem = (0, _react.useCallback)(async () => {
    /* Open Modal Create Data */
    if (onCreateNewItem()) {
      return;
    }
    if (!value || !apiAddNewItem) {
      return;
    }
    let dataPost = {
      [searchKey]: value,
      ...(createDefaultValues || {})
    };
    const {
      data,
      errorCode,
      message: msg
    } = await _RequestUtils.default.Post("/" + apiAddNewItem, dataPost);
    if (errorCode === _configs.SUCCESS_CODE) {
      const newData = resourceData.concat(data);
      setData(newData);
      setValue('');
    }
    _antd.message.info(msg);
    /* eslint-disable-next-line */
  }, [value, createDefaultValues, fnLoadData]);
  const onSearch = (0, _react.useCallback)(value => {
    fetchResource({
      ...localFilter,
      [searchKey]: value
    });
    /* eslint-disable-next-line */
  }, [localFilter, searchKey]);
  const handleValueInput = e => {
    setValue(e.target.value);
  };
  const handleChange = value => {
    if (!onChangeGetSelectedItem) return;
    const findItem = resourceData?.find(item => (0, _lodash.get)(item, valueProp) === value);
    onChangeGetSelectedItem(value, findItem);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
    label: t(label),
    name: name,
    rules: [{
      required,
      message: t(messageRequire)
    }, ...rules],
    initialValue: initialValue,
    ...formItemProps,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Select, {
      placeholder: t(placeholder),
      filterOption: false,
      popupMatchSelectWidth: isLimitWidth,
      dropdownRender: menu => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [menu, /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Divider, {
          style: {
            margin: '8px 0'
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            padding: "0 8px 4px",
            display: "flex",
            alignItems: "end"
          },
          children: [!isShowModalCreateNewItem && /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input, {
            style: {
              width: '100%'
            },
            placeholder: "Add new item",
            value: value,
            onChange: handleValueInput,
            onKeyDown: e => e.stopPropagation()
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
            type: "text",
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.PlusOutlined, {}),
            onClick: addItem,
            color: "primary",
            variant: "dashed",
            style: {
              marginLeft: 20
            },
            children: "Add item"
          })]
        })]
      }),
      options: resourceData?.map(item => ({
        label: formatText(titleProp ? (0, _lodash.get)(item, titleProp) : item, item),
        value: formatValue(valueProp ? (0, _lodash.get)(item, valueProp) : item, item)
      })),
      onSearch: (0, _debounce.default)(onSearch, 600),
      onChange: handleChange,
      ...props,
      children: loading && optionLoading
    })
  });
};
var _default = exports.default = FormSelectAPI;