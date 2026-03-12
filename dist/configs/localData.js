"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROJECT_TASK_STATUS_LIST = exports.PROJECT_STATUS_LIST = exports.PRODUCT_STATUS = exports.PRIORITY_TYPE_TAGS_MAP_KEYS = exports.PRIORITY_TYPE_TAGS = exports.PAYMENT_TYPE_CONST = exports.MATERIAL_UNIT_TYPE = exports.KPI_TYPE_MAP_KEYS = exports.KPI_TYPE = exports.IMAGE_TYPES = exports.DEPARTMENT_MAP_KEYS_VALUE = exports.DEPARTMENT = exports.CHANNEL_STATUS_MAP_KEYS = exports.CHANNEL_STATUS = exports.CHANNEL_SOURCE_MAP_KEYS = exports.CHANNEL_SOURCE = exports.ACTIVE_TYPES = void 0;
var _theme = _interopRequireDefault(require("@/theme"));
var _mapKeys = _interopRequireDefault(require("lodash/mapKeys"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  localData.js                                                          */
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

const ACTIVE_TYPES = exports.ACTIVE_TYPES = [{
  value: 2,
  text: 'Kích hoạt',
  color: 'red',
  textColor: _theme.default.color.error
}, {
  value: 1,
  text: 'Ngưng',
  color: 'green',
  textColor: _theme.default.color.success
}];
const IMAGE_TYPES = exports.IMAGE_TYPES = ['png', 'jpg', 'jpeg', 'gif', 'tif', 'tiff'];
const CHANNEL_SOURCE = exports.CHANNEL_SOURCE = [{
  'id': 11,
  'name': 'Web'
}, {
  'id': 1,
  'name': 'Facebook'
}, {
  'id': 2,
  'name': 'Zalo'
}, {
  'id': 3,
  'name': 'Hotline'
}, {
  'id': 4,
  'name': 'Trực tiếp'
}, {
  'id': 5,
  'name': 'Email'
}, {
  'id': 6,
  'name': 'MKT0D'
}, {
  'id': 7,
  'name': 'Giới thiệu'
}, {
  'id': 8,
  'name': 'Cskh'
}, {
  'id': 9,
  'name': 'Partner'
}, {
  'id': 10,
  'name': 'Shopee'
}];
const CHANNEL_SOURCE_MAP_KEYS = exports.CHANNEL_SOURCE_MAP_KEYS = (0, _mapKeys.default)(CHANNEL_SOURCE, 'id');
const CHANNEL_STATUS = exports.CHANNEL_STATUS = [{
  'id': 1,
  'name': 'Chưa liên hệ'
}, {
  'id': 2,
  'name': 'Đã liên hệ'
}];
const CHANNEL_STATUS_MAP_KEYS = exports.CHANNEL_STATUS_MAP_KEYS = (0, _mapKeys.default)(CHANNEL_STATUS, 'id');
const KPI_TYPE = exports.KPI_TYPE = [{
  text: 'Doanh số',
  value: 'doanhso'
}, {
  text: 'SQL',
  value: 'sql'
}, {
  text: 'Trafic',
  value: 'trafic'
}];
const KPI_TYPE_MAP_KEYS = exports.KPI_TYPE_MAP_KEYS = (0, _mapKeys.default)(KPI_TYPE, 'value');
const PAYMENT_TYPE_CONST = exports.PAYMENT_TYPE_CONST = [{
  label: 'Tiền mặt',
  value: 6
}, {
  label: 'Chuyển khoản MBbank',
  value: 1
}, {
  label: 'Chuyển khoản TPbank',
  value: 7
}, {
  label: 'COD Viettel',
  value: 2
}, {
  label: 'Ví Momo',
  value: 3
}, {
  label: 'Ví Vnpay',
  value: 4
}, {
  label: 'Ncc thu hộ',
  value: 5
}];
const PRIORITY_TYPE_TAGS = exports.PRIORITY_TYPE_TAGS = [{
  text: 'Cao',
  value: 'cao',
  color: 'red'
}, {
  text: 'Trung bình',
  value: 'trungbinh',
  color: 'purple'
}, {
  text: 'Thấp',
  value: 'thap',
  color: 'green'
}];
const PRIORITY_TYPE_TAGS_MAP_KEYS = exports.PRIORITY_TYPE_TAGS_MAP_KEYS = (0, _mapKeys.default)(PRIORITY_TYPE_TAGS, 'value');
const PRODUCT_STATUS = exports.PRODUCT_STATUS = [{
  value: 0,
  text: 'Ngưng',
  color: 'red'
}, {
  value: 1,
  text: 'Kích hoạt',
  color: 'green'
}];
const DEPARTMENT = exports.DEPARTMENT = [{
  value: 1,
  name: "IT",
  color: 'blue'
}, {
  value: 2,
  name: "Marketing",
  color: 'green'
}, {
  value: 3,
  name: "Kinhdoanh",
  color: 'purple'
}, {
  value: 4,
  name: "Khác",
  color: 'orange'
}];
const DEPARTMENT_MAP_KEYS_VALUE = exports.DEPARTMENT_MAP_KEYS_VALUE = (0, _mapKeys.default)(DEPARTMENT, 'value');
const PROJECT_STATUS_LIST = exports.PROJECT_STATUS_LIST = ['Not Started', 'In Progress', 'Completed', 'On Hold'];
const PROJECT_TASK_STATUS_LIST = exports.PROJECT_TASK_STATUS_LIST = ['To Do', 'In Progress', 'Done', 'Cancelled'];
const MATERIAL_UNIT_TYPE = exports.MATERIAL_UNIT_TYPE = [{
  value: "QUANTITY",
  name: "Số lượng"
}, {
  value: "DIMENSION",
  name: "Kích thước"
}, {
  value: "WEIGHT",
  name: "Trọng lượng"
}];