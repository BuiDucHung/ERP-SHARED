"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parserInputNumber = exports.onSearch = exports.isPositiveInteger = exports.getStaticImageUrl = exports.getQueryParamsFromUrl = exports.formatterInputNumber = exports.formatPhoneNumber = exports.convertObjToSearchStr = exports.calPriceOff = void 0;
var _configs = require("@/configs");
var _lodash = require("lodash");
/**************************************************************************/
/*  tools.js                                                              */
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

const getQueryParamsFromUrl = url => {
  if (!url) {
    return {};
  }
  var query = url.substr(1);
  var result = {};
  query.split("&").forEach(function (part) {
    var item = part.split("=");
    if (item[1]) {
      result[item[0]] = decodeURIComponent(item[1]);
    }
  });
  return result;
};
exports.getQueryParamsFromUrl = getQueryParamsFromUrl;
const convertObjToSearchStr = params => {
  /* removes undefined, "", 0, null, ... */
  const newParams = (0, _lodash.pickBy)(params, _lodash.identity);
  delete newParams.resource;
  return new URLSearchParams(newParams).toString();
};
exports.convertObjToSearchStr = convertObjToSearchStr;
const onSearch = (data, inputValue) => !!inputValue && data?.toLowerCase()?.search(inputValue?.toLowerCase()) !== -1;
exports.onSearch = onSearch;
const getStaticImageUrl = image => {
  if (!image) {
    return `${_configs.GATEWAY}/uploads/image-default.png`;
  }
  if (image.startsWith('http')) {
    return image;
  }
  const path = image.startsWith('/uploads') ? image : "/uploads/".concat(image);
  return String(_configs.GATEWAY).concat(path);
};
exports.getStaticImageUrl = getStaticImageUrl;
const formatterInputNumber = value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.').replace(/\.(?=\d{0,2}$)/g, ',');
exports.formatterInputNumber = formatterInputNumber;
const parserInputNumber = value => {
  return value ? value.replace(/\$\s?|(\.*)/g, '').replace(/(,{1})/g, '.') : '';
};
exports.parserInputNumber = parserInputNumber;
const formatPhoneNumber = phone => {
  if (!phone) {
    return '';
  }
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};
exports.formatPhoneNumber = formatPhoneNumber;
const calPriceOff = _ref => {
  let {
    discountValue,
    discountUnit,
    total
  } = _ref;
  if (!discountValue || !discountUnit) {
    return 0;
  }
  if (discountUnit === "money") {
    return discountValue;
  }
  return discountValue * total / 100;
};
exports.calPriceOff = calPriceOff;
const isPositiveInteger = value => {
  return typeof value === 'number' && Number.isInteger(value) && value > 0;
};
exports.isPositiveInteger = isPositiveInteger;