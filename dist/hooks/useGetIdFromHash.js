"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _constant = require("@/configs/constant");
var _reactRouter = require("react-router");
/**************************************************************************/
/*  useGetIdFromHash.js                                                 	*/
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

const useGetIdFromHash = function (resource) {
  let suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'edit';
  const {
    hash
  } = (0, _reactRouter.useLocation)();
  const idFromHash = hash.match(`${_constant.HASH_MODAL}/${resource}/(.*)/${suffix}`);
  return idFromHash && idFromHash[1];
};
var _default = exports.default = useGetIdFromHash;