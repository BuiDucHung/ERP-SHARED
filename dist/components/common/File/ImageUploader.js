"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jwtService = _interopRequireDefault(require("@erp/shared/dist/utils/jwtService"));
var _antd = require("antd");
var _icons = require("@ant-design/icons");
var _tools = require("@erp/shared/dist/utils/tools");
var _RequestUtils = _interopRequireDefault(require("@erp/shared/dist/utils/RequestUtils"));
var _configs = require("@/configs");
var _FormContextCustom = require("@erp/shared/dist/components/context/FormContextCustom");
var _CustomImage = _interopRequireDefault(require("@erp/shared/dist/components/common/CustomImage"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const ImageUploader = _ref => {
  let {
    apiUploadMultiPart,
    apiUploadUrlFile = '',
    apiRemoveFile = '',
    title = 'Upload ảnh sản phẩm',
    showImgSlide = true,
    imageSize = 80,
    onBeforeSubmitMultiPart = values => values,
    onBeforeSubmitUrl = values => values,
    onClickAddImageToContent = url => url,
    onToggleFeatured = id => id,
    onToggleSlideShow = (id, checked) => true
  } = _ref;
  const {
    record
  } = (0, _react.useContext)(_FormContextCustom.FormContextCustom);
  const [images, setImages] = (0, _react.useState)([]);
  const [showUrlInput, setShowUrlInput] = (0, _react.useState)(false);
  const [urlInputValue, setUrlInputValue] = (0, _react.useState)('');
  (0, _react.useEffect)(() => {
    setImages(record?.images ?? []);
  }, [record]);
  const handleFileChange = _ref2 => {
    let {
      file,
      fileList
    } = _ref2;
    const newImage = {
      id: String(Date.now()),
      url: URL.createObjectURL(file),
      name: file.name,
      isFeatured: false,
      isSlideshow: false,
      fromUpload: true,
      originFile: file
    };
    setImages(prev => {
      /* Tránh thêm file trùng (dựa trên name + size) */
      const exists = prev.some(img => img.name === file.name && img.size === file.size);
      if (exists) return prev;
      return [newImage, ...prev];
    });
  };
  const handleAddByUrl = () => {
    setShowUrlInput(true);
  };
  const handleUrlSubmit = async () => {
    if (!urlInputValue.trim()) {
      _antd.message.warning('Vui lòng nhập URL hình ảnh!');
      return;
    }
    if (apiUploadUrlFile) {
      _antd.message.warning('Vui lòng cấu hình API cập nhật Url file !');
      return;
    }
    const newImage = {
      url: urlInputValue.trim(),
      name: urlInputValue.trim().split('/').pop(),
      isFeatured: false,
      isSlideshow: false,
      fromUpload: true
    };
    const {
      errorCode,
      data
    } = await _RequestUtils.default.Post(apiUploadUrlFile, {
      method: 'POST',
      body: onBeforeSubmitUrl(newImage)
    });
    if (errorCode !== 200) {
      _antd.message.error('Update file url thất bại');
      return;
    }
    setImages(prev => [...prev, data]);
    setUrlInputValue('');
    setShowUrlInput(false);
  };
  const handleRemove = id => {
    if (!apiRemoveFile) {
      _antd.message.error('Chưa cấu hình enpoint xóa file !');
      return;
    }
    _RequestUtils.default.Post(`${apiRemoveFile}/${id}`, {});
    setImages(images.filter(img => img.id !== id));
  };
  const handleToggleFeatured = id => {
    setImages(images.map(img => ({
      ...img,
      isFeatured: img.id === id ? !img.isFeatured : img.isFeatured
    })));
    onToggleFeatured(id);
  };
  const handleToggleSlide = (id, checked) => {
    setImages(images.map(img => img.id === id ? {
      ...img,
      isSlideshow: checked
    } : img));
    onToggleSlideShow(id, checked);
  };
  const handleUpload = id => {
    const image = images.find(img => img.id === id);
    if (image && image.fromUpload && image.originFile) {
      uploadToServer(image);
    }
  };
  const uploadToServer = async image => {
    const formData = new FormData();
    formData.append('image', image.originFile, image.name);
    formData.append('isFeatured', image.isFeatured);
    formData.append('isSlideshow', image.isSlideshow);
    const response = await fetch(String(_configs.GATEWAY).concat(apiUploadMultiPart), {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${_jwtService.default.getAccessToken()}`
      },
      body: onBeforeSubmitMultiPart(formData)
    });
    if (!response.ok) {
      _antd.message.error('Upload thất bại!');
      return;
    }
    const {
      data,
      errorCode,
      message: MSG
    } = await response.json();
    if (errorCode !== _configs.SUCCESS_CODE) {
      _antd.message.error(MSG);
      return;
    }
    const {
      fileName,
      ...mImage
    } = data;
    /* reset originFile = null */
    setImages(prev => prev.map(img => img.id === image.id ? {
      ...mImage,
      url: String(_configs.GATEWAY).concat(fileName),
      originFile: null,
      fromUpload: false
    } : img));
    if (image.url && image.fromUpload) {
      URL.revokeObjectURL(image.url);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      padding: '20px 0px',
      fontFamily: 'Arial'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        border: '1px solid #e8e8e8',
        borderRadius: '4px',
        marginBottom: '16px',
        padding: '12px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Row, {
        justify: "space-between",
        align: "middle",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Space, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Upload, {
            showUploadList: false,
            beforeUpload: () => false,
            onChange: handleFileChange,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
              type: "primary",
              style: {
                backgroundColor: '#52c41a',
                borderColor: '#52c41a'
              },
              children: "Th\xEAm \u1EA3nh..."
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
            type: "default",
            style: {
              backgroundColor: '#f5a623',
              borderColor: '#f5a623',
              color: 'white'
            },
            children: "H\u1EE7y"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
          type: "primary",
          style: {
            backgroundColor: '#4096ff',
            borderColor: '#4096ff'
          },
          onClick: handleAddByUrl,
          children: "Th\xEAm Url"
        })]
      })
    }), showUrlInput && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        border: '1px solid #e8e8e8',
        borderRadius: '4px',
        marginBottom: '16px',
        padding: '12px'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input, {
        placeholder: "Nh\u1EADp URL h\xECnh \u1EA3nh...",
        value: urlInputValue,
        onChange: e => setUrlInputValue(e.target.value),
        onPressEnter: handleUrlSubmit,
        style: {
          marginBottom: '8px'
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Space, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
          type: "primary",
          onClick: handleUrlSubmit,
          children: "X\xE1c nh\u1EADn"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
          type: "default",
          onClick: () => setShowUrlInput(false),
          children: "H\u1EE7y"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        border: '1px solid #e8e8e8',
        borderRadius: '4px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.List, {
        dataSource: images,
        renderItem: item => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.List.Item, {
          style: {
            border: '1px solid #e8e8e8',
            borderBottom: 'none',
            padding: '12px',
            display: 'flex',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
            span: 4,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CustomImage.default, {
              preview: false,
              src: item.url,
              alt: item.name,
              width: imageSize,
              height: imageSize,
              style: {
                objectFit: 'cover',
                borderRadius: '4px'
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Col, {
            span: 12,
            style: {
              paddingLeft: '16px',
              overflow: 'hidden'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%'
              },
              children: item.name
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              style: {
                marginTop: '8px'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Checkbox, {
                checked: item.isFeatured,
                onChange: e => handleToggleFeatured(item.id),
                style: {
                  marginRight: '16px'
                },
                children: "Ch\u1ECDn l\xE0m \u1EA3nh \u0111\u1EA1i di\u1EC7n"
              }), showImgSlide && /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Checkbox, {
                checked: item.isSlideshow,
                onChange: e => handleToggleSlide(item.id, e.target.checked),
                children: "Ch\u1ECDn l\xE0m \u1EA3nh slide"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
            span: 8,
            style: {
              textAlign: 'right'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Space, {
              children: [item.fromUpload && /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.UploadOutlined, {}),
                type: "primary",
                size: "small",
                style: {
                  backgroundColor: '#1890ff',
                  borderColor: '#1890ff'
                },
                onClick: () => handleUpload(item.id),
                children: "T\u1EA3i l\xEAn"
              }), (0, _tools.isPositiveInteger)(item.id) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.PlusOutlined, {}),
                danger: true,
                size: "small",
                onClick: () => onClickAddImageToContent(item.url)
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.DeleteOutlined, {}),
                danger: true,
                size: "small",
                onClick: () => handleRemove(item.id)
              })]
            })
          })]
        }, item.id)
      })
    })]
  });
};
var _default = exports.default = ImageUploader;