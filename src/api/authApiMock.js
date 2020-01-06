class AuthApiMock {
  logout() {
    return new Promise((resolve, reject) => {
      return resolve({
        success: true,
        data: {}
      });
    });
  }
}

export default new AuthApiMock();
