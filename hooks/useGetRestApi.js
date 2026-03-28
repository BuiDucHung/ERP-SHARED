"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _RequestUtils = _interopRequireDefault(require("@erp/shared/utils/RequestUtils"));
var _DataContext = _interopRequireDefault(require("@/DataContext"));
var _MyHooks = require("@erp/shared/hooks/MyHooks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  useGetRestApi.js                                                      */
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

function useGetRestApi(_ref) {
  let {
    queryParams: filter,
    onData = values => values
  } = _ref;
  const {
    f5List
  } = (0, _react.useContext)(_DataContext.default);
  const [loading, setLoading] = (0, _react.useState)(false);
  const [data, setData] = (0, _react.useState)({});
  const fetchResource = (0, _react.useCallback)(async values => {
    if (loading) {
      return Promise.reject("===== fetch api on loading .!");
    }
    const {
      resource,
      ...params
    } = values;
    if (!resource) {
      return Promise.reject("Call api without apiPath .!");
    }
    setLoading(true);
    _RequestUtils.default.Get(`/${resource}`, params).then(async _ref2 => {
      let {
        data,
        success
      } = _ref2;
      if (success) {
        Promise.resolve(onData(data)).then(setData);
      }
      setLoading(false);
    }).catch(e => {
      console.log('[hooks.useGetApi] ', e);
      setLoading(false);
    });
  }, [onData, loading]);
  (0, _react.useEffect)(() => {
    fetchResource(filter);
    /* eslint-disable-next-line */
  }, []);
  (0, _MyHooks.useUpdateEffect)(() => {
    fetchResource(filter);
  }, [f5List, filter]);
  return {
    data,
    loading
  };
}
var _default = exports.default = useGetRestApi;