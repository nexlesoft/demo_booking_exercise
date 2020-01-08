import BaseService from "./baseService";
import locationApiMock from "../api/locationApiMock";

class LocationService extends BaseService {
  autocompleteOptions() {
    return locationApiMock.autocompleteOptions().then(response => {
      return response;
    }, this.handleError);
  }
}

export default new LocationService();
