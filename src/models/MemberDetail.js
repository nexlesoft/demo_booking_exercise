export default class MemberDetail {

  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.init(data);
    }
  }

  init(data) {
    this.xmppId = data.user ? data.user.xmppId || "" : "";
    this.id = data.user ? data.user.id || 0 : 0;
    this.token = data.token || "";
    this.name = data.user && data.user.vCard ? data.user.vCard.displayName || "" : "";
  }

}
