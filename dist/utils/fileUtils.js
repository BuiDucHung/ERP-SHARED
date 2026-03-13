"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitFile = exports.isImageFile = exports.getFileNameFromUrl = exports.getFileName = exports.getExtensionFile = exports.downloadFileByURL = exports.checkValidFileSize = exports.checkFileType = void 0;
var _localData = require("@/configs/localData");
var _antd = require("antd");
var _i18next = _interopRequireDefault(require("i18next"));
var _constant = require("@/configs/constant");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  fileUtils.js                                                          */
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

const showErrorDownloadFile = message => {
  _antd.notification.error({
    message: _i18next.default.t('error.title'),
    description: message || _i18next.default.t('error.errorDownloadFile'),
    duration: 2
  });
};
const isImageFile = fileName => {
  const extension = getExtensionFile(fileName);
  if (!extension) return false;
  return _localData.IMAGE_TYPES.includes(extension.toLocaleLowerCase());
};
exports.isImageFile = isImageFile;
const getFileNameFromUrl = url => url?.split('/')?.pop();
exports.getFileNameFromUrl = getFileNameFromUrl;
const checkFileType = file => {
  if (!file.type?.trim()) {}
  return true;
};
exports.checkFileType = checkFileType;
const getExtensionFile = fileName => {
  if (typeof fileName !== 'string' || fileName.indexOf('.') === -1) return '';
  return fileName.split('.').pop();
};
exports.getExtensionFile = getExtensionFile;
const checkValidFileSize = (file, placeholder) => {
  const isCheckSize = Number(file.size) / 1024 / 1024 < _constant.MAX_FILE_SIZE_MB;
  if (!isCheckSize) {
    _antd.notification.error({
      message: _i18next.default.t('error.title'),
      description: _i18next.default.t('error.fileSize', {
        name: _i18next.default.t(placeholder)
      }),
      duration: 2
    });
    return _antd.Upload.LIST_IGNORE;
  }
  return true;
};
exports.checkValidFileSize = checkValidFileSize;
const downloadFileByURL = async file => {
  return new Promise(resolve => {
    if (!file?.url) {
      showErrorDownloadFile();
      resolve({
        loading: false
      });
    }
    try {
      _axios.default.get(file.url, {
        responseType: 'blob'
      }).then(response => {
        const blob = response.data;
        if (!blob) {
          resolve({
            loading: false
          });
        }
        const disposition = response.headers['content-disposition'];
        const restFileName = file.fileName || getFileNameFromUrl(file.url) || 'example';
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = restFileName;
        a.click();
        window.URL.revokeObjectURL(url);
        resolve({
          loading: false
        });
      });
    } catch (error) {
      showErrorDownloadFile(error?.message);
      resolve({
        loading: false
      });
    }
  });
};
exports.downloadFileByURL = downloadFileByURL;
const getFileName = file => file.split('/').pop()?.split('-')?.splice(1).join('-');
exports.getFileName = getFileName;
const splitFile = url => {
  const splitUrl = url.split('.');
  const fileType = splitUrl.pop();
  const fileName = splitUrl.join('.');
  return {
    fileType,
    fileName
  };
};
exports.splitFile = splitFile;