"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderStyles = exports.DrawerWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _antd = require("antd");
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

const DrawerWrapper = exports.DrawerWrapper = (0, _styledComponents.default)(_antd.Drawer)`
  .ant-drawer-body {
    height: 100%;
    padding: 0 !important;
    overflow: hidden;
  }
  
  .drawer-content-wrapper {
    height: 100%;
  }

  .drawer-content {
    height: calc(100vh - 50px);
    padding: 16px 24px;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.scrollbar.thumb;
}};
      border-radius: 10px;
    }
  }

  .ant-time-picker-input,
  textarea,
  .ant-input,
  .ant-select-selection,
  .ant-cascader-picker,
  .ant-input-number,
  .ant-select-dropdown-menu,
  .ant-select-dropdown,
  .ant-select-dropdown-menu-vertical,
  .ant-picker,
  .ant-input-affix-wrapper {
    background: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.background.input;
}};
    border: 1px solid ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.background.input;
}};
  }

  .ant-select-selector {
    background: ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.background.input;
}} !important;
    border: 1px solid ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.background.input;
}} !important;
  }

  .ant-calendar-picker,
  .ant-select,
  .ant-input-number,
  .ant-picker {
    width: 100%;
  }

  .ant-form-item-label {
    label {
      font-weight: bold;
      &:after {
        content: '';
      }
    }
  }
`;
const HeaderStyles = exports.HeaderStyles = _styledComponents.default.div`
  height: 60px;
  background: ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.palette.primary;
}};
  color: ${_ref7 => {
  let {
    theme
  } = _ref7;
  return theme.text.primaryButtonTextColor;
}};
  padding: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  .drawer-header-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;