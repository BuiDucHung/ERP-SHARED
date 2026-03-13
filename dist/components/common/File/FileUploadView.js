"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _jsxRuntime = require("react/jsx-runtime");
/**************************************************************************/
/*  FileUploadView.js                                                     */
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

const FileUploadView = _ref => {
  let {
    files = [],
    multiPathFile,
    onRemoveFile = file => file,
    onRemoveMultiPathFile = value => value
  } = _ref;
  const [multiPaths, setmultiPaths] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    let files = multiPathFile.map(f => f.name);
    setmultiPaths(files);
  }, [multiPathFile]);
  const onDelete = name => {
    if (String(name).startsWith("http")) {
      onRemoveFile(name);
    } else {
      onRemoveMultiPathFile(name);
    }
  };
  const onClick = file => {
    if (String(file).startsWith("http")) {
      window.open(file, '_blank');
    }
  };
  return [...multiPaths, ...files].map((file, key) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
    span: 8,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tag, {
      color: "#108ee9",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popconfirm, {
        title: "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a File n\xE0y ?",
        onConfirm: () => onDelete(file),
        okText: "Yes",
        cancelText: "No",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.DeleteOutlined, {})
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        onClick: () => onClick(file),
        children: file.split("/").filter(Boolean).pop()
      })
    })
  }, key));
};
var _default = exports.default = FileUploadView;