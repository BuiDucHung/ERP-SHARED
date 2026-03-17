"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _DataContext = _interopRequireDefault(require("@/DataContext"));
var _authRoles = _interopRequireDefault(require("@/auth/authRoles"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  useGetMe.js                                                 		  */
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

function useGetMe() {
  const {
    user,
    setMyData
  } = (0, _react.useContext)(_DataContext.default);
  const getUserRoles = () => {
    if (!user) return [];
    if (user.roles?.length) return user.roles;
    return user.userProfiles?.map(p => p.type) ?? [];
  };
  const hasRole = roles => {
    const userRoles = getUserRoles();
    if (!userRoles.length) return false;
    return roles.some(role => userRoles.includes(role));
  };
  const isLeader = () => hasRole([..._authRoles.default.admin, ..._authRoles.default.partner, ...(_authRoles.default.leader || [])]);
  const isManager = () => hasRole([..._authRoles.default.admin, ..._authRoles.default.partner, ..._authRoles.default.provider, ...(_authRoles.default.leader || [])]);
  const isUser = () => !isLeader() && !isManager();
  return {
    user,
    setMe: me => setMyData(pre => ({
      ...pre,
      user: me
    })),
    isLeader,
    isManager,
    isUser,
    hasRole
  };
}
var _default = exports.default = useGetMe;