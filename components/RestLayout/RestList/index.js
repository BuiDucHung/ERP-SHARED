"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _tools = require("@flast-erp/core/utils/tools");
var _ListLayout = _interopRequireDefault(require("./ListLayout"));
var _RestFilter = _interopRequireDefault(require("../RestFilter"));
var _MyHooks = require("@flast-erp/core/hooks/MyHooks");
var _lodash = require("lodash");
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

const log = (k, v) => console.log('[component.RestLayout.RestList] ' + k, v);
const RestList = _ref => {
  let {
    onData = values => values,
    beforeSubmitFilter = values => values,
    filter,
    columns,
    apiPath = '',
    useGetAllQuery,
    initialFilter,
    tabKey,
    resource,
    hasCreate = true,
    tabProps = 'model',
    ...props
  } = _ref;
  let location = (0, _reactRouterDom.useLocation)();
  let navigate = (0, _reactRouterDom.useNavigate)();
  const onSetTableFilter = filter => {
    log('table filter', filter);
  };
  const [defaultQueryParams] = (0, _react.useState)((0, _tools.getQueryParamsFromUrl)(location.search));
  const [queryParams, setQueryParams] = (0, _react.useState)({
    ...initialFilter,
    ...defaultQueryParams,
    apiPath,
    resource
  });
  (0, _MyHooks.useUpdateEffect)(() => {
    if (!(0, _lodash.isEmpty)(initialFilter)) {
      setQueryParams(pre => ({
        ...pre,
        ...initialFilter
      }));
    }
  }, []);
  const {
    data,
    loading
  } = useGetAllQuery({
    queryParams,
    onData
  });
  const handleChangeQueryParams = params => {
    const restQueryParams = {
      ...queryParams,
      ...params
    };
    setQueryParams(restQueryParams);
    const {
      apiPath,
      ...urlParams
    } = restQueryParams;
    navigate({
      search: (0, _tools.convertObjToSearchStr)(urlParams)
    });
  };
  const onSubmitFilter = values => {
    handleChangeQueryParams({
      resource,
      page: 1,
      ...beforeSubmitFilter(values)
    });
  };
  const onClearFilter = () => {
    const initFilter = {
      apiPath: queryParams.apiPath,
      resource,
      page: 1,
      limit: 10
    };
    setQueryParams(initFilter);
    const {
      apiPath,
      ...params
    } = initFilter;
    navigate({
      search: (0, _tools.convertObjToSearchStr)(params)
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [filter && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RestFilter.default, {
      onSubmitFilter: onSubmitFilter,
      onClearFilter: onClearFilter,
      defaultQueryParams: defaultQueryParams,
      children: filter
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListLayout.default, {
      resource: resource,
      queryParams: queryParams,
      handleChangeQueryParams: handleChangeQueryParams,
      columns: columns,
      hasCreate: hasCreate,
      data: data?.embedded || [],
      totalItems: data?.page?.totalElements ?? 0,
      loading: loading,
      setTableFilter: onSetTableFilter,
      ...props
    })]
  });
};
var _default = exports.default = RestList;