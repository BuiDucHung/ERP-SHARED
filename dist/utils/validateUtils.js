"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRegex = exports.getPasswordRules = exports.getConfirmPasswordRules = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  validateUtils.js                                                      */
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

const validateRegex = exports.validateRegex = {
  phone: /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g,
  password: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*\d).{6,}$/g,
  username: /^([a-z0-9A-Z_-]{3,100})$/g,
  editBookingId: '#bookings/(.*)/edit',
  fullName: /^[a-z0-9 ]{3,100}$/iu,
  number: /^[0-9]+$/iu,
  url: /(https?:\/\/[^\s]+)/g,
  accountNo: /^[\s./0-9]+$/iu,
  customerName: /\S+/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};
const getPasswordRules = () => [{
  pattern: validateRegex.password,
  message: _i18next.default.t('input.password.validateMsg.pattern')
}];
exports.getPasswordRules = getPasswordRules;
const getConfirmPasswordRules = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'password';
  return [_ref => {
    let {
      getFieldValue
    } = _ref;
    return {
      validator(_, value) {
        if (!value || getFieldValue(name) === value) {
          return Promise.resolve();
        }
        return Promise.reject(/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: `${_i18next.default.t('input.confirmNewPassword.validateMsg.match')}`
        }));
      }
    };
  }];
};
exports.getConfirmPasswordRules = getConfirmPasswordRules;