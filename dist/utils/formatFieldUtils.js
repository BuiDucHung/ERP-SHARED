"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPaymentStatus = exports.formatCustomerOrTeamInfo = exports.formatContractType = exports.formatContractTemplate = exports.formatContractStatus = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _localData = require("@/configs/localData");
var _antd = require("antd");
var _dataUtils = require("./dataUtils");
var _UserInfo = _interopRequireDefault(require("@/dist/components/common/UserInfo"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  formatFieldUtils.js                                                   */
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

const formatPaymentStatus = data => {
  if (!data) {
    return null;
  }
  const restItem = _localData.PAYMENT_STATUS_MAP_KEYS[data];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tag, {
    color: restItem?.color,
    children: restItem?.text ? _i18next.default.t(restItem.text) : data
  });
};
exports.formatPaymentStatus = formatPaymentStatus;
const formatContractType = data => {
  const restItem = _localData.CONTRACT_TYPES.find(item => item.value === data);
  return restItem?.text ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tag, {
    color: restItem?.color || 'blue',
    children: _i18next.default.t(restItem?.text)
  }) : null;
};
exports.formatContractType = formatContractType;
const formatContractTemplate = data => {
  return data ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tag, {
    color: "blue",
    children: (0, _dataUtils.formatDataI18n)(data.displayName)
  }) : null;
};
exports.formatContractTemplate = formatContractTemplate;
const formatContractStatus = data => {
  const contractStatusItem = _localData.CONTRACT_STATUS.find(item => item.value === data);
  return contractStatusItem?.text ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tag, {
    color: contractStatusItem.color,
    children: _i18next.default.t(contractStatusItem.text)
  }) : null;
};
exports.formatContractStatus = formatContractStatus;
const formatCustomerOrTeamInfo = _ref => {
  let {
    data,
    size
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_UserInfo.default, {
    item: data,
    path: `/customer/show?id=${data?.id}`,
    noteProp: "email",
    size: size
  });
};
exports.formatCustomerOrTeamInfo = formatCustomerOrTeamInfo;