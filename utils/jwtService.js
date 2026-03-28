"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _FuseUtils = _interopRequireWildcard(require("./FuseUtils"));
var _axios = _interopRequireDefault(require("axios"));
var _configs = require("@/configs");
var _RequestUtils = _interopRequireDefault(require("./RequestUtils"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**************************************************************************/
/*  jwtService.js                                                         */
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

class jwtService extends _FuseUtils.default.EventEmitter {
  init() {
    this.handleAuthentication();
  }
  handleAuthentication = () => {
    let access_token = this.getAccessToken();
    if (!access_token) {
      this.emit('onNoAccessToken');
      return;
    }
    if (this.isAuthTokenValid(access_token)) {
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };
  signInWithToken = async () => {
    try {
      const {
        data,
        success
      } = await _RequestUtils.default.Post('/auth/sign-with-token', {
        token: this.getAccessToken()
      });
      this.setSession(success ? data : null);
    } catch (e) {
      this.emit('onAutoLogout', 'sign-in-with-token ' + e.message);
    }
    return "done";
  };
  setSession = data => {
    if (data) {
      const {
        jwtToken: token,
        user
      } = data;
      localStorage.setItem('jwt_access_token', token);
      _axios.default.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      _FuseUtils.InAppEvent.emit(_configs.CHANGE_STORE, {
        type: _configs.ACTIONS.ADD_USER,
        data: user
      });
    } else {
      localStorage.removeItem('jwt_access_token');
      delete _axios.default.defaults.headers.common['Authorization'];
    }
  };
  logout = () => {
    this.setSession(null);
  };
  isAuthTokenValid = access_token => {
    return (access_token || '') !== '';
  };
  getAccessToken = () => {
    return window.localStorage.getItem('jwt_access_token');
  };
}
const instance = new jwtService();
var _default = exports.default = instance;