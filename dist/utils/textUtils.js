"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatInitialValueDateInput = exports.formatDateTimeComplete = exports.formatDateFromNow = exports.formatDateDayjs = exports.formatDateDashboard = exports.formatDate = exports.formatBirthday = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const formatDateDashboard = text => {
  if (!text) {
    return null;
  }
  const dateTime = (0, _moment.default)(text);
  let formatTime = 'h:mma';
  if (dateTime.minutes() === 0) formatTime = 'ha';
  return dateTime.isSame((0, _moment.default)(), 'year') ? dateTime.format(`MMM D, ${formatTime}`) : dateTime.format(`MMM D YYYY, ${formatTime}`);
};
exports.formatDateDashboard = formatDateDashboard;
const formatDate = function (text) {
  let pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DD-MM-YYYY';
  return text ? (0, _moment.default)(text).format(pattern) : null;
};
exports.formatDate = formatDate;
const formatDateDayjs = function (date) {
  let pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DD-MM-YYYY';
  return date ? (0, _dayjs.default)(date).format(pattern) : null;
};
exports.formatDateDayjs = formatDateDayjs;
const formatBirthday = text => {
  return text ? (0, _moment.default)(text).format('D MMM YYYY') : null;
};
exports.formatBirthday = formatBirthday;
const formatDateFromNow = function (date) {
  let showTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!date) {
    return '';
  }
  if ((0, _moment.default)().isAfter(date)) {
    /* nếu nhỏ hơn 2 ngày: TODAY , 1 day before */
    if ((0, _moment.default)().diff((0, _moment.default)(date).startOf('day'), 'days') < 2) {
      return (0, _moment.default)(date).fromNow();
    }
    /* nếu trong năm */
    if ((0, _moment.default)(date).isSame((0, _moment.default)(), 'year')) {
      return showTime ? (0, _moment.default)(date).format('D MMM, HH:mm') : (0, _moment.default)(date).format('D MMM');
    }
    /* lớn hơn năm hiện tại */
    return showTime ? (0, _moment.default)(date).format('D MMM YYYY, HH:mm') : (0, _moment.default)(date).format('D MMM YYYY');
  }
  return 'Now';
};
exports.formatDateFromNow = formatDateFromNow;
const formatInitialValueDateInput = value => value ? (0, _moment.default)(value) : null;
exports.formatInitialValueDateInput = formatInitialValueDateInput;
const formatDateTimeComplete = text => {
  return text ? (0, _moment.default)(text).format('HH:mm DD/MM/YYYY') : null;
};
exports.formatDateTimeComplete = formatDateTimeComplete;