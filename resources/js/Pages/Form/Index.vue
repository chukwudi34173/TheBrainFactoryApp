<template>
  <div>
    <div class="container px-3 px-lg-3 mt-3 mb-4">
      <div class="fjcomments mx-0 p-4 border">
        <div class="row bordered p-3">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-3">
                <img
                  src="../../../../public/images/brain_factory_logo.jpeg"
                  class="img-fluid"
                  id="img-fluid"
                  alt=""
                />
              </div>
              <div class="col-md-9 pt-2 pb-2">
                <h1 class="title">THE BRAIN FACTORY TUITION CENTRE</h1>
                <!-- <h1 class="title">
                  &nbsp; &nbsp; THE BRAIN FACTORY TUITION CENTRE
                </h1> -->
                <p class="description mt-2 mb-3">
                  Correcting and building a smarter generation...
                </p>
                <p class="purpose_desc mt-2 mb-3">
                  EXAMINATION ENROLLMENT FORM
                </p>
              </div>
            </div>
            <form class="fjcomment-form row mt-3 mb-3">
              <div class="col-lg-12 border-bottom mb-3">
                <h5>Candidate Registration Info.</h5>
              </div>
              <div class="col-12 col-lg-12 col-sm-12">
                <div v-if="errorMessageLoad" class="alert alert-danger">
                  <small
                    class="mb-2"
                    style="display: block; color: red"
                    role="alert"
                    v-if="errorMessage"
                    >{{ errorMessage.message }}</small
                  >
                </div>
                <div v-if="dobError == true" class="alert alert-danger">
                  <div class="text-danger">
                    Please enter the student's correct dob!!!
                  </div>
                </div>
              </div>
              <VueElementLoading
                :active="loading"
                spinner="bar-fade-scale"
                color="#7E8CF6"
              />

              <div class="col-12 col-lg-4 col-sm-12">
                <label for="first_name">First Name:</label>
                <input
                  name="first_name"
                  id="first_name"
                  class="fjinput form-control"
                  type="text"
                  placeholder="First Name (required)"
                  required
                  v-model="form.first_name"
                />
              </div>
              <div class="col-12 col-lg-4">
                <label for="middle_name">Middle Name:</label>
                <input
                  class="fjinput form-control"
                  type="text"
                  id="middle_name"
                  placeholder="Middle Name (required)"
                  required
                  v-model="form.middle_name"
                />
              </div>
              <div class="col-12 col-lg-4">
                <label for="other_name">Other Name:</label>
                <input
                  class="fjinput form-control"
                  type="text"
                  id="other_name"
                  placeholder="Other Name"
                  v-model="form.other_name"
                />
              </div>
              <div class="col-12 col-lg-4">
                <label for="sex">Select Gender:</label>
                <select
                  class="fjinput form-control"
                  id="sex"
                  v-model="form.sex"
                >
                  <option value="">--Select Your Gender --</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="col-12 col-lg-4">
                <label for="dob">D.O.B:</label>

                <input
                  type="date"
                  min="01-01-2005"
                  class="fjinput form-control"
                  v-model="form.dob"
                  required
                />
              </div>
              <div class="col-lg-12 border-bottom mb-0">
                <h5>Parent Information.</h5>
              </div>

              <div class="col-12 col-lg-6 mt-3 mb-4">
                <label for="father_name">Father's Name:</label>
                <input
                  class="fjinput form-control"
                  type="text"
                  id="father_name"
                  placeholder="Father's Name"
                  v-model="form.father_name"
                />
              </div>
              <div class="col-12 col-lg-6 mt-3 mb-4">
                <label for="father_occupation">Father's Occupation:</label>
                <input
                  class="fjinput form-control"
                  type="text"
                  id="father_occupation"
                  placeholder="Father's Name"
                  v-model="form.father_occupation"
                />
              </div>
              <!--  mother info-->
              <div class="col-12 col-lg-6 mt-3 mb-4">
                <label for="mother_name">Mother's Name:</label>
                <input
                  class="fjinput form-control"
                  type="text"
                  id="mother_name"
                  placeholder="Mother's Name"
                  v-model="form.mother_name"
                />
              </div>
              <div class="col-12 col-lg-6 mt-3 mb-4">
                <label for="mother_occupation">Mother's Occupation:</label>
                <input
                  class="fjinput form-control"
                  type="text"
                  id="mother_occupation"
                  placeholder="Mother's Name"
                  v-model="form.mother_occupation"
                />
              </div>
              <!--  Address/Origin Info.-->

              <div class="col-lg-12 border-bottom mb-0">
                <h5>Address/Origin Info.</h5>
              </div>

              <div class="col-12 col-lg-4 mt-3 mb-4">
                <label for="state_of_origin">State Of Origin:</label>
                <input
                  class="fjinput form-control"
                  type="text"
                  id="state_of_origin"
                  placeholder="State Of Origin"
                  v-model="form.state_of_origin"
                />
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <label for="sel1">Local Govt. Of Origin:</label>
                <input
                  class="fjinput form-control"
                  type="text"
                  id="lga_of_origin"
                  placeholder="Local Govt. Of Origin"
                  v-model="form.lga_of_origin"
                />
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <label for="current_address">Current Address:</label>
                <input
                  class="fjinput form-control"
                  type="text"
                  id="current_address"
                  placeholder="Current Address"
                  v-model="form.current_address"
                />
              </div>
              <div class="col-lg-12 border-bottom mb-0">
                <h5>Guardian/Applicant Contact Info.</h5>
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <label for="parent_whatapp_no">Parent Whatapp No:</label>
                <input
                  class="fjinput form-control"
                  type="text"
                  id="parent_whatapp_no"
                  placeholder="Parent Whatapp No:"
                  v-mask="'###########'"
                  v-model="form.parent_whatapp_no"
                />
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <label for="candidate_phone_no">Candidate's Phone No:</label>
                <input
                  class="fjinput"
                  type="text"
                  id="candidate_phone_no"
                  placeholder="Candidate Phone No:"
                  v-model="form.candidate_phone_no"
                  v-mask="'###########'"
                />
              </div>
              <div class="col-12 col-lg-12 mt-3 mb-4 border-top">
                <p class="mt-3">
                  Classes Tick :
                  <span class="text-danger"
                    >(Please Tick Your Current class)</span
                  >
                </p>
                <div class="d-*-flex">
                  <span>
                    <label for="jamb" class="mt-2 ml-2">JAMB</label>
                    <input
                      type="radio"
                      id="jamb"
                      name="class_tick"
                      value="jamb"
                      v-model="form.class_tick"
                      class="pt-4 ml-2"
                    />
                  </span>
                  <span class="ml-3">
                    <label for="POST UTME" class="mt-2 ml-2">POST UTME</label>
                    <input
                      type="radio"
                      id="POST UTME"
                      name="class_tick"
                      value="POST UTME"
                      v-model="form.class_tick"
                      class="pt-4 ml-2"
                    />
                  </span>
                  <span class="ml-3">
                    <label for="WAEC (SSS 3)" class="mt-2 ml-2"
                      >WAEC (SSS 3)</label
                    >
                    <input
                      type="radio"
                      id="WAEC (SSS 3)"
                      name="class_tick"
                      value="WAEC (SSS 3)"
                      class="pt-4 ml-2"
                      v-model="form.class_tick"
                    />
                  </span>
                  <span class="ml-3">
                    <label for="NECO (SSS 3)" class="mt-2 ml-2"
                      >NECO (SSS 3)</label
                    >
                    <input
                      type="radio"
                      id="NECO (SSS 3)"
                      name="class_tick"
                      value="NECO (SSS 3)"
                      class="pt-4 ml-2"
                      v-model="form.class_tick"
                    />
                  </span>
                  <span class="ml-3">
                    <label for="GCE" class="mt-2 ml-2">GCE</label>
                    <input
                      type="radio"
                      id="GCE"
                      name="class_tick"
                      value="GCE"
                      class="pt-4 ml-2"
                      v-model="form.class_tick"
                    />
                  </span>
                  <span class="ml-3">
                    <label for="BECE" class="mt-2 ml-2">BECE</label>
                    <input
                      type="radio"
                      id="BECE"
                      name="class_tick"
                      value="BECE"
                      class="pt-4 ml-2"
                      v-model="form.class_tick"
                    />
                  </span>
                  <span class="ml-3">
                    <label for="COMMON ENTRANCE" class="mt-2 ml-2"
                      >COMMON ENTRANCE</label
                    >
                    <input
                      type="radio"
                      id="COMMON ENTRANCE"
                      name="class_tick"
                      value="COMMON ENTRANCE"
                      v-model="form.class_tick"
                      class="pt-4 ml-2"
                    />
                  </span>
                  <span class="ml-3">
                    <label for="PRY-1-6" class="mt-2 ml-2">PRY 1 - 6</label>
                    <input
                      type="radio"
                      id="PRY-1-6"
                      name="class_tick"
                      value="PRY (1-6)"
                      v-model="form.class_tick"
                      class="pt-4 ml-2"
                    />
                  </span>
                  <span class="ml-3">
                    <label for="JSS-1-3" class="mt-2 ml-2">JSS 1 - 3</label>
                    <input
                      type="radio"
                      id="JSS-1-3"
                      name="class_tick"
                      value="JSS (1-3)"
                      v-model="form.class_tick"
                      class="pt-4 ml-2"
                    />
                  </span>
                  <span class="ml-3">
                    <label for="SSS-1-3" class="mt-2 ml-2">SSS 1 - 3</label>
                    <input
                      type="radio"
                      id="SSS-1-3"
                      name="class_tick"
                      value="SSS (1-3)"
                      v-model="form.class_tick"
                      class="pt-4 ml-2"
                    />
                  </span>
                  <span class="ml-3">
                    <label for="time_section" class="mt-2 ml-2"
                      >LECTURE TIME SECTION : (check the below)</label
                    >
                    <div class="d-flex" id="LECTURE SECTION">
                      <span class="ml-3">
                        <label for="LECTURE SECTION (MORNING)" class="mt-2 ml-2"
                          >MORNING</label
                        >
                        <input
                          type="radio"
                          id="LECTURE SECTION (MORNING)"
                          name="time_section"
                          value="MORNING"
                          class="pt-4 ml-2 form-control"
                          v-model="form.time_section"
                        />
                      </span>
                      <span class="ml-3">
                        <label for="AFTERNOON" class="mt-2 ml-2"
                          >AFTERNOON</label
                        >
                        <input
                          type="radio"
                          id="AFTERNOON"
                          value="LECTURE SECTION (AFTERNOON)"
                          class="pt-4 ml-2 form-control"
                          name="time_section"
                          v-model="form.time_section"
                        />
                      </span>
                    </div>
                  </span>
                </div>
              </div>

              <div class="col-lg-12 border-bottom mb-0">
                <h5 class="d-inline">SUBJECT.</h5>
                &nbsp;&nbsp;(<span
                  class="text-danger"
                  style="font-size: 12px !important"
                  >required to enter the subject offered</span
                >)
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <span class="d-flex">
                  <label for="sel1" class="d-block mt-3">1</label>
                  <input
                    class="fjinput d-block ml-2"
                    type="text"
                    placeholder="Use Of English"
                    readonly
                    value="Use Of English"
                    v-model="form.subject_1"
                  />
                </span>
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <span class="d-flex">
                  <label for="sel1" class="d-block mt-3">2</label>
                  <input
                    class="fjinput d-block ml-2"
                    type="text"
                    placeholder="Enter subject 2"
                    v-model="form.subject_2"
                  />
                </span>
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <span class="d-flex">
                  <label for="sel1" class="d-block mt-3">3</label>
                  <input
                    class="fjinput d-block ml-2"
                    type="text"
                    placeholder="Enter subject 3"
                    v-model="form.subject_3"
                  />
                </span>
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <span class="d-flex">
                  <label for="sel1" class="d-block mt-3">4</label>
                  <input
                    class="fjinput d-block ml-2"
                    type="text"
                    placeholder="Enter subject 4"
                    v-model="form.subject_4"
                  />
                </span>
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <span class="d-flex">
                  <label for="sel1" class="d-block mt-3">5</label>
                  <input
                    class="fjinput d-block ml-2"
                    type="text"
                    placeholder="Enter subject 5"
                    v-model="form.subject_5"
                  />
                </span>
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <span class="d-flex">
                  <label for="sel1" class="d-block mt-3">6</label>
                  <input
                    class="fjinput d-block ml-2"
                    type="text"
                    placeholder="Enter subject 6"
                    v-model="form.subject_6"
                  />
                </span>
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <span class="d-flex">
                  <label for="sel1" class="d-block mt-3">7</label>
                  <input
                    class="fjinput d-block ml-2"
                    type="text"
                    placeholder="Enter subject 7"
                    v-model="form.subject_7"
                  />
                </span>
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <span class="d-flex">
                  <label for="sel1" class="d-block mt-3">8</label>
                  <input
                    class="fjinput d-block ml-2"
                    type="text"
                    placeholder="Enter subject 8"
                    v-model="form.subject_8"
                  />
                </span>
              </div>
              <div class="col-12 col-lg-4 mt-3 mb-4">
                <span class="d-flex">
                  <label for="sel1" class="d-block mt-3">9</label>
                  <input
                    class="fjinput d-block ml-2"
                    type="text"
                    placeholder="Enter subject 9"
                    v-model="form.subject_9"
                  />
                </span>
              </div>
              <div class="col-lg-12 border-bottom mb-0">
                <h5>RULES AND REGULATION.</h5>
              </div>
              <div class="col-12 col-lg-12 col-md-12">
                <ul style="">
                  <li>
                    <p>You Must Make 100% payment before you begin</p>
                  </li>
                  <li><p>No Indecent Dressing</p></li>
                  <li><p>Late Coming is not permitted</p></li>
                  <li>
                    <p>
                      Disrespect to any teacher,leads to the child's dismissal
                    </p>
                  </li>
                </ul>
              </div>
              <div class="col-lg-12 border-bottom mb-0">
                <h5>NOTE .</h5>

                <p>
                  PAST QUESTIONS,CBT PRACTICEAND SCIENCE PRACTICAL IS COMPULSORY
                  FOR ALL CANDIDATE.
                </p>
              </div>
              <div class="col-lg-12 mt-3 mb-3 mb-0">
                <h5>PRICES AND ACCOUNT INFO.</h5>
              </div>
              <div class="col-12 col-lg-5 col-md-5">
                <h5 class="d-inline">PRICES.</h5>
                <span class="text-info" style="font-size: 10px !important"
                  >(check the plan you made payment for)</span
                >

                <ul class="mt-4 mb-3 list-unstyled">
                  <li>
                    <p>
                      <label for="jamb- #1000(with CBT)">
                        JAMB -
                        <span class="font-weight-bold">#10,000 (with CBT)</span>
                      </label>
                      <input
                        type="radio"
                        id="jamb- #1000(with CBT)"
                        name="plan"
                        value="jamb- #1000(with CBT)"
                        class="ml-3"
                        v-model="form.expected_amount_plan_desc"
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="waec/neco- #7000 (with CBT)">
                        WAEC /NECO -
                        <span class="font-weight-bold">#5000 (with CBT)</span>
                      </label>
                      <input
                        type="radio"
                        id="waec/neco- #7000 (with CBT)"
                        name="plan"
                        value="waec/neco- #7000 (with CBT)"
                        class="ml-3"
                        v-model="form.expected_amount_plan_desc"
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="bece- #4000">
                        BECE - <span class="font-weight-bold">#4000</span>
                      </label>
                      <input
                        type="radio"
                        id="bece- #4000"
                        name="plan"
                        value="bece- #4000"
                        class="ml-3"
                        v-model="form.expected_amount_plan_desc"
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="common entrance- #3000">
                        COMMON ENTRANCE -
                        <span class="font-weight-bold">#3000</span>
                      </label>
                      <input
                        type="radio"
                        id="common entrance- #3000"
                        name="plan"
                        value="common entrance- #3000"
                        class="ml-3"
                        v-model="form.expected_amount_plan_desc"
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="pry(1/6)">
                        PRY (1-6) - <span class="font-weight-bold">#2500</span>
                      </label>
                      <input
                        type="radio"
                        id="pry(1/6)"
                        name="plan"
                        value="PRY(1/6)- #2500"
                        class="ml-3"
                        v-model="form.expected_amount_plan_desc"
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="JSS(1/3)">
                        JSS (1-3) - <span class="font-weight-bold">#2500</span>
                      </label>
                      <input
                        type="radio"
                        id="JSS(1/3)"
                        name="plan"
                        value="JSS(1/3)- #2500"
                        class="ml-3"
                        v-model="form.expected_amount_plan_desc"
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <label for="SSS(1/3)">
                        SSS (1-3) - <span class="font-weight-bold">#4000</span>
                      </label>
                      <input
                        type="radio"
                        id="SSS(1/3)"
                        name="plan"
                        value="SSS(1/3)- #4000"
                        class="ml-3"
                        v-model="form.expected_amount_plan_desc"
                      />
                    </p>
                  </li>
                </ul>
              </div>

              <div class="col-12 col-lg-7 col-md-7">
                <h5>ACCOUNT INFO.</h5>

                <ul style="" class="list-unstyled">
                  <h6>
                    Please transfer the specified amount to the following bank
                    account:
                  </h6>
                  <li>
                    <h5>Account Name: AKPAN ELIJAH UDUAK</h5>
                  </li>
                  <li class="mt-2">
                    <h5>Account Number: &nbsp;&nbsp; 8119503964</h5>
                  </li>
                  <li class="mt-2">
                    <h5>Bank: &nbsp;&nbsp;OPAY</h5>
                  </li>
                  <li class="mt-2">
                    <h6>
                      NOTE : SEND PAYMENT RECEIPT TO THE BURSARY WHATTAPP NUMBER
                      &nbsp;&nbsp;(08119503964)
                    </h6>
                    <label for="trans_refrence_id"
                      >Transaction Refrence ID:</label
                    >
                    <input
                      name="trans_refrence_id"
                      id="trans_refrence_id"
                      class="fjinput form-control"
                      type="text"
                      placeholder="Enter Transaction Refrence ID (required)"
                      required
                      v-model="form.trans_refrence_id"
                    />
                  </li>
                </ul>
              </div>

              <div class="col-lg-12 border-bottom mb-0">
                <h5 v-if="form.first_name && form.middle_name">
                  ATTESTATION .
                </h5>

                <label
                  for="attestation"
                  v-if="form.first_name && form.middle_name"
                  class="text-uppercase"
                >
                  I
                  {{
                    form.first_name +
                    " " +
                    form.middle_name +
                    " " +
                    form.other_name
                  }}
                  PROMISE TO ABIDE BY THE LAID DOWN RULES AND REGULATION OF THE
                  ORGANIZATION ,IF OTHERWISE ,THE MANAGEMENT SHOULD TAKE
                  NECCESSARY ACTIONS.
                  <input
                    type="checkbox"
                    id="attestation"
                    name="plan"
                    value="true"
                    class="ml-3"
                    v-model="form.attestation"
                  />
                </label>
                <p v-if="registeredForm">
                  NOTICE!!! You will be able to print Information when
                  transaction is approved,at your own will and then clear log
                  after printing to use device for another new registration else
                  record will be overided
                </p>
              </div>

              <!--  -->

              <div class="col-12 justify-content-between d-flex mt-3">
                <button
                  @click.prevent="clearForm"
                  v-if="registeredForm"
                  class="fjcomment-btn2 ml-2 mr-2"
                  type="submit"
                >
                  Clear Logged Info
                </button>
                <button
                  @click.prevent="PrintForm"
                  v-if="approve"
                  class="fjcomment-btn3 ml-2 mr-2"
                  type="submit"
                >
                  PRINT
                </button>
                <button
                  @click.prevent="submitRegistrationPayment"
                  class="fjcomment-btn ml-2 mr-2"
                  type="submit"
                >
                  Submit Information
                </button>
                <!-- <input class="fjcomment-btn" value="POST COMMENT" /> -->
              </div>
            </form>
          </div>
          <div class="col-md-12 mt-2 mb-3 text-center">
            <span class="d-block">
              &copy; The Brain Factory,All Right Reserved.
            </span>

            <span>
              Designed and Develop By Intrapreneur Solution Developer
              (09048121392)
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VueElementLoading from "vue-element-loading";
import VueMask from "v-mask";

export default {
  data() {
    return {
      form: {
        subject_1: "Use Of English",
        sex: "",
      },
      instructionsVisible: false,
      errorMessage: {},
      loading: false,
      registeredForm: false,
      errorMessageLoad: false,
      load_key: 0,
      approve: false,
      dobCorrect: false,
      dobError: false,
    };
  },
  components: {
    VueElementLoading,
    VueMask,
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    getApprovedforPrint() {
      axios
        .post("/examination/approvedforprint", this.form)
        .then((res) => {
          if (res.data.status == 1) {
            this.approve = true;
          }
        })
        .catch((error) => {
          this.scrollToTop();
        })
        .finally(() => (this.loading = false));
    },
    async submitRegistrationPayment() {
      this.subtractYears(new Date(this.form.dob), 2);
      if (this.dobCorrect == true) {
        this.loading = true;

        axios
          .post("/examination/registration", this.form)
          .then((res) => {
            this.loading = true;

            if (res.data.status2) {
              this.$toast.success(res.data.message);
              this.errorMessage = {};

              let retriveInfo = JSON.parse(
                localStorage.getItem("registered_form")
              );
              if (retriveInfo) {
                localStorage.removeItem("registered_form");
                localStorage.setItem(
                  "registered_form",
                  JSON.stringify(res.data.data)
                );
              }
            }
            if (res.data.status) {
              this.$toast.success(res.data.message);
              localStorage.setItem(
                "registered_form",
                JSON.stringify(res.data.data)
              );
            }
          })
          .catch((error) => {
            this.errorMessage = error.response.data;
            this.errorMessageLoad = true;
            this.scrollToTop();
          })
          .finally(() => (this.loading = false));
      }
    },
    clearForm() {
      this.form = {};
      localStorage.removeItem("registered_form");
      toastr.success("InformationCleared successfully");
    },
    subtractYears(dob, numOfYears, date = new Date()) {
      var maxDate = new Date(date.getTime());
      maxDate.setFullYear(maxDate.getFullYear() - numOfYears);

      dob.setFullYear(dob.getFullYear());

      var dobyear = dob.toLocaleString("default", { year: "numeric" });
      var maxyear = maxDate.toLocaleString("default", { year: "numeric" });

      if (maxyear < dobyear || dobyear < 2000) {
        this.dobError = true;
        this.dobCorrect = false;
        this.scrollToTop();
      } else {
        this.dobCorrect = true;
      }
    },
  },
  mounted() {
    this.registeredForm = JSON.parse(localStorage.getItem("registered_form"));
    if (this.registeredForm) {
      this.form = this.registeredForm;
      this.load_key += 1;
      this.getApprovedforPrint();
    }
  },
};
</script>
<style scoped>
#img-fluid {
  border-radius: 5%;
  /* width: 200px;
  height: 200px; */
  /* text-align: center; */
}
.title {
  margin: 0 !important;
  padding: 0 !important;
}
.description {
  font-weight: 600;
  margin-bottom: 10px;
  /* font-size: 20px; */
  line-height: 1.5;
  letter-spacing: 5px;
}
.purpose_desc {
  font-weight: 600;
  /* font-size: 20px; */
  line-height: 1.5;
  letter-spacing: 2px;
}
.bordered {
  border: 3px solid black !important;
  border-radius: 1% !important;
}
.d {
  display: none !important;
}
</style>