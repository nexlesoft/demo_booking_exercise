import BaseService from "./baseService";
import authApi from "../api/authApi";
import authApiMock from "../api/authApiMock";
import MemberDetail from "../models/MemberDetail";

class MemberService extends BaseService {
  loginManual(loginInfo) {
    return authApi.loginManual(loginInfo).then(response => {
      return {
        data: new MemberDetail(response.data),
        message: response.message,
        success: response.success
      };
    }, this.handleError);
  }

  logout() {

    return authApiMock.logout().then(response => {
      return response;
    }, this.handleError);
  }
}

export default new MemberService();
