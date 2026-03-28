"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useData = require("@flast-erp/core/hooks/useData");
var _FormSelectInfinite = _interopRequireDefault(require("./FormSelectInfinite"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  FormSelectInfiniteBusinessUser.js                                     */
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

const FormSelectInfiniteBusinessUser = _ref => {
  let {
    name = "assigneeId",
    valueProp = "id",
    ...props
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormSelectInfinite.default, {
    useGetAllQuery: _useData.useGetAllBusinessUsersQuery,
    name: name,
    valueProp: valueProp,
    titleProp: "fullName",
    searchKey: "fullName",
    filterField: "id",
    ...props
  });
};
var _default = exports.default = FormSelectInfiniteBusinessUser;