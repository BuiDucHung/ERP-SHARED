"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outerRadius = exports.UPLOAD_PATH = exports.SUCCESS_CODE = exports.REPORT_DATE_FORMAT = exports.MAX_FILE_SIZE_MB = exports.INAPP_NOTIFICATION_EMITTER = exports.HASH_MODAL_CLOSE = exports.HASH_MODAL = exports.GATE_EVN = exports.GATEWAY = exports.FORMAT_TIME_INPUT = exports.FORMAT_DATE_TIME_INPUT = exports.FORMAT_DATE_INPUT = exports.EVENT_ACCEPT_IMAGE_TYPES = exports.EMBED_YOUTUBE_LINK = exports.DEFAULT_PARENT_INBOX_ID = exports.DEFAULT_INBOX_ID = exports.DEFAULT_COLOR_VALUE = exports.CURRENCY_UNIT = exports.CHANGE_STORE = exports.BASE_URL = exports.API = exports.ACTIONS = void 0;
/**************************************************************************/
/*  index.js                                                              */
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

export const SUCCESS_CODE = exports.SUCCESS_CODE = 200;
export const GATE_EVN = exports.GATE_EVN = {
  // Loc: 'http://157.10.199.138:9080/api',
  Loc: '/api/erp',
  Pro: 'https://biz.api.flast.vn',
  Web: 'https://flast-vn',
  AiA: 'https://service.aicuatui.vn'
};
export const GATEWAY = exports.GATEWAY = GATE_EVN['Loc'];
export const BASE_URL = exports.BASE_URL = GATEWAY;
export const CHANGE_STORE = exports.CHANGE_STORE = 'CHANGE_STORE';
export const UPLOAD_PATH = exports.UPLOAD_PATH = GATEWAY + '/uploads';

export const API = exports.API = {
  SINGIN: '/auth/login'
};

export const ACTIONS = exports.ACTIONS = {
  ADD_USER: 'add__user',
  REMOVE_USER: 'remove__user',
  TOOGLE_COLLAPSE: 'tg_cll',
  F5_LIST: 'f5_list'
};
export const INAPP_NOTIFICATION_EMITTER = exports.INAPP_NOTIFICATION_EMITTER = 'in_app_noti';
export const EVENT_ACCEPT_IMAGE_TYPES = exports.EVENT_ACCEPT_IMAGE_TYPES = '.png, .jpeg, .jpg';
export const HASH_MODAL = exports.HASH_MODAL = '#modal';
export const HASH_MODAL_CLOSE = exports.HASH_MODAL_CLOSE = '#close-modal';
export const DEFAULT_INBOX_ID = exports.DEFAULT_INBOX_ID = 'inbox';
export const DEFAULT_PARENT_INBOX_ID = exports.DEFAULT_PARENT_INBOX_ID = 'parent';
export const FORMAT_DATE_INPUT = exports.FORMAT_DATE_INPUT = 'DD-MM-YYYY';
export const FORMAT_DATE_TIME_INPUT = exports.FORMAT_DATE_TIME_INPUT = 'DD-MM-YYYY HH:mm';
export const FORMAT_TIME_INPUT = exports.FORMAT_TIME_INPUT = 'HH:mm';
export const MAX_FILE_SIZE_MB = exports.MAX_FILE_SIZE_MB = 3;
export const REPORT_DATE_FORMAT = exports.REPORT_DATE_FORMAT = 'YYYY-MM-DD';
export const CURRENCY_UNIT = exports.CURRENCY_UNIT = 'VND';
export const EMBED_YOUTUBE_LINK = exports.EMBED_YOUTUBE_LINK = '//www.youtube.com/embed/';
export const DEFAULT_COLOR_VALUE = exports.DEFAULT_COLOR_VALUE = '#ffffff';
export const outerRadius = exports.outerRadius = 143 / 2;