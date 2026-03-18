"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _antd = require("antd");
var _FormContextCustom = require("@erp/shared/dist/components/context/FormContextCustom");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
/**************************************************************************/
/*  RestEditModal.js                                                      */
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

const RestEditModal = _ref => {
  let {
    children,
    record,
    form: externalForm,
    isMergeRecordOnSubmit = true,
    formatOnSubmit = values => values,
    updateRecord = values => values,
    formatDefaultValues = values => values,
    onSubmit
  } = _ref;
  const [innerForm] = _antd.Form.useForm();
  const form = externalForm || innerForm;
  (0, _react.useEffect)(() => {
    form.setFieldsValue(formatDefaultValues(record));
    /* eslint-disable-next-line */
  }, [form, record]);
  const onFinish = (0, _react.useCallback)(values => {
    const datas = isMergeRecordOnSubmit ? {
      ...record,
      ...values
    } : values;
    onSubmit(formatOnSubmit(datas));
    /* eslint-disable-next-line */
  }, [record, onSubmit]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form, {
    form: form,
    layout: "vertical",
    onFinish: onFinish,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormContextCustom.FormContextCustom.Provider, {
      value: {
        form,
        record,
        updateRecord
      },
      children: children
    })
  });
};
var _default = exports.default = RestEditModal;