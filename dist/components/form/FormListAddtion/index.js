"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
var _reactI18next = require("react-i18next");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _get = _interopRequireDefault(require("lodash/get"));
var _icons = require("@ant-design/icons");
var _FormContextCustom = require("@/components/context/FormContextCustom");
var _styles = _interopRequireDefault(require("./styles"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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

const FormListAddition = _ref => {
  let {
    children,
    name,
    showBtnInLeft = true,
    textAddNew = 'Thêm mới',
    title,
    formatInitialValue = value => value,
    defaultValueItem
  } = _ref;
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    record
  } = (0, _react.useContext)(_FormContextCustom.FormContextCustom);
  const value = (0, _get.default)(record, name);
  const initialValue = (0, _isEmpty.default)(value) ? [{}] : formatInitialValue(value);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.default, {
    className: "form-list__list-wrapper",
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Typography.Title, {
      level: 4,
      children: t(title)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "form-list__list",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.List, {
        name: name,
        initialValue: initialValue,
        children: (fields, _ref2, _ref3) => {
          let {
            add,
            remove
          } = _ref2;
          let {
            errors
          } = _ref3;
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [fields.map(field => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "form-list__list-item",
              children: [/*#__PURE__*/_react.default.cloneElement(children, {
                field
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CloseCircleFilled, {
                className: "form-list__remove-button",
                onClick: () => remove(field.name)
              })]
            }, field.key)), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Form.Item, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                style: {
                  display: 'flex',
                  justifyContent: showBtnInLeft ? 'flex-start' : 'flex-end'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
                  type: "dashed",
                  onClick: () => add(defaultValueItem),
                  icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.PlusOutlined, {}),
                  children: textAddNew
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.ErrorList, {
                errors: errors
              })]
            })]
          });
        }
      })
    })]
  });
};
var _default = exports.default = FormListAddition;