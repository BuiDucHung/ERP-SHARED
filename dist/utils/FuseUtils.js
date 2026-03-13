"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InAppEvent = exports.DRAWER_ROUTE = void 0;
var _configs = require("@/configs");
/**************************************************************************/
/*  FuseUtils.js                                                          */
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

class EventEmitter {
  constructor() {
    this.events = {};
  }
  _getEventListByName(eventName) {
    if (typeof this.events[eventName] === 'undefined') {
      this.events[eventName] = new Set();
    }
    return this.events[eventName];
  }
  on(eventName, fn) {
    this._getEventListByName(eventName).add(fn);
  }
  once(eventName, fn) {
    const self = this;
    const onceFn = function () {
      self.removeListener(eventName, onceFn);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      fn.apply(self, args);
    };
    this.on(eventName, onceFn);
  }
  emit(eventName) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    this._getEventListByName(eventName).forEach(function (fn) {
      fn.apply(this, args);
    }.bind(this));
  }
  addEventListener(eventName, fn) {
    this.on(eventName, fn);
  }
  removeListener(eventName, fn) {
    this._getEventListByName(eventName).delete(fn);
  }
}
class FuseUtils {
  static EventEmitter = (() => EventEmitter)();
  static hasPermission(authArr, enabled) {
    if (authArr === '*') {
      return true;
    } else if ((authArr || '') === '') {
      return true;
    } else if (authArr.length === 0) {
      return true;
    }
    return enabled;
  }
  static generateRoutesFromConfigs(configs, defaultAuth) {
    let allRoutes = [];
    configs.forEach(config => {
      allRoutes = [...allRoutes, ...this.setRoutes(config, defaultAuth)];
    });
    return allRoutes;
  }
  static setRoutes(config, defaultAuth) {
    let routes = [...config.routes];
    if (config.settings || config.auth) {
      routes = routes.map(route => {
        let auth = config.auth ? [...config.auth] : defaultAuth || null;
        auth = route.auth ? [...auth, ...route.auth] : auth;
        return {
          ...route,
          settings: {
            ...config.settings,
            ...route.settings
          },
          auth
        };
      });
    }
    return [...routes];
  }
}
class AppEvent extends EventEmitter {
  normalSuccess(content) {
    let title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.emit(_configs.INAPP_NOTIFICATION_EMITTER, {
      type: 'success',
      content,
      title
    });
  }
  normalInfo(content) {
    let title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.emit(_configs.INAPP_NOTIFICATION_EMITTER, {
      type: 'info',
      content,
      title
    });
  }
  normalError(content) {
    let title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.emit(_configs.INAPP_NOTIFICATION_EMITTER, {
      type: 'error',
      content,
      title
    });
  }
  modal(content, type) {
    this.emit(_configs.INAPP_NOTIFICATION_EMITTER, {
      type,
      content,
      cate: 'modal'
    });
  }
  changeStore(data) {
    this.emit(_configs.CHANGE_STORE, data);
  }
  openDrawer = (route, _ref) => {
    let {
      title,
      ...rest
    } = _ref;
    return this.emit(_configs.HASH_MODAL, {
      hash: route,
      title,
      data: rest
    });
  };
}
const DRAWER_ROUTE = exports.DRAWER_ROUTE = {
  CONTRACT_FORM: 'CONTRACT_FORM'
};
const InAppEvent = exports.InAppEvent = new AppEvent();
var _default = exports.default = FuseUtils;