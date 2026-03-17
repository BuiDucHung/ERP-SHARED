"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _configs = require("@/configs");
var _dataUtils = require("@/utils/dataUtils");
var _RequestUtils = _interopRequireDefault(require("@/utils/RequestUtils"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  ProductAttrService.js                                                 */
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

const ProductAttrService = {
  allData: [],
  cacheItems: {},
  attrs: {},
  attrsValue: {},
  empty() {
    /* this.allData = []; */
    this.attrs = {};
    this.cacheItems = {};
    this.attrsValue = {};
  },
  async fetchValueByAttributedId(attrId) {
    if (!attrId) {
      return [];
    }
    if (this.cacheItems[attrId]) {
      return this.cacheItems[attrId];
    }
    const {
      data,
      errorCode
    } = await _RequestUtils.default.Get("/attributed/fetch-value-by-id", {
      attributedId: attrId
    });
    if (errorCode !== _configs.SUCCESS_CODE) {
      return [];
    }
    this.cacheItems[attrId] = data?.embedded ?? [];
    return this.cacheItems[attrId];
  },
  async loadAll(values) {
    if ((0, _dataUtils.arrayNotEmpty)(this.allData)) {
      return this.allData;
    }
    const {
      data,
      errorCode
    } = await _RequestUtils.default.Get("/attributed/fetch", values || {});
    if (errorCode !== _configs.SUCCESS_CODE) {
      return [];
    }
    this.allData = data?.embedded ?? [];
    return this.allData;
  },
  async loadByIds() {
    let ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!ids || (0, _dataUtils.arrayEmpty)(ids)) {
      return [];
    }
    let idNeedFetch = [],
      idResult = [];
    for (let id of ids) {
      if (!this.attrs[id]) {
        idNeedFetch.push(id);
      } else {
        idResult.push(id);
      }
    }
    let datas = [];
    if ((0, _dataUtils.arrayEmpty)(idNeedFetch)) {
      for (let id of idResult) {
        datas.push(this.attrs[id]);
      }
      return datas;
    }
    const {
      data: embedded,
      errorCode
    } = await _RequestUtils.default.Get("/attributed/fetch-attr-ids", {
      ids: idNeedFetch
    });
    if (errorCode !== _configs.SUCCESS_CODE) {
      return [];
    }
    for (let item of embedded) {
      this.attrs[item.id] = item;
    }
    for (let id of ids) {
      datas.push(this.attrs[id]);
    }
    return datas;
  },
  async loadValueByIds() {
    let ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    if (!ids || (0, _dataUtils.arrayEmpty)(ids)) {
      return [];
    }
    let idNeedFetch = [],
      idResult = [];
    for (let id of ids) {
      if (!this.attrsValue[id]) {
        idNeedFetch.push(id);
      } else {
        idResult.push(id);
      }
    }
    let datas = [];
    if ((0, _dataUtils.arrayEmpty)(idNeedFetch)) {
      for (let id of idResult) {
        datas.push(this.attrsValue[id]);
      }
      return datas;
    }
    const {
      data: embedded,
      errorCode
    } = await _RequestUtils.default.Get("/attributed/fetch-value-by-ids", {
      ids: idNeedFetch
    });
    if (errorCode !== _configs.SUCCESS_CODE) {
      return [];
    }
    for (let item of embedded) {
      this.attrsValue[item.id] = item;
    }
    for (let id of ids) {
      datas.push(this.attrsValue[id]);
    }
    return datas;
  },
  async createDataOptionInForm(attrs, attrValues) {
    if ((0, _dataUtils.arrayEmpty)(attrs) || (0, _dataUtils.arrayEmpty)(attrValues)) {
      return [];
    }
    let dataAttrs = await this.loadByIds(attrs);
    let dataAttrValues = await this.loadValueByIds(attrValues);
    let datas = [];
    for (let attr of dataAttrs) {
      const data = {
        label: attr.name,
        value: attr.id
      };
      const values = dataAttrValues.filter(i => i.attributedId === attr.id);
      let childs = [];
      for (let value of values) {
        childs.push({
          label: value.value,
          value: value.id
        });
      }
      data.children = childs;
      datas = datas.concat(data);
    }
    return datas;
  }
};
var _default = exports.default = ProductAttrService;