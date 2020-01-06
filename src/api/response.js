/* eslint-disable */

export default class Response {
  constructor({
                statusCode = 200,
                statusText = null,
                data = null,
                headers = null,
                error = null,
                message = null
              }) {
    this.statusCode = statusCode;
    this.statusText = statusText;
    if (data) {
      this.data = data;
    }
    if (headers) {
      this.headers = headers;
    }
    if (error) {
      this.error = error;
    }
    this.message = "";
    if (message) {
      this.message = message;
    }
  }

  static createResponseData(res) {
    const response = new Response({
      statusCode: res.statusCode,
      data: res.data,
      message: res.message
    });
    if (res) {
      response.success = res.success;
      if (res.Problem && res.Problem === "TIMEOUT_ERROR") {
        response.message = "Request timeout";
      }
      if (Array.isArray(res.data)) {
        response.data = { items: res.data };
      } else {
        response.data = res.data || null;
      }
    }
    return response;
  }

  static createCustomResponseData(res) {
    const response = new Response(res);
    // TODO: add your custom object mapping here
    return response;
  }
}
