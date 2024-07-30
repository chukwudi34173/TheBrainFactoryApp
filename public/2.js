(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Manager/Index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Manager/Index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js");
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-element-loading */ "./node_modules/vue-element-loading/lib/vue-element-loading.min.js");
/* harmony import */ var vue_element_loading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_element_loading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-js-toggle-button */ "./node_modules/vue-js-toggle-button/dist/index.js");
/* harmony import */ var vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Chart_Bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Chart/Bar */ "./resources/js/Pages/Manager/Chart/Bar.js");
/* harmony import */ var _Chart_Pie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Chart/Pie */ "./resources/js/Pages/Manager/Chart/Pie.js");
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");












_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faAngleDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCalendarAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faStar"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faAngleUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTh"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faBusinessTime"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faArrowLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faArrowRight"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faDotCircle"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Pagination: laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1___default.a,
    VueElementLoading: vue_element_loading__WEBPACK_IMPORTED_MODULE_2___default.a,
    "font-awesome-icon": _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a,
    ToggleButton: vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_6__["ToggleButton"],
    BarChat: _Chart_Bar__WEBPACK_IMPORTED_MODULE_7__["default"],
    Pie: vue_chartjs__WEBPACK_IMPORTED_MODULE_9__["Pie"],
    PieChat: _Chart_Pie__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      data: {
        labels: [],
        datasets: [{
          backgroundColor: [],
          data: []
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      records: {},
      instructionsVisible: false,
      loading: false,
      session_term: {},
      filters: {
        paid_for: "",
        search: "",
        status: ""
      },
      view_status: true,
      chatComponentKey: 0,
      chatComponentKey2: 0,
      chartdata: {
        labels: [],
        datasets: [{
          label: "Male",
          backgroundColor: "RGBA(0,254,0,0.32)",
          borderColor: "RGBA(0,254,0,1)",
          borderWidth: 1,
          hoverBackgroundColor: "RGBA(0,254,0,0.7)",
          hoverBorderColor: "RGBA(0,254,0,0.99)",
          borderCapStyle: "round",
          data: []
        }, {
          label: "Female",
          backgroundColor: "RGBA(244,67,54,0.32)",
          borderColor: "RGBA(244,67,54,1)",
          borderWidth: 1,
          hoverBackgroundColor: "RGBA(244,67,54,0.7)",
          hoverBorderColor: "RGBA(244,67,54,0.99)",
          borderCapStyle: "round",
          data: []
        }]
      },
      chatoptions: {
        layout: {
          padding: {
            left: 0,
            right: 8,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              display: true,
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            ticks: {
              display: true
            },
            gridLines: {
              display: true
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: true
      },
      barchart_data_approved: {},
      barchart_data_pending: {},
      card_data_approved_candidate: {},
      card_data_pending_candidate: {},
      piechart_data: {},
      total_candidate: 0,
      bar_status: true,
      barchart_data: []
    };
  },
  methods: {
    Approve: function Approve(data) {
      var _this = this;
      this.$swal({
        icon: "warning",
        title: "Approve Candidate Registration",
        text: "Are you sure you want to Perform this operation ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Continue!",
        cancelButtonText: "No, Exit!",
        cancelButtonColor: "#d92550",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(function (result) {
        if (result.value) {
          _this.loading = true;
          //   let form_data = new FormData();
          //   form_data.append("data", data);

          axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/manager/approve_transaction", data).then(function (res) {
            if (res.data.status) {
              _this.$toast.success("You Have Successfully Approved this candidate info.");
              _this.getRecord();
            } else {
              console.log("unable to approve");
            }
          })["catch"](function (err) {
            _this.loading = false;
            toastr__WEBPACK_IMPORTED_MODULE_4___default.a.error("Incorrect Password Supplied", "error");
          })["finally"](function () {
            _this.loading = false;
          });
        } else {
          _this.$swal("Cancelled", "Operation Cancelled", "info");
          _this.loading = false;
        }
      });
    },
    TogglePageView: function TogglePageView() {
      if (this.view_status == true) {
        this.view_status == true;
        this.getRecord();
      } else {
        this.view_status = false;
        this.getRecordAnalytic();
      }
    },
    getRecord: function getRecord() {
      var _this2 = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/manager/get_registered_candidate?page=" + page, {
        filters: this.filters
      }).then(function (res) {
        _this2.loading = true;
        _this2.records = res.data;
      })["catch"](function (err) {
        toastr__WEBPACK_IMPORTED_MODULE_4___default.a.error("An error occured", "error");
      })["finally"](function () {
        return _this2.loading = false;
      });
    },
    getRecordAnalytic: function getRecordAnalytic() {
      var _this3 = this;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/manager/get_analytic").then(function (res) {
        _this3.loading = true;
        _this3.barchart_data_pending = res.data.barchart_data_pending;
        _this3.card_data_approved_candidate = res.data.card_data_approved_candidate;
        _this3.card_data_pending_candidate = res.data.card_data_pending_candidate;
        _this3.piechart_data = res.data.piechart_data;
        _this3.total_candidate = res.data.total_candidate;
        _this3.barchart_data = res.data.barchart_data;
        //

        _this3.data.labels = _this3.piechart_data.LABEL;
        _this3.data.datasets[0].backgroundColor = _this3.piechart_data.BACKGROUND_COLORS;
        _this3.data.datasets[0].data = _this3.piechart_data.VALUES;
        _this3.chartdata.datasets[0].data = [_this3.barchart_data && _this3.barchart_data[0] && _this3.barchart_data[0].male];
        _this3.chartdata.datasets[1].data = [_this3.barchart_data && _this3.barchart_data[0] && _this3.barchart_data[0].female];
        _this3.chatComponentKey += 1;
        _this3.chatComponentKey2 += 1;
      })["catch"](function (err) {
        toastr__WEBPACK_IMPORTED_MODULE_4___default.a.error("An error occured", "error");
      })["finally"](function () {
        _this3.loading = false;
        _this3.chatComponentKey += 1;
      });
    }
  },
  mounted: function mounted() {
    this.TogglePageView();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Manager/Index.vue?vue&type=template&id=6deff0f7&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Manager/Index.vue?vue&type=template&id=6deff0f7&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "fjcomments mx-0 p-4"
  }, [_c("VueElementLoading", {
    attrs: {
      active: _vm.loading,
      spinner: "bar-fade-scale",
      color: "#7E8CF6"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-12"
  }, [_vm.view_status ? _c("div", {
    staticClass: "alert alert-warning mt-4 mb-3"
  }, [_c("small", {
    staticClass: "mb-2",
    staticStyle: {
      display: "block",
      color: "red"
    },
    attrs: {
      role: "alert"
    }
  }, [_vm._v("Kindly Endeavor to verify payment before approving candidate\n              information,So as to allow printing")])]) : _vm._e()]), _vm._v(" "), _vm.view_status ? _c("div", {
    staticClass: "col-md-4 col-lg-4 mt-3 mb-3"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(1), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.paid_for,
      expression: "filters.paid_for"
    }],
    staticClass: "form-control custom-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "paid_for", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.getRecord();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("--select--")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "POST UTME"
    }
  }, [_vm._v("POST UTME")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "jamb"
    }
  }, [_vm._v("JAMB")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "COMMON ENTRANCE"
    }
  }, [_vm._v("COMMON ENTRANCE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "WAEC (SSS 3)"
    }
  }, [_vm._v("WAEC (SSS 3)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "NECO (SSS 3)"
    }
  }, [_vm._v("NECO (SSS 3)")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "GCE"
    }
  }, [_vm._v("GCE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "BECE"
    }
  }, [_vm._v("BECE")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LECTURE SECTION (MORNING)"
    }
  }, [_vm._v("\n                LECTURE SECTION (MORNING)\n              ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "LECTURE SECTION (AFTERNOON)"
    }
  }, [_vm._v("\n                LECTURE SECTION (AFTERNOON)\n              ")])])])]) : _vm._e(), _vm._v(" "), _vm.view_status ? _c("div", {
    staticClass: "col-md-4 col-lg-4 mt-3 mb-3"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(2), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.search,
      expression: "filters.search"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "",
      placeholder: "Search name,dob"
    },
    domProps: {
      value: _vm.filters.search
    },
    on: {
      keyup: function keyup($event) {
        return _vm.getRecord();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.filters, "search", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.view_status ? _c("div", {
    staticClass: "col-md-4 col-lg mt-3 mb-3"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_vm._m(3), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.filters.status,
      expression: "filters.status"
    }],
    staticClass: "form-control custom-select",
    on: {
      change: [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.filters, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.getRecord();
      }]
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("--select--")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("Approved")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "0"
    }
  }, [_vm._v("Pending")])])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-lg-12 mt-2 mb-2"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div"), _vm._v(" "), _c("div", {
    staticClass: "btn-actions-pane-right text-capitalize actions-icon-btn"
  }, [_c("toggle-button", {
    attrs: {
      labels: {
        checked: "Table Data",
        unchecked: "Analytics"
      },
      color: {
        checked: "#7DCE94",
        unchecked: "#82C7EB"
      },
      width: 80
    },
    on: {
      change: function change($event) {
        return _vm.TogglePageView();
      }
    },
    model: {
      value: _vm.view_status,
      callback: function callback($$v) {
        _vm.view_status = $$v;
      },
      expression: "view_status"
    }
  })], 1)]), _vm._v(" "), _vm.view_status == true ? _c("div", [_c("VuePerfectScrollbar", [_vm.records ? _c("div", {
    staticClass: "table-responsive mt-2 mb-3"
  }, [_c("table", {
    staticClass: "table table-bordered table-hover"
  }, [_c("thead", [_c("tr", [_c("th", {
    attrs: {
      width: "5%"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "20%"
    }
  }, [_vm._v("Full Name")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "20%"
    }
  }, [_vm._v("Transaction Refrence Id")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "20%"
    }
  }, [_vm._v("Paid For")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "20%"
    }
  }, [_vm._v("Paid For Description")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "20%"
    }
  }, [_vm._v("DOB")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "20%"
    }
  }, [_vm._v("Dated Registered")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "20%"
    }
  }, [_vm._v("Date Updated")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "5%"
    }
  }, [_vm._v("Status")]), _vm._v(" "), _c("th", {
    attrs: {
      width: "5%"
    }
  }, [_vm._v("Action")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.records && _vm.records.data && _vm.records.data.data, function (stu, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(stu.first_name + " " + stu.middle_name + " " + stu.other_name) + "\n                      ")]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge badge-info p-2"
    }, [_vm._v("\n                          " + _vm._s(stu.trans_refrence_id) + "\n                        ")])]), _vm._v(" "), _c("td", [_vm._v(_vm._s(stu.class_tick))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(stu.expected_amount_plan_desc))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(stu.dob))]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("moment")(stu.created_at, "dddd, Do MMM. YYYY")) + "\n                      ")]), _vm._v(" "), _c("td", [_vm._v("\n                        " + _vm._s(_vm._f("moment")(stu.updated_at, "dddd, Do MMM. YYYY")) + "\n                      ")]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "text-sm",
      style: {
        backgroundColor: stu.confirmed == "1" ? "#28a745" : "#ffc107",
        color: stu.confirmed == "1" ? "#fff" : "#000",
        padding: "0.25em 0.5em",
        borderRadius: "0.25rem",
        textAlign: "center"
      }
    }, [_c("span", {
      staticClass: "badge"
    }, [_vm._v("\n                            " + _vm._s(stu.confirmed == "1" ? "Approved" : "Pending") + "\n                          ")])])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "btn-actions-pane-right text-capitalize actions-icon-btn"
    }, [_c("b-dropdown", {
      attrs: {
        "toggle-class": "btn-icon btn-icon-only",
        variant: "link",
        right: ""
      }
    }, [_c("span", {
      attrs: {
        slot: "button-content"
      },
      slot: "button-content"
    }, [_c("font-awesome-icon", {
      attrs: {
        icon: "th"
      }
    })], 1), _vm._v(" "), stu.confirmed == "0" ? _c("button", {
      staticClass: "dropdown-item",
      attrs: {
        type: "button",
        tabindex: "0"
      },
      on: {
        click: function click($event) {
          return _vm.Approve(stu);
        }
      }
    }, [_c("i", {
      staticClass: "pe-7s-note icon-gradient bg-grow-early mr-2"
    }), _vm._v(" "), _c("span", {
      staticClass: "text-sm"
    }, [_vm._v("Approve Transaction")])]) : _vm._e()])], 1)])]);
  }), 0)])]) : _c("div", [_c("div", {
    staticClass: "alert alert-info mt-4 mb-3"
  }, [_c("small", {
    staticClass: "mb-2",
    staticStyle: {
      display: "block",
      color: "red"
    },
    attrs: {
      role: "alert"
    }
  }, [_vm._v("No Candidate Have Registered")])])])])], 1) : _vm._e(), _vm._v(" "), _vm.view_status == true ? _c("div", {
    staticClass: "d-flex justify-content-center"
  }, [_vm.records && _vm.records.data ? _c("Pagination", {
    staticClass: "mx-auto d-flex align-items-center",
    attrs: {
      data: _vm.records && _vm.records.data
    },
    on: {
      "pagination-change-page": _vm.getRecord
    }
  }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.view_status == false ? _c("div", [_c("div", {
    staticClass: "badge badge-success p-1"
  }, [_c("span", {
    staticClass: "text-warning font-weight-bold"
  }, [_vm._v("Total Candidate On system")]), _vm._v(" "), _c("span", {
    staticClass: "d-inline ml-3 tf"
  }, [_vm._v(_vm._s(_vm.total_candidate))])]), _vm._v(" "), _c("div", {
    staticClass: "row mt-3 mb-3"
  }, [_c("div", {
    staticClass: "col-md-4 mb-3"
  }, [_c("div", {
    staticClass: "card shadow-sm",
    staticStyle: {
      height: "100% !important"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [!_vm.loading ? _c("BarChat", {
    key: _vm.chatComponentKey,
    attrs: {
      chartdata: _vm.chartdata,
      options: _vm.chatoptions
    }
  }) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "card shadow-sm",
    staticStyle: {
      height: "100% !important"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [!_vm.loading ? _c("PieChat", {
    key: _vm.chatComponentKey2,
    attrs: {
      data: _vm.data,
      options: _vm.options
    }
  }) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12 col-12 col-lg-12 mb-3 mt-3",
    staticStyle: {
      height: "50% !important"
    }
  }, [_c("div", {
    staticClass: "card info-card sales-card",
    staticStyle: {
      "background-color": "#fff !important",
      "margin-bottom": "30px !important",
      border: "none !important",
      "border-radius": "5px !important",
      "box-shadow": "0px 0 30px rgba(1, 41, 112, 0.1)"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("APPROVED (PAID) Candidate")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "ps-3"
  }, [_c("h6", [_vm._v("\n                              " + _vm._s(_vm.card_data_approved_candidate && _vm.card_data_approved_candidate[0] && _vm.card_data_approved_candidate[0].card_data_approved_candidate) + "\n                            ")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-12 col-12 col-lg-12 border-top pt-5 mt-3 pb-5",
    staticStyle: {
      height: "50% !important"
    }
  }, [_c("div", {
    staticClass: "card info-card sales-card",
    staticStyle: {
      "background-color": "#fff !important",
      "margin-bottom": "30px !important",
      border: "none !important",
      "border-radius": "5px !important",
      "box-shadow": "0px 0 30px rgba(1, 41, 112, 0.1)"
    }
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title text-warning"
  }, [_vm._v("\n                          NDING (UNPAID) Candidate\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "ps-3"
  }, [_c("h6", [_vm._v("\n                              " + _vm._s(_vm.card_data_pending_candidate && _vm.card_data_pending_candidate[0] && _vm.card_data_pending_candidate[0].card_data_pending_candidate) + "\n                            ")])])])])])])])])])]) : _vm._e()])])], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-12 col-lg-12"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center"
  }, [_c("div", [_c("img", {
    staticClass: "img-fluid",
    attrs: {
      src: __webpack_require__(/*! ../../../../public/image/brain_factory_logo.jpeg */ "./public/image/brain_factory_logo.jpeg"),
      id: "img-fluid",
      alt: ""
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-prepend"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("Filter By Paid For")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-prepend"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("Search")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "input-group-prepend"
  }, [_c("span", {
    staticClass: "input-group-text"
  }, [_vm._v("Filter Status")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon rounded-circle d-flex align-items-center justify-content-center"
  }, [_c("i", {
    staticClass: "fa fa-users"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-icon2 rounded-circle d-flex align-items-center justify-content-center"
  }, [_c("i", {
    staticClass: "fa fa-users"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Manager/Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Manager/Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tf[data-v-6deff0f7] {\n  font-size: 28px !important;\n  color: #012970 !important;\n  font-weight: 700 !important;\n}\n.ps-3[data-v-6deff0f7] {\n  padding-left: 1rem !important;\n}\n#img-fluid[data-v-6deff0f7] {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  text-align: center;\n}\n.card-title[data-v-6deff0f7] {\n  padding: 20px 0 15px 0 !important;\n  font-size: 18px !important;\n  font-weight: 500 !important;\n  color: #017245 !important;\n  font-family: \"Poppins\", sans-serif !important;\n  margin-bottom: 0.5rem !important;\n}\n.card-icon[data-v-6deff0f7],\n.card-icon2[data-v-6deff0f7] {\n  font-size: 32px !important;\n  line-height: 0 !important;\n  width: 64px !important;\n  height: 64px !important;\n  flex-shrink: 0 !important;\n  flex-grow: 0 !important;\n}\n.sales-card .card-icon[data-v-6deff0f7] {\n  color: #4154f1 !important;\n  background: #f6f6fe !important;\n}\n.info-card h6[data-v-6deff0f7] {\n  font-size: 28px !important;\n  color: #012970 !important;\n  font-weight: 700 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.align-items-center[data-v-6deff0f7] {\n  align-items: center !important;\n}\n.justify-content-center[data-v-6deff0f7] {\n  justify-content: center !important;\n}\n.card-title2[data-v-6deff0f7] {\n  padding: 20px 0 15px 0 !important;\n  font-size: 18px !important;\n  font-weight: 500 !important;\n  color: #017245 !important;\n  font-family: \"Poppins\", sans-serif !important;\n}\n.text-warning[data-v-6deff0f7] {\n  color: rgba(255, 193, 7, 1) !important;\n}\n.sales-card .card-icon2[data-v-6deff0f7] {\n  color: #ff771d !important;\n  background: #ffecdf !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ps": "./node_modules/moment/locale/ar-ps.js",
	"./ar-ps.js": "./node_modules/moment/locale/ar-ps.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku-kmr": "./node_modules/moment/locale/ku-kmr.js",
	"./ku-kmr.js": "./node_modules/moment/locale/ku-kmr.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Manager/Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Manager/Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Manager/Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css");

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

/***/ "./public/image/brain_factory_logo.jpeg":
/*!**********************************************!*\
  !*** ./public/image/brain_factory_logo.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/brain_factory_logo.jpeg?878b3bda39737acf7b36e4ab05ff837b";

/***/ }),

/***/ "./resources/js/Pages/Manager/Chart/Bar.js":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Manager/Chart/Bar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  props: ["chartdata", "options"],
  mounted: function mounted() {
    this.renderChart(this.chartdata, this.options);
  }
});

/***/ }),

/***/ "./resources/js/Pages/Manager/Chart/Pie.js":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Manager/Chart/Pie.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"],
  props: {
    data: {
      type: Object
      // default: null,
    },
    options: {
      type: Object
      // default: null,
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./resources/js/Pages/Manager/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Manager/Index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_6deff0f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6deff0f7&scoped=true */ "./resources/js/Pages/Manager/Index.vue?vue&type=template&id=6deff0f7&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Manager/Index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_6deff0f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css */ "./resources/js/Pages/Manager/Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6deff0f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_6deff0f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6deff0f7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Manager/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Manager/Index.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Manager/Index.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Manager/Index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Manager/Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/Manager/Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_6deff0f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Manager/Index.vue?vue&type=style&index=0&id=6deff0f7&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_6deff0f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_6deff0f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_6deff0f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_6deff0f7_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Manager/Index.vue?vue&type=template&id=6deff0f7&scoped=true":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Manager/Index.vue?vue&type=template&id=6deff0f7&scoped=true ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6deff0f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=6deff0f7&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Manager/Index.vue?vue&type=template&id=6deff0f7&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6deff0f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6deff0f7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);