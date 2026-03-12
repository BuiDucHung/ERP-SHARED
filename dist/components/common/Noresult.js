"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const StyledNotFound = _styledComponents.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 170px);
  background-color: #f5f8fa;
  text-align: center;
`;
const NotFoundImage = _styledComponents.default.img`
  width: 300px;
  margin-bottom: 24px;
`;
const NotFoundSubtitle = _styledComponents.default.p`
  font-size: 20px;
  color: #333;
`;
const NotFoundDescription = _styledComponents.default.p`
  font-size: 16px;
  color: #666;
`;
const BackHomeButton = _styledComponents.default.a`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 8px;
  &:hover {
    background-color: #0056b3;
  }
`;
const NotFoundPage = _ref => {
  let {
    message
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledNotFound, null, /*#__PURE__*/_react.default.createElement(NotFoundImage, {
    src: "/img/404.png",
    alt: "404 Image"
  }), /*#__PURE__*/_react.default.createElement(NotFoundSubtitle, null, "Y\xEAu c\u1EA7u kh\xF4ng t\xECm th\u1EA5y"), /*#__PURE__*/_react.default.createElement(NotFoundDescription, null, message || 'Trang yêu cầu không tìm thấy. Vui lòng tìm kiếm lại.'), /*#__PURE__*/_react.default.createElement(BackHomeButton, {
    href: "/"
  }, "V\u1EC1 trang ch\u1EE7"));
};
var _default = exports.default = NotFoundPage;