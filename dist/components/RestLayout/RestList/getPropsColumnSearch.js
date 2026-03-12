"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnSearchProps = void 0;
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _i18next = _interopRequireDefault(require("i18next"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  getColumnSearchProps.js                                               */
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

const searchInput = {};
const getColumnSearchProps = (dataIndex, dataLabel) => ({
  filterDropdown: _ref => {
    let {
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    } = _ref;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 8
      }
    }, /*#__PURE__*/React.createElement(_antd.Input, {
      placeholder: `Search ${dataLabel ?? dataIndex}`,
      ref: node => {
        searchInput[dataIndex] = node;
      },
      value: selectedKeys[0],
      onChange: e => setSelectedKeys(e.target.value ? [e.target.value] : []),
      onPressEnter: () => confirm({
        closeDropdown: true
      }),
      style: {
        marginBottom: 8,
        display: 'block'
      }
    }), /*#__PURE__*/React.createElement(_antd.Space, null, /*#__PURE__*/React.createElement(_antd.Button, {
      type: "primary",
      onClick: () => confirm({
        closeDropdown: true
      }),
      icon: /*#__PURE__*/React.createElement(_icons.SearchOutlined, null),
      size: "small",
      style: {
        width: 90
      }
    }, _i18next.default.t('button.search')), /*#__PURE__*/React.createElement(_antd.Button, {
      onClick: e => {
        setSelectedKeys([]);
        clearFilters(e);
      },
      size: "small",
      style: {
        width: 90
      }
    }, _i18next.default.t('button.reset'))));
  },
  filterIcon: filtered => /*#__PURE__*/React.createElement(_icons.SearchOutlined, {
    className: `${filtered ? 'text-primary' : ''}`
  }),
  onFilterDropdownVisibleChange: visible => {
    if (visible) {
      setTimeout(() => searchInput[dataIndex].select(), 100);
    }
  }
});
exports.getColumnSearchProps = getColumnSearchProps;