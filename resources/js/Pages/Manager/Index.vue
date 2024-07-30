<template>
  <div>
    <div class="container px-3 px-lg-3 mt-3 mb-4">
      <div class="fjcomments mx-0 p-4">
        <VueElementLoading
          :active="loading"
          spinner="bar-fade-scale"
          color="#7E8CF6"
        />
        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="d-flex justify-content-center">
              <div>
                <img
                  src="../../../../public/image/brain_factory_logo.jpeg"
                  class="img-fluid"
                  id="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-12">
            <div class="alert alert-warning mt-4 mb-3" v-if="view_status">
              <!-- <div class="d-flex justify-content-between"> -->
              <small
                class="mb-2"
                style="display: block; color: red"
                role="alert"
                >Kindly Endeavor to verify payment before approving candidate
                information,So as to allow printing</small
              >

              <!-- </div> -->
            </div>
          </div>
          <div class="col-md-4 col-lg-4 mt-3 mb-3" v-if="view_status">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Filter By Paid For</span>
              </div>
              <select
                class="form-control custom-select"
                v-model="filters.paid_for"
                @change="getRecord()"
              >
                <option value="">--select--</option>
                <option value="POST UTME">POST UTME</option>
                <option value="jamb">JAMB</option>
                <option value="COMMON ENTRANCE">COMMON ENTRANCE</option>
                <option value="WAEC (SSS 3)">WAEC (SSS 3)</option>
                <option value="NECO (SSS 3)">NECO (SSS 3)</option>
                <option value="GCE">GCE</option>
                <option value="BECE">BECE</option>
                <option value="LECTURE SECTION (MORNING)">
                  LECTURE SECTION (MORNING)
                </option>
                <option value="LECTURE SECTION (AFTERNOON)">
                  LECTURE SECTION (AFTERNOON)
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 mt-3 mb-3" v-if="view_status">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Search</span>
              </div>
              <input
                type="text"
                v-model="filters.search"
                class="form-control"
                id=""
                @keyup="getRecord()"
                placeholder="Search name,dob"
              />
            </div>
          </div>
          <div class="col-md-4 col-lg mt-3 mb-3" v-if="view_status">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Filter Status</span>
              </div>
              <select
                class="form-control custom-select"
                v-model="filters.status"
                @change="getRecord()"
              >
                <option value="">--select--</option>
                <option value="1">Approved</option>
                <option value="0">Pending</option>
              </select>
            </div>
          </div>
          <div class="col-md-12 col-lg-12 mt-2 mb-2">
            <div class="d-flex justify-content-between">
              <div></div>
              <div
                class="btn-actions-pane-right text-capitalize actions-icon-btn"
              >
                <toggle-button
                  v-model="view_status"
                  @change="TogglePageView()"
                  :labels="{
                    checked: 'Table Data',
                    unchecked: 'Analytics',
                  }"
                  :color="{ checked: '#7DCE94', unchecked: '#82C7EB' }"
                  :width="80"
                />
              </div>
            </div>
            <div v-if="view_status == true">
              <VuePerfectScrollbar>
                <div class="table-responsive mt-2 mb-3" v-if="records">
                  <table class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th width="5%">#</th>
                        <th width="20%">Full Name</th>
                        <th width="20%">Transaction Refrence Id</th>
                        <th width="20%">Paid For</th>
                        <th width="20%">Paid For Description</th>
                        <th width="20%">DOB</th>
                        <th width="20%">Dated Registered</th>
                        <th width="20%">Date Updated</th>
                        <th width="5%">Status</th>
                        <th width="5%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(stu, index) in records &&
                        records.data &&
                        records.data.data"
                        :key="index"
                      >
                        <td>{{ index + 1 }}</td>
                        <td>
                          {{
                            stu.first_name +
                            " " +
                            stu.middle_name +
                            " " +
                            stu.other_name
                          }}
                        </td>
                        <td>
                          <span class="badge badge-info p-2">
                            {{ stu.trans_refrence_id }}
                          </span>
                        </td>
                        <td>{{ stu.class_tick }}</td>
                        <td>{{ stu.expected_amount_plan_desc }}</td>
                        <td>{{ stu.dob }}</td>
                        <td>
                          <!-- , h:mm a -->
                          <!-- , h:mm a -->
                          {{ stu.created_at | moment("dddd, Do MMM. YYYY") }}
                        </td>
                        <td>
                          {{ stu.updated_at | moment("dddd, Do MMM. YYYY") }}
                        </td>
                        <td>
                          <div
                            class="text-sm"
                            :style="{
                              backgroundColor:
                                stu.confirmed == '1' ? '#28a745' : '#ffc107',
                              color: stu.confirmed == '1' ? '#fff' : '#000',
                              padding: '0.25em 0.5em',
                              borderRadius: '0.25rem',
                              textAlign: 'center',
                            }"
                          >
                            <span class="badge">
                              {{
                                stu.confirmed == "1" ? "Approved" : "Pending"
                              }}
                            </span>
                          </div>
                        </td>

                        <td>
                          <div
                            class="btn-actions-pane-right text-capitalize actions-icon-btn"
                          >
                            <b-dropdown
                              toggle-class="btn-icon btn-icon-only"
                              variant="link"
                              right
                            >
                              <span slot="button-content">
                                <font-awesome-icon icon="th" />
                              </span>
                              <button
                                v-if="stu.confirmed == '0'"
                                type="button"
                                tabindex="0"
                                class="dropdown-item"
                                @click="Approve(stu)"
                              >
                                <i
                                  class="pe-7s-note icon-gradient bg-grow-early mr-2"
                                ></i>
                                <span class="text-sm">Approve Transaction</span>
                              </button>
                            </b-dropdown>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div v-else>
                  <div class="alert alert-info mt-4 mb-3">
                    <small
                      class="mb-2"
                      style="display: block; color: red"
                      role="alert"
                      >No Candidate Have Registered</small
                    >
                  </div>
                </div>
              </VuePerfectScrollbar>
            </div>
            <div
              class="d-flex justify-content-center"
              v-if="view_status == true"
            >
              <Pagination
                class="mx-auto d-flex align-items-center"
                v-if="records && records.data"
                :data="records && records.data"
                @pagination-change-page="getRecord"
              />
            </div>
            <div v-if="view_status == false">
              <div class="badge badge-success p-1">
                <span class="text-warning font-weight-bold"
                  >Total Candidate On system</span
                >
                <span class="d-inline ml-3 tf">{{ total_candidate }}</span>
              </div>
              <div class="row mt-3 mb-3">
                <div class="col-md-4 mb-3">
                  <div class="card shadow-sm" style="height: 100% !important">
                    <div class="card-body">
                      <BarChat
                        v-if="!loading"
                        :chartdata="chartdata"
                        :options="chatoptions"
                        :key="chatComponentKey"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card shadow-sm" style="height: 100% !important">
                    <div class="card-body">
                      <PieChat
                        v-if="!loading"
                        :data="data"
                        :options="options"
                        :key="chatComponentKey2"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="row">
                    <div
                      class="col-md-12 col-12 col-lg-12 mb-3 mt-3"
                      style="height: 50% !important"
                    >
                      <div
                        class="card info-card sales-card"
                        style="
                          background-color: #fff !important;
                          margin-bottom: 30px !important;
                          border: none !important;
                          border-radius: 5px !important;
                          box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
                        "
                      >
                        <div class="card-body">
                          <h5 class="card-title">APPROVED (PAID) Candidate</h5>
                          <div class="d-flex align-items-center">
                            <div
                              class="card-icon rounded-circle d-flex align-items-center justify-content-center"
                            >
                              <i class="fa fa-users"></i>
                            </div>
                            <div class="ps-3">
                              <h6>
                                {{
                                  card_data_approved_candidate &&
                                  card_data_approved_candidate[0] &&
                                  card_data_approved_candidate[0]
                                    .card_data_approved_candidate
                                }}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-md-12 col-12 col-lg-12 border-top pt-5 mt-3 pb-5"
                      style="height: 50% !important"
                    >
                      <div
                        class="card info-card sales-card"
                        style="
                          background-color: #fff !important;
                          margin-bottom: 30px !important;
                          border: none !important;
                          border-radius: 5px !important;
                          box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
                        "
                      >
                        <div class="card-body">
                          <h5 class="card-title text-warning">
                            NDING (UNPAID) Candidate
                          </h5>
                          <div class="d-flex align-items-center">
                            <div
                              class="card-icon2 rounded-circle d-flex align-items-center justify-content-center"
                            >
                              <i class="fa fa-users"></i>
                            </div>
                            <div class="ps-3">
                              <h6>
                                {{
                                  card_data_pending_candidate &&
                                  card_data_pending_candidate[0] &&
                                  card_data_pending_candidate[0]
                                    .card_data_pending_candidate
                                }}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LaravelVuePagination from "laravel-vue-pagination";
import VueElementLoading from "vue-element-loading";
import { library } from "@fortawesome/fontawesome-svg-core";
import toastr from "toastr";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { ToggleButton } from "vue-js-toggle-button";
import BarChat from "./Chart/Bar";
import PieChat from "./Chart/Pie";
import { Pie } from "vue-chartjs";
import {
  faCalendarAlt,
  faAngleDown,
  faStar,
  faAngleUp,
  faTh,
  faBusinessTime,
  faArrowLeft,
  faArrowRight,
  faCog,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faAngleDown,
  faCalendarAlt,
  faStar,
  faAngleUp,
  faTh,
  faBusinessTime,
  faCog,
  faArrowLeft,
  faArrowRight,
  faDotCircle
);
export default {
  components: {
    Pagination: LaravelVuePagination,
    VueElementLoading,
    "font-awesome-icon": FontAwesomeIcon,
    VuePerfectScrollbar,
    ToggleButton,
    BarChat,
    Pie,
    PieChat,
  },
  data() {
    return {
      data: {
        labels: [],
        datasets: [
          {
            backgroundColor: [],
            data: [],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      records: {},
      instructionsVisible: false,
      loading: false,
      session_term: {},
      filters: {
        paid_for: "",
        search: "",
        status: "",
      },
      view_status: true,
      chatComponentKey: 0,
      chatComponentKey2: 0,
      chartdata: {
        labels: [],
        datasets: [
          {
            label: "Male",
            backgroundColor: "RGBA(0,254,0,0.32)",
            borderColor: "RGBA(0,254,0,1)",
            borderWidth: 1,
            hoverBackgroundColor: "RGBA(0,254,0,0.7)",
            hoverBorderColor: "RGBA(0,254,0,0.99)",
            borderCapStyle: "round",
            data: [],
          },
          {
            label: "Female",
            backgroundColor: "RGBA(244,67,54,0.32)",
            borderColor: "RGBA(244,67,54,1)",
            borderWidth: 1,
            hoverBackgroundColor: "RGBA(244,67,54,0.7)",
            hoverBorderColor: "RGBA(244,67,54,0.99)",
            borderCapStyle: "round",
            data: [],
          },
        ],
      },
      chatoptions: {
        layout: {
          padding: {
            left: 0,
            right: 8,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                display: true,
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: true,
      },
      barchart_data_approved: {},
      barchart_data_pending: {},
      card_data_approved_candidate: {},
      card_data_pending_candidate: {},
      piechart_data: {},
      total_candidate: 0,
      bar_status: true,
      barchart_data: [],
    };
  },

  methods: {
    Approve(data) {
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
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.loading = true;
          //   let form_data = new FormData();
          //   form_data.append("data", data);

          axios
            .post("/manager/approve_transaction", data)
            .then((res) => {
              if (res.data.status) {
                this.$toast.success(
                  "You Have Successfully Approved this candidate info."
                );

                this.getRecord();
              } else {
                console.log("unable to approve");
              }
            })
            .catch((err) => {
              this.loading = false;
              toastr.error("Incorrect Password Supplied", "error");
            })
            .finally(() => {
              this.loading = false;
            });
        } else {
          this.$swal("Cancelled", "Operation Cancelled", "info");
          this.loading = false;
        }
      });
    },

    TogglePageView() {
      if (this.view_status == true) {
        this.view_status == true;
        this.getRecord();
      } else {
        this.view_status = false;
        this.getRecordAnalytic();
      }
    },
    getRecord(page = 1) {
      this.loading = true;
      axios
        .post("/manager/get_registered_candidate?page=" + page, {
          filters: this.filters,
        })
        .then((res) => {
          this.loading = true;

          this.records = res.data;
        })
        .catch((err) => {
          toastr.error("An error occured", "error");
        })
        .finally(() => (this.loading = false));
    },
    getRecordAnalytic() {
      this.loading = true;
      axios
        .post("/manager/get_analytic")
        .then((res) => {
          this.loading = true;

          this.barchart_data_pending = res.data.barchart_data_pending;
          this.card_data_approved_candidate =
            res.data.card_data_approved_candidate;
          this.card_data_pending_candidate =
            res.data.card_data_pending_candidate;
          this.piechart_data = res.data.piechart_data;
          this.total_candidate = res.data.total_candidate;
          this.barchart_data = res.data.barchart_data;
          //

          this.data.labels = this.piechart_data.LABEL;
          this.data.datasets[0].backgroundColor =
            this.piechart_data.BACKGROUND_COLORS;
          this.data.datasets[0].data = this.piechart_data.VALUES;

          this.chartdata.datasets[0].data = [
            this.barchart_data &&
              this.barchart_data[0] &&
              this.barchart_data[0].male,
          ];

          this.chartdata.datasets[1].data = [
            this.barchart_data &&
              this.barchart_data[0] &&
              this.barchart_data[0].female,
          ];
          this.chatComponentKey += 1;
          this.chatComponentKey2 += 1;
        })
        .catch((err) => {
          toastr.error("An error occured", "error");
        })
        .finally(() => {
          this.loading = false;

          this.chatComponentKey += 1;
        });
    },
  },
  mounted() {
    this.TogglePageView();
  },
};
</script>

<style scoped>
.tf {
  font-size: 28px !important;
  color: #012970 !important;
  font-weight: 700 !important;
}
.ps-3 {
  padding-left: 1rem !important;
}

#img-fluid {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  text-align: center;
}
.card-title {
  padding: 20px 0 15px 0 !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  color: #017245 !important;
  font-family: "Poppins", sans-serif !important;
  margin-bottom: 0.5rem !important;
}
.card-icon,
.card-icon2 {
  font-size: 32px !important;
  line-height: 0 !important;
  width: 64px !important;
  height: 64px !important;
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
}
.sales-card .card-icon {
  color: #4154f1 !important;
  background: #f6f6fe !important;
}
.info-card h6 {
  font-size: 28px !important;
  color: #012970 !important;
  font-weight: 700 !important;
  margin: 0 !important;
  padding: 0 !important;
}
.align-items-center {
  align-items: center !important;
}
.justify-content-center {
  justify-content: center !important;
}
.card-title2 {
  padding: 20px 0 15px 0 !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  color: #017245 !important;
  font-family: "Poppins", sans-serif !important;
}
.text-warning {
  color: rgba(255, 193, 7, 1) !important;
}
.sales-card .card-icon2 {
  color: #ff771d !important;
  background: #ffecdf !important;
}
</style>