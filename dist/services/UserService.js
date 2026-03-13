"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _configs = require("@/configs");
var _dataUtils = require("@/shared/utils/dataUtils");
var _RequestUtils = _interopRequireDefault(require("@/shared/utils/RequestUtils"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  UserService.js                                                        */
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

const UserService = {
  async findId(id) {
    const {
      data,
      errorCode,
      message
    } = await _RequestUtils.default.Get("/user/find-id", {
      id
    });
    if (errorCode === _configs.SUCCESS_CODE) {
      return [null, data];
    }
    return [message, null];
  },
  async mapId2Name() {
    let ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let users = await _RequestUtils.default.GetAsList("/user/list-name-id", {
      ids
    });
    if ((0, _dataUtils.arrayEmpty)(users)) {
      return {};
    }
    return Object.fromEntries(users.map(item => [item.id, item.name]));
  }
};
var _default = exports.default = UserService;