"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _RequestUtils = _interopRequireDefault(require("@flast-erp/core/utils/RequestUtils"));
var _jwtService = _interopRequireDefault(require("@flast-erp/core/utils/jwtService"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  useLogin.js                                                           */
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

/* const log = (key, val) => console.log('[hooks.useLogin] ' + key, val); */
function useLogin() {
  const [loading, setLoading] = (0, _react.useState)(false);
  const login = payload => {
    setLoading(true);
    _RequestUtils.default.Post('/auth/sign-in', payload).then(_ref => {
      let {
        data,
        success
      } = _ref;
      if (success) {
        _jwtService.default.setSession(data);
      }
      setLoading(false);
    }).catch(e => {
      setLoading(false);
    });
  };
  return {
    login,
    loading
  };
}
var _default = exports.default = useLogin;