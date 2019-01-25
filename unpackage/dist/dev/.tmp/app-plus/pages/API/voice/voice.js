(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/API/voice/voice"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\uni-app\\测试app\\pages\\API\\voice\\voice.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/uni-app/测试app/pages/API/voice/voice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar util = __webpack_require__(/*! ../../../common/util.js */ \"D:\\\\uni-app\\\\测试app\\\\common\\\\util.js\");\nvar playTimeInterval = null;\nvar recordTimeInterval = null;\nvar recorderManager = null;\nvar music = null;var _default =\n{\n  data: function data() {\n    return {\n      title: 'start/stopRecord、play/stopVoice',\n      recording: false, //录音中\n      playing: false, //播放中\n      hasRecord: false, //是否有了一个\n      tempFilePath: '',\n      recordTime: 0,\n      playTime: 0,\n      formatedRecordTime: '00:00:00', //录音的总时间\n      formatedPlayTime: '00:00:00' //播放录音的当前时间\n    };\n  },\n  onUnload: function onUnload() {\n    this.end();\n  },\n  onLoad: function onLoad() {var _this = this;\n    music = uni.createInnerAudioContext();\n    music.onEnded(function () {\n      clearInterval(playTimeInterval);\n      var playTime = 0;\n      console.log('play voice finished');\n      _this.playing = false;\n      _this.formatedPlayTime = util.formatTime(playTime);\n      _this.playTime = playTime;\n    });\n    recorderManager = uni.getRecorderManager();\n    recorderManager.onStart(function () {\n      console.log('recorder start');\n    });\n    recorderManager.onStop(function (res) {\n      console.log('on stop');\n      music.src = res.tempFilePath;\n\n      _this.hasRecord = true;\n      _this.recording = false;\n    });\n  },\n  methods: {\n    startRecord: function startRecord() {var _this2 = this; //开始录音\n      this.recording = true;\n\n      recordTimeInterval = setInterval(function () {\n        _this2.recordTime += 1;\n        _this2.formatedRecordTime = util.formatTime(_this2.recordTime);\n      }, 1000);\n\n      recorderManager.start();\n    },\n    stopRecord: function stopRecord() {//停止录音\n      recorderManager.stop();\n      clearInterval(recordTimeInterval);\n    },\n    playVoice: function playVoice() {var _this3 = this;\n      console.log('play voice');\n      playTimeInterval = setInterval(function () {\n        _this3.playing = true;\n        _this3.playTime += 1;\n        _this3.formatedPlayTime = util.formatTime(_this3.playTime);\n      }, 1000);\n      music.play();\n    },\n    stopVoice: function stopVoice() {\n      clearInterval(playTimeInterval);\n      this.playing = false;\n      this.formatedPlayTime = util.formatTime(0);\n      this.playTime = 0;\n      music.stop();\n    },\n    end: function end() {\n      music.stop();\n      recorderManager.stop();\n      clearInterval(recordTimeInterval);\n      clearInterval(playTimeInterval);\n      this.recording = false, this.playing = false, this.hasRecord = false;\n      this.playTime = 0, this.recordTime = 0;\n      this.formatedRecordTime = \"00:00:00\", this.formatedRecordTime = \"00:00:00\";\n    },\n    clear: function clear() {\n      this.end();\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js */ \"./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js\")[\"default\"]))\n\n//# sourceURL=uni-app:///pages/API/voice/voice.vue?vue&type=script&lang=js&?7ebe");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\uni-app\\测试app\\pages\\API\\voice\\voice.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/uni-app/测试app/pages/API/voice/voice.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=D:/uni-app/%E6%B5%8B%E8%AF%95app/pages/API/voice/voice.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\uni-app\\测试app\\pages\\API\\voice\\voice.vue?vue&type=template&id=60f6d0c7&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/uni-app/测试app/pages/API/voice/voice.vue?vue&type=template&id=60f6d0c7& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"view\",\n    [\n      _c(\"page-head\", { attrs: { title: _vm.title, mpcomid: \"2c2ee28b-0\" } }),\n      _c(\n        \"view\",\n        { staticClass: \"uni-padding-wrap\" },\n        [\n          !_vm.recording && !_vm.playing && !_vm.hasRecord\n            ? _c(\"block\", [\n                _c(\"view\", { staticClass: \"page-body-time\" }, [\n                  _c(\"text\", { staticClass: \"time-big\" }, [\n                    _vm._v(_vm._s(_vm.formatedRecordTime))\n                  ])\n                ]),\n                _c(\"view\", { staticClass: \"page-body-buttons\" }, [\n                  _c(\"view\", { staticClass: \"page-body-button\" }),\n                  _c(\n                    \"view\",\n                    {\n                      staticClass: \"page-body-button\",\n                      attrs: { eventid: \"2c2ee28b-0\" },\n                      on: { click: _vm.startRecord }\n                    },\n                    [\n                      _c(\"image\", {\n                        attrs: { src: \"../../../static/record.png\" }\n                      })\n                    ]\n                  ),\n                  _c(\"view\", { staticClass: \"page-body-button\" })\n                ])\n              ])\n            : _vm._e(),\n          _vm.recording === true\n            ? _c(\"block\", [\n                _c(\"view\", { staticClass: \"page-body-time\" }, [\n                  _c(\"text\", { staticClass: \"time-big\" }, [\n                    _vm._v(_vm._s(_vm.formatedRecordTime))\n                  ])\n                ]),\n                _c(\"view\", { staticClass: \"page-body-buttons\" }, [\n                  _c(\"view\", { staticClass: \"page-body-button\" }),\n                  _c(\n                    \"view\",\n                    {\n                      staticClass: \"page-body-button\",\n                      attrs: { eventid: \"2c2ee28b-1\" },\n                      on: { click: _vm.stopRecord }\n                    },\n                    [_c(\"view\", { staticClass: \"button-stop-record\" })]\n                  ),\n                  _c(\"view\", { staticClass: \"page-body-button\" })\n                ])\n              ])\n            : _vm._e(),\n          _vm.hasRecord === true && _vm.playing === false\n            ? _c(\"block\", [\n                _c(\"view\", { staticClass: \"page-body-time\" }, [\n                  _c(\"text\", { staticClass: \"time-big\" }, [\n                    _vm._v(_vm._s(_vm.formatedPlayTime))\n                  ]),\n                  _c(\"text\", { staticClass: \"time-small\" }, [\n                    _vm._v(_vm._s(_vm.formatedRecordTime))\n                  ])\n                ]),\n                _c(\"view\", { staticClass: \"page-body-buttons\" }, [\n                  _c(\"view\", { staticClass: \"page-body-button\" }),\n                  _c(\n                    \"view\",\n                    {\n                      staticClass: \"page-body-button\",\n                      attrs: { eventid: \"2c2ee28b-2\" },\n                      on: { click: _vm.playVoice }\n                    },\n                    [\n                      _c(\"image\", {\n                        attrs: { src: \"../../../static/play.png\" }\n                      })\n                    ]\n                  ),\n                  _c(\n                    \"view\",\n                    {\n                      staticClass: \"page-body-button\",\n                      attrs: { eventid: \"2c2ee28b-3\" },\n                      on: { click: _vm.clear }\n                    },\n                    [\n                      _c(\"image\", {\n                        attrs: { src: \"../../../static/trash.png\" }\n                      })\n                    ]\n                  )\n                ])\n              ])\n            : _vm._e(),\n          _vm.hasRecord === true && _vm.playing === true\n            ? _c(\"block\", [\n                _c(\"view\", { staticClass: \"page-body-time\" }, [\n                  _c(\"text\", { staticClass: \"time-big\" }, [\n                    _vm._v(_vm._s(_vm.formatedPlayTime))\n                  ]),\n                  _c(\"text\", { staticClass: \"time-small\" }, [\n                    _vm._v(_vm._s(_vm.formatedRecordTime))\n                  ])\n                ]),\n                _c(\"view\", { staticClass: \"page-body-buttons\" }, [\n                  _c(\n                    \"view\",\n                    {\n                      staticClass: \"page-body-button\",\n                      attrs: { eventid: \"2c2ee28b-4\" },\n                      on: { click: _vm.stopVoice }\n                    },\n                    [\n                      _c(\"image\", {\n                        attrs: { src: \"../../../static/stop.png\" }\n                      })\n                    ]\n                  ),\n                  _c(\n                    \"view\",\n                    {\n                      staticClass: \"page-body-button\",\n                      attrs: { eventid: \"2c2ee28b-5\" },\n                      on: { click: _vm.clear }\n                    },\n                    [\n                      _c(\"image\", {\n                        attrs: { src: \"../../../static/trash.png\" }\n                      })\n                    ]\n                  )\n                ])\n              ])\n            : _vm._e()\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=D:/uni-app/%E6%B5%8B%E8%AF%95app/pages/API/voice/voice.vue?vue&type=template&id=60f6d0c7&");

/***/ }),

/***/ "D:\\uni-app\\测试app\\main.js?{\"page\":\"pages%2FAPI%2Fvoice%2Fvoice\"}":
/*!***********************************************************************!*\
  !*** D:/uni-app/测试app/main.js?{"page":"pages%2FAPI%2Fvoice%2Fvoice"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"D:\\\\uni-app\\\\测试app\\\\pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _voice = _interopRequireDefault(__webpack_require__(/*! ./pages/API/voice/voice.vue */ \"D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\voice\\\\voice.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_voice.default));\n\n//# sourceURL=D:/uni-app/%E6%B5%8B%E8%AF%95app/main.js?%7B%22page%22:%22pages%252FAPI%252Fvoice%252Fvoice%22%7D");

/***/ }),

/***/ "D:\\uni-app\\测试app\\pages\\API\\voice\\voice.vue":
/*!**************************************************!*\
  !*** D:/uni-app/测试app/pages/API/voice/voice.vue ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _voice_vue_vue_type_template_id_60f6d0c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voice.vue?vue&type=template&id=60f6d0c7& */ \"D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\voice\\\\voice.vue?vue&type=template&id=60f6d0c7&\");\n/* harmony import */ var _voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voice.vue?vue&type=script&lang=js& */ \"D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\voice\\\\voice.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _voice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voice.vue?vue&type=style&index=0&lang=css& */ \"D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\voice\\\\voice.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _voice_vue_vue_type_template_id_60f6d0c7___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _voice_vue_vue_type_template_id_60f6d0c7___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"D:/uni-app/测试app/pages/API/voice/voice.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=D:/uni-app/%E6%B5%8B%E8%AF%95app/pages/API/voice/voice.vue");

/***/ }),

/***/ "D:\\uni-app\\测试app\\pages\\API\\voice\\voice.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** D:/uni-app/测试app/pages/API/voice/voice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./voice.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\voice\\\\voice.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///pages/API/voice/voice.vue?vue&type=script&lang=js&?98c8");

/***/ }),

/***/ "D:\\uni-app\\测试app\\pages\\API\\voice\\voice.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** D:/uni-app/测试app/pages/API/voice/voice.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./voice.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\voice\\\\voice.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=D:/uni-app/%E6%B5%8B%E8%AF%95app/pages/API/voice/voice.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "D:\\uni-app\\测试app\\pages\\API\\voice\\voice.vue?vue&type=template&id=60f6d0c7&":
/*!*********************************************************************************!*\
  !*** D:/uni-app/测试app/pages/API/voice/voice.vue?vue&type=template&id=60f6d0c7& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_template_id_60f6d0c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./voice.vue?vue&type=template&id=60f6d0c7& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\\\uni-app\\\\测试app\\\\pages\\\\API\\\\voice\\\\voice.vue?vue&type=template&id=60f6d0c7&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_template_id_60f6d0c7___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_ADMINI_1_AppData_Local_Temp_Rar$EXa0_701_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_voice_vue_vue_type_template_id_60f6d0c7___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=D:/uni-app/%E6%B5%8B%E8%AF%95app/pages/API/voice/voice.vue?vue&type=template&id=60f6d0c7&");

/***/ })

},[["D:\\uni-app\\测试app\\main.js?{\"page\":\"pages%2FAPI%2Fvoice%2Fvoice\"}","common/runtime","common/vendor"]]]);