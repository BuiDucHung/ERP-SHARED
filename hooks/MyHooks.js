"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEffectAsync = useEffectAsync;
exports.useUpdateEffect = exports.useUnmount = exports.useSetState = exports.useMount = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**************************************************************************/
/*  MyHooks.js                                                            */
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

const useMount = callback => {
  (0, _react.useEffect)(() => {
    callback();
    /* eslint-disable-next-line */
  }, []);
};

/* useUnmount(() => console.log("useUnmount")) */
exports.useMount = useMount;
const useUnmount = callback => {
  const callbackRef = _react.default.useRef(callback);
  callbackRef.current = callback;
  (0, _react.useEffect)(() => {
    return () => {
      callbackRef.current();
    };
  }, []);
};

/* const [count, setCount] = useSetState(initState) 
*  setCount({ name: 'medium' })
*/
exports.useUnmount = useUnmount;
const useSetState = initState => {
  const [state, setState] = _react.default.useState(initState);
  const setMergeState = value => setState(prevValue => {
    const newValue = typeof value === 'function' ? value(prevValue) : value;
    return newValue ? {
      ...prevValue,
      ...newValue
    } : prevValue;
  });
  return [state, setMergeState];
};

/*
const [ count, setCount ] = React.useState(0)
useUpdateEffect(() => {
  console.log('Count changed', count)
}, [ count ])
*/
exports.useSetState = useSetState;
const useUpdateEffect = function (effectCallback) {
  let deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const isFirstMount = _react.default.useRef(false);
  (0, _react.useEffect)(() => {
    return () => {
      isFirstMount.current = false;
    };
  }, []);
  (0, _react.useEffect)(() => {
    /* Không thực thi code cho lần đầu tiên watch */
    if (!isFirstMount.current) {
      isFirstMount.current = true;
    } else {
      return effectCallback();
    }
    /* eslint-disable-next-line */
  }, deps);
};

/*
useEffectAsync(async () => {
  const books = await fetchBooks();
  setBooks(books);
});
*/
exports.useUpdateEffect = useUpdateEffect;
function useEffectAsync(effect) {
  let inputs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let callback = arguments.length > 2 ? arguments[2] : undefined;
  (0, _react.useEffect)(() => {
    let isMounted = true;
    const run = async () => {
      await effect(isMounted);
    };
    run();
    return () => {
      if (typeof callback === 'function') {
        callback();
      }
      isMounted = false;
    };
    /* eslint-disable-next-line */
  }, inputs);
}
;