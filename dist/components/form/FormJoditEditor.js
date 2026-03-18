"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _joditReact = _interopRequireDefault(require("jodit-react"));
var _MyHooks = require("@/dist/hooks/MyHooks");
var _FormContextCustom = require("@/dist/components/context/FormContextCustom");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FormJoditEditor = /*#__PURE__*/(0, _react.forwardRef)((_ref, ref) => {
  let {
    name,
    initContent = '',
    placeholder = 'Nhập nội dung'
  } = _ref;
  const {
    form
  } = (0, _react.useContext)(_FormContextCustom.FormContextCustom);
  const [editorValue, setEditorValue] = (0, _react.useState)('');
  const joditInstance = (0, _react.useRef)(null);
  const config = {
    placeholder: placeholder || '',
    minHeight: 700,
    spellcheck: true,
    enter: "BR"
  };
  const handleChange = newContent => {
    const content = newContent || '';
    form.setFieldValue(name, content);
  };

  /* Hàm public để chèn ảnh (sẽ được gọi từ ngoài) */
  (0, _react.useImperativeHandle)(ref, () => ({
    insertImage: imageUrl => {
      if (!joditInstance.current) {
        return;
      }
      const editor = joditInstance.current;
      const imgHtml = `
        <p style="text-align: center;">
          <img src="${imageUrl}" style="max-width: 600px; height: auto;" />
        </p>
      `;
      try {
        editor.selection.insertHTML(imgHtml);
        handleChange(editor.value);
      } catch (err) {
        console.error('Insert failed:', err);
      }
    }
    /* eslint-disable-next-line */
  }), [form, name]);
  (0, _MyHooks.useEffectAsync)(() => {
    setEditorValue(initContent);
  }, [initContent]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_joditReact.default, {
    value: editorValue,
    config: config,
    onChange: handleChange,
    ref: editor => {
      joditInstance.current = editor;
    }
  });
});
var _default = exports.default = FormJoditEditor;