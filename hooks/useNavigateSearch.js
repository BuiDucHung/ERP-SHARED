"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNavigateSearch = void 0;
var _reactRouter = require("react-router");
var _tools = require("@erp/shared/utils/tools");
/**************************************************************************/
/*  useNavigateSearch.js                                                  */
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

const getPath = name => name.startsWith('/') ? name : '/'.concat(name);
const useNavigateSearch = () => {
  const navigate = (0, _reactRouter.useNavigate)();
  return (pathname, params) => navigate({
    pathname: getPath(pathname),
    search: `?${(0, _tools.convertObjToSearchStr)(params)}`
  });
};
exports.useNavigateSearch = useNavigateSearch;