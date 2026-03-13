"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useData = require("../../../hooks/useData");
var _FormSelectInfinite = _interopRequireDefault(require("./FormSelectInfinite"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FormInfiniteShipStatus = props => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormSelectInfinite.default, {
    useGetAllQuery: _useData.useGetShipStatusQuery,
    name: "status",
    valueProp: "id",
    titleProp: "name",
    searchKey: "name",
    filterField: "id",
    initialFilter: {
      page: 1
    },
    ...props
  });
};
var _default = exports.default = FormInfiniteShipStatus;