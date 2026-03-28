"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomButtonStyles = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  styles.js                                                             */
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

const CustomButtonStyles = exports.CustomButtonStyles = _styledComponents.default.div`
  button[disabled] > i {
    color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.background.disabled;
}};
  }
  .normal-action-wrapper {
    position: relative;
  }
  .action-feature-icon {
    position: absolute;
    top: -12px;
    right: -10px;
    font-size: 20px;
    color: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.subscriptions.colorIcon;
}};
  }
`;