"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetShipStatusQuery = exports.useGetServiceQuery = exports.useGetOrderCodeQuery = exports.useGetMaterialQuery = exports.useGetCategoryPost = exports.useGetAllStockQuery = exports.useGetAllProvinceQuery = exports.useGetAllProviderQuery = exports.useGetAllProductQuery = exports.useGetAllFaq = exports.useGetAllCustomersSimpleQuery = exports.useGetAllCategoryQuery = exports.useGetAllBusinessUsersQuery = exports.default = void 0;
var _lodash = require("lodash");
var _react = require("react");
var _RequestUtils = _interopRequireDefault(require("@/dist/utils/RequestUtils"));
var _DataContext = _interopRequireDefault(require("@/DataContext"));
var _MyHooks = require("@/dist/hooks/MyHooks");
var _configs = require("@/configs");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**************************************************************************/
/*  useData.js                                                 						*/
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

const log = function (val) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return console.log('[hooks.useData] ' + key, val);
};
function useData(_ref) {
  let {
    queryParams,
    onCompleted = values => values,
    api
  } = _ref;
  const [loading, setLoading] = (0, _react.useState)(false);
  const [data, setData] = (0, _react.useState)({});
  const {
    f5List
  } = (0, _react.useContext)(_DataContext.default);

  /* refetch dành cho fetch các page tăng dần */
  const refetch = (0, _react.useCallback)(async values => {
    if (loading) {
      return Promise.resolve({
        eMsg: "loading"
      });
    }
    setLoading(true);
    const {
      data,
      errorCode
    } = await _RequestUtils.default.Get('/' + api, values);
    setLoading(false);
    if (errorCode !== _configs.SUCCESS_CODE) {
      return Promise.resolve({
        eMsg: api + " not fetch success .!"
      });
    }
    let myData = data;
    if ((0, _lodash.isArray)(myData)) {
      myData = {
        embedded: myData,
        page: {}
      };
    }
    setData(myData);
    onCompleted(myData);
    return myData;
  }, [onCompleted, api, loading]);
  (0, _react.useEffect)(() => {
    refetch(queryParams);
    /* eslint-disable-next-line */
  }, [queryParams]);

  /* fetchMore dành cho search kết quả đã có săn của Form để có dữ liệu hiển thị trong form select */
  const fetchMore = (0, _react.useCallback)(async _ref2 => {
    let {
      filterField,
      defaultValue
    } = _ref2;
    log({
      queryParams,
      filterField,
      defaultValue
    }, 'fetchMore');
    const {
      data,
      errorCode
    } = await _RequestUtils.default.Get('/' + api, {
      [filterField]: defaultValue
    });
    if (errorCode !== _configs.SUCCESS_CODE) {
      return {
        embedded: [],
        page: {}
      };
    }
    let myData = data;
    if ((0, _lodash.isArray)(myData)) {
      myData = {
        embedded: myData,
        page: {}
      };
    }
    return myData;
  }, [queryParams, api]);
  (0, _MyHooks.useUpdateEffect)(() => {
    refetch(queryParams);
  }, [f5List]);
  return {
    loading,
    data,
    refetch,
    fetchMore
  };
}
const useGetAllCustomersSimpleQuery = _ref3 => {
  let {
    queryParams,
    onCompleted
  } = _ref3;
  return useData({
    queryParams,
    onCompleted,
    api: 'customer/find'
  });
};
exports.useGetAllCustomersSimpleQuery = useGetAllCustomersSimpleQuery;
const useGetAllBusinessUsersQuery = _ref4 => {
  let {
    queryParams,
    onCompleted
  } = _ref4;
  return useData({
    queryParams,
    onCompleted,
    api: 'user/list'
  });
};
exports.useGetAllBusinessUsersQuery = useGetAllBusinessUsersQuery;
const useGetAllProductQuery = _ref5 => {
  let {
    queryParams,
    onCompleted
  } = _ref5;
  return useData({
    queryParams,
    onCompleted,
    api: 'product/fetch'
  });
};
exports.useGetAllProductQuery = useGetAllProductQuery;
const useGetAllProviderQuery = _ref6 => {
  let {
    queryParams,
    onCompleted
  } = _ref6;
  return useData({
    queryParams,
    onCompleted,
    api: 'provider/fetch'
  });
};
exports.useGetAllProviderQuery = useGetAllProviderQuery;
const useGetAllProvinceQuery = _ref7 => {
  let {
    queryParams,
    onCompleted
  } = _ref7;
  return useData({
    queryParams,
    onCompleted,
    api: 'province/find'
  });
};
exports.useGetAllProvinceQuery = useGetAllProvinceQuery;
const useGetAllStockQuery = _ref8 => {
  let {
    queryParams,
    onCompleted
  } = _ref8;
  return useData({
    queryParams,
    onCompleted,
    api: 'warehouse/fetch-stock'
  });
};
exports.useGetAllStockQuery = useGetAllStockQuery;
const useGetAllCategoryQuery = _ref9 => {
  let {
    queryParams,
    onCompleted
  } = _ref9;
  return useData({
    queryParams,
    onCompleted,
    api: 'category/product/fetch'
  });
};
exports.useGetAllCategoryQuery = useGetAllCategoryQuery;
const useGetCategoryPost = _ref0 => {
  let {
    queryParams,
    onCompleted
  } = _ref0;
  return useData({
    queryParams,
    onCompleted,
    api: 'category/page/fetch'
  });
};
exports.useGetCategoryPost = useGetCategoryPost;
const useGetShipStatusQuery = _ref1 => {
  let {
    queryParams,
    onCompleted
  } = _ref1;
  return useData({
    queryParams,
    onCompleted,
    api: 'shipping/fetch-status'
  });
};
exports.useGetShipStatusQuery = useGetShipStatusQuery;
const useGetOrderCodeQuery = _ref10 => {
  let {
    queryParams,
    onCompleted
  } = _ref10;
  return useData({
    queryParams,
    onCompleted,
    api: 'order/fetch'
  });
};
exports.useGetOrderCodeQuery = useGetOrderCodeQuery;
const useGetServiceQuery = _ref11 => {
  let {
    queryParams,
    onCompleted
  } = _ref11;
  return useData({
    queryParams,
    onCompleted,
    api: 'service/list'
  });
};
exports.useGetServiceQuery = useGetServiceQuery;
const useGetMaterialQuery = _ref12 => {
  let {
    queryParams,
    onCompleted
  } = _ref12;
  return useData({
    queryParams,
    onCompleted,
    api: 'material/fetch'
  });
};
exports.useGetMaterialQuery = useGetMaterialQuery;
const useGetAllFaq = _ref13 => {
  let {
    queryParams,
    onCompleted
  } = _ref13;
  return useData({
    queryParams,
    onCompleted,
    api: 'faq/fetch'
  });
};
exports.useGetAllFaq = useGetAllFaq;
var _default = exports.default = useData;