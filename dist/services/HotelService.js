"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _configs = require("configs");
var _dataUtils = require("utils/dataUtils");
var _RequestUtils = _interopRequireDefault(require("utils/RequestUtils"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HotelService = {
  allData: [],
  empty() {
    this.allData = [];
  },
  fetchAddressByName(name) {
    return this.allData.find(i => i.name === name)?.address ?? '';
  },
  getAll() {
    return this.allData;
  },
  async fetch() {
    if ((0, _dataUtils.arrayNotEmpty)(this.allData)) {
      return this.allData;
    }
    const {
      data,
      errorCode
    } = await _RequestUtils.default.Get("/tickes-hotel/list-hotel");
    if (errorCode !== _configs.SUCCESS_CODE) {
      return [];
    }
    this.allData = data;
    return this.allData;
  }
};
var _default = exports.default = HotelService;