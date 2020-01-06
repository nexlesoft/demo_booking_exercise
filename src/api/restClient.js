import { create } from "apisauce";
import Urls from "./urls";
import { httpMethods, globalKeys } from "../constants";
import Response from "./response";

class RestClient {
  constructor(method, endpoint, timeout = 15000) {
    this.method = method;
    this.endpoint = endpoint;
    this.timeout = timeout;
    this.TAG = "RestClient";
    this.headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    this.BASE_URL = Urls.baseUrl;
  }

  setBaseUrl(url) {
    this.BASE_URL = url;
  }

  setHeaders(headers) {
    if (headers !== null) {
      Object.keys(headers).map(key => {
        this.headers[key] = headers[key];
        return null;
      });
    }
  }

  setTimeout(timeout) {
    this.timeout = timeout;
  }

  execute(headers, body, isAuthen = false) {
    if (!isAuthen) {
      delete this.headers.Authorization;
    } else {
      if (
        global[globalKeys.AUTH_TOKEN] !== undefined &&
        global[globalKeys.AUTH_TOKEN] !== null
      ) {
        console.log(
          "============== ADD AUTH TOKEN HEADER ==============",
          global[globalKeys.AUTH_TOKEN]
        );
        this.headers.Authorization = `Bearer ${global[globalKeys.AUTH_TOKEN]}`;
      }

      if (
        global[globalKeys.ACCESS_TOKEN] !== undefined &&
        global[globalKeys.ACCESS_TOKEN] !== null
      ) {
        console.log(
          "============== ADD ACCESS TOKEN HEADER ==============",
          global[globalKeys.ACCESS_TOKEN]
        );
        this.headers["x-access-token"] = global[globalKeys.ACCESS_TOKEN];
      }
    }

    if (headers !== undefined && headers !== null) {
      this.headers = Object.assign(this.headers, headers);
    }

    this.restClient = create({
      baseURL: this.BASE_URL,
      headers: this.headers,
      timeout: this.timeout
    });

    let response = new Response({});
    switch (this.method) {
      case httpMethods.GET: {
        return this.restClient
          .get(this.endpoint, body)
          .then(res => {
            if (this.BASE_URL === Urls.baseUrl) {
              return Response.createResponseData(res.data || {});
            }

            return Response.createCustomResponseData(res.data);
          })
          .catch(e => {
            console.log("ERROR: ApiMethod.GET", e.message);
            return response;
          });
      }
      case httpMethods.POST: {
        return this.restClient
          .post(this.endpoint, body)
          .then(res => {
            console.log("res", res);
            if (this.BASE_URL === Urls.baseUrl) {
              return Response.createResponseData(res.data || {});
            }

            response = Response.createCustomResponseData(res.data);
            return response;
          })
          .catch(e => {
            console.log("ERROR: ApiMethod.POST", e.message);
            return response;
          });
      }
      case httpMethods.PUT: {
        return this.restClient
          .put(this.endpoint, body)
          .then(res => {
            if (this.BASE_URL === Urls.baseUrl) {
              return Response.createResponseData(res.data || {});
            }

            return Response.createCustomResponseData(res.data);
          })
          .catch(e => {
            console.log("ERROR: ApiMethod.PUT", e.message);
            return response;
          });
      }
      case httpMethods.DELETE: {
        return this.restClient
          .delete(this.endpoint, {}, { data: body })
          .then(res => {
            if (this.BASE_URL === Urls.baseUrl) {
              return Response.createResponseData(res.data || {});
            }

            return Response.createCustomResponseData(res.data);
          })
          .catch(e => {
            console.log("ERROR: ApiMethod.DELETE", e.message);
            return response;
          });
      }

      case httpMethods.PATCH: {
        return this.restClient
          .patch(this.endpoint, body)
          .then(res => {
            if (this.BASE_URL === Urls.baseUrl) {
              return Response.createResponseData(res.data || {});
            }
            return Response.createCustomResponseData(res.data);
          })
          .catch(e => {
            console.log("ERROR: ApiMethod.PATCH", e.message);
            return response;
          });
      }

      default: {
        return response;
      }
    }
  }
}

export default RestClient;
