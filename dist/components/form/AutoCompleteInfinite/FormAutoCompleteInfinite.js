"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _get = _interopRequireDefault(require("lodash/get"));
var _useInfinite = _interopRequireDefault(require("../../../hooks/useInfinite"));
var _FormContextCustom = require("../../context/FormContextCustom");
var _FormAutoComplete = _interopRequireDefault(require("../FormAutoComplete"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /**************************************************************************/ /*  FormAutoCompleteInfinite.js                                           */ /**************************************************************************/ /*                       Tệp này là một phần của:                         */ /*                             Open CDP                                   */ /*                        https://flast.vn                                */ /**************************************************************************/ /* Bản quyền (c) 2025 - này thuộc về các cộng tác viên Flast Solution     */ /* (xem AUTHORS.md).                                                      */ /* Bản quyền (c) 2024-2025 Long Huu, Quang Duc, Hung Bui                  */ /*                                                                        */ /* Bạn được quyền sử dụng phần mềm này miễn phí cho bất kỳ mục đích nào,  */ /* bao gồm sao chép, sửa đổi, phân phối, bán lại…                         */ /*                                                                        */ /* Chỉ cần giữ nguyên thông tin bản quyền và nội dung giấy phép này trong */ /* các bản sao.                                                           */ /*                                                                        */ /* Đội ngũ phát triển mong rằng phần mềm được sử dụng đúng mục đích và    */ /* có trách nghiệm                                                        */ /**************************************************************************/
const FormAutoCompleteInfinite = _ref => {
  let {
    useGetAllQuery,
    initialFilter,
    searchKey = 'q',
    filterField = 'id',
    customValue,
    ...props
  } = _ref;
  const {
    record
  } = (0, _react.useContext)(_FormContextCustom.FormContextCustom);
  const defaultValue = (0, _react.useMemo)(() => customValue || (0, _get.default)(record, props.name), /* eslint-disable-next-line */
  [record]);
  const {
    onSearch,
    fetchMoreDefaultValue,
    loading,
    resourceData
  } = (0, _useInfinite.default)({
    initialFilter,
    useGetAllQuery,
    searchKey
  });
  (0, _react.useEffect)(() => {
    if (defaultValue) {
      fetchMoreDefaultValue(filterField, defaultValue);
    }
    /* eslint-disable-next-line */
  }, [defaultValue]);
  return /*#__PURE__*/React.createElement(_FormAutoComplete.default, _extends({
    loading: loading,
    resourceData: resourceData,
    onSearch: (0, _debounce.default)(onSearch, 600),
    isFilterOption: false
  }, props));
};
var _default = exports.default = FormAutoCompleteInfinite;