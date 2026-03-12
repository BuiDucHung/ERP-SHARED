"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypeGroup = exports.getStatusLead = exports.getColorStatusLead = exports.VAT_PERCENT = exports.STATUS_LEAD = exports.QUERY_PARAMS_PROPERTY = exports.MAX_FILE_SIZE_MB = exports.HASH_POPUP_CLOSE = exports.HASH_POPUP = exports.HASH_MODAL = exports.FORMAT_TIME_INPUT = exports.FORMAT_DATE_INPUT = exports.CURRENCY_UNIT = void 0;
/**************************************************************************/
/*  constant.js                                                           */
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

const QUERY_PARAMS_PROPERTY = exports.QUERY_PARAMS_PROPERTY = {
  outsideFilter: 'outsideFilter',
  filters: 'filters',
  extraFilters: 'extraFilters'
};
const MAX_FILE_SIZE_MB = exports.MAX_FILE_SIZE_MB = 3;
const VAT_PERCENT = exports.VAT_PERCENT = 8;
const HASH_MODAL = exports.HASH_MODAL = "#modal";
const FORMAT_TIME_INPUT = exports.FORMAT_TIME_INPUT = 'HH:mm';
const HASH_POPUP = exports.HASH_POPUP = "HASH_POPUP";
const HASH_POPUP_CLOSE = exports.HASH_POPUP_CLOSE = "HASH_POPUP_CLOSE";
const FORMAT_DATE_INPUT = exports.FORMAT_DATE_INPUT = 'DD-MM-YYYY';
const CURRENCY_UNIT = exports.CURRENCY_UNIT = 'VND';
const STATUS_LEAD = exports.STATUS_LEAD = {
  CREATE_DATA: 0,
  DO_NOT_MANUFACTORY: 1,
  IS_CONTACT: 2,
  CONTACT_LATER: 6,
  KO_LIEN_HE_DUOC: 4,
  THANH_CO_HOI: 7
};
const getStatusLead = option => {
  switch (option) {
    case STATUS_LEAD.CREATE_DATA:
      return ' Chưa liên hệ';
    case STATUS_LEAD.DO_NOT_MANUFACTORY:
      return 'Không triển khai';
    case STATUS_LEAD.IS_CONTACT:
      return ' Đang tư vấn';
    case STATUS_LEAD.CONTACT_LATER:
      return 'Liên hệ sau';
    case STATUS_LEAD.KO_LIEN_HE_DUOC:
      return 'Không liên hệ được';
    case STATUS_LEAD.THANH_CO_HOI:
      return 'Thành cơ hội';
    default:
      return 'N/A';
  }
};
exports.getStatusLead = getStatusLead;
const getColorStatusLead = option => {
  switch (option) {
    case STATUS_LEAD.CREATE_DATA:
      return '#f50';
    case STATUS_LEAD.DO_NOT_MANUFACTORY:
      return '#2db7f5';
    case STATUS_LEAD.IS_CONTACT:
      return '#87d068';
    case STATUS_LEAD.CONTACT_LATER:
      return '#108ee9';
    case STATUS_LEAD.KO_LIEN_HE_DUOC:
      return 'red';
    case STATUS_LEAD.THANH_CO_HOI:
      return 'green';
    default:
      return 'black';
  }
};
exports.getColorStatusLead = getColorStatusLead;
const getTypeGroup = option => {
  switch (option) {
    case 1:
      return 'Sale';
    case 2:
      return 'Chăm sóc khách hàng';
    case 3:
      return 'MarkeTing';
    case 4:
      return 'Kho';
    default:
      return 'N/A';
  }
};
exports.getTypeGroup = getTypeGroup;