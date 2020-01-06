export default class BaseService {

  handleError(error) {
    console.log("SERVICE ERROR", error);
    throw (error.message || error);
  }
}

