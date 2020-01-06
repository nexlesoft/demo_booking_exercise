export default class Value {

  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.init(data);
    }
  }

  init(data) {
    this.text = data.text || "";
    this.value = data.value || undefined;
  }
}
