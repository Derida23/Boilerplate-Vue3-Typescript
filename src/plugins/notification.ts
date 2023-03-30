import { PluginOptions, POSITION } from "vue-toastification";

export const options: PluginOptions =  {
    position: POSITION.TOP_CENTER,
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
  };
