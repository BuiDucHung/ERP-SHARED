"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _get = _interopRequireDefault(require("lodash/get"));
var _useInfinite = _interopRequireDefault(require("@/hooks/useInfinite"));
var _FormContextCustom = require("@/components/context/FormContextCustom");
var _FormSelect = _interopRequireDefault(require("../FormSelect"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  FormSelectInfinite.js                                                 */
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

const FormSelectInfinite = (_ref, ref) => {
  let {
    useGetAllQuery,
    initialFilter,
    searchKey = 'q',
    filterField = 'id',
    customValue,
    handleSelectedDefault,
    ...props
  } = _ref;
  const {
    record
  } = (0, _react.useContext)(_FormContextCustom.FormContextCustom);
  const defaultPropName = (0, _get.default)(record, props.name);
  const defaultValue = (0, _react.useMemo)(() => customValue || (defaultPropName ?? undefined), [defaultPropName, customValue]);
  const {
    onLoadMore,
    onSearch,
    enableWaypoint,
    fetchMoreDefaultValue,
    loading,
    resourceData,
    refetch
  } = (0, _useInfinite.default)({
    initialFilter,
    useGetAllQuery,
    searchKey,
    handleSelectedDefault
  });
  (0, _react.useEffect)(() => {
    if (defaultValue) {
      fetchMoreDefaultValue(filterField, defaultValue);
    }
    /* eslint-disable-next-line */
  }, [defaultValue]);
  (0, _react.useImperativeHandle)(ref, () => ({
    refetchList: () => {
      refetch();
    }
    /* eslint-disable-next-line */
  }), [defaultValue]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormSelect.default, {
    onEnter: onLoadMore,
    loading: loading,
    resourceData: resourceData,
    enableWaypoint: enableWaypoint,
    onSearch: (0, _debounce.default)(onSearch, 600),
    isFilterOption: false,
    ...props,
    showSearch: true
  });
};
var _default = exports.default = /*#__PURE__*/(0, _react.forwardRef)(FormSelectInfinite);