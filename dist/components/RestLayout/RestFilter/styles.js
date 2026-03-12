"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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

const RestFilterStyles = _styledComponents.default.div`
  margin-bottom: 10px;
  .ant-form-item {
    margin-bottom: 10px !important;
  }
  .row-filter {
    .ant-form-item-control-input-content > input,
    .ant-select-selector,
    .ant-picker {
      border: 1px solid transparent;
      ${'' /* background: #EDF1F6;  */}
      :hover, :focus {
        border: 1px solid ${_ref => {
  let {
    theme
  } = _ref;
  return theme.palette.primary;
}};
      }
    }
    .ant-form-item-label {
      display: none;
    }
    .ant-input-number,
    .ant-picker {
      width: 100%;
    }
    .ant-select-selection__rendered {
      height: 32px;
    }
    .ant-form-item-control {
      line-height: 32px;
    }
  }
  .clearButton {
    background: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.background.content;
}};
    color: ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.palette.primary;
}};
    border: 1px solid ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.palette.primary;
}};
    box-sizing: border-box;
  }
  .row-action-bottom {
    display: flex;
    button {
      width: 50%;
      margin-bottom: 10px;
    }
    .filterButton {
      margin-right: 16px;
    }
  }
  .col-export-excel {
    text-align: right;
    .ant-btn {
      border-color: transparent !important;
    }
    .anticon {
      font-size: 22px;
    }
  }
`;
var _default = exports.default = RestFilterStyles;