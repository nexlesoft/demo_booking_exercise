import BaseApi from "./baseApi";

class AuthApi extends BaseApi {
  loginManual(loginInfo) {
    return super.execute(this.Methods.POST, this.Urls.members.manualLogin, null, false, loginInfo)
      .then((res) => {
        return res;
      });
  }

  logout() {
    return super.execute(this.Methods.POST, this.Urls.members.logout, null, true, null)
      .then((res) => {
        return res;
      });
  }
}

export default new AuthApi();
