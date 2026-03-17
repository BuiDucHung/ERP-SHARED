"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _configs = require("@/configs");
var _RequestUtils = _interopRequireWildcard(require("@/utils/RequestUtils"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const MediaService = {
  fetchById: async (objectId, objectType, featureImage) => {
    if (!objectId) {
      return [];
    }
    const {
      data,
      errorCode
    } = await _RequestUtils.default.Get("/media/find", {
      objectId,
      objectType
    });
    if (errorCode !== _RequestUtils.SUCCESS_CODE) {
      return [];
    }
    let images = [];
    for (let image of data) {
      const {
        id,
        fileName
      } = image;
      let isFeatured = fileName === featureImage;
      images.push({
        isFeatured,
        id,
        url: _configs.GATEWAY + fileName,
        fromUpload: false
      });
    }
    return images;
  }
};
var _default = exports.default = MediaService;