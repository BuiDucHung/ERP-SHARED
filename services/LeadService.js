"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _RequestUtils = _interopRequireWildcard(require("@flast-erp/core/utils/RequestUtils"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const LeadService = {
  fetchByPhone: async phone => {
    const {
      data,
      errorCode
    } = await _RequestUtils.default.Get("/data/find-by-phone", {
      phone
    });
    const error = errorCode !== _RequestUtils.SUCCESS_CODE;
    return [error, data];
  },
  createLead: async values => {
    const {
      data,
      errorCode
    } = await _RequestUtils.default.Post("/data/create", values);
    return {
      error: errorCode !== _RequestUtils.SUCCESS_CODE,
      data
    };
  }
};
var _default = exports.default = LeadService;