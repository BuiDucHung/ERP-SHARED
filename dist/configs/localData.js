"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_STATUS = exports.REGISTER_WORK_TYPE = exports.PROJECT_TASK_STATUS_LIST = exports.PROJECT_STATUS_LIST = exports.PRODUCT_STATUS = exports.PRIORITY_TYPE_TAGS_MAP_KEYS = exports.PRIORITY_TYPE_TAGS = exports.PAYMENT_TYPE_CONST = exports.MATERIAL_UNIT_TYPE = exports.KPI_TYPE_MAP_KEYS = exports.KPI_TYPE = exports.IMAGE_TYPES = exports.HOTEL_ROOM_PAY_TYPE_PERSIONAL = exports.HOTEL_ROOM_PAY_TYPE_COMPANY = exports.HOTEL_ROOM_PAY_TYPE = exports.FLIGHT_WAY_TYPE_DEPARTURE = exports.FLIGHT_WAY_TYPE_ARRIVAL = exports.FLIGHT_WAY_TYPE = exports.FILE_TYPES = exports.DEPARTMENT_MAP_KEYS_VALUE = exports.DEPARTMENT = exports.CHANNEL_STATUS_MAP_KEYS = exports.CHANNEL_STATUS = exports.CHANNEL_SOURCE_MAP_KEYS = exports.CHANNEL_SOURCE = exports.CAR_WORK_TYPE = exports.CAR_NOT_WORK_TYPE = exports.ACTIVE_TYPES = void 0;
var _theme = _interopRequireDefault(require("@/theme"));
var _mapKeys = _interopRequireDefault(require("lodash/mapKeys"));
var _icons = require("@ant-design/icons");
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
const USER_STATUS = exports.USER_STATUS = [{
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
const CAR_WORK_TYPE = exports.CAR_WORK_TYPE = 1;
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
const CAR_NOT_WORK_TYPE = exports.CAR_NOT_WORK_TYPE = 2;
const REGISTER_WORK_TYPE = exports.REGISTER_WORK_TYPE = [{
  value: 1,
  text: 'Công tác có phí',
  color: 'green'
}, {
  value: 2,
  text: 'Công tác không phí',
  color: 'red'
}];
const HOTEL_ROOM_PAY_TYPE_COMPANY = exports.HOTEL_ROOM_PAY_TYPE_COMPANY = 1;
const HOTEL_ROOM_PAY_TYPE_PERSIONAL = exports.HOTEL_ROOM_PAY_TYPE_PERSIONAL = 2;
const HOTEL_ROOM_PAY_TYPE = exports.HOTEL_ROOM_PAY_TYPE = [{
  value: HOTEL_ROOM_PAY_TYPE_COMPANY,
  text: 'Công ty trả/company pay',
  color: 'green'
}, {
  value: HOTEL_ROOM_PAY_TYPE_PERSIONAL,
  text: 'Cá nhân tạm ứng/person pay',
  color: 'red'
}];
const FLIGHT_WAY_TYPE_DEPARTURE = exports.FLIGHT_WAY_TYPE_DEPARTURE = 1;
const FLIGHT_WAY_TYPE_ARRIVAL = exports.FLIGHT_WAY_TYPE_ARRIVAL = 2;
const FLIGHT_WAY_TYPE = exports.FLIGHT_WAY_TYPE = [{
  value: FLIGHT_WAY_TYPE_DEPARTURE,
  text: 'Chiều đi / Departure',
  color: 'green'
}, {
  value: FLIGHT_WAY_TYPE_ARRIVAL,
  text: 'Chiều về / Arrival',
  color: 'red'
}];
const FILE_TYPES = exports.FILE_TYPES = [{
  value: 'pdf',
  IconCPN: _icons.FilePdfOutlined,
  color: _theme.default.color.red
}, {
  value: 'ppt',
  IconCPN: _icons.FilePptOutlined,
  color: _theme.default.color.pink
}, {
  value: 'pptx',
  IconCPN: _icons.FilePptOutlined,
  color: _theme.default.color.pink
}, {
  value: 'doc',
  IconCPN: _icons.FileWordOutlined,
  color: _theme.default.color.blue
}, {
  value: 'docx',
  IconCPN: _icons.FileWordOutlined,
  color: _theme.default.color.blue
}, {
  value: 'xlsx',
  IconCPN: _icons.FileExcelOutlined,
  color: _theme.default.color.green
}, {
  value: 'xls',
  IconCPN: _icons.FileExcelOutlined,
  color: _theme.default.color.green
}, {
  value: 'csv',
  IconCPN: _icons.FileExcelOutlined,
  color: _theme.default.color.green
}, {
  value: 'zip',
  IconCPN: _icons.FileZipOutlined,
  color: _theme.default.color.violet
}, {
  value: 'zar',
  IconCPN: _icons.FileZipOutlined,
  color: _theme.default.color.violet
}, {
  value: 'txt',
  IconCPN: _icons.FileTextOutlined,
  color: 'currentColor'
}, {
  value: 'mov',
  IconCPN: _icons.VideoCameraOutlined,
  color: 'currentColor'
}, {
  value: 'mp4',
  IconCPN: _icons.VideoCameraOutlined,
  color: 'currentColor'
}, {
  value: 'avi',
  IconCPN: _icons.VideoCameraOutlined,
  color: 'currentColor'
}, {
  value: 'flv',
  IconCPN: _icons.VideoCameraOutlined,
  color: 'currentColor'
}, {
  value: 'wmv',
  IconCPN: _icons.VideoCameraOutlined,
  color: 'currentColor'
}, {
  value: 'mp3',
  IconCPN: _icons.AudioOutlined,
  color: _theme.default.color.lightGreen
}];