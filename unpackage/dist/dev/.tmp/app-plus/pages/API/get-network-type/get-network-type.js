(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/API/get-network-type/get-network-type"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\uni-app\\测试app\\pages\\API\\get-network-type\\get-network-type.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/uni-app/测试app/pages/API/get-network-type/get-network-type.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n  data: function data() {\n    return {\n      title: 'getNetworkType',\n      hasNetworkType: false,\n      networkType: '' };\n\n  },\n  onUnload: function onUnload() {\n    this.networkType = '', this.hasNetworkType = false;\n  },\n  methods: {\n    getNetworkType: function getNetworkType() {var _this = this;\n      uni.getNetworkType({\n        success: function success(res) {\n          console.log(res);\n          _this.hasNetworkType = true, _this.networkType = res.subtype || res.networkType;\n        },\n        fail: function fail() {\n          uni.showModal({\n            content: '获取失败！',\n            showCancel: false });\n\n        } });\n\n    },\n    clear: function clear() {\n      this.hasNetworkType = false,\n      this.networkType = '';\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js */ \"./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js\")[\"default\"]))\n\n//# sourceURL=uni-app:///pages/API/get-network-type/get-network-type.vue?vue&type=script&lang=js&?e02f");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\uni-app\\测试app\\pages\\API\\get-network-type\\get-network-type.vue?vue&type=template&id=2e22fe61&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/uni-app/测试app/pages/API/get-network-type/get-network-type.vue?vue&type=template&id=2e22fe61& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"view\",\n    [\n      _c(\"page-head\", { attrs: { title: _vm.title, mpcomid: \"1a42bfb6-0\" } }),\n      _c(\"view\", { staticClass: \"uni-padding-wrap uni-common-mt\" }, [\n        _c(\n          \"view\",\n          { staticStyle: { background: \"#FFFFFF\", padding: \"40rpx\" } },\n          [\n            _c(\"view\", { staticClass: \"uni-hello-text uni-center\" }, [\n              _vm._v(\"网络状态\")\n            ]),\n            _vm.hasNetworkType === false\n              ? _c(\"block\", [\n                  _c(\n                    \"view\",\n                    { staticClass: \"uni-h2 uni-center uni-common-mt\" },\n                    [_vm._v(\"未获取\")]\n                  ),\n                  _c(\n                    \"view\",\n                    { staticClass: \"uni-hello-text uni-center uni-common-mt\" },\n                    [_vm._v(\"请点击下面按钮获取网络状态\")]\n                  )\n                ])\n              : _vm._e(),\n            _vm.hasNetworkType === true\n              ? _c(\"block\", [\n                  _c(\n                    \"view\",\n                    { staticClass: \"uni-h2 uni-center uni-common-mt\" },\n                    [_vm._v(_vm._s(_vm.networkType))]\n                  )\n                ])\n              : _vm._e()\n          ],\n          1\n        ),\n        _c(\n          \"view\",\n          { staticClass: \"uni-btn-v uni-common-mt\" },\n          [\n            _c(\n              \"button\",\n              {\n                attrs: { type: \"primary\", eventid: \"1a42bfb6-0\" },\n                on: { tap: _vm.getNetworkType }\n              },\n              [_vm._v(\"获取手机网络状态\")]\n            ),\n            _c(\n              \"button\",\n              { attrs: { eventid: \"1a42bfb6-1\" }, on: { tap: _vm.clear } },\n              [_vm._v(\"清空\")]\n            )\n          ],\n          1\n        )\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=D:/uni-app/%E6%B5%8B%E8%AF%95app/pages/API/get-network-type/get-network-type.vue?vue&type=template&id=2e22fe61&");

/***/ }),

/***/ "D:\\uni-app\\测试app\\main.js?{\"page\":\"pages%2FAPI%2Fget-network-type%2Fget-network-type\"}":
/*!*********************************************************************************************!*\
  !*** D:/uni-app/测试app/main.js?{"page":"pages%2FAPI%2Fget-network-type%2Fget-network-type"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"D:\\\\uni-app\\\\测试app\\\\pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _getNetworkType = _interopRequireDefault(__webpack_require__(/*! ./pages/API/get-network-type/get-network-type.vue */ \"D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\get-network-type\\\\get-network-type.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_getNetworkType.default));\n\n//# sourceURL=D:/uni-app/%E6%B5%8B%E8%AF%95app/main.js?%7B%22page%22:%22pages%252FAPI%252Fget-network-type%252Fget-network-type%22%7D");

/***/ }),

/***/ "D:\\uni-app\\测试app\\pages\\API\\get-network-type\\get-network-type.vue":
/*!************************************************************************!*\
  !*** D:/uni-app/测试app/pages/API/get-network-type/get-network-type.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_network_type_vue_vue_type_template_id_2e22fe61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-network-type.vue?vue&type=template&id=2e22fe61& */ \"D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\get-network-type\\\\get-network-type.vue?vue&type=template&id=2e22fe61&\");\n/* harmony import */ var _get_network_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-network-type.vue?vue&type=script&lang=js& */ \"D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\get-network-type\\\\get-network-type.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _get_network_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _get_network_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _get_network_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _get_network_type_vue_vue_type_template_id_2e22fe61___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _get_network_type_vue_vue_type_template_id_2e22fe61___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"D:/uni-app/测试app/pages/API/get-network-type/get-network-type.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=D:/uni-app/%E6%B5%8B%E8%AF%95app/pages/API/get-network-type/get-network-type.vue");

/***/ }),

/***/ "D:\\uni-app\\测试app\\pages\\API\\get-network-type\\get-network-type.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** D:/uni-app/测试app/pages/API/get-network-type/get-network-type.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_get_network_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./get-network-type.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\get-network-type\\\\get-network-type.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_get_network_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_get_network_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_get_network_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_get_network_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_get_network_type_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///pages/API/get-network-type/get-network-type.vue?vue&type=script&lang=js&?0d6e");

/***/ }),

/***/ "D:\\uni-app\\测试app\\pages\\API\\get-network-type\\get-network-type.vue?vue&type=template&id=2e22fe61&":
/*!*******************************************************************************************************!*\
  !*** D:/uni-app/测试app/pages/API/get-network-type/get-network-type.vue?vue&type=template&id=2e22fe61& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_get_network_type_vue_vue_type_template_id_2e22fe61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./get-network-type.vue?vue&type=template&id=2e22fe61& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\get-network-type\\\\get-network-type.vue?vue&type=template&id=2e22fe61&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_get_network_type_vue_vue_type_template_id_2e22fe61___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_get_network_type_vue_vue_type_template_id_2e22fe61___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=D:/uni-app/%E6%B5%8B%E8%AF%95app/pages/API/get-network-type/get-network-type.vue?vue&type=template&id=2e22fe61&");

/***/ })

},[["D:\\uni-app\\测试app\\main.js?{\"page\":\"pages%2FAPI%2Fget-network-type%2Fget-network-type\"}","common/runtime","common/vendor"]]]);