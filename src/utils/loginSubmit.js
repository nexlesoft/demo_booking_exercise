// Private

// Public
export function necessaryDataIsProvidedToSubmitLogin(login) {
  return login.userName !== "" && login.password !== "";
}
