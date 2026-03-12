"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _RequestUtils = _interopRequireDefault(require("../utils/RequestUtils"));
var _DataContext = _interopRequireDefault(require("@/DataContext"));
var _MyHooks = require("./MyHooks");
var _logger = _interopRequireDefault(require("@/logger"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  useGetList.js                                                 				*/
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

const LOGGER_TAG = '[hooks.useGetList]';
function useGetList(_ref) {
  let {
    queryParams: filter,
    onData
  } = _ref;
  const {
    f5List
  } = (0, _react.useContext)(_DataContext.default);
  const [loading, setLoading] = (0, _react.useState)(true);
  const [data, setData] = (0, _react.useState)({
    embedded: [],
    page: {}
  });
  const fetchResource = (0, _react.useCallback)(values => {
    const {
      apiPath,
      ...params
    } = values;
    setLoading(true);
    _RequestUtils.default.Get('/' + apiPath, params).then(async _ref2 => {
      let {
        data,
        errorCode,
        message
      } = _ref2;
      if (errorCode !== 200) {
        _logger.default.error(LOGGER_TAG, message);
        return;
      }
      Promise.resolve(onData(data)).then(setData);
      setLoading(false);
    }).catch(e => {
      _logger.default.error(LOGGER_TAG, e);
      setLoading(false);
    });
  }, [onData]);
  (0, _react.useEffect)(() => {
    fetchResource(filter);
    /* eslint-disable-next-line */
  }, [filter]);
  (0, _MyHooks.useUpdateEffect)(() => {
    if (f5List?.apiPath === filter.apiPath) {
      fetchResource(filter);
    }
  }, [f5List, filter]);
  return {
    data,
    loading
  };
}
;
var _default = exports.default = useGetList;