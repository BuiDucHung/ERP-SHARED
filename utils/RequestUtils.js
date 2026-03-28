"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SUCCESS_CODE = void 0;
var _configs = require("@/configs");
var _axios = _interopRequireDefault(require("axios"));
var _constant = require("configs/constant");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  RequestUtils.js                                                       */
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

class RequestUtils {
  static encodeQueryData(data) {
    if (!data) {
      return '';
    }
    const ret = [];
    for (let d in data) {
      if (!data[d]) {
        continue;
      }
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
    return ret.length > 0 ? '?' + ret.join('&') : '';
  }
  static generateUrlGetParams(enpoint) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return String(enpoint).concat(this.encodeQueryData(params));
  }
  static httpRequest(input, service) {
    let method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    let params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    const urlDomainApi = ['/context-type/fetch', '/enterprice/fetch?limit=10', '/enterprice/create', '/context-type/create', '/context-type/update', '/context/fetch'];
    const _uri = urlDomainApi.includes(service) ? _configs.GATE_EVN.configAi + service : _configs.GATEWAY + service;
    let getOrPost;
    if (method === 'GET') {
      getOrPost = _axios.default.get(_uri + this.encodeQueryData(input));
    } else {
      getOrPost = _axios.default.post(_uri + this.encodeQueryData(params), input);
    }
    return getOrPost.then(_ref => {
      let {
        data
      } = _ref;
      return data;
    }).catch(response => {
      return response;
    });
  }
  static Get(service) {
    let input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.httpRequest(input, service, 'GET');
  }
  static async GetAsList(service) {
    let input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let {
      data,
      errorCode
    } = await this.httpRequest(input, service, 'GET');
    return errorCode === 200 ? data : [];
  }
  static Post(service) {
    let input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return this.httpRequest(input, service, 'POST', params);
  }
  static getJsonFromUrl(url) {
    if (!url) return {};
    var query = url.substr(1);
    var result = {};
    query.split("&").forEach(function (part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }
  static uploadSigFile = _ref2 => {
    let {
      onSuccess,
      onError,
      file,
      onProgress = progress => progress,
      onSuccessUploadServer = values => values,
      api
    } = _ref2;
    const fmData = new FormData();
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      },
      onUploadProgress: event => {
        onProgress({
          percent: event.loaded / event.total * 100
        }, file);
      }
    };
    fmData.append("files", file);
    _axios.default.post(_configs.GATEWAY + "/" + api, fmData, config).then(_ref3 => {
      let {
        data: ret
      } = _ref3;
      const {
        data,
        errorCode
      } = ret;
      onSuccess(file);
      if (errorCode === _constant.SUCCESS_API_CODE && (data?.fileName || '') !== '') {
        onSuccessUploadServer(data.fileName);
      }
    }).catch(err => {
      const error = new Error(err.message);
      onError({
        event: error
      });
    });
  };
}
const SUCCESS_CODE = exports.SUCCESS_CODE = 200;
var _default = exports.default = RequestUtils;