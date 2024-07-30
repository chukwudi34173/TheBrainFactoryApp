(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Form/Index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Form/Index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var v_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-mask */ "./node_modules/v-mask/dist/v-mask.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        subject_1: "Use Of English",
        sex: ""
      },
      instructionsVisible: false,
      errorMessage: {},
      loading: false,
      registeredForm: false,
      errorMessageLoad: false,
      load_key: 0,
      approve: false,
      dobCorrect: false,
      dobError: false
    };
  },
  components: {
    VueElementLoading: vue_element_loading__WEBPACK_IMPORTED_MODULE_1___default.a,
    VueMask: v_mask__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    scrollToTop: function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    getApprovedforPrint: function getApprovedforPrint() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/examination/approvedforprint", this.form).then(function (res) {
        if (res.data.status == 1) {
          _this.approve = true;
        }
      })["catch"](function (error) {
        _this.scrollToTop();
      })["finally"](function () {
        return _this.loading = false;
      });
    },
    submitRegistrationPayment: function submitRegistrationPayment() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this2.subtractYears(new Date(_this2.form.dob), 2);
              if (_this2.dobCorrect == true) {
                _this2.loading = true;
                axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/examination/registration", _this2.form).then(function (res) {
                  _this2.loading = true;
                  if (res.data.status2) {
                    _this2.$toast.success(res.data.message);
                    _this2.errorMessage = {};
                    var retriveInfo = JSON.parse(localStorage.getItem("registered_form"));
                    if (retriveInfo) {
                      localStorage.removeItem("registered_form");
                      localStorage.setItem("registered_form", JSON.stringify(res.data.data));
                    }
                  }
                  if (res.data.status) {
                    _this2.$toast.success(res.data.message);
                    localStorage.setItem("registered_form", JSON.stringify(res.data.data));
                  }
                })["catch"](function (error) {
                  _this2.errorMessage = error.response.data;
                  _this2.errorMessageLoad = true;
                  _this2.scrollToTop();
                })["finally"](function () {
                  return _this2.loading = false;
                });
              }
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    clearForm: function clearForm() {
      this.form = {};
      localStorage.removeItem("registered_form");
      toastr.success("InformationCleared successfully");
    },
    subtractYears: function subtractYears(dob, numOfYears) {
      var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
      var maxDate = new Date(date.getTime());
      maxDate.setFullYear(maxDate.getFullYear() - numOfYears);
      dob.setFullYear(dob.getFullYear());
      var dobyear = dob.toLocaleString("default", {
        year: "numeric"
      });
      var maxyear = maxDate.toLocaleString("default", {
        year: "numeric"
      });
      if (maxyear < dobyear || dobyear < 2000) {
        this.dobError = true;
        this.dobCorrect = false;
        this.scrollToTop();
      } else {
        this.dobCorrect = true;
      }
    }
  },
  mounted: function mounted() {
    this.registeredForm = JSON.parse(localStorage.getItem("registered_form"));
    if (this.registeredForm) {
      this.form = this.registeredForm;
      this.load_key += 1;
      this.getApprovedforPrint();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Form/Index.vue?vue&type=template&id=df4d7ae0&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Form/Index.vue?vue&type=template&id=df4d7ae0&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "container px-3 px-lg-3 mt-3 mb-4"
  }, [_c("div", {
    staticClass: "fjcomments mx-0 p-4 border"
  }, [_c("div", {
    staticClass: "row bordered p-3"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_vm._m(0), _vm._v(" "), _c("form", {
    staticClass: "fjcomment-form row mt-3 mb-3"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-12 col-sm-12"
  }, [_vm.errorMessageLoad ? _c("div", {
    staticClass: "alert alert-danger"
  }, [_vm.errorMessage ? _c("small", {
    staticClass: "mb-2",
    staticStyle: {
      display: "block",
      color: "red"
    },
    attrs: {
      role: "alert"
    }
  }, [_vm._v(_vm._s(_vm.errorMessage.message))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.dobError == true ? _c("div", {
    staticClass: "alert alert-danger"
  }, [_c("div", {
    staticClass: "text-danger"
  }, [_vm._v("\n                  Please enter the student's correct dob!!!\n                ")])]) : _vm._e()]), _vm._v(" "), _c("VueElementLoading", {
    attrs: {
      active: _vm.loading,
      spinner: "bar-fade-scale",
      color: "#7E8CF6"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 col-sm-12"
  }, [_c("label", {
    attrs: {
      "for": "first_name"
    }
  }, [_vm._v("First Name:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.first_name,
      expression: "form.first_name"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      name: "first_name",
      id: "first_name",
      type: "text",
      placeholder: "First Name (required)",
      required: ""
    },
    domProps: {
      value: _vm.form.first_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "first_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4"
  }, [_c("label", {
    attrs: {
      "for": "middle_name"
    }
  }, [_vm._v("Middle Name:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.middle_name,
      expression: "form.middle_name"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "text",
      id: "middle_name",
      placeholder: "Middle Name (required)",
      required: ""
    },
    domProps: {
      value: _vm.form.middle_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "middle_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4"
  }, [_c("label", {
    attrs: {
      "for": "other_name"
    }
  }, [_vm._v("Other Name:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.other_name,
      expression: "form.other_name"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "text",
      id: "other_name",
      placeholder: "Other Name"
    },
    domProps: {
      value: _vm.form.other_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "other_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4"
  }, [_c("label", {
    attrs: {
      "for": "sex"
    }
  }, [_vm._v("Select Gender:")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.sex,
      expression: "form.sex"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      id: "sex"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "sex", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("--Select Your Gender --")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "male"
    }
  }, [_vm._v("Male")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "female"
    }
  }, [_vm._v("Female")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4"
  }, [_c("label", {
    attrs: {
      "for": "dob"
    }
  }, [_vm._v("D.O.B:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.dob,
      expression: "form.dob"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "date",
      min: "01-01-2005",
      required: ""
    },
    domProps: {
      value: _vm.form.dob
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "dob", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-6 mt-3 mb-4"
  }, [_c("label", {
    attrs: {
      "for": "father_name"
    }
  }, [_vm._v("Father's Name:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.father_name,
      expression: "form.father_name"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "text",
      id: "father_name",
      placeholder: "Father's Name"
    },
    domProps: {
      value: _vm.form.father_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "father_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-6 mt-3 mb-4"
  }, [_c("label", {
    attrs: {
      "for": "father_occupation"
    }
  }, [_vm._v("Father's Occupation:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.father_occupation,
      expression: "form.father_occupation"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "text",
      id: "father_occupation",
      placeholder: "Father's Name"
    },
    domProps: {
      value: _vm.form.father_occupation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "father_occupation", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-6 mt-3 mb-4"
  }, [_c("label", {
    attrs: {
      "for": "mother_name"
    }
  }, [_vm._v("Mother's Name:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mother_name,
      expression: "form.mother_name"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "text",
      id: "mother_name",
      placeholder: "Mother's Name"
    },
    domProps: {
      value: _vm.form.mother_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mother_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-6 mt-3 mb-4"
  }, [_c("label", {
    attrs: {
      "for": "mother_occupation"
    }
  }, [_vm._v("Mother's Occupation:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mother_occupation,
      expression: "form.mother_occupation"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "text",
      id: "mother_occupation",
      placeholder: "Mother's Name"
    },
    domProps: {
      value: _vm.form.mother_occupation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mother_occupation", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("label", {
    attrs: {
      "for": "state_of_origin"
    }
  }, [_vm._v("State Of Origin:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.state_of_origin,
      expression: "form.state_of_origin"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "text",
      id: "state_of_origin",
      placeholder: "State Of Origin"
    },
    domProps: {
      value: _vm.form.state_of_origin
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "state_of_origin", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("label", {
    attrs: {
      "for": "sel1"
    }
  }, [_vm._v("Local Govt. Of Origin:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.lga_of_origin,
      expression: "form.lga_of_origin"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "text",
      id: "lga_of_origin",
      placeholder: "Local Govt. Of Origin"
    },
    domProps: {
      value: _vm.form.lga_of_origin
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "lga_of_origin", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("label", {
    attrs: {
      "for": "current_address"
    }
  }, [_vm._v("Current Address:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.current_address,
      expression: "form.current_address"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "text",
      id: "current_address",
      placeholder: "Current Address"
    },
    domProps: {
      value: _vm.form.current_address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "current_address", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("label", {
    attrs: {
      "for": "parent_whatapp_no"
    }
  }, [_vm._v("Parent Whatapp No:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "mask",
      rawName: "v-mask",
      value: "###########",
      expression: "'###########'"
    }, {
      name: "model",
      rawName: "v-model",
      value: _vm.form.parent_whatapp_no,
      expression: "form.parent_whatapp_no"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      type: "text",
      id: "parent_whatapp_no",
      placeholder: "Parent Whatapp No:"
    },
    domProps: {
      value: _vm.form.parent_whatapp_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "parent_whatapp_no", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("label", {
    attrs: {
      "for": "candidate_phone_no"
    }
  }, [_vm._v("Candidate's Phone No:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.candidate_phone_no,
      expression: "form.candidate_phone_no"
    }, {
      name: "mask",
      rawName: "v-mask",
      value: "###########",
      expression: "'###########'"
    }],
    staticClass: "fjinput",
    attrs: {
      type: "text",
      id: "candidate_phone_no",
      placeholder: "Candidate Phone No:"
    },
    domProps: {
      value: _vm.form.candidate_phone_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "candidate_phone_no", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-12 mt-3 mb-4 border-top"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "d-*-flex"
  }, [_c("span", [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "jamb"
    }
  }, [_vm._v("JAMB")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.class_tick,
      expression: "form.class_tick"
    }],
    staticClass: "pt-4 ml-2",
    attrs: {
      type: "radio",
      id: "jamb",
      name: "class_tick",
      value: "jamb"
    },
    domProps: {
      checked: _vm._q(_vm.form.class_tick, "jamb")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.form, "class_tick", "jamb");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "POST UTME"
    }
  }, [_vm._v("POST UTME")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.class_tick,
      expression: "form.class_tick"
    }],
    staticClass: "pt-4 ml-2",
    attrs: {
      type: "radio",
      id: "POST UTME",
      name: "class_tick",
      value: "POST UTME"
    },
    domProps: {
      checked: _vm._q(_vm.form.class_tick, "POST UTME")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.form, "class_tick", "POST UTME");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "WAEC (SSS 3)"
    }
  }, [_vm._v("WAEC (SSS 3)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.class_tick,
      expression: "form.class_tick"
    }],
    staticClass: "pt-4 ml-2",
    attrs: {
      type: "radio",
      id: "WAEC (SSS 3)",
      name: "class_tick",
      value: "WAEC (SSS 3)"
    },
    domProps: {
      checked: _vm._q(_vm.form.class_tick, "WAEC (SSS 3)")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "class_tick", "WAEC (SSS 3)");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "NECO (SSS 3)"
    }
  }, [_vm._v("NECO (SSS 3)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.class_tick,
      expression: "form.class_tick"
    }],
    staticClass: "pt-4 ml-2",
    attrs: {
      type: "radio",
      id: "NECO (SSS 3)",
      name: "class_tick",
      value: "NECO (SSS 3)"
    },
    domProps: {
      checked: _vm._q(_vm.form.class_tick, "NECO (SSS 3)")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "class_tick", "NECO (SSS 3)");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "GCE"
    }
  }, [_vm._v("GCE")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.class_tick,
      expression: "form.class_tick"
    }],
    staticClass: "pt-4 ml-2",
    attrs: {
      type: "radio",
      id: "GCE",
      name: "class_tick",
      value: "GCE"
    },
    domProps: {
      checked: _vm._q(_vm.form.class_tick, "GCE")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.form, "class_tick", "GCE");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "BECE"
    }
  }, [_vm._v("BECE")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.class_tick,
      expression: "form.class_tick"
    }],
    staticClass: "pt-4 ml-2",
    attrs: {
      type: "radio",
      id: "BECE",
      name: "class_tick",
      value: "BECE"
    },
    domProps: {
      checked: _vm._q(_vm.form.class_tick, "BECE")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.form, "class_tick", "BECE");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "COMMON ENTRANCE"
    }
  }, [_vm._v("COMMON ENTRANCE")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.class_tick,
      expression: "form.class_tick"
    }],
    staticClass: "pt-4 ml-2",
    attrs: {
      type: "radio",
      id: "COMMON ENTRANCE",
      name: "class_tick",
      value: "COMMON ENTRANCE"
    },
    domProps: {
      checked: _vm._q(_vm.form.class_tick, "COMMON ENTRANCE")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.form, "class_tick", "COMMON ENTRANCE");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "PRY-1-6"
    }
  }, [_vm._v("PRY 1 - 6")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.class_tick,
      expression: "form.class_tick"
    }],
    staticClass: "pt-4 ml-2",
    attrs: {
      type: "radio",
      id: "PRY-1-6",
      name: "class_tick",
      value: "PRY (1-6)"
    },
    domProps: {
      checked: _vm._q(_vm.form.class_tick, "PRY (1-6)")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "class_tick", "PRY (1-6)");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "JSS-1-3"
    }
  }, [_vm._v("JSS 1 - 3")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.class_tick,
      expression: "form.class_tick"
    }],
    staticClass: "pt-4 ml-2",
    attrs: {
      type: "radio",
      id: "JSS-1-3",
      name: "class_tick",
      value: "JSS (1-3)"
    },
    domProps: {
      checked: _vm._q(_vm.form.class_tick, "JSS (1-3)")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "class_tick", "JSS (1-3)");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "SSS-1-3"
    }
  }, [_vm._v("SSS 1 - 3")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.class_tick,
      expression: "form.class_tick"
    }],
    staticClass: "pt-4 ml-2",
    attrs: {
      type: "radio",
      id: "SSS-1-3",
      name: "class_tick",
      value: "SSS (1-3)"
    },
    domProps: {
      checked: _vm._q(_vm.form.class_tick, "SSS (1-3)")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "class_tick", "SSS (1-3)");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "time_section"
    }
  }, [_vm._v("LECTURE TIME SECTION : (check the below)")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex",
    attrs: {
      id: "LECTURE SECTION"
    }
  }, [_c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "LECTURE SECTION (MORNING)"
    }
  }, [_vm._v("MORNING")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.time_section,
      expression: "form.time_section"
    }],
    staticClass: "pt-4 ml-2 form-control",
    attrs: {
      type: "radio",
      id: "LECTURE SECTION (MORNING)",
      name: "time_section",
      value: "MORNING"
    },
    domProps: {
      checked: _vm._q(_vm.form.time_section, "MORNING")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.form, "time_section", "MORNING");
      }
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-3"
  }, [_c("label", {
    staticClass: "mt-2 ml-2",
    attrs: {
      "for": "AFTERNOON"
    }
  }, [_vm._v("AFTERNOON")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.time_section,
      expression: "form.time_section"
    }],
    staticClass: "pt-4 ml-2 form-control",
    attrs: {
      type: "radio",
      id: "AFTERNOON",
      value: "LECTURE SECTION (AFTERNOON)",
      name: "time_section"
    },
    domProps: {
      checked: _vm._q(_vm.form.time_section, "LECTURE SECTION (AFTERNOON)")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "time_section", "LECTURE SECTION (AFTERNOON)");
      }
    }
  })])])])])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("label", {
    staticClass: "d-block mt-3",
    attrs: {
      "for": "sel1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.subject_1,
      expression: "form.subject_1"
    }],
    staticClass: "fjinput d-block ml-2",
    attrs: {
      type: "text",
      placeholder: "Use Of English",
      readonly: "",
      value: "Use Of English"
    },
    domProps: {
      value: _vm.form.subject_1
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "subject_1", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("label", {
    staticClass: "d-block mt-3",
    attrs: {
      "for": "sel1"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.subject_2,
      expression: "form.subject_2"
    }],
    staticClass: "fjinput d-block ml-2",
    attrs: {
      type: "text",
      placeholder: "Enter subject 2"
    },
    domProps: {
      value: _vm.form.subject_2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "subject_2", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("label", {
    staticClass: "d-block mt-3",
    attrs: {
      "for": "sel1"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.subject_3,
      expression: "form.subject_3"
    }],
    staticClass: "fjinput d-block ml-2",
    attrs: {
      type: "text",
      placeholder: "Enter subject 3"
    },
    domProps: {
      value: _vm.form.subject_3
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "subject_3", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("label", {
    staticClass: "d-block mt-3",
    attrs: {
      "for": "sel1"
    }
  }, [_vm._v("4")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.subject_4,
      expression: "form.subject_4"
    }],
    staticClass: "fjinput d-block ml-2",
    attrs: {
      type: "text",
      placeholder: "Enter subject 4"
    },
    domProps: {
      value: _vm.form.subject_4
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "subject_4", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("label", {
    staticClass: "d-block mt-3",
    attrs: {
      "for": "sel1"
    }
  }, [_vm._v("5")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.subject_5,
      expression: "form.subject_5"
    }],
    staticClass: "fjinput d-block ml-2",
    attrs: {
      type: "text",
      placeholder: "Enter subject 5"
    },
    domProps: {
      value: _vm.form.subject_5
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "subject_5", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("label", {
    staticClass: "d-block mt-3",
    attrs: {
      "for": "sel1"
    }
  }, [_vm._v("6")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.subject_6,
      expression: "form.subject_6"
    }],
    staticClass: "fjinput d-block ml-2",
    attrs: {
      type: "text",
      placeholder: "Enter subject 6"
    },
    domProps: {
      value: _vm.form.subject_6
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "subject_6", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("label", {
    staticClass: "d-block mt-3",
    attrs: {
      "for": "sel1"
    }
  }, [_vm._v("7")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.subject_7,
      expression: "form.subject_7"
    }],
    staticClass: "fjinput d-block ml-2",
    attrs: {
      type: "text",
      placeholder: "Enter subject 7"
    },
    domProps: {
      value: _vm.form.subject_7
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "subject_7", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("label", {
    staticClass: "d-block mt-3",
    attrs: {
      "for": "sel1"
    }
  }, [_vm._v("8")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.subject_8,
      expression: "form.subject_8"
    }],
    staticClass: "fjinput d-block ml-2",
    attrs: {
      type: "text",
      placeholder: "Enter subject 8"
    },
    domProps: {
      value: _vm.form.subject_8
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "subject_8", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-4 mt-3 mb-4"
  }, [_c("span", {
    staticClass: "d-flex"
  }, [_c("label", {
    staticClass: "d-block mt-3",
    attrs: {
      "for": "sel1"
    }
  }, [_vm._v("9")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.subject_9,
      expression: "form.subject_9"
    }],
    staticClass: "fjinput d-block ml-2",
    attrs: {
      type: "text",
      placeholder: "Enter subject 9"
    },
    domProps: {
      value: _vm.form.subject_9
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "subject_9", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-5 col-md-5"
  }, [_c("h5", {
    staticClass: "d-inline"
  }, [_vm._v("PRICES.")]), _vm._v(" "), _c("span", {
    staticClass: "text-info",
    staticStyle: {
      "font-size": "10px !important"
    }
  }, [_vm._v("(check the plan you made payment for)")]), _vm._v(" "), _c("ul", {
    staticClass: "mt-4 mb-3 list-unstyled"
  }, [_c("li", [_c("p", [_vm._m(11), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.expected_amount_plan_desc,
      expression: "form.expected_amount_plan_desc"
    }],
    staticClass: "ml-3",
    attrs: {
      type: "radio",
      id: "jamb- #1000(with CBT)",
      name: "plan",
      value: "jamb- #1000(with CBT)"
    },
    domProps: {
      checked: _vm._q(_vm.form.expected_amount_plan_desc, "jamb- #1000(with CBT)")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "expected_amount_plan_desc", "jamb- #1000(with CBT)");
      }
    }
  })])]), _vm._v(" "), _c("li", [_c("p", [_vm._m(12), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.expected_amount_plan_desc,
      expression: "form.expected_amount_plan_desc"
    }],
    staticClass: "ml-3",
    attrs: {
      type: "radio",
      id: "waec/neco- #7000 (with CBT)",
      name: "plan",
      value: "waec/neco- #7000 (with CBT)"
    },
    domProps: {
      checked: _vm._q(_vm.form.expected_amount_plan_desc, "waec/neco- #7000 (with CBT)")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "expected_amount_plan_desc", "waec/neco- #7000 (with CBT)");
      }
    }
  })])]), _vm._v(" "), _c("li", [_c("p", [_vm._m(13), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.expected_amount_plan_desc,
      expression: "form.expected_amount_plan_desc"
    }],
    staticClass: "ml-3",
    attrs: {
      type: "radio",
      id: "bece- #4000",
      name: "plan",
      value: "bece- #4000"
    },
    domProps: {
      checked: _vm._q(_vm.form.expected_amount_plan_desc, "bece- #4000")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.form, "expected_amount_plan_desc", "bece- #4000");
      }
    }
  })])]), _vm._v(" "), _c("li", [_c("p", [_vm._m(14), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.expected_amount_plan_desc,
      expression: "form.expected_amount_plan_desc"
    }],
    staticClass: "ml-3",
    attrs: {
      type: "radio",
      id: "common entrance- #3000",
      name: "plan",
      value: "common entrance- #3000"
    },
    domProps: {
      checked: _vm._q(_vm.form.expected_amount_plan_desc, "common entrance- #3000")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.form, "expected_amount_plan_desc", "common entrance- #3000");
      }
    }
  })])]), _vm._v(" "), _c("li", [_c("p", [_vm._m(15), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.expected_amount_plan_desc,
      expression: "form.expected_amount_plan_desc"
    }],
    staticClass: "ml-3",
    attrs: {
      type: "radio",
      id: "pry(1/6)",
      name: "plan",
      value: "PRY(1/6)- #2500"
    },
    domProps: {
      checked: _vm._q(_vm.form.expected_amount_plan_desc, "PRY(1/6)- #2500")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "expected_amount_plan_desc", "PRY(1/6)- #2500");
      }
    }
  })])]), _vm._v(" "), _c("li", [_c("p", [_vm._m(16), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.expected_amount_plan_desc,
      expression: "form.expected_amount_plan_desc"
    }],
    staticClass: "ml-3",
    attrs: {
      type: "radio",
      id: "JSS(1/3)",
      name: "plan",
      value: "JSS(1/3)- #2500"
    },
    domProps: {
      checked: _vm._q(_vm.form.expected_amount_plan_desc, "JSS(1/3)- #2500")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "expected_amount_plan_desc", "JSS(1/3)- #2500");
      }
    }
  })])]), _vm._v(" "), _c("li", [_c("p", [_vm._m(17), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.expected_amount_plan_desc,
      expression: "form.expected_amount_plan_desc"
    }],
    staticClass: "ml-3",
    attrs: {
      type: "radio",
      id: "SSS(1/3)",
      name: "plan",
      value: "SSS(1/3)- #4000"
    },
    domProps: {
      checked: _vm._q(_vm.form.expected_amount_plan_desc, "SSS(1/3)- #4000")
    },
    on: {
      change: function change($event) {
        _vm.$set(_vm.form, "expected_amount_plan_desc", "SSS(1/3)- #4000");
      }
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-lg-7 col-md-7"
  }, [_c("h5", [_vm._v("ACCOUNT INFO.")]), _vm._v(" "), _c("ul", {
    staticClass: "list-unstyled"
  }, [_c("h6", [_vm._v("\n                  Please transfer the specified amount to the following bank\n                  account:\n                ")]), _vm._v(" "), _vm._m(18), _vm._v(" "), _vm._m(19), _vm._v(" "), _vm._m(20), _vm._v(" "), _c("li", {
    staticClass: "mt-2"
  }, [_c("h6", [_vm._v("\n                    NOTE : SEND PAYMENT RECEIPT TO THE BURSARY WHATTAPP NUMBER\n                      (08119503964)\n                  ")]), _vm._v(" "), _c("label", {
    attrs: {
      "for": "trans_refrence_id"
    }
  }, [_vm._v("Transaction Refrence ID:")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.trans_refrence_id,
      expression: "form.trans_refrence_id"
    }],
    staticClass: "fjinput form-control",
    attrs: {
      name: "trans_refrence_id",
      id: "trans_refrence_id",
      type: "text",
      placeholder: "Enter Transaction Refrence ID (required)",
      required: ""
    },
    domProps: {
      value: _vm.form.trans_refrence_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "trans_refrence_id", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-12 border-bottom mb-0"
  }, [_vm.form.first_name && _vm.form.middle_name ? _c("h5", [_vm._v("\n                ATTESTATION .\n              ")]) : _vm._e(), _vm._v(" "), _vm.form.first_name && _vm.form.middle_name ? _c("label", {
    staticClass: "text-uppercase",
    attrs: {
      "for": "attestation"
    }
  }, [_vm._v("\n                I\n                " + _vm._s(_vm.form.first_name + " " + _vm.form.middle_name + " " + _vm.form.other_name) + "\n                PROMISE TO ABIDE BY THE LAID DOWN RULES AND REGULATION OF THE\n                ORGANIZATION ,IF OTHERWISE ,THE MANAGEMENT SHOULD TAKE\n                NECCESSARY ACTIONS.\n                "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.attestation,
      expression: "form.attestation"
    }],
    staticClass: "ml-3",
    attrs: {
      type: "checkbox",
      id: "attestation",
      name: "plan",
      value: "true"
    },
    domProps: {
      checked: Array.isArray(_vm.form.attestation) ? _vm._i(_vm.form.attestation, "true") > -1 : _vm.form.attestation
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.attestation,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "true",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "attestation", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "attestation", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "attestation", $$c);
        }
      }
    }
  })]) : _vm._e(), _vm._v(" "), _vm.registeredForm ? _c("p", [_vm._v("\n                NOTICE!!! You will be able to print Information when\n                transaction is approved,at your own will and then clear log\n                after printing to use device for another new registration else\n                record will be overided\n              ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-12 justify-content-between d-flex mt-3"
  }, [_vm.registeredForm ? _c("button", {
    staticClass: "fjcomment-btn2 ml-2 mr-2",
    attrs: {
      type: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.clearForm.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                Clear Logged Info\n              ")]) : _vm._e(), _vm._v(" "), _vm.approve ? _c("button", {
    staticClass: "fjcomment-btn3 ml-2 mr-2",
    attrs: {
      type: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.PrintForm.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                PRINT\n              ")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "fjcomment-btn ml-2 mr-2",
    attrs: {
      type: "submit"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.submitRegistrationPayment.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                Submit Information\n              ")])])], 1)]), _vm._v(" "), _vm._m(21)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: __webpack_require__(/*! ../../../../public/images/brain_factory_logo.jpeg */ "./public/images/brain_factory_logo.jpeg"),
      id: "img-fluid",
      alt: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9 pt-2 pb-2"
  }, [_c("h1", {
    staticClass: "title"
  }, [_vm._v("THE BRAIN FACTORY TUITION CENTRE")]), _vm._v(" "), _c("p", {
    staticClass: "description mt-2 mb-3"
  }, [_vm._v("\n                Correcting and building a smarter generation...\n              ")]), _vm._v(" "), _c("p", {
    staticClass: "purpose_desc mt-2 mb-3"
  }, [_vm._v("\n                EXAMINATION ENROLLMENT FORM\n              ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-12 border-bottom mb-3"
  }, [_c("h5", [_vm._v("Candidate Registration Info.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-12 border-bottom mb-0"
  }, [_c("h5", [_vm._v("Parent Information.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-12 border-bottom mb-0"
  }, [_c("h5", [_vm._v("Address/Origin Info.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-12 border-bottom mb-0"
  }, [_c("h5", [_vm._v("Guardian/Applicant Contact Info.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "mt-3"
  }, [_vm._v("\n                Classes Tick :\n                "), _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("(Please Tick Your Current class)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-12 border-bottom mb-0"
  }, [_c("h5", {
    staticClass: "d-inline"
  }, [_vm._v("SUBJECT.")]), _vm._v("\n                ("), _c("span", {
    staticClass: "text-danger",
    staticStyle: {
      "font-size": "12px !important"
    }
  }, [_vm._v("required to enter the subject offered")]), _vm._v(")\n            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-12 border-bottom mb-0"
  }, [_c("h5", [_vm._v("RULES AND REGULATION.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-12 col-lg-12 col-md-12"
  }, [_c("ul", {}, [_c("li", [_c("p", [_vm._v("You Must Make 100% payment before you begin")])]), _vm._v(" "), _c("li", [_c("p", [_vm._v("No Indecent Dressing")])]), _vm._v(" "), _c("li", [_c("p", [_vm._v("Late Coming is not permitted")])]), _vm._v(" "), _c("li", [_c("p", [_vm._v("\n                    Disrespect to any teacher,leads to the child's dismissal\n                  ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-12 border-bottom mb-0"
  }, [_c("h5", [_vm._v("NOTE .")]), _vm._v(" "), _c("p", [_vm._v("\n                PAST QUESTIONS,CBT PRACTICEAND SCIENCE PRACTICAL IS COMPULSORY\n                FOR ALL CANDIDATE.\n              ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-lg-12 mt-3 mb-3 mb-0"
  }, [_c("h5", [_vm._v("PRICES AND ACCOUNT INFO.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "jamb- #1000(with CBT)"
    }
  }, [_vm._v("\n                      JAMB -\n                      "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v("#10,000 (with CBT)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "waec/neco- #7000 (with CBT)"
    }
  }, [_vm._v("\n                      WAEC /NECO -\n                      "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v("#5000 (with CBT)")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "bece- #4000"
    }
  }, [_vm._v("\n                      BECE - "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v("#4000")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "common entrance- #3000"
    }
  }, [_vm._v("\n                      COMMON ENTRANCE -\n                      "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v("#3000")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "pry(1/6)"
    }
  }, [_vm._v("\n                      PRY (1-6) - "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v("#2500")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "JSS(1/3)"
    }
  }, [_vm._v("\n                      JSS (1-3) - "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v("#2500")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("label", {
    attrs: {
      "for": "SSS(1/3)"
    }
  }, [_vm._v("\n                      SSS (1-3) - "), _c("span", {
    staticClass: "font-weight-bold"
  }, [_vm._v("#4000")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", [_c("h5", [_vm._v("Account Name: AKPAN ELIJAH UDUAK")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "mt-2"
  }, [_c("h5", [_vm._v("Account Number:    8119503964")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "mt-2"
  }, [_c("h5", [_vm._v("Bank:   OPAY")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12 mt-2 mb-3 text-center"
  }, [_c("span", {
    staticClass: "d-block"
  }, [_vm._v("\n            © The Brain Factory,All Right Reserved.\n          ")]), _vm._v(" "), _c("span", [_vm._v("\n            Designed and Develop By Intrapreneur Solution Developer\n            (09048121392)\n          ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Form/Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Form/Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#img-fluid[data-v-df4d7ae0] {\n  border-radius: 5%;\n  /* width: 200px;\n  height: 200px; */\n  /* text-align: center; */\n}\n.title[data-v-df4d7ae0] {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.description[data-v-df4d7ae0] {\n  font-weight: 600;\n  margin-bottom: 10px;\n  /* font-size: 20px; */\n  line-height: 1.5;\n  letter-spacing: 5px;\n}\n.purpose_desc[data-v-df4d7ae0] {\n  font-weight: 600;\n  /* font-size: 20px; */\n  line-height: 1.5;\n  letter-spacing: 2px;\n}\n.bordered[data-v-df4d7ae0] {\n  border: 3px solid black !important;\n  border-radius: 1% !important;\n}\n.d[data-v-df4d7ae0] {\n  display: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Form/Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Form/Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Form/Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./public/images/brain_factory_logo.jpeg":
/*!***********************************************!*\
  !*** ./public/images/brain_factory_logo.jpeg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/brain_factory_logo.jpeg?878b3bda39737acf7b36e4ab05ff837b";

/***/ }),

/***/ "./resources/js/Pages/Form/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Form/Index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_df4d7ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=df4d7ae0&scoped=true */ "./resources/js/Pages/Form/Index.vue?vue&type=template&id=df4d7ae0&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Form/Index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_df4d7ae0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css */ "./resources/js/Pages/Form/Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_df4d7ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_df4d7ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "df4d7ae0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Form/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Form/Index.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Form/Index.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Form/Index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Form/Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/Form/Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_df4d7ae0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Form/Index.vue?vue&type=style&index=0&id=df4d7ae0&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_df4d7ae0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_df4d7ae0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_df4d7ae0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_df4d7ae0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Form/Index.vue?vue&type=template&id=df4d7ae0&scoped=true":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Form/Index.vue?vue&type=template&id=df4d7ae0&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_df4d7ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=df4d7ae0&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Form/Index.vue?vue&type=template&id=df4d7ae0&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_df4d7ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_df4d7ae0_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);