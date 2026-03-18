"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _FormSelect = _interopRequireDefault(require("./FormSelect"));
var _RequestUtils = _interopRequireDefault(require("@erp/shared/dist/utils/RequestUtils"));
var _dataUtils = require("@erp/shared/dist/utils/dataUtils");
var _MyHooks = require("@erp/shared/dist/hooks/MyHooks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  FormSelectUser.js                                                     */
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

const FormSelectUser = _ref => {
  let {
    name,
    label,
    filter,
    ...props
  } = _ref;
  const [data, setData] = (0, _react.useState)([]);
  (0, _MyHooks.useEffectAsync)(async () => {
    const {
      data
    } = await _RequestUtils.default.Get('/user/list', filter);
    if ((0, _dataUtils.arrayNotEmpty)(data?.embedded)) {
      setData(data.embedded);
    }
  }, [filter]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormSelect.default, {
    label: label,
    placeholder: label,
    name: name || 'ssoId',
    valueProp: "id",
    titleProp: "ssoId",
    resourceData: data,
    ...props
  });
};
var _default = exports.default = FormSelectUser;