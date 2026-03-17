"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _configs = require("configs");
var _dataUtils = require("utils/dataUtils");
var _RequestUtils = _interopRequireDefault(require("utils/RequestUtils"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CarService = {
  allData: {},
  empty() {
    this.allData = {};
  },
  getAllDiemTra() {
    return this.allData["Điểm trả"] ?? [];
  },
  getAllDiemDon() {
    return this.allData["Điểm đến"] ?? [];
  },
  async fetch() {
    if ((0, _dataUtils.arrayNotEmpty)(this.allData)) {
      return this.allData;
    }
    const {
      data,
      errorCode
    } = await _RequestUtils.default.Get("/tickes-bus/fetch-address");
    if (errorCode !== _configs.SUCCESS_CODE) {
      return [];
    }
    this.allData = data;
    return this.allData;
  }
};
var _default = exports.default = CarService;