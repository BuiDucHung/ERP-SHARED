"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _antd = require("antd");
var _reactI18next = require("react-i18next");
var _FormContextCustom = require("../context/FormContextCustom");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /**************************************************************************/ /*  FormInput.js                                                          */ /**************************************************************************/ /*                       Tệp này là một phần của:                         */ /*                             Open CDP                                   */ /*                        https://flast.vn                                */ /**************************************************************************/ /* Bản quyền (c) 2025 - này thuộc về các cộng tác viên Flast Solution     */ /* (xem AUTHORS.md).                                                      */ /* Bản quyền (c) 2024-2025 Long Huu, Quang Duc, Hung Bui                  */ /*                                                                        */ /* Bạn được quyền sử dụng phần mềm này miễn phí cho bất kỳ mục đích nào,  */ /* bao gồm sao chép, sửa đổi, phân phối, bán lại…                         */ /*                                                                        */ /* Chỉ cần giữ nguyên thông tin bản quyền và nội dung giấy phép này trong */ /* các bản sao.                                                           */ /*                                                                        */ /* Đội ngũ phát triển mong rằng phần mềm được sử dụng đúng mục đích và    */ /* có trách nghiệm                                                        */ /**************************************************************************/
const FormInput = _ref => {
  let {
    name,
    label,
    required,
    messageRequire = 'error.required',
    placeholder,
    rules = [],
    initialValue,
    formItemProps,
    ContentComponent = _antd.Input,
    whitespace,
    isShowTooltip,
    minLength,
    maxLength,
    ...props
  } = _ref;
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const {
    allowPressEnter,
    handleSubmit
  } = (0, _react.useContext)(_FormContextCustom.FormContextCustom);
  const minMaxRule = (0, _react.useMemo)(() => {
    const ruleLengthArr = [];
    if (minLength) {
      ruleLengthArr.push({
        min: minLength,
        message: t('error.minLength', {
          min: minLength
        })
      });
    }
    if (maxLength) {
      ruleLengthArr.push({
        max: maxLength,
        message: t('error.maxLength', {
          max: maxLength
        })
      });
    }
    return ruleLengthArr;
  }, []); // eslint-disable-line

  const formItem = /*#__PURE__*/React.createElement(_antd.Form.Item, _extends({}, label && {
    label: t(label)
  }, {
    name: name,
    initialValue: initialValue,
    rules: [{
      required,
      message: t(messageRequire)
    }, ...(whitespace ? [{
      whitespace,
      message: t('error.empty')
    }] : []), ...minMaxRule, ...rules]
  }, formItemProps), /*#__PURE__*/React.createElement(ContentComponent, _extends({}, placeholder && {
    placeholder: t(placeholder)
  }, props, {
    onPressEnter: allowPressEnter ? handleSubmit : undefined
  })));
  return isShowTooltip ? /*#__PURE__*/React.createElement(_antd.Tooltip, {
    title: placeholder ? t(placeholder) : ''
  }, formItem) : formItem;
};
var _default = exports.default = FormInput;