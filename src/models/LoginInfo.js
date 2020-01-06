export default class LoginInfo {

  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.init(data);
    }
  }

  init(data) {
    this.email = data.email || null;
    this.password = data.password || null;
  }
}
