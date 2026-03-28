"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateFormatOnSubmit = exports.dateFormatForm = exports.dataObj = exports.dataAsObj = exports.dataArray = exports.calVat = exports.arrayNotEmpty = exports.arrayEmpty = void 0;
exports.decodeProperty = decodeProperty;
exports.encodeProperty = encodeProperty;
exports.string2Object = exports.formatTime = exports.formatMoney = exports.formatDataI18n = exports.f5List = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _lodash = require("lodash");
var _FuseUtils = require("@erp/shared/utils/FuseUtils");
var _configs = require("@/configs");
var _moment = _interopRequireDefault(require("moment"));
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  dataUtils.js                                                          */
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

const formatDataI18n = (displayName, name) => {
  return displayName?.[_i18next.default.language] || name;
};
exports.formatDataI18n = formatDataI18n;
const f5List = function () {
  let apiPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return _FuseUtils.InAppEvent.emit(_configs.CHANGE_STORE, {
    type: _configs.ACTIONS.F5_LIST,
    data: {
      apiPath,
      random: (0, _lodash.random)()
    }
  });
};
exports.f5List = f5List;
const dataArray = ret => {
  const {
    errorCode,
    data
  } = ret;
  return errorCode === 200 ? data : [];
};
exports.dataArray = dataArray;
const dataObj = ret => {
  const {
    errorCode,
    data
  } = ret;
  return errorCode === 200 ? data : {};
};
exports.dataObj = dataObj;
const dataAsObj = ret => {
  const {
    errorCode,
    data
  } = ret;
  return errorCode === 200 ? data : {};
};
exports.dataAsObj = dataAsObj;
const arrayNotEmpty = data => Array.isArray(data) && data.length > 0;
exports.arrayNotEmpty = arrayNotEmpty;
const arrayEmpty = data => !arrayNotEmpty(data);
exports.arrayEmpty = arrayEmpty;
function decodeProperty(obj) {
  let propertys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (arrayNotEmpty(obj)) {
    obj.forEach(elm => decodeProperty(elm, propertys));
    return obj;
  }
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  for (let p of propertys) {
    const value = obj[p];
    if (value && typeof value === 'string') {
      obj[p] = JSON.parse(value);
    }
  }
  return obj;
}
function encodeProperty(obj) {
  let propertys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  if (!arrayNotEmpty(propertys)) {
    return JSON.stringify(obj);
  }
  for (let k of propertys) {
    const value = obj[k];
    if (value && typeof value === 'object') {
      obj[k] = JSON.stringify(value);
    }
  }
  return obj;
}

/* dateFormatForm(entity, ['startTime', 'endTime'], 'HH:mm') */
const dateFormatForm = function (entity) {
  let propertes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let format = arguments.length > 2 ? arguments[2] : undefined;
  if (!entity || !propertes) {
    return;
  }
  for (let k of propertes) {
    const value = entity[k];
    if (value && (typeof value === 'string' || typeof value === 'number')) {
      entity[k] = (0, _dayjs.default)(new Date(value), format);
    }
  }
};
exports.dateFormatForm = dateFormatForm;
const dateFormatOnSubmit = function (entity) {
  let propertes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "YYYY-MM-DD HH:mm:ss";
  if (typeof entity !== 'object') {
    return (0, _dayjs.default)(entity).format(format);
  }
  for (let k of propertes) {
    const value = entity[k];
    if (value) {
      entity[k] = (0, _dayjs.default)(value).format(format);
    }
  }
  return entity;
};
exports.dateFormatOnSubmit = dateFormatOnSubmit;
const formatTime = function (text) {
  let fm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "DD-MM-YYYY";
  return text ? (0, _moment.default)(new Date(text)).format(fm) : 'N/a';
};
exports.formatTime = formatTime;
const formatMoney = x => x ? x.toLocaleString('it-IT') + ' đ' : '0 đ';
exports.formatMoney = formatMoney;
const calVat = _ref => {
  let {
    total,
    vatPercent
  } = _ref;
  return (total || 0) * (vatPercent / 100);
};
exports.calVat = calVat;
const string2Object = data => {
  if (!data) {
    return ['(empty)', null];
  }
  if (typeof data !== 'string') {
    return ['(invalid)', null];
  }
  try {
    let obj = JSON.parse(data);
    return [null, obj];
  } catch (e) {
    return [e, null];
  }
};
exports.string2Object = string2Object;