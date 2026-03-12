"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useData = require("../../../hooks/useData");
var _FormSelectInfinite = _interopRequireDefault(require("./FormSelectInfinite"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FormInfiniteShipStatus = props => {
  return /*#__PURE__*/React.createElement(_FormSelectInfinite.default, _extends({
    useGetAllQuery: _useData.useGetShipStatusQuery,
    name: "status",
    valueProp: "id",
    titleProp: "name",
    searchKey: "name",
    filterField: "id",
    initialFilter: {
      page: 1
    }
  }, props));
};
var _default = exports.default = FormInfiniteShipStatus;