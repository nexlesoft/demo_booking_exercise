import BuildUtils from "../utils/buildUtils";

export const getURL = (url, splitSign = ":") => BuildUtils.build.serverSchema + splitSign + url;

export const SERVER_URL = getURL(BuildUtils.build.serverHost, "://");

export default {
  baseUrl: SERVER_URL,

  home: {
    booking: "https://www.swiss.com/us/en/Book/<flight_type>/<origin>-<destination>/from-<departure_date>/adults-<adult_amount>/children-<children_amount>/infants-<infants_amount>/class-<flight_class>/al-LX/sidmbvl",
  },
};
