"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _FuseUtils = require("@erp/shared/dist/utils/FuseUtils");
var _RequestUtils = _interopRequireDefault(require("@erp/shared/dist/utils/RequestUtils"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  useDeleteMutation.js                                                  */
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

const useDeleteMutation = () => {
  const [loading, setLoading] = (0, _react.useState)(false);
  const deleteRecord = async _ref => {
    let {
      api,
      input,
      update
    } = _ref;
    setLoading(true);
    const {
      success,
      message,
      data
    } = await _RequestUtils.default.Post('/'.concat(api), {}, input);
    if (!success) {
      _FuseUtils.InAppEvent.normalError("Lỗi xoá nội dung .!");
      return;
    }
    setLoading(false);
    update && update(data);
    _FuseUtils.InAppEvent.normalSuccess(message);
  };
  return [deleteRecord, loading];
};
var _default = exports.default = useDeleteMutation;