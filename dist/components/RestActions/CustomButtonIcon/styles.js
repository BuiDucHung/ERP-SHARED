"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomButtonIconWrapper = void 0;
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

const CustomButtonIconWrapper = exports.CustomButtonIconWrapper = _styledComponents.default.div`
  .ant-btn::not(.ant-btn-dangerous) {
    color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.text.primary;
}};
  }

  .ant-btn {
    border: 0px !important;
    height: 32px !important;
    width: 32px;
    padding: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    &:hover {
      background: transparent;
      transform: scale(1.1, 1.1);
      color: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.palette.primary;
}} !important;
    }
    &:focus {
      background: transparent;
      transform: scale(1.1, 1.1);
      color: ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.palette.primary;
}} !important;
    }
    .anticon {
      font-size: 20px;
    }
    &[disabled] > i {
      color: ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.background.disabled;
}};
    }
  }

  .normal-action-wrapper {
    position: relative;
  }

  .action-feature-icon {
    position: absolute;
    top: -5px;
    right: -7px;
    font-size: 18px;
    color: ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.subscriptions.colorIcon;
}};
  }
`;