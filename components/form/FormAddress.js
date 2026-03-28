"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _FormInput = _interopRequireDefault(require("@erp/shared/components/form/FormInput"));
var _FormSelect = _interopRequireDefault(require("@erp/shared/components/form/FormSelect"));
var _FormSelectInfiniteProvince = _interopRequireDefault(require("@erp/shared/components/form/SelectInfinite/FormSelectInfiniteProvince"));
var _MyHooks = require("@erp/shared/hooks/MyHooks");
var _react = _interopRequireWildcard(require("react"));
var _RequestUtils = _interopRequireDefault(require("@erp/shared/utils/RequestUtils"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  FormAddress.js                                                        */
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

const FormAddress = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
      md: 12,
      xs: 24,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormSelectInfiniteProvince.default, {
        name: "provinceId",
        label: "T\u1EC9nh / TP",
        required: true,
        placeholder: "T\u1EC9nh / TP",
        initialFilter: {
          id: 0
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
      md: 12,
      xs: 24,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
        noStyle: true,
        shouldUpdate: (prevValues, curValues) => prevValues.provinceId !== curValues.provinceId,
        children: _ref => {
          let {
            getFieldValue
          } = _ref;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(FormWard, {
            parentId: getFieldValue('provinceId')
          });
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
      md: 24,
      xs: 24,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormInput.default, {
        label: "\u0110\u1ECBa ch\u1EC9",
        name: "address",
        required: true,
        placeholder: "\u0110\u1ECBa ch\u1EC9"
      })
    })]
  });
};
const FormWard = /*#__PURE__*/_react.default.memo(_ref2 => {
  let {
    parentId
  } = _ref2;
  const [datas, setData] = (0, _react.useState)([]);
  (0, _MyHooks.useEffectAsync)(async () => {
    if (!parentId) {
      return;
    }
    const wards = await _RequestUtils.default.GetAsList("/province/find", {
      id: parentId
    });
    setData(wards);
  }, [parentId]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormSelect.default, {
    name: "wardId",
    label: "Ph\u01B0\u1EDDng / X\xE3",
    required: true,
    resourceData: datas,
    placeholder: "Ph\u01B0\u1EDDng / X\xE3"
  });
});
var _default = exports.default = FormAddress;