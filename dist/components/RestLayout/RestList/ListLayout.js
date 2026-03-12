"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _antd = require("antd");
var _styles = _interopRequireDefault(require("./styles"));
var _reactRouterDom = require("react-router-dom");
var _configs = require("@/configs");
var _CreateButton = _interopRequireDefault(require("../../RestActions/CreateButton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /**************************************************************************/ /*  ListLayout.js                                                         */ /**************************************************************************/ /*                       Tệp này là một phần của:                         */ /*                             Open CDP                                   */ /*                        https://flast.vn                                */ /**************************************************************************/ /* Bản quyền (c) 2025 - này thuộc về các cộng tác viên Flast Solution     */ /* (xem AUTHORS.md).                                                      */ /* Bản quyền (c) 2024-2025 Long Huu, Quang Duc, Hung Bui                  */ /*                                                                        */ /* Bạn được quyền sử dụng phần mềm này miễn phí cho bất kỳ mục đích nào,  */ /* bao gồm sao chép, sửa đổi, phân phối, bán lại…                         */ /*                                                                        */ /* Chỉ cần giữ nguyên thông tin bản quyền và nội dung giấy phép này trong */ /* các bản sao.                                                           */ /*                                                                        */ /* Đội ngũ phát triển mong rằng phần mềm được sử dụng đúng mục đích và    */ /* có trách nghiệm                                                        */ /**************************************************************************/
const ListLayout = _ref => {
  let {
    columns,
    data,
    xScroll,
    pagination = {},
    rowKey = 'id',
    hasCreate = true,
    handleChangeQueryParams = () => null,
    resource,
    queryParams,
    totalItems,
    setTableFilter,
    customClickCreate,
    customActions,
    expandable,
    ...props
  } = _ref;
  const location = (0, _reactRouterDom.useLocation)();
  const navigate = (0, _reactRouterDom.useNavigate)();
  const showTotal = (0, _react.useCallback)((total, range) => `${range[0]}-${range[1]}/${total}`, []);
  const onChangeTable = (pagination, filters, sorter) => {
    setTableFilter(filters);
    handleChangeQueryParams(filters);
  };
  const paginationResult = {
    total: totalItems || 0,
    pageSize: queryParams?.limit || 10,
    current: queryParams?.page || 1,
    showSizeChanger: true,
    showQuickJumper: false,
    showTotal,
    ...pagination
  };
  const onChangePagination = (page, pageSize) => {
    handleChangeQueryParams({
      page,
      limit: pageSize
    });
  };
  const handleClickCreate = () => {
    if (customClickCreate) {
      customClickCreate();
    } else {
      navigate({
        search: location.search,
        hash: `${_configs.HASH_MODAL}/${resource}/create`
      });
    }
  };
  return /*#__PURE__*/React.createElement(_styles.default, null, /*#__PURE__*/React.createElement("div", {
    className: "list-layout__pagination-top"
  }, /*#__PURE__*/React.createElement(_antd.Pagination, _extends({}, paginationResult, {
    onChange: onChangePagination
  })), /*#__PURE__*/React.createElement("div", {
    className: "list-layout__group-action"
  }, /*#__PURE__*/React.createElement(_antd.Space, {
    size: 10
  }, customActions, hasCreate && /*#__PURE__*/React.createElement(_CreateButton.default, {
    handleClick: handleClickCreate
  })))), /*#__PURE__*/React.createElement(_antd.Table, _extends({
    columns: columns,
    dataSource: data,
    pagination: false,
    rowKey: rowKey,
    scroll: {
      x: xScroll || 1700
    },
    expandable: expandable,
    onChange: onChangeTable
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: "list-layout__pagination-bottom"
  }, /*#__PURE__*/React.createElement(_antd.Pagination, _extends({}, paginationResult, {
    onChange: onChangePagination
  }))));
};
var _default = exports.default = ListLayout;