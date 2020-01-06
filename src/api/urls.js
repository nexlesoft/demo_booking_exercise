import BuildUtils from "../utils/buildUtils";

export const getURL = (url, splitSign = ":") => BuildUtils.build.serverSchema + splitSign + url;

export const SERVER_URL = getURL(BuildUtils.build.serverHost, "://");

export default {
  baseUrl: SERVER_URL,

  members: {
    manualLogin: "login",
    logout: "logout"
  },
  clientDetail: {
    mainDetails: "clientdetail/main-details/{client_id}"
  }
};
