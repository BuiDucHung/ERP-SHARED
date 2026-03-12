"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetPaymentTypes = void 0;
var _react = require("react");
var _CardService = _interopRequireDefault(require("@/services/CardService"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  useGetPaymentTypes.js                                                 */
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

const useGetPaymentTypes = () => {
  const [paymentTypes, setMyData] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    Promise.resolve(_CardService.default.getPaymentMethod()).then(setMyData);
  }, [setMyData]);
  return {
    paymentTypes
  };
};
exports.useGetPaymentTypes = useGetPaymentTypes;