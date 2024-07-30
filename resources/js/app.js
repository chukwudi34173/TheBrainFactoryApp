require("./bootstrap");

import Vue from "vue";
// import "./plugins/vuetify";
import { App, plugin } from "@inertiajs/inertia-vue";
import PortalVue from "portal-vue";
import { InertiaProgress } from "@inertiajs/progress";
import VueMeta from "vue-meta";
import BootstrapVue from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";
import VueChatScroll from "vue-chat-scroll";
import VueMask from "v-mask";
import { Form, HasError, AlertError } from "vform";
import VueHtmlToPaper from "vue-html-to-paper";
import VueCookies from "vue-cookies";
import VueGeoLocation from "vue-browser-geolocation";
import * as VueGoogleMaps from "vue2-google-maps";
import VueClipboard from "vue-clipboard2";
// Import the CSS or use your own!
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

InertiaProgress.init();

VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyApU66cUAr6CkP8LxOFQ0_ur4XBuFZwwEk",
        // key: "AIzaSyBkeM7Jy4UgopcDfBtJ4YBpLF2zJZYyyfw"
        libraries: "places", // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    },
});
export const bus = new Vue();

import VueCountdownTimer from "vuejs-countdown-timer";
Vue.use(Toast, options);
Vue.use(VueCountdownTimer);
Vue.use(plugin);
Vue.use(VueMeta);
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);
Vue.use(VueChatScroll);
Vue.use(VueMask);
Vue.use(VueGeoLocation);
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.use(VueCookies);
Vue.use(require("vue-moment"));
Vue.component("pagination", require("laravel-vue-pagination"));

window.eventBus = new Vue();

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: "#fbc2eb", //'#29d',

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: true,
});

Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
});

Vue.filter("capitalize", function (value) {
    if (!value) return "";
    value = value.toString();
    return value.toUpperCase();
});

Vue.filter("adenumberlize", function (value) {
    if (value) {
        return Number(value).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        // return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return 0;
});

const el = document.getElementById("app");

const options = {
    name: "_blank",
    specs: ["titlebar=yes", "scrollbars=yes"],
    styles: [
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        "https://unpkg.com/kidlat-css/css/kidlat.css",
    ],
};

Vue.use(VueHtmlToPaper, options);

new Vue({
    metaInfo: {
        titleTemplate: (title) =>
            title ? `The Brain Factory - ${title}` : "The Brain Factory",
    },
    render: (h) =>
        h(App, {
            props: {
                initialPage: JSON.parse(el.dataset.page),
                resolveComponent: (name) =>
                    import(`./Pages/${name}`).then((module) => module.default),
            },
        }),
}).$mount(el);
