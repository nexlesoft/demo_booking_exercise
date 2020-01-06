export function validateEmail(email) { // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function validatePass(pass) {
  const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  return passw.test(pass);
}

export function validateNumberPhone(number) {
  let c1 = number.substring(0, 4);
  if (c1 === "+855") {
    return true;
  }
  c1 = number.substring(0, 3);
  return c1 === "+60" || c1 === "+84";
}

export function isObjectUndefinedOrNull(obj) {
  return obj === undefined || obj === null;
}

export function isEmpty(obj) {
  return obj === undefined || obj === null || obj === "";
}
