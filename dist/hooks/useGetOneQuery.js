"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _RequestUtils = _interopRequireDefault(require("@/utils/RequestUtils"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  useGetOneQuery.js                                                 	  */
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

function useGetOneQuery(_ref) {
  let {
    filter,
    uri,
    onBeforeProcessData
  } = _ref;
  const [loading, setLoading] = (0, _react.useState)(false);
  const [data, setData] = (0, _react.useState)({});
  const fetchResource = (0, _react.useCallback)(() => {
    if (loading) {
      return Promise.reject("===== fetch api on loading .!");
    }
    setLoading(true);
    if (uri) {
      _RequestUtils.default.Get('/'.concat(uri), filter).then(_ref2 => {
        let {
          data,
          success
        } = _ref2;
        return success && setData(data);
      });
    }
    setLoading(false);
  }, [filter, uri, loading]);
  (0, _react.useEffect)(() => {
    fetchResource();
    /* eslint-disable-next-line */
  }, []);
  return {
    loading,
    record: onBeforeProcessData ? onBeforeProcessData(data) : data,
    refetch: () => fetchResource(filter)
  };
}
var _default = exports.default = useGetOneQuery;